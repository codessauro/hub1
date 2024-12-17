import { prisma } from '@/lib/db';
import { Project } from '@prisma/client';

export async function getProjects() {
  return await prisma.project.findMany({
    include: {
      creator: true,
      investments: true,
      mediaAssets: true,
    },
  });
}

export async function getProjectById(id: string) {
  return await prisma.project.findUnique({
    where: { id },
    include: {
      creator: true,
      investments: true,
      mediaAssets: true,
      updates: true,
    },
  });
}

export async function createProject(data: Omit<Project, 'id' | 'createdAt' | 'updatedAt' | 'currentAmount'>) {
  return await prisma.project.create({
    data,
  });
}