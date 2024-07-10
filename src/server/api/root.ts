import { postRouter } from "~/server/api/routers/post";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
// アプリケーション全体のtRPCルーターを作成。
export const appRouter = createTRPCRouter({
  post: postRouter, // postに関するAPIエンドポイントを定義したルーターを追加
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
// サーバーサイドでAPIを呼び出すための関数
export const createCaller = createCallerFactory(appRouter);
