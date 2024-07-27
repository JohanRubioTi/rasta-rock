import { PaymentTable, insertPaymentSchema } from '../db/schema'
import { publicProcedure, protectedProcedure, router } from '../trpc'

export const paymentRouter = router({
  all: publicProcedure.query(async ({ ctx }) => {
    const { db } = ctx
    const allProducts = await db.select().from(ProductTable).all()
    return allProducts
  }),
  create: protectedProcedure
    .input((raw) => parse(insertPaymentSchema, raw))
    .mutation(async ({ ctx, input }) => {
      const { db } = ctx
      await db.insert(PaymentTable).values(input).run()
    }),
})

