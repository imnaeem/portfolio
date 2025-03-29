import { NextResponse } from 'next/server';
import { projectsList } from './data';

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);
		const key = searchParams.get('key');

		if (key) {
			const project = projectsList.find((project) => project.key === key);
			if (!project) {
				return NextResponse.json({ message: 'Project not found' }, { status: 404 });
			}
			return NextResponse.json(project);
		}

		return NextResponse.json(projectsList);
	} catch (error) {
		console.error('Error:', error);
		return NextResponse.json({ message: 'Failed to get projects. Try Again!' }, { status: 500 });
	}
}
