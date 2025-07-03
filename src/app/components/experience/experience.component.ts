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
      title: 'Senior Software Engineer',
      date: '2021 - Present',
      company: 'TechCorp Inc.',
      description: [
        'Lead development of customer-facing web applications using React and Node.js',
        'Designed and implemented microservices architecture improving scalability by 40%',
        'Mentored junior developers and conducted code reviews',
        'Optimized database queries reducing API response times by 30%'
      ]
    },
    {
      title: 'Software Developer',
      date: '2018 - 2021',
      company: 'Digital Solutions LLC',
      description: [
        'Developed and maintained enterprise web applications',
        'Implemented automated testing reducing bugs in production by 25%',
        'Collaborated with UX designers to improve user experience',
        'Integrated third-party APIs for payment processing and analytics'
      ]
    }
  ];

}
