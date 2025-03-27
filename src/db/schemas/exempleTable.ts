import {
	integer,
	pgTable,
	uuid,
	varchar,
} from 'drizzle-orm/pg-core'

export const exempleTable =
	pgTable('table_exemplo', {
		uuid: uuid().primaryKey(),
		name: varchar(),
	})
