import path from 'path';

// server stuff
import express from 'express';
import cookieParser from 'cookie-parser';
import { createConnection } from 'typeorm';

// graphql
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'type-graphql';
import { ApolloProvider } from '@apollo/client';

// react
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from '~/App';

// graphql
import { client } from '~/graphql/client/config';
import { Tea } from '~/graphql/schema/entities/Tea';
import { TeaResolver } from '~/graphql/schema/resolvers/TeaResolver';

import { readFile } from '~/utils/server-utils';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/public', express.static(path.resolve(__dirname, 'public')));

async function runApp() {
  async function renderClientApp(req, resp) {
    const context = {};
    const clientApp = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </StaticRouter>,
    );

    const template = await readFile('./dist/public/index.html', 'utf-8');
    resp.end(template.replace('<div id="root"></div>', `<div id="root">${clientApp}</div>`));
  }

  await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'tea_mail',
    entities: [Tea],
    // logging: true,
    synchronize: true,
  });

  app.use(
    '/graphql',
    graphqlHTTP({
      graphiql: true,
      schema: await buildSchema({
        resolvers: [TeaResolver],
      }),
    }),
  );

  app.get('/*', renderClientApp);

  app.listen(process.env.SERVER_PORT, () => {
    console.log(`listening on ${process.env.SERVER_PORT}...`);
  });
}

runApp();
