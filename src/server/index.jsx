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

// entities
import { Tea } from '~/graphql/schema/entities/Tea';
import { Portion } from '~/graphql/schema/entities/Portion';
import { Chat } from '~/graphql/schema/entities/Chat';
import { M2M_TeaOrders } from '~/graphql/schema/entities/M2M_TeaOrders';
import { Message } from '~/graphql/schema/entities/Message';
import { Order } from '~/graphql/schema/entities/Order';
import { User } from '~/graphql/schema/entities/User';

// resolvers
import { AuthResolver } from '~/graphql/schema/resolvers/AuthResolver';
import { TeaResolver } from '~/graphql/schema/resolvers/TeaResolver';
import { PortionResolver } from '~/graphql/schema/resolvers/PortionResolver';
import { ChatResolver } from '~/graphql/schema/resolvers/ChatResolver';
import { MessageResolver } from '~/graphql/schema/resolvers/MessageResolver';

// utils
import { readFile } from '~/utils/server-utils';
import { OrderResolver } from '~/graphql/schema/resolvers/OrderResolver';

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
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'tea_mail',
    entities: [Tea, Portion, Chat, M2M_TeaOrders, Message, Order, User],
    // logging: true,
    synchronize: false,
  });

  app.use(
    '/graphql',
    graphqlHTTP(async (req, res) => ({
      graphiql: true,

      schema: await buildSchema({
        resolvers: [
          AuthResolver,
          TeaResolver,
          PortionResolver,
          ChatResolver,
          MessageResolver,
          OrderResolver,
        ],
      }),

      context: { req, res },
    })),
  );

  app.get('/*', renderClientApp);

  app.listen(process.env.SERVER_PORT, () => {
    console.log(`listening on ${process.env.SERVER_PORT}...`);
  });
}

runApp();
