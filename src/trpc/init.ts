import superjson from 'superjson';
import { initTRPC } from '@trpc/server';
import { cache } from 'react';
export const createTRPCContext = cache(async () => {
  return { userId: 'user_123' }; // mock information
});

const t = initTRPC.create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  transformer: superjson,
});
// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;