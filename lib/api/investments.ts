import { prisma } from '@/lib/db';
import { Investment } from '@prisma/client';

export async function createInvestment(data: Omit<Investment, 'id' | 'createdAt' | 'updatedAt'>) {
  return await prisma.investment.create({
    data,
    include: {
      project: true,
      investor: true,
    },
  });
}

export async function getUserInvestments(userId: string) {
  return await prisma.investment.findMany({
    where: {
      investorId: userId,
    },
    include: {
      project: true,
    },
  });
}