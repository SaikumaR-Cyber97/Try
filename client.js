import { PrismaClient } from "@prisma/client";

let prisma;

function createPrismaClient() {
  return new PrismaClient();
}

if (process.env.NODE_ENV !== "production") {
  if (!globalThis.prismaGlobal) {
    globalThis.prismaGlobal = createPrismaClient();
  }
  prisma = globalThis.prismaGlobal;
} else {
  prisma = createPrismaClient();
}

export default prisma;
