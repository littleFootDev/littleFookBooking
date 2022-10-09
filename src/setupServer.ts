import koa from 'koa';
import dotenv from 'dotenv';

dotenv.config();
async function serverSetup() {
  const server: koa = new koa();
  await startServer(server);
};

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