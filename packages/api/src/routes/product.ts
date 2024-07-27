import { ProductTable, insertProductSchema } from '../db/schema'
import { publicProcedure, protectedProcedure, router } from '../trpc'

export const productRouter = router({
  all: publicProcedure.query(async ({ ctx }) => {
    const { db } = ctx
    const allProducts = await db.select().from(ProductTable).all()
    return allProducts
  }),
  create: protectedProcedure
    .input((raw) => parse(insertProductSchema, raw))
    .mutation(async ({ ctx, input }) => {
      const { db } = ctx
      await db.insert(ProductTable).values(input).run()
    }),
})
