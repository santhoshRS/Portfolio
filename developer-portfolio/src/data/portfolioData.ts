import type { PersonalInfo, SkillCategory, Experience, Project, Achievement } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'SANTHOSH RAAI',
  title: '.NET Full Stack Developer',
  summary: 'Lead .NET Developer with 12+ years of experience designing and delivering cloud-native, enterprise healthcare and title insurance solutions. Expert in C#, .NET 8, microservices, Azure, and React for scalable, secure applications.',
  email: 'santhosh@example.com',
  linkedin: 'https://www.linkedin.com/in/santhosh-raai',
  github: 'https://github.com/santhoshrs',
  resumePath: '/resume.pdf' // Placeholder
};

export const skills: SkillCategory[] = [
  {
    category: 'Backend',
    skills: [
      { name: '.NET Core', level: 'Expert' },
      { name: 'C#', level: 'Expert' },
      { name: 'ASP.NET MVC', level: 'Advanced' },
      { name: 'Entity Framework', level: 'Advanced' },
      { name: 'SQL Server', level: 'Advanced' }
    ]
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'HTML/CSS', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' }
    ]
  },
  {
    category: 'Cloud / DevOps',
    skills: [
      { name: 'Azure', level: 'Intermediate' },
      { name: 'Docker', level: 'Beginner' },
      { name: 'Git', level: 'Advanced' }
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'SQL Server', level: 'Advanced' },
      { name: 'MongoDB', level: 'Intermediate' }
    ]
  },
  {
    category: 'Architecture / Messaging / Tools',
    skills: [
      { name: 'Microservices', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Advanced' },
      { name: 'Agile/Scrum', level: 'Advanced' }
    ]
  }
];

export const experiences: Experience[] = [
  {
    company: 'WebMD',
    role: 'Lead .NET Developer',
    duration: 'Jan 2026 - Present',
    responsibilities: [
      'Led design, development, optimization, and maintenance of a scalable healthcare platform using C#, .NET 8, microservices, Azure Functions, and React TypeScript',
      'Implemented secure API gateway solutions using Azure API Management, JWT authentication, rate limiting, pagination, and response compression',
      'Built and supported distributed systems using Kafka-based event-driven architecture for reliable cross-service communication',
      'Created canary deployment strategies and structured logging with Serilog for robust monitoring and production support'
    ],
    achievements: [
      'Delivered high-performance, secure healthcare application architecture on Azure with strong scalability and fault tolerance',
      'Improved API reliability and deployment confidence through canary releases and observability practices'
    ]
  },
  {
    company: 'WebMD Personal Health Record',
    role: 'Associate Architect',
    duration: 'Mar 2023 - Jan 2026',
    responsibilities: [
      'Designed and maintained backend services using .NET 8, Web API, microservices, and Azure App Services',
      'Developed React TypeScript single-page applications with Material UI, Redux, and frontend testing using RTL and Jest',
      'Implemented secure, scalable Azure-based solutions with JWT authentication, Azure DevOps CI/CD pipelines, and Blob Storage',
      'Built reusable middleware for logging, exception handling, and validation to improve maintainability and traceability'
    ],
    achievements: [
      'Delivered HIPAA-compliant PHR capabilities with cloud-native Azure infrastructure and strong security controls',
      'Automated release delivery across environments using Azure DevOps pipelines and reusable YAML templates'
    ]
  },
  {
    company: 'ValueLabs / WebMD Daily Habit',
    role: 'Senior Analyst',
    duration: 'Jun 2019 - Mar 2023',
    responsibilities: [
      'Developed backend services using .NET Core 3.1, Web API, and SQL Server with Redis caching to improve performance',
      'Built and maintained React v16 + TypeScript frontend applications with Redux and Material UI',
      'Implemented OAuth 2.0 authentication and integrated Swagger UI for API documentation',
      'Created and managed Bitbucket CI/CD pipelines for automated build, test, and deployment workflows'
    ],
    achievements: [
      'Reduced API response latency and improved throughput through Redis-based caching',
      'Delivered wellness platform enhancements with reliable deployment automation and accessibility improvements'
    ]
  },
  {
    company: 'First American India / DataTree',
    role: 'Software Engineer',
    duration: 'Jun 2016 - Jun 2019',
    responsibilities: [
      'Designed and developed ASP.NET MVC 5 applications with Angular 5 front-end components and responsive UI using Bootstrap',
      'Optimized SQL Server database performance with stored procedures, indexing, and query tuning',
      'Implemented logging with log4net and managed CI/CD workflows using Git',
      'Built data-heavy property search and reporting features for a large-scale title insurance platform'
    ],
    achievements: [
      'Supported a national property data platform handling billions of records with improved data retrieval performance',
      'Enhanced operational reporting and user experience for mortgage and real estate workflows'
    ]
  },
  {
    company: 'RoopaSoft LLP / IBIS',
    role: 'Senior Software Developer',
    duration: 'Jan 2015 - Jun 2016',
    responsibilities: [
      'Designed and developed reusable business logic using ASP.NET, C#, WCF, and SOAP services within a three-tier architecture',
      'Built rich desktop applications using Windows Forms and WPF, enhancing user experience with modern UI components',
      'Developed responsive web interfaces using Bootstrap, CSS, HTML, JavaScript, and jQuery, ensuring cross-browser compatibility',
      'Utilized third-party UI libraries such as Telerik and Kendo UI to build rich, interactive user interfaces with charts and data tables',
      'Improved SQL Server database performance by 20% through query optimization, stored procedure tuning, and efficient data access strategies',
      'Collaborated within a three-member team to deliver end-to-end solutions from requirements analysis to deployment'
    ],
    achievements: [
      'Enhanced system stability and user onboarding through detailed user manuals and issue resolution',
      'Accelerated front-end development and improved visualization capabilities using third-party UI components'
    ]
  },
  {
    company: 'RoopaSoft LLP',
    role: 'Software Developer',
    duration: 'Dec 2013 - Jan 2015',
    responsibilities: [
      'Developed ASP.NET and Windows Forms applications supporting healthcare and compliance workflows',
      'Built responsive web screens using Bootstrap, jQuery, and custom JavaScript',
      'Implemented reusable business logic and SOAP/WCF services within a layered architecture',
      'Created Crystal Reports and dashboards for operational reporting and analysis',
      'Collaborated with stakeholders to translate requirements into working software'
    ],
    achievements: [
      'Delivered stable healthcare portal functionality with strong data validation and reporting support',
      'Improved UI usability and maintainability through modular frontend design'
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'Personal Health Record Platform',
    description: 'Healthcare platform providing secure patient data management, HIPAA-compliant workflows, and seamless cross-domain integrations.',
    techStack: ['.NET 8', 'React', 'Azure App Services', 'Azure SQL', 'Azure Functions'],
    responsibilities: [
      'Designed and implemented backend services using .NET 8 and Web API',
      'Built React TypeScript frontend with Material UI and reusable components',
      'Implemented secure data access with JWT authentication and Azure API Management'
    ],
    outcome: 'Delivered a scalable PHR platform with improved patient data security and cloud-native Azure reliability'
  },
  {
    title: 'Daily Habits Wellness Platform',
    description: 'Personalized healthcare wellness application helping users build routine habits and track progress across nutrition, sleep, and chronic conditions.',
    techStack: ['.NET Core 3.1', 'React', 'TypeScript', 'SQL Server', 'Redis'],
    responsibilities: [
      'Developed backend services using .NET Core 3.1 and Web API',
      'Built React TypeScript SPA with Redux and Material UI',
      'Implemented OAuth 2.0 authentication and automated Bitbucket CI/CD pipelines'
    ],
    outcome: 'Enabled faster, reliable wellness feature releases and improved application performance with Redis caching'
  },
  {
    title: 'DataTree Title Insurance Platform',
    description: 'Title insurance and property data solution with high-volume document search, reporting, and regulatory compliance workflows.',
    techStack: ['ASP.NET MVC 5', 'Angular 5', 'SQL Server', 'Bootstrap'],
    responsibilities: [
      'Developed responsive property search interfaces with Angular and Bootstrap',
      'Optimized SQL Server performance for billions of document records',
      'Integrated reporting and document management features for title insurance users'
    ],
    outcome: 'Supported a national title insurance platform with reliable property data access and faster reporting capabilities'
  },
  {
    title: 'IBIS Asset Tracking System',
    description: 'Supply chain and asset tracking solution delivering real-time visibility, operational dashboards, and secure data workflows.',
    techStack: ['ASP.NET', 'WCF', 'Windows Forms', 'SQL Server', 'Telerik'],
    responsibilities: [
      'Built asset tracking and management workflows using ASP.NET and Windows Forms',
      'Developed dashboards, charts, and reporting modules with Telerik UI components',
      'Improved database performance through query optimization and efficient data access'
    ],
    outcome: 'Delivered a secure supply chain platform with improved asset visibility and operational efficiency'
  },
  {
    title: 'EHR Exchange Portal',
    description: 'Healthcare compliance portal for hospitals to manage EHR compliance programs and appeals management efficiently.',
    techStack: ['ASP.NET', 'WCF', 'SOAP', 'Bootstrap', 'SQL Server'],
    responsibilities: [
      'Developed reusable business logic and secure SOAP/WCF services',
      'Built responsive healthcare workflows using ASP.NET and Bootstrap',
      'Implemented operational reporting and dashboard components for compliance visibility'
    ],
    outcome: 'Delivered an intuitive EHR compliance portal with improved data workflows and report generation'
  }
];

export const achievements: Achievement[] = [
  {
    title: 'Microsoft Certified: Azure Developer Associate',
    description: 'Certified in developing solutions for Microsoft Azure',
    date: '2022'
  },
  {
    title: 'Employee of the Year',
    description: 'Recognized for outstanding performance and contributions',
    date: '2021'
  }
];