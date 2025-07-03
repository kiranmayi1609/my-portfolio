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
  //  skills = [
  //   'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python',
  //   'AWS', 'Docker', 'SQL', 'MongoDB', 'GraphQL', 'Git', 'CI/CD'
  // ];
  aboutText = [
    "I’m a full-stack developer focused on building robust, scalable systems.",
    "My certifications reflect continuous learning and hands-on experience.",
    "Here are some credentials I'm proud to hold:"
  ];

  certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Aug 2023',
      badgeUrl: 'assets/certifications/aws-cert.png',
      verifyLink: 'https://example.com/aws-cert'
    },
    {
      title: 'Google Cloud Associate Engineer',
      issuer: 'Google Cloud',
      date: 'Jan 2023',
      badgeUrl: 'assets/certifications/gcp-cert.png',
      verifyLink: 'https://example.com/gcp-cert'
    },
    {
      title: 'Frontend Developer - FreeCodeCamp',
      issuer: 'freeCodeCamp',
      date: '2022',
      badgeUrl: 'assets/certifications/fcc-cert.png',
      verifyLink: 'https://example.com/fcc-cert'
    }
  ];

}
