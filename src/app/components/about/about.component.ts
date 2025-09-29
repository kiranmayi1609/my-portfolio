import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  //  skills = [
  //   'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python',
  //   'AWS', 'Docker', 'SQL', 'MongoDB', 'GraphQL', 'Git', 'CI/CD'
  // ];
skills = [
    'JavaScript', 'TypeScript', 'Angular', 'native Reactive', 'Node.js', 'Python',
    'Azure', 'Docker', 'SQL', 'DuckDB', 'Bigdata', 'Git', 'CI/CD'
  ];

Security_skills = {
  programming: ["JavaScript", "TypeScript", "Python", "Java"],
  security: ["Authentication", "Authorization", "OAuth 2.0", "JWT"]
};
 highlights = [
    {
      label: 'Frontend',
      percent: 80,
      description: 'JavaScript, TypeScript, Angular, React Native'
    },
    {
      label: 'Backend',
      percent: 70,
      description: 'Node.js, .NET, SQL, REST APIs'
    },
    {
      label: 'Data & Cloud',
      percent: 90,
      description: 'Python, Azure, Big Data, Docker'
    },
    {
      label: 'Tools',
      percent: 85,
      description: 'Git, CI/CD, Linux, Windows'
    }
  ];

  // Circle circumference (2πr, with r=54)
  circumference = 2 * Math.PI * 54;
}
