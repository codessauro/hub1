import { Suspense } from 'react';
import { ProjectService } from '@/lib/api/services/project.service';
import { ProjectList } from '@/components/projects/project-list';
import { ProjectListSkeleton } from '@/components/projects/project-list-skeleton';

export default async function ProjectsPage() {
  const projects = await ProjectService.findMany({
    where: {
      status: 'ACTIVE',
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Investment Opportunities</h1>
      <Suspense fallback={<ProjectListSkeleton />}>
        <ProjectList projects={projects} />
      </Suspense>
    </div>
  );
}