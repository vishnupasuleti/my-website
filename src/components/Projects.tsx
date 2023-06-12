import { projectConfig } from "@/config/project-config"

export const ProjectSection = () => {
    return (
        <>
         {projectConfig.map((project, index) => (
          <div
            className="block w-full mt-2 border-t border-gray-200"
            key={`projects_${index}`}
          >
            <h3 className="my-3 text-md font-bold text-gray-600">
              {project.name}
            </h3>
            <div className="text-gray-700">{project.description}</div>
            <div>
              <h4 className="my-3 text-sm font-bold text-gray-600">
                Tech stack
              </h4>
              <div className="flex flex-wrap">
                {project.technologies.map((technology, index) => (
                  <span
                    className="px-2 py-1 mb-2 mr-2 text-sm font-semibold text-gray-800 capitalize bg-gray-200 rounded-sm"
                    key={`techstack_${index}`}
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div>
                <h4 className="my-3 text-sm font-bold text-gray-600">
                  Architecture
                </h4>
                {project.architecture.map((architecture, index) => (
                  <span
                    className="pb-1 text-sm text-gray-500"
                    key={`architecture_${index}`}
                  >
                    {architecture}
                  </span>
                ))}
              </div>
              <div>
                <h4 className="my-3 text-sm font-bold text-gray-600">
                  Role & contributions
                </h4>
                <span className="pb-1 text-sm text-gray-500">
                  {project.contributions.mainDescription}
                </span>
                <ul className="list-disc list-inside">
                  {project.contributions.data.map(
                    (contribution, index) => (
                      <li
                        className="pb-1 text-sm text-gray-500"
                        key={`responsibility_${index}`}
                      >
                        {contribution}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div></div>
          </div>
        ))}
        </>
    )
}