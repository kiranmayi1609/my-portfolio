import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// Define the Project interface to type-check project objects
// This interface describes the structure of a project object
// It includes properties for title, description, tags, and image URL
interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
}


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  // projects: Project[] = [
  //   {
  //     title: 'E-commerce Platform',
  //     description: 'A full-featured online store with product management, cart functionality, and payment processing.',
  //     tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
  //     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  //   },
  //   {
  //     title: 'DevOps Dashboard',
  //     description: 'Centralized monitoring tool for cloud infrastructure with real-time metrics and alerts.',
  //     tags: ['Python', 'AWS', 'Docker', 'Prometheus'],
  //     image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'
  //   },
  //   {
  //     title: 'API Gateway',
  //     description: 'Custom API gateway with authentication, rate limiting, and request transformation.',
  //     tags: ['Node.js', 'Redis', 'JWT', 'Kong'],
  //     image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80'
  //   }
  // ];

   projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with product management, cart functionality, and payment processing.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      liveLink: '#',
      sourceLink: '#'
    },
    {
      title: 'DevOps Dashboard',
      description: 'Centralized monitoring tool for cloud infrastructure with real-time metrics and alerts.',
      imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
      tags: ['Python', 'AWS', 'Docker', 'Prometheus'],
      liveLink: '#',
      sourceLink: '#'
    },
    {
      title: 'API Gateway',
      description: 'Custom API gateway with authentication, rate limiting, and request transformation.',
      imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1636&q=80',
      tags: ['Node.js', 'Redis', 'JWT', 'Kong'],
      liveLink: '#',
      sourceLink: '#'
    }
  ];

}
