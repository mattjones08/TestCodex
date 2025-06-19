module.exports = {
  schema: 'public',
  createSchema: true,
  migrationsTable: 'pgmigrations',
  migrationFolder: 'migrations',
  databaseUrl: process.env.DATABASE_URL,
};
