import { Project, User } from '@prisma/client';
import { ProjectCard } from './project-card';

interface ProjectListProps {
  projects: Array<
    Project & {
      creator: Pick<User, 'id' | 'name' | 'image'>;
    }
  >;
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}