const skillsData = [
  {
    name: "Angular",
    tags: ["frontend"],
  },
  {
    name: "Next.js",
    tags: ["frontend", "backend"],
  },
  {
    name: "Tailwind CSS",
    tags: ["frontend"],
  },
  {
    name: "Angular",
    tags: ["frontend"],
  },
  {
    name: "React",
    tags: ["frontend"],
  },
  {
    name: "Storybook",
    tags: ["frontend", "product"],
  },
  {
    name: "Component Libraries",
    tags: ["frontend", "product"],
  },
  {
    name: "JavaScript",
    tags: ["frontend"],
  },
  {
    name: "Scrum/Agile",
    tags: ["product"],
  },
  {
    name: "TypeScript",
    tags: ["frontend"],
  },
  {
    name: "C#",
    tags: ["backend"],
  },
  {
    name: "HTML",
    tags: ["frontend"],
  },
  {
    name: "CSS3",
    tags: ["frontend"],
  },
  {
    name: "AWS Lambda",
    tags: ["backend"],
  },
  {
    name: "Backbone",
    tags: ["frontend"],
  },
  {
    name: "Node",
    tags: ["backend"],
  },
  {
    name: ".NET 5.1",
    tags: ["backend"],
  },
  {
    name: "AWS Route 53",
    tags: ["backend", "devops"],
  },
  {
    name: "Git",
    tags: ["devops"],
  },
  {
    name: "GitHub Actions",
    tags: ["devops"],
  },
  {
    name: "Jenkins",
    tags: ["devops"],
  },
  {
    name: "Postgres",
    tags: ["backend"],
  },
  {
    name: "AWS SQS",
    tags: ["backend"],
  },
  {
    name: "AWS SNS",
    tags: ["backend"],
  },
  {
    name: "AWS RDS",
    tags: ["backend"],
  },
  {
    name: "CloudFormation",
    tags: ["devops"],
  },
  {
    name: "CloudWatch",
    tags: ["devops"],
  },
  {
    name: "Terraform",
    tags: ["devops"],
  },
  {
    name: "AngularJs",
    tags: ["frontend"],
  },
  {
    name: "Winforms",
    tags: ["frontend"],
  },
  {
    name: "Angular Material",
    tags: ["frontend"],
  },
  {
    name: "Dotnetcore",
    tags: ["backend"],
  },
  {
    name: "SQL Server",
    tags: ["backend"],
  },
  {
    name: "SSR (Server-side rendering)",
    tags: ["frontend"],
  },
  {
    name: "Redis",
    tags: ["backend"],
  },
  {
    name: "TeamCity",
    tags: ["devops"],
  },
  {
    name: "Graylog",
    tags: ["devops"],
  },
  {
    name: "Logstash",
    tags: ["devops"],
  },
  {
    name: "Kibana",
    tags: ["devops"],
  },
  {
    name: "Docker",
    tags: ["devops"],
  },
  {
    name: "RabbitMQ",
    tags: ["backend"],
  },
  {
    name: "Maria DB",
    tags: ["backend"],
  },
  {
    name: "AWS Step Functions",
    tags: ["backend"],
  },
  {
    name: "Serverless Framework",
    tags: ["backend"],
  },
  {
    name: "AWS API Gateway",
    tags: ["backend"],
  },
  {
    name: "GraphQL",
    tags: ["backend"],
  },
  {
    name: "AWS EC2",
    tags: ["backend"],
  },
  {
    name: "AWS S3",
    tags: ["backend"],
  },
  {
    name: "SonarQube",
    tags: ["devops"],
  },
  {
    name: "Swagger",
    tags: ["backend"],
  },
  {
    name: "Mocha",
    tags: ["frontend"],
  },
  {
    name: "Jasmine",
    tags: ["frontend"],
  },
  {
    name: "jQuery",
    tags: ["frontend"],
  },
  {
    name: "AWS Elasticsearch",
    tags: ["backend"],
  },
  {
    name: "AWS DynamoDB",
    tags: ["backend"],
  },
  {
    name: "BitBucket",
    tags: ["devops"],
  },
  {
    name: "Jira",
    tags: ["product"],
  },
  {
    name: "Frontend Architecture",
    tags: ["architecture"],
  },
  {
    name: "Serverless Architecture",
    tags: ["architecture"],
  },
  {
    name: "State Management",
    tags: ["architecture"],
  },
  {
    name: "framer-motion",
    tags: ["frontend", "design"],
  },
  {
    name: "GreenSock (GSAP)",
    tags: ["frontend", "design"],
  },
  {
    name: "Reusable Component Libraries",
    tags: ["frontend", "design"],
  },
  {
    name: "Figma",
    tags: ["design"],
  },
  {
    name: "Adobe Photoshop",
    tags: ["design"],
  },
  {
    name: "Adobe Firefly",
    tags: ["design"],
  },
  {
    name: "Adobe Illustrator",
    tags: ["design"],
  },
  {
    name: "Wireframing",
    tags: ["design"],
  },
  {
    name: "Prototyping",
    tags: ["design"],
  },
  {
    name: "Responsive/Mobile First Design",
    tags: ["frontend", "design"],
  },
  {
    name: "CSS Preprocessors",
    tags: ["frontend"],
  },
  {
    name: "Webpack",
    tags: ["frontend", "devops"],
  },
  {
    name: "Redux",
    tags: ["frontend"],
  },
  {
    name: "Accessibility Best Practices",
    tags: ["frontend"],
  },
  {
    name: "SEO Optimization",
    tags: ["frontend"],
  },
  {
    name: "WebSockets",
    tags: ["frontend", "backend"],
  },
  {
    name: "Continuous Integration/Deployment (CI/CD)",
    tags: ["devops"],
  },
  {
    name: "Animations/Transitions",
    tags: ["frontend"],
  },
  {
    name: "NPM",
    tags: ["devops"],
  },
  {
    name: "AWS IAM",
    tags: ["devops"],
  },
  {
    name: "Google Analytics",
    tags: ["devops", "frontend"],
  },
  {
    name: "Yarn",
    tags: ["devops"],
  },
  {
    name: "Vite",
    tags: ["frontend", "devops"],
  },
  {
    name: "Three JS",
    tags: ["frontend"],
  },
  {
    name: "Microservice Infrastructure",
    tags: ["backend"],
  },
  {
    name: "Sketch",
    tags: ["design"],
  },
  {
    name: "Linting tools",
    tags: ["devops"],
  },
  {
    name: "Firebase",
    tags: ["backend"],
  },
  {
    name: "API Integration",
    tags: ["frontend", "backend"],
  },
  {
    name: "SOLID Design Principles",
    tags: ["architecture"],
  },
  {
    name: "Functional Programming",
    tags: ["backend"],
  },
  {
    name: "Test Driven Development",
    tags: ["devops"],
  },
  {
    name: "Design Patterns",
    tags: ["architecture"],
  },
  {
    name: "Object Oriented Programming",
    tags: ["backend"],
  },
  {
    name: "Dependency Injection",
    tags: ["backend"],
  },
];

export default skillsData;
