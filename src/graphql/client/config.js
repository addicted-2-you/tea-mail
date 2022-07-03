import 'cross-fetch/polyfill';
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, Observable } from '@apollo/client';

import { getAccessToken } from '~/access-token';

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle;
      Promise.resolve(operation)
        .then((op) => {
          const accessToken = getAccessToken();
          if (accessToken) {
            op.setContext({
              headers: {
                authorization: `bearer ${accessToken}`,
              },
            });
          }
        })
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    }),
);

export const client = new ApolloClient({
  uri: '/graphql',

  cache: new InMemoryCache(),

  link: ApolloLink.from([
    requestLink,

    new HttpLink({
      uri: 'http://localhost:3000/graphql',
      credentials: 'include',
    }),
  ]),
});
