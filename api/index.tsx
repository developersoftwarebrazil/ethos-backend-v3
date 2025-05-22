import { IncomingMessage, ServerResponse } from 'http';
import { createNestHandler } from '../src/main';

const bootstrap = createNestHandler();

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
): Promise<void> {
  const appHandler = await bootstrap;
  await appHandler(req, res);
}
