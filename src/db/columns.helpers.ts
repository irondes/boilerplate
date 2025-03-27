import { timestamp } from 'drizzle-orm/pg-core'

// columns.helpers.ts
export const timestamps = {
	updated_at: timestamp({
		mode: 'date',
		precision: 3,
	}).$onUpdate(
		() => new Date(),
	),
	created_at: timestamp()
		.defaultNow()
		.notNull(),
	deleted_at: timestamp(),
}
