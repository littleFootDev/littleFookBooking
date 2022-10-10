import koa from 'koa';
import koaCors from 'koa2-Cors';
import bodyParser from 'koa-bodyparser';
import dotenv from 'dotenv';

import {registerRoutes} from './routes';

dotenv.config();
async function serverSetup() {
  const server: koa = new koa();
  middleware(server);
  await startServer(server);
};

function middleware(server : koa) {
  server.use(bodyParser());
  server.use(koaCors());

  const routes = registerRoutes().routes();

  server.use(routes)
}

async function startServer(server: koa) {
  try {
    const port = process.env.PORT;

    const serverStarted: Promise<void> = new Promise<void>(resolve => {
      server.listen(port, resolve);
      console.log(`Server is running on port : ${port}`);
    });

    await serverStarted;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export {serverSetup};