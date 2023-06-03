import { skills } from "@/config/skill-config";
import { summaryList } from "@/config/summary-list";
import { workExperiences } from "@/config/work-experience";

const Home = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    const groupName = skill.groupName;
    if (!acc[groupName]) {
      acc[groupName] = [];
    }
    acc[groupName].push(skill);
    return acc;
  }, {} as { [key: string]: typeof skills });
  return (
    <div className="w-full p-6 mx-auto mb-8 bg-white rounded-lg shadow-lg md:w-3/4">
      <div className="pb-2 border-b border-gray-200">
        <h1 className="text-3xl font-bold uppercase">Vishnu Pasuleti </h1>
        <p className="text-lg font-medium text-gray-500 bg-clip-text">
          vishnupasuleti1234@gmail.com | +91 7893184451
        </p>
      </div>
      <div className="flex flex-col mt-3 md:flex-row">
        <div className="h-full p-2 md:w-3/4">
          <h2 className="font-bold uppercase">Summary</h2>
          <div className="pt-1">
            <ul className="list-disc list-inside">
              {summaryList.map((summary, index) => (
                <li
                  key={`summary-list-${index}`}
                  className="pb-1 text-gray-800"
                >
                  {summary}
                </li>
              ))}
            </ul>
            <h2 className="pt-8 pb-2 font-bold uppercase">Work Experience</h2>

            {workExperiences.map((workExperience, index) => (
              <div className="flex flex-col md:flex-row" key={`work_${index}`}>
                <div className="flex flex-col gap-1 md:w-48">
                  <div className="px-2 py-1 text-sm font-semibold text-right text-gray-800 capitalize bg-gray-200 rounded-sm">
                    {workExperience.company}
                  </div>
                  <div className="text-sm text-right text-gray-500">
                    {workExperience.startDate} - {workExperience.endDate}
                  </div>
                  <div className="text-sm text-right">
                    <a
                      href={workExperience.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      {workExperience.company}
                    </a>
                  </div>
                </div>

                <div className="flex-1 ml-8">
                  <div className="font-semibold text-gray-800">
                    {workExperience.position}
                  </div>
                  <div className="py-4 text-sm text-gray-500">
                    {workExperience.description}
                  </div>
                  <div>
                    <ul className="list-disc list-inside">
                      {workExperience.contributions.map(
                        (contribution, index) => (
                          <li
                            key={`${workExperience.company}contribution_${index}`}
                            className="pb-1 text-sm font-semibold text-gray-500"
                          >
                            {contribution}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <h2 className="pt-8 pb-2 font-bold uppercase">Education</h2>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col gap-1 md:w-48">
                <div className="px-2 py-1 text-sm font-semibold text-right text-gray-800 capitalize bg-gray-200 rounded-lg">
                  VNIT
                </div>
                <div className="text-sm text-right text-gray-500">
                  2008 - 2012
                </div>
                <div className="text-sm text-right">
                  <a
                    href="https://vnit.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    VNIT
                  </a>
                </div>
              </div>
              <div className="flex-1 ml-8">
                <div className="font-semibold text-gray-800">
                  Bachelor of Technology in Electronic and Communication
                  Engineering (ECE)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full p-2 md:w-1/4 bg-slate-100 ring-0">
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
        </div>
      </div>
    </div>
  );
};

export default Home;