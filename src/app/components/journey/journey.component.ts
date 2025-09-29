import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  type: 'work' | 'education' | 'milestone';
}


@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss'
})
export class JourneyComponent {

  //  timelineEvents: TimelineEvent[] = [
  //   {
  //     year: '2015-2018',
  //     title: 'Computer Science Degree',
  //     description: 'Graduated with honors from Tech University',
  //     icon: '🎓',
  //     type: 'education'
  //   },
  //   {
  //     year: '2018-2020',
  //     title: 'Junior Developer',
  //     description: 'Worked at Startup Inc. building web applications',
  //     icon: '💻',
  //     type: 'work'
  //   },
  //   {
  //     year: '2020',
  //     title: 'Open Source Contributor',
  //     description: 'Published first major open source project',
  //     icon: '🚀',
  //     type: 'milestone'
  //   },
  //   {
  //     year: '2020-Present',
  //     title: 'Senior Developer',
  //     description: 'Leading projects at TechCorp with a team of 5',
  //     icon: '👨‍💻',
  //     type: 'work'
  //   },
  //   {
  //     year: '2023',
  //     title: 'Cloud Certification',
  //     description: 'Achieved AWS Solutions Architect certification',
  //     icon: '☁️',
  //     type: 'milestone'
  //   }
  // ];

  // Track which event is currently active
  // activeIndex: number | null = null;

  // setActive(index: number): void {
  //   this.activeIndex = this.activeIndex === index ? null : index;
  // }

    timeline = [
    {
      year: '2016',
      title: 'Graduated with B.Tech in Computer Science',
      description: 'Completed my degree with a strong foundation in algorithms, data structures, and software design.'
    },
   
    {
      year: '2024',
      title: 'Exploring AI and DevOps',
      description: 'Expanding knowledge in ML, cloud infrastructure, and automation pipelines.'
    }
  ];

   milestones = [
    {
      id: 1,
      icon: 'fas fa-laptop-code',
      title: 'Bachelor in Computer Science',
      year: '2014 - 2018',
      description: 'Comprehensive study of programming fundamentals, algorithms, data structures, and software engineering principles.',
      skills: ['Java', 'Python', 'Algorithms', 'Databases', 'System Design']
    },
    {
      id: 2,
      icon: 'fas fa-tools',
      title: 'TEC Practical Center',
      year: '2019',
      description: 'Hands-on technical training with industry-standard tools and technologies. Real-world projects and collaborative learning environment.',
      skills: ['Web Development', 'DevOps', 'Cloud Computing', 'Agile Methodology', 'UI/UX Design']
    },
    {
      id: 3,
      icon: 'fas fa-chart-line',
      title: 'Master of Business Administration',
      year: '2020 - 2022',
      description: 'Advanced studies in business strategy, leadership, and organizational management. Focus on technology business management.',
      skills: ['Leadership', 'Business Strategy', 'Financial Analysis', 'Marketing', 'Project Management']
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.addBounceAnimation();
  }

  private addBounceAnimation(): void {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes bounce {
        from { transform: translateY(0); }
        to { transform: translateY(-15px); }
      }
    `;
    document.head.appendChild(style);
  }

}
