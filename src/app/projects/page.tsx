import { ProjectSection } from "@/components/Projects";

export default function Projects() {
  return (
    <div className="flex flex-col p-3 bg-white">
      <h2 className="font-bold uppercase">Projects</h2>
      <ProjectSection />
    </div>
  );
}
