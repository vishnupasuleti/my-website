import { skills } from "@/config/skill-config";

export default function SkillsPage() {
  const groupedSkills = skills.reduce((groups, skill) => {
    if (!groups[skill.groupName]) {
      groups[skill.groupName] = [];
    }
    groups[skill.groupName].push(skill);
    return groups;
  }, {} as { [key: string]: typeof skills });
  return (
    <div className="flex flex-col justify-center md:flex-wrap md:flex-row">
      {Object.keys(groupedSkills).map((groupName) => (
        <div key={groupName} className="p-4 w md:w-1/3">
          <div className="h-full overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold uppercase">
                {groupName}
              </div>
              <ul className="flex flex-wrap items-center">
                {groupedSkills[groupName].map((skill, index) => (
                  <li className="m-1" key={`${groupName}_${skill}_${index}`}>
                    <a
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 font-bold text-gray-500 capitalize break-words ring-1 ring-gray-50 bg-slate-100 hover:bg-slate-300"
                    >
                      {skill.skill}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
