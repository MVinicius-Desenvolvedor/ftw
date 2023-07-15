import {PrismaClient} from "@prisma/client";

const globalforPrisma = global as unknown as {prisma:PrismaClient};

export const prisma = globalforPrisma.prisma || 
new PrismaClient ({
    log: ["query"],
});

if (process.env.NODE_ENV !="production")globalforPrisma.prisma; 