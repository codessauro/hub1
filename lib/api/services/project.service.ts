import { prisma } from '../db/prisma';
import { Prisma } from '@prisma/client';

export class ProjectService {
  static async findMany(options: Prisma.ProjectFindManyArgs = {}) {
    return prisma.project.findMany({
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        investments: true,
        mediaAssets: true,
      },
      ...options,
    });
  }

  static async findById(id: string) {
    return prisma.project.findUnique({
      where: { id },
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        investments: true,
        mediaAssets: true,
        updates: true,
      },
    });
  }

  static async create(data: Prisma.ProjectCreateInput) {
    return prisma.project.create({
      data,
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });
  }
}