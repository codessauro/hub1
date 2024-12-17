import { NextResponse } from 'next/server';
import { ProjectService } from '@/lib/api/services/project.service';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const project = await ProjectService.findById(params.id);
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    return NextResponse.json(project);
  } catch (error) {
    console.error('Failed to fetch project:', error);
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 }
    );
  }
}