import { skills } from "@/config/skill-config";

export const SKillSection = () => {
    const groupedSkills = skills.reduce((acc, skill) => {
        const groupName = skill.groupName;
        if (!acc[groupName]) {
          acc[groupName] = [];
        }
        acc[groupName].push(skill);
        return acc;
      }, {} as { [key: string]: typeof skills });
    return (
        <>
        <h2 className="font-bold uppercase">Skills</h2>
          {Object.entries(groupedSkills).map(([groupName, skills]) => (
            <div key={groupName} className="mb-2">
              <h3 className="my-3 text-sm font-bold">{groupName}</h3>
              <div className="flex flex-wrap">
                {skills.map((skill) => (
                  <span
                    key={skill.skill}
                    className="px-2 py-1 mb-2 mr-2 text-sm font-semibold text-gray-800 capitalize bg-gray-200 rounded-sm"
                  >
                    {skill.skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </>
    );
}