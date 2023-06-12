import { Project } from "@/types/project";

export const projectConfig: Project[] = [
  {
    name: "Compass Education",
    description:
      "This platform operates as a Software as a Service (SaaS) solution designed for comprehensive school management. It serves a wide range of users, including staff, students, and parents, with several key modules for people management, enrollment, timetable scheduling, and attendance tracking. The platform centralizes essential administrative tasks, thus improving communication and overall efficiency within the school environment.",
    technologies: [
      "ASP.NET Core",
      "ASP.NET",
      "C#",
      "JavaScript",
      "TypeScript",
      "React",
      "ExtJS",
      "Material-UI",
      "Webpack Module Federation",
      "Mono Repo",
      "Microservice",
      "Microfrontend",
      "MongoDB",
      "SQL Server",
      "Entity Framework Core",
      "Elastic Stack",
      "Hot Chocolate GraphQL",
      "Apollo GraphQL Client",
      "Redis",
      "Couchbase",
      "Styled Components",
    ],
    contributions: {
      mainDescription:
        "As a full-stack developer on this project, my contributions spanned both frontend and backend development.",
      data: [
        "Developed a dynamic form generation system using React. This allowed for the creation of a variety of question and answer forms akin to Google Forms. These forms could be created by administrators and then presented on the enrolment form for parents to complete.",
        'Crafted a validation library compatible with both frontend and backend. The validation rules were stored in MongoDB, and converted into a "yup" schema for frontend use. In the backend, we created multiple validators using defined validators and expressions, ensuring compatibility with the FluentValidation library of C#.',
        "Developed a rate limiter to curb account creation, thus improving system security.",
        "Engineered a recommendation system for schools. This engine could take multiple parameters into account to suggest suitable schools to users.",
        "Uplifted multiple screens from the old ExtJS system to React Material-UI components, thereby modernizing the user interface.",
        "Created multiple UI components that enabled ExtJS and React to work in tandem. For instance, I was able to display an ExtJS window in a React context and vice versa.",
      ],
    },
    architecture: [
      "The system is structured around an ASP.NET monolithic architecture where most core module APIs are housed and exposed as RESTful (Open API) endpoints. This same architecture also delivers frontend HTML. Authentication is accomplished through SAML or forms authentication, contingent on school login protocols.",
      "Data management is conducted through MongoDB and SQL Server databases. In addition, there are smaller, specialized microservices such as a search API that utilizes Elasticsearch. These microservices communicate with the monolithic backend via HTTP REST APIs.",
      "On the frontend, the legacy UI is built with ExtJS while the new UI incorporates React JS in a micro frontend architecture. Here, individual module static files are sourced from an S3 bucket, which are produced from a frontend React mono repo using webpack module federation.",
    ],
  },{
    name: "Oneworld",
    description: "This logistic app serves as a comprehensive solution for managing multiple shipments using both air and road transportation modes. It offers users the ability to track their shipments in real-time, providing transparency and visibility throughout the logistics process. The app streamlines various logistics operations, including shipment scheduling, route optimization, documentation management, and delivery tracking. By utilizing this app, businesses can enhance their supply chain management, improve efficiency, and provide an enhanced customer experience.",
    technologies: [
      "React Native",
      "Angular",
      "Bootstrap",
      "RabbitMQ",
      "C#",
      "ASP.NET Core",
      "SQL Server",
      "TypeScript",
      "JavaScript",
      "Seq (for logging)",
      "Microservices",
      "Identity Server"
    ],
    contributions: {
      mainDescription: "As the architect and developer for the entire project, I undertook various challenging tasks, including:",
      data: [
        "Creating the mobile app using React Native and implementing notification handling to provide timely updates to users.",
        "Developing the backend system using the API-first approach, ensuring robust and efficient communication between the frontend and backend components.",
        "Integrating a payment gateway to facilitate secure and seamless payment transactions within the application.",
        "Implementing the functionality to generate and allow users to download invoice documents, streamlining the billing process.",
        "Developing multiple Angular components to enhance the user interface and provide a smooth user experience.",
        "Implementing patterns like infinite scroll to efficiently handle large datasets and optimize data loading and rendering."
      ]
    },
    architecture: [
      "The frontend application is developed in Angular 8, with two modules catering to different user needs: one for customer-facing functionality and another for backend office operations, with support for multiple roles. The application is hosted using the ASP.NET Core framework, where the static file middleware is exposed. The Angular app is loaded from this middleware, allowing seamless access to the user interface. Authentication and authorization are handled through Identity Server, ensuring secure access to the application.",
      "The backend of the application exposes APIs using ASP.NET Core 5. The data persistence layer is managed using EF Core Code First, serving as the object-relational mapping (ORM) for SQL Server. The application architecture follows the CQRS (Command Query Responsibility Segregation) pattern, utilizing the MediatR library for command and query handling. Additionally, a background service is implemented as a Windows service using TopShelf. This service performs various tasks such as payment status checks, email sending, and invoice processing. Communication between components is facilitated using RabbitMQ messaging. The backend also includes two microservices: the Print Service for generating printable HTML using Razor templates and the Tracking Service for retrieving historical track information of airway bills from previous transactions.",
      "The mobile application is developed specifically for customers, allowing them to track their shipments and make online payments conveniently from their mobile devices.",
      "The entire application is deployed on a Windows Server machine, created through Azure Virtual Machines. This deployment approach provides flexibility and scalability while leveraging the capabilities of the Azure cloud platform."
    ]
  },
  {
    name: "Integration Hub",
    description:
      "The platform functions as a Software as a Service (SaaS) solution, providing an integrated suite of services. It offers a comprehensive set of features including Job Monitoring, Bulk Uploads, Audit Logs, and Event Subscriptions. These capabilities make the platform a versatile tool for managing a variety of tasks, streamlining operations, and enhancing visibility into system events, all in one place.",
    technologies: [
      "Azure Functions",
      "Azure AD",
      "Azure Event Grid Topics",
      "Azure Event Hubs",
      "Azure Event Domains",
      "Azure Service Bus",
      "Azure Storage",
      "Cosmos DB",
      "Azure SQL Server",
      "ASP.NET Core",
      "Azure Front Door",
      "Azure API Management",
      "Azure App Services",
      "C#",
      "Next.js",
      "React",
      "Bootstrap",
      "TypeScript",
      "Scaled Agile Framework (SAFe)",
      "Clean Architecture",
      "Entity Framework Core",
      "API Design First",
      "Stoplight",
      "Microservices and Microfrontends",
      "JAMstack",
      "Azure Key Vault",
      "TeamCity",
      "Octopus",
      "Azure Active Directory",
      "Azure Identity Management",
    ],
    contributions: {
      mainDescription:
        "As a Principal Engineer on this project, my responsibilities were wide-ranging and integral to the project's success.",
      data: [
        "Owning the low-level design and contributing significantly to the high-level design of the system. I developed low-level designs for several integrations, such as notifications, event subscriptions, and audit design.",
        "Setting up the foundational code components and corresponding services on Azure, thereby initializing the system infrastructure.",
        "Conducting research and contributing to various proofs of concept (POCs), aiding in decision-making for high-level design.",
        "Implementing a range of features using Next.js and React for UI development, and ASP.NET Core, Cosmos DB, and SQL Server for backend development.",
        "Assuming a leadership role within the team, providing guidance, and mentoring junior members to foster their professional growth.",
        "Intensively working on Azure Event Grid subscriptions and Azure Functions, demonstrating expertise in these areas.",
      ],
    },
    architecture: [
      "The system is designed as a series of microservices, each corresponding to a different integration. These microservices communicate asynchronously using Azure Event Grid topics. The user interface for all integrations is developed using Next.js.",
      "APIs have been written in a combination of Azure Functions and ASP.NET Core, showcasing a diversified approach to backend development. These are all deployed on the Azure cloud platform across multiple regions, with Azure Front Door serving as the entry point.",
      "Code organization follows the Clean Architecture pattern, promoting separation of concerns and making the system easier to understand and maintain. Builds are managed via TeamCity, and deployments to Azure are handled through Octopus, streamlining the continuous integration and deployment pipeline.",
    ],
  },
  {
    name: "Covid RWE APPS",
    description:
      "This is a web-based application designed to facilitate clinical trials. The application provides survey questions to subjects and physicians. Their responses are then collected and analyzed to generate valuable insights for clinical trials. This data can be used to assess treatment effectiveness, monitor side effects, and evaluate patient experiences, among other uses. The application thus serves as a crucial tool in conducting and optimizing clinical trials.",
    technologies: [
      "C#",
      "Azure Functions",
      "Azure Durable Functions",
      "Azure Service Bus",
      "Azure B2C",
      "Azure Storage",
      "Azure CDN",
      "11ty",
      "Nunjucks",
      "jQuery",
      "Bootstrap",
      "JAMstack",
      "Azure Automation",
    ],
    contributions: {
      mainDescription:
        "As a Senior Full Stack Software Engineer on this project, my contributions were instrumental in various areas:",
      data: [
        "I wrote code to implement multiple features, actively contributing to the development of the overall system.",
        "I had a significant role in the notification projects where Azure Durable Functions were used. This involved creating complex, stateful patterns in the serverless environment, providing reliable and efficient notification services.",
        "I implemented localization for different languages. This involved writing all context in YAML files. During the build process, we generated multiple static files for different languages, enabling the system to cater to a global audience by providing a user-friendly, localized experience.",
        "I implemented several design patterns including Orchestration and Choreography.",
      ],
    },
    architecture: [
      "This project employs the JAMstack architecture, with the user interface developed using 11ty, Nunjucks, and jQuery templates. During the build process, these tools generate static HTML and JavaScript files, which are then uploaded to Azure Storage and presented as a static website.",
      "On top of this, Azure CDN profiles are created to enhance content delivery. The APIs are developed using Azure Functions, with all survey data stored in Azure Blob Storage. An event subscription to an Azure Function triggers data push into Azure Data Lake for storage and analysis.",
      "Data analytics are conducted using Power BI, which operates on the data gathered in the Azure Data Lake, transforming the raw survey data into actionable insights for clinical trials. The overall architecture of the system ensures a fast, reliable, and scalable solution for conducting and analyzing clinical trials.",
    ],
  },
  {
    name: "E-Clinical platform",
    description:
      "This is a Software as a Service (SaaS) production environment that encompasses multiple modules, designed to manage all operations for an e-clinical platform. It provides a comprehensive toolset to streamline and handle various aspects of clinical operations, from patient management to data analysis, making it an integral part of the healthcare technology ecosystem.",
    technologies: [
      "Azure App Service",
      "Azure API Management",
      "Redis",
      "Azure AD",
      "Azure Functions",
      "Azure SQL Server",
      "Cosmos DB",
      "Azure Storage",
      "Azure Virtual Machines",
      "ASP.NET Core",
      "Angular 4",
      "TypeScript",
      "JavaScript",
      "Azure Application Insights",
      "Scaled Agile Framework (SAFe)",
      "Behavior-Driven Development (BDD)",
      "SpecFlow",
    ],
    contributions: {
      mainDescription:
        "As a Full Stack Developer, contributions spanned various aspects of the product's lifecycle, from feature development to stabilization. Key responsibilities and accomplishments included:",
      data: [
        "Worked on both frontend and backend development, utilizing Angular 4 for frontend development and ASP.NET Core for backend logic.",
        "Leveraged Azure services for application development and hosting, harnessing its scalability and robustness.",
        "Enhanced application performance through various techniques, such as caching and minimizing API calls via data redundancy using the Bounded Context concept.",
        "Implemented resilience strategies such as retry and circuit breaker patterns, contributing to improved system reliability and fault tolerance.",
        "Contributed to test automation by utilizing Selenium and SpecFlow, ensuring robust and reliable product delivery.",
      ],
    },
    architecture: [
      "Each module within the system is a separate microservice, partitioned using Bounded Context. The microservices communicate with each other asynchronously using Azure Service Bus, with some microservices interacting via REST APIs. Azure services are utilized to host these microservices with autoscaling capabilities, ensuring scalability and resilience.",
      "For data storage, Azure Cosmos DB and SQL Server are used as backend databases. Azure Logic Apps facilitate various workflows, streamlining the processes within the system. Worker processes are deployed for different cron jobs and notification tasks, ensuring timely execution of scheduled operations.",
      "The user interface is developed using Angular 4+, providing a dynamic and user-friendly frontend. The application is deployed on Azure App Service, benefiting from its scalable and secure hosting environment.",
    ],
  }, {
    name: "Amendment App",
    description: "This is a sales application that streamlines the contract creation process by consolidating multiple document amendments to generate a final, unified contract document. By effectively organizing and managing amendments, the application simplifies the contract generation process, saving time and reducing the potential for errors.",
    technologies: [
      "C#",
      "ASP.NET MVC",
      "Angular 2",
      "Universal Windows Platform (UWP) App",
      "XAML",
      "TypeScript",
      "JavaScript",
      "Azure Service Bus"
    ],
    contributions: {
      mainDescription: "As a Lead Engineer on this project, my responsibilities were broad and multi-faceted. They involved liaising directly with Microsoft product managers, implementing key features, and guiding a team of developers. Key contributions include:",
      data: [
        "Regularly meeting with product managers from Microsoft to gather requirements and update progress. This ensured the alignment of development activities with business objectives and stakeholder expectations.",
        "Creating a migration plan for transitioning from a Windows application to a web application, thereby enabling contract creation from mobile or desktop devices. This significantly expanded the accessibility and user base of the application.",
        "Leading the implementation of numerous features, utilizing Angular JS for frontend development and C#, ASP.NET MVC, SQL Server, and Azure Storage for backend tasks. This combination of technologies allowed us to build robust, scalable, and user-friendly features.",
        "Acting as a team lead, conducting code reviews, and distributing tasks among team members. This ensured high-quality code, efficient work distribution, and the continual development and learning of the team."
      ]
    },
    architecture: [
      "The backend of this system utilizes ASP.NET MVC to serve APIs, deployed to Azure App Service for secure and scalable hosting. For asynchronous operations, Windows services are utilized. The frontend comprises a Windows application, which was later converted into a web application implemented using Angular 2+. This provides a unified, responsive user interface across multiple platforms."
    ]
  },  {
    name: "KEKA HR Plattform",
    description: "This is a Software as a Service (SaaS) platform designed for Human Resource Management System (HRMS). It includes numerous modules like attendance tracking, leave management, policy administration, and more, providing a comprehensive solution for efficient and effective human resource management.",
    technologies: [
      "C#",
      "ASP.NET MVC",
      "AngularJS",
      "Bootstrap",
      "Azure App Service",
      "Azure SQL Server",
      "Redis",
      "Azure Storage"
    ],
    contributions: {
      mainDescription: "As a Full Stack Developer, my role involved contributing to multiple modules and projects. Key responsibilities included:",
      data: [
        "Development of a Xamarin Forms mobile app, providing users with access to essential features and functionalities on their mobile devices.",
        "Utilizing WPF (Windows Presentation Foundation) to develop a client-facing app. This app allowed users to upload attendance logs and synchronize data from their attendance devices.",
        "Collaborating with the team to deliver high-quality software solutions, ensuring efficient and reliable performance across different platforms.",
        "Participating in the full software development lifecycle, including requirements gathering, design, implementation, testing, and deployment.",
        "Working with various technologies such as C#, ASP.NET MVC, Xamarin Forms, WPF, and integrating them seamlessly to deliver comprehensive solutions.",
        "Conducting code reviews, providing feedback, and assisting team members to ensure code quality and adherence to best practices.",
        "Continuously exploring new technologies and staying up-to-date with industry trends to bring innovation and improvements to the development process."
      ]
    },
    architecture: [
      "The platform is built on ASP.NET MVC, deployed to Azure App Service for reliable hosting and scalability. Azure Database is used for managing data, ensuring high performance and security. The frontend is developed with AngularJS and Bootstrap, providing a responsive and user-friendly interface.",
      "In addition to the web application, a mobile application is developed using Xamarin Forms, allowing users to access HRMS services on the go. Both the web and mobile applications employ the Backend for Frontend (BFF) pattern, ensuring each client gets what it needs from the backend services in an efficient manner.",
      "The mobile application is built with an 'offline-first' approach. This is achieved by maintaining a local SQLite database on the user's device which synchronizes with the server when a reliable network connection is available. This ensures uninterrupted access to essential HRMS services, even in areas of poor connectivity."
    ]
  }, {
    name: "Global analytics and Risk management",
    description: "Enterprise data management system which stores critical business information from trading positions, P & L and risk information.",
    technologies: [
      "WPF",
      "ASP.NET MVC",
      "Telerik Controls",
      "WCF",
      "SQL Server"
    ],
    contributions: {
      mainDescription: "As a full stack developer, my role encompassed various responsibilities in both frontend and backend development. Here is a high-level description of my contributions:",
      data: [
        "Involved in the complete software development lifecycle, from requirements gathering to deployment.",
        "Developed user interfaces using technologies such as HTML, CSS, and JavaScript.",
        "Implemented business logic and data processing on the backend using languages like C# and frameworks such as ASP.NET.",
        "Worked with databases to design and implement data models and perform database operations.",
        "Collaborated with the team to ensure seamless integration and communication between the frontend and backend components.",
        "Utilized frameworks and libraries, such as Angular, React, or Vue.js, to enhance the frontend development process.",
        "Conducted testing and debugging to ensure the functionality and quality of the application.",
        "Employed version control systems and followed best practices for code management and collaboration.",
        "Kept up with industry trends and emerging technologies to continuously improve development skills and stay current with the latest tools and techniques."
      ]
    },
    architecture: [
      "The web application is developed using ASP.NET MVC with Telerik controls and is hosted on an on-premises server. In addition to the web application, there is also a WPF (Windows Presentation Foundation) application that utilizes WCF (Windows Communication Foundation) to serve APIs."
    ]
  }
];
