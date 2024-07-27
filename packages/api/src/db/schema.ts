import { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-valibot'

// User
export const UserTable = sqliteTable('User', {
  id: text('id').primaryKey(),
  email: text('email').notNull(),
  first_name: text('first_name'),
  last_name: text('last_name'),
  address: text('address'),
  zip_code: integer('zip_code'),
  phone: integer('phone'),
  role: text('role', { enum: ['customer', 'admin'] }).default('customer'),
})

export type User = InferSelectModel<typeof UserTable>
export type InsertUser = InferInsertModel<typeof UserTable>
export const insertUserSchema = createInsertSchema(UserTable)
export const selectUserSchema = createSelectSchema(UserTable)

// Car
export const CarTable = sqliteTable('Car', {
  id: text('id').primaryKey(),
  make: text('make').notNull(),
  model: text('model').notNull(),
  year: integer('year').notNull(),
  color: text('color').notNull(),
  price: real('price').notNull(),
  mileage: integer('mileage').notNull(),
  fuelType: text('fuelType').notNull(),
  transmission: text('transmission').notNull(),
})

export type Car = InferSelectModel<typeof CarTable>
export type InsertCar = InferInsertModel<typeof CarTable>
export const insertCarSchema = createInsertSchema(CarTable)
export const selectCarSchema = createSelectSchema(CarTable)

//Products
export const ProductTable = sqliteTable('Product', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  price: real('price').notNull(),
  category: text('category').notNull(),
  image_url: text('image_url').notNull(),
  stock_quantity: integer('stock_quantity').notNull(),
  is_active: integer('is_active', { mode: 'boolean' }).notNull(),
})

export type Product = InferSelectModel<typeof ProductTable>
export type InsertProduct = InferInsertModel<typeof ProductTable>
export const insertProductSchema = createInsertSchema(ProductTable)
export const selectProductSchema = createSelectSchema(ProductTable)

//Videos
export const VideoTable = sqliteTable('Video', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  url: text('url').notNull(),
})

export type Video = InferSelectModel<typeof VideoTable>
export type InsertVideo = InferInsertModel<typeof VideoTable>
export const insertVideoSchema = createInsertSchema(VideoTable)
export const selectVideoSchema = createSelectSchema(VideoTable)
