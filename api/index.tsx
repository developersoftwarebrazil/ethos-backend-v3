import { IncomingMessage, ServerResponse } from 'http';
import { createNestHandler } from '../src/main';

const bootstrap = createNestHandler();

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
) {
  const appHandler = await bootstrap;
  return appHandler(req, res);
}
