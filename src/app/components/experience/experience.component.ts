
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Experience {
  year: string;
  title: string;
  type: string;
  date: string;
  company: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  experiences: Experience[] = [

    {
      year: '2021',
      title: 'Programming Specialization',
      type: 'Practical Software Development Training',
      date: '2021 – 2026',
      company: 'Technical Education Copenhagen (TEC), Denmark',

      description: [
        'Completed programming assignments and practical software development exercises.',
        'Built individual projects using programming languages, APIs, databases and frontend technologies.',
        'Practised backend and application development through hands-on project work.',
        'Worked on problem-solving, debugging and structured software development.',
        'Used version control and GitHub to manage and maintain project code.',
        'Continued developing technical knowledge through practical exercises and independent learning.'
      ]
    },

    {
      year: '2011',
      title: 'Data Analyst',
      type: 'Professional Experience',
      date: '2011 – 2013',
      company: 'Laven Pharma A/S',

      description: [
        'Analysed product performance and market trends to support business decisions.',
        'Collected and analysed data from different sources.',
        'Used statistical models to support sales forecasting.',
        'Prepared reports and presentations using Microsoft Excel.',
        'Collaborated with marketing teams to analyse sales information and communicate findings.'
      ]
    }

  ];

}
