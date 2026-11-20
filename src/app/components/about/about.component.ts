
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  skillGroups = [
    {
      category: 'Programming Languages',
      skills: [
        'C#',
        'Java',
        'JavaScript',
        'TypeScript',
        'SQL',
        'Python'
      ]
    },
    {
      category: 'Backend & APIs',
      skills: [
        '.NET',
        'ASP.NET Web API',
        'REST APIs',
        'Spring Boot (Basic)'
      ]
    },
    {
      category: 'Frontend & Mobile',
      skills: [
        'Angular',
        'React (Training)',
        'React Native',
        'Android Development'
      ]
    },
    {
      category: 'Databases',
      skills: [
        'SQL Server',
        'PostgreSQL (Neon)',
        'Firebase Firestore'
      ]
    },
    {
      category: 'Data Technologies',
      skills: [
        'Hadoop',
        'HDFS',
        'PySpark',
        'Apache Kafka',
        'CSV Data Workflows'
      ]
    },
    {
      category: 'Libraries & Tools',
      skills: [
        'TanStack Query',
        'Zod',
        'Git',
        'GitHub',
        'Microsoft Excel'
      ]
    }
  ];

  developmentFocus = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Building frontend and backend web applications.'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Developing mobile applications with React Native.'
    },
    {
      icon: '⚙️',
      title: 'Backend & APIs',
      description: 'Working with C#, ASP.NET Web API and REST APIs.'
    },
    {
      icon: '📊',
      title: 'Data Processing',
      description: 'Exploring Kafka, Hadoop and PySpark workflows.'
    }
  ];

}
