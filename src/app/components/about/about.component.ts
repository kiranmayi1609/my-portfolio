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

  certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      provider: 'Amazon Web Services',
      date: 'Issued May 2023',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png',
      link: '#'
    },
    {
      title: 'Advanced React and Redux',
      provider: 'Udemy',
      date: 'Completed Jan 2023',
      logo: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
      link: '#'
    },
    {
      title: 'Microservices with Node.js and React',
      provider: 'Udemy',
      date: 'Completed Nov 2022',
      logo: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
      link: '#'
    },
    {
      title: 'Angular Advanced Concepts',
      provider: 'Frontend Masters',
      date: 'Completed Sep 2022',
      logo: 'https://static.frontendmasters.com/assets/fm/icons/favicon-32x32.png',
      link: '#'
    }
  ];
}
