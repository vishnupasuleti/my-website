export type Project = {
    name: string;
    description: string;
    technologies: string[];
    contributions: { mainDescription: string, data: string[] };
    architecture: string[];
}