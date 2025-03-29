type ProjectDetails = {
	description: string;
	techStack: string[];
	preview: string;
	github: string;
	images: { url: string; key: string }[];
};

type Metadata = {
	description: string;
};

export type Project = {
	title: string;
	key: string;
	type: string;
	color: string;
	thumbnail: string;
	details: ProjectDetails;
	metadata: Metadata;
};
