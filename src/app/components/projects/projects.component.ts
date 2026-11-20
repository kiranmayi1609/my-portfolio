
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  images?: string[];
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Coming Soon';
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  documentation?: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Badminton Smashers',
      subtitle: 'Full-Stack Web Application',
      description:
        'A full-stack badminton management application with an ASP.NET Web API backend, Angular frontend and PostgreSQL database.',
      imageUrl: '/Badmintion.png',
      technologies: [
        'C#',
        'ASP.NET Web API',
        'Angular',
        'PostgreSQL',
        'SQL Server'
      ],
      status: 'Completed',
      category: 'Full-Stack Development',
      liveUrl: 'https://smashers-bay.vercel.app/',
      githubUrl: 'https://github.com/kiranmayi1609/Smashers',
      documentation: [
        'Developed a full-stack badminton application.',
        'Built backend REST APIs using ASP.NET Web API and C#.',
        'Created the frontend using Angular.',
        'Used SQL Server and migrated the database to Neon PostgreSQL.'
      ]
    },

    {
      title: 'MyMoneyApp',
      subtitle: 'Android Mobile Application',
      description:
        'A mobile money management application with Firebase Authentication and Cloud Firestore. The application demonstrates mobile app development and cloud database integration.',
      images: [
        '/money-app.png',
        '/mobilepay-overview.png',
        '/mobilepay-qrbasis.png',
        '/mobilpay2.png'
      ],
      technologies: [
        'React Native',
        'Firebase',
        'Cloud Firestore',
        'Android'
      ],
      status: 'Completed',
      category: 'Mobile App Development',
      githubUrl: 'https://github.com/kiranmayi1609/MyMoneyApp',
      documentation: [
        'Developed an Android money management application.',
        'Implemented Firebase Authentication.',
        'Used Cloud Firestore for storing application data.',
        'Created mobile application screens and functionality.'
      ]
    },

    {
      title: 'Big Data Analysis & Kafka Integration',
      subtitle: 'Big Data Processing Project',
      description:
        'A big data project exploring data processing and streaming using Hadoop, HDFS, PySpark and Apache Kafka.',
      imageUrl:
        'https://www.whizlabs.com/blog/wp-content/uploads/2020/05/Apache-Kafka-and-Hadoop.png',
      technologies: [
        'Python',
        'Apache Kafka',
        'Hadoop',
        'HDFS',
        'PySpark'
      ],
      status: 'Completed',
      category: 'Big Data',
      githubUrl:
        'https://github.com/kiranmayi1609/Wsl-Kakfa--hadoop-spark--hive-Streaming-',
      documentation: [
        'Explored big data processing using Hadoop and HDFS.',
        'Worked with PySpark and Python.',
        'Explored data streaming using Apache Kafka.'
      ]
    },

    {
      title: 'NordicBank',
      subtitle: 'Digital Banking Web Application',
      description:
        'A simulated full-stack banking application focused on exploring modern digital banking features. Planned features include user registration, account management, transaction history, simulated transfers and an admin dashboard.',
      technologies: [
        'React',
        'TypeScript',
        'Vite',
        'C#',
        'ASP.NET Core Web API',
        'PostgreSQL (Planned)',
        'Entity Framework Core (Planned)'
      ],
      status: 'In Progress',
      category: 'Full-Stack Development',
      documentation: [
        'Started the project on 16 November 2026.',
        'Created the React and TypeScript frontend using Vite.',
        'Created the ASP.NET Core Web API backend.',
        'Tested the initial sample API endpoint.',
        'PostgreSQL and Entity Framework Core integration are planned.',
        'Banking features are still under development.',
        'This is an educational simulation. No real money or bank accounts are used.'
      ]
    },

    {
      title: 'AI-Powered Voice Interview Tool',
      subtitle: 'Your Personal AI Interview Coach',
      description:
        'An upcoming AI-powered web application designed to help users practise job interviews through voice conversations, role-specific questions, follow-up questions and personalised AI feedback.',
      technologies: [
        'React',
        'TypeScript',
        'Python',
        'FastAPI',
        'Generative AI',
        'Speech-to-Text',
        'Text-to-Speech'
      ],
      status: 'Coming Soon',
      category: 'AI Application',
      documentation: [
        'Planned voice-based interview practice.',
        'Role-specific AI interview questions.',
        'Speech-to-Text for recognising spoken answers.',
        'AI-generated follow-up questions.',
        'Personalised interview feedback and suggestions.',
        'Development has not started yet.'
      ]
    },

    {
      title: 'Crypto Application',
      subtitle: 'Cryptocurrency Web Application',
      description:
        'A cryptocurrency application exploring frontend development, backend integration and API-based data.',
      imageUrl: '/crypto.JPG',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'APIs'
      ],
      status: 'Completed',
      category: 'Web Development'
    },

    {
      title: 'Figma UI Design',
      subtitle: 'User Interface Design',
      description:
        'A UI design project exploring layouts, visual components and user interface design using Figma.',
      imageUrl: '/figmaDesign%20.png',
      technologies: [
        'Figma',
        'UI Design',
        'Prototyping'
      ],
      status: 'Completed',
      category: 'UI/UX Design'
    }
  ];

  selectedProject: Project | null = null;
  selectedImage: string | null = null;

  openProject(project: Project): void {
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = null;
  }

  openImage(image: string): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }

}
