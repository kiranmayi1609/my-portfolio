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
      year: '2017',
      title: 'Joined Digital Solutions LLC',
      description: 'Started as a junior developer, focusing on front-end development and API integrations.'
    },
    {
      year: '2019',
      title: 'Promoted to Mid-Level Developer',
      description: 'Took ownership of projects, mentored interns, and collaborated on architectural decisions.'
    },
    {
      year: '2021',
      title: 'Senior Software Engineer at TechCorp Inc.',
       
      description: 'Leading a team of developers to build scalable, high-performance web applications.'
    },
    {
      year: '2024',
      title: 'Exploring AI and DevOps',
      description: 'Expanding knowledge in ML, cloud infrastructure, and automation pipelines.'
    }
  ];

}
