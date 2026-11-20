import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

interface FooterLink {
  id: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  currentYear = new Date().getFullYear();

  socialLinks: SocialLink[] = [
    {
      icon: 'fab fa-github',
      url: 'https://github.com/kiranmayi1609',
      label: 'GitHub'
    },
    {
      icon: 'fab fa-linkedin-in',
      url: 'https://www.linkedin.com/in/kiranmayi-tummala',
      label: 'LinkedIn'
    },
    {
      icon: 'fas fa-envelope',
      url: 'mailto:kiranmayi1609@gmail.com',
      label: 'Email'
    }
  ];

  footerLinks: FooterLink[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'journey', label: 'Journey' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}