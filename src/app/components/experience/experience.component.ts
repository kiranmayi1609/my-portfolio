import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Experience {
  title: string;
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
      title: 'TEC Practice center (Internship/Practical Experience) ',
      date: '2021 - Present',
      company: 'Ballerup,Denmark',
      description: [
        'Worked as a full-stack developer, building websites and applications using C# Web API, Angular, Blazor, WPF, and MS SQL.',
        'Integrated front-end and back-end systems, implementing RESTful APIs, database optimization, and workflow automation.',
        'Led UI/UX design using Figma and applied UML and OOP principles, improving usability of applications.',
        'Developed data processing modules in C# using LINQ, reducing report generation time and improving performance.',
        'Built WPF and ASP.NET applications for workflow automation, adopted by 20+ users.',
        'Collaborated with cross-functional teams to translate business logic into scalable software solutions.',
        'Gained hands-on experience with GitHub CI/CD pipelines, version control, and team collaboration.',
        'Participated in Agile ceremonies, contributing to sprint planning, reviews, and retrospectives.'

      ]
    },
    {
      title: 'Laven Pharma India Pvt Ltd',
      date: '2011-2013',
      company: 'Vijayawada,India',
      description: [
        'Automated sales trend analysis using Excel and statistical models, improving forecast accuracy by 20%.',
        'Developed data dashboards tracking product performance across 50+ retail locations.',
        'Worked with marketing teams to create technical product documentation, ensuring regulatory compliance',
        'Analyzed large datasets from multiple sources to identify market growth opportunities.'
      ]
    }
  ];

}
