
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Milestone {
  icon: string;
  title: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss'
})
export class JourneyComponent {

  milestones: Milestone[] = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Software Development & AI Training',
      period: '2021 – 2026',
      description:
        'Completed practical programming and software development training at Technical Education Copenhagen (TEC), working with programming languages, APIs, databases and application development. In 2026, continued developing web development skills and learning Generative AI tools through ReDI School.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Career Break & Personal Development',
      period: '2014 – 2021',
      description:
        'Focused on family and parental responsibilities while continuing personal and professional development through Danish language training, IT courses and independent learning.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'MBA – Business Management',
      period: '2009 – 2011',
      description:
        'Completed a Master of Business Management at JNTU University, developing knowledge of business management, planning and strategic thinking.'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'BSc Computer Science',
      period: '2006 – 2009',
      description:
        'Completed a Bachelor’s degree in Computer Science at ANU University, building a foundation in computing, programming and software development.'
    }
  ];
}

