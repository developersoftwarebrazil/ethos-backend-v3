import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express'; // <-- IMPORT CORRIGIDO
import { Express } from 'express';
import { AppModule } from './app.module';

export async function createNestHandler(): Promise<Express> {
  const expressApp = express();
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );
  await app.init();
  return expressApp;
}

// Só roda localmente com `ts-node src/main.ts`
if (require.main === module) {
  void startServer();
}
async function startServer() {
  const server = await createNestHandler();
  server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
  });
}
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();
