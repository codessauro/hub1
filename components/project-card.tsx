'use client';

import Link from 'next/link';
import { Project } from '@prisma/client';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { formatCurrency, formatDate } from '@/lib/utils/format';

interface ProjectCardProps {
  project: Project & {
    creator: {
      name: string | null;
    };
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const progress = (project.currentAmount / project.targetAmount) * 100;

  return (
    <Link href={`/projects/${project.id}`}>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
          <div className="space-y-4">
            <Progress value={progress} />
            <div className="flex justify-between text-sm">
              <span>{formatCurrency(project.currentAmount)}</span>
              <span>{formatCurrency(project.targetAmount)}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>by {project.creator.name}</span>
              <span>Ends {formatDate(project.deadline)}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Status</span>
              <span className="font-medium">{project.status}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}