type WorkExperience = {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    contributions: string[];
    url: string;
    urlName: string;
}

export const workExperiences: WorkExperience[] = [{
    company: "X-Team",
    position: "Full Stack Software Engineer",
    startDate: "Oct 2021",
    endDate: "Present",
    description: "I am working on a project for a Compass Education client in Australia. The project involves developing a school management web application. My tasks include working on people management and enrolment application modules.",
    contributions: ["Worked on backend, developing both GraphQL and REST APIs using C#. Implemented business logic and integrated data from MongoDB and SQL Server databases.",
    "Frontend development included designing UI components with React and Styled Components, along with maintaining legacy sections of applications using ExtJS.",
    "Significantly contributed to the creation of custom forms in React JS, similar to Google Forms. Heavily involved developing validation library for cohesive functionality between frontend and backend custom forms.",
    "Took part in meetings to brainstorm how we could make our product better."
],
    url: "https://x-team.com/",
    urlName: "x-team.com"
}, {
    company: "Calyx (formerly Parexel)",
    position: "Principal Software Engineer",
    startDate: "Jan 2021",
    endDate: "Oct 2021",
    description: "Worked on an integration hub project that consolidated multiple integrations across various products into a single platform, thereby achieving significant standardization. Developed this solution using a micro frontend architecture and microservices.",
    contributions: ["Acted as the team lead for a group of five developers. Responsibilities included sprint planning, conducting code reviews, and mentoring junior developers.",
    "Designed and implemented low-level architecture for several integrations using C#, .NET Core, and Azure Functions. Additionally, contributed to high-level design and architecture discussions.",
    "Developed UI components using Next JS and Typescript.",
    "Implemented CI/CD pipeline using teamcity and octopus deploy.",
    "Initiated and implemented a micro frontend architecture using React, which allowed for independent deployable components. Presented this initiative to technical leadership.",
],
    url: "https://www.calyx.ai/",
    urlName: "calyx.ai"
}, {
    company: "Parexel",
    position: "Senior Software Engineer",
    startDate: "Mar 2018",
    endDate: "Jan 2021",
    description: "Worked on diverse range of projects, including a Clinical Trial Management System, a Patient Engagement Platform, COVID survey systems and an Integration Hub. Developed these solutions using microservices architecture, JAM Stack, and monolithic architecture respectively.",
    contributions: ["Served as a backend developer, where I developed REST APIs using C# and .NET Core, and capitalized on Azure cloud services. Gained experience working with SQL Server and Cosmos DB databases.",
      "Actively worked on enhancing application performance by implementing caching strategies, refactoring code, and optimizing application architecture.",
      "Created UI components utilizing Angular and TypeScript, reinforcing frontend development skills."
],
    url: "https://www.parexel.com/",
    urlName: "parexel.com"
}, {
    company: "Technovert",
    position: "Software Lead Engineer",
    startDate: "Aug 2014",
    endDate: "Feb 2018",
    description: "Worked as contractor for Microsoft for migrating their sales windows app to web app and involved in other projects. Worked on HRMS product and contributed to various module like attendance, leaves etc",
    contributions: ["Worked as a full stack developer, where I developed REST APIs using C# and ASP.NET MVC, and capitalized on Azure cloud services. Gained experience working with SQL Server and Cosmos DB databases.",
       "Worked on frontend using Angular JS and Angular 2+ for developing UI.",
       "Worked on mobile app development using Xamarin.",
       "Lead a team of 3-4 developers and responsible for sprint planning, code reviews and client interaction."
],
    url: "https://www.technovert.com/",
    urlName: "technovert.com"
}, {
    company: "Sapient global markets(Now Publicis Sapient)",
    position: "Associate Technology L1",
    startDate: "Jul 2012",
    endDate: "Jul 2014",
    description: "Worked as a developer for various projects.",
    contributions: ["Worked on desktop application development using WPF and C# and also worked on web application development using ASP.NET MVC and C#.",
],
    url: "https://www.publicissapient.com/",
    urlName: "publicissapient.com"
}]