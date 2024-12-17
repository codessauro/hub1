import { prisma } from '../db/prisma';
import { Prisma } from '@prisma/client';

export class InvestmentService {
  static async create(data: Prisma.InvestmentCreateInput) {
    return prisma.investment.create({
      data,
      include: {
        project: true,
        investor: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });
  }

  static async findByUser(userId: string) {
    return prisma.investment.findMany({
      where: {
        investorId: userId,
      },
      include: {
        project: true,
      },
    });
  }
}