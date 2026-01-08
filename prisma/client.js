const { PrismaClient } = require('@prisma/client');

// Prisma Client para PostgreSQL (Neon)
// A DATABASE_URL deve vir do arquivo .env
const prisma = new PrismaClient();

module.exports = prisma;

