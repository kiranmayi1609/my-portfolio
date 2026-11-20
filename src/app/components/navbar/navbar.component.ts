
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface NavItem {
  path: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  // Mobile menu state
  menuOpen = false;

  // Navigation items
  navItems: NavItem[] = [
    { label: 'About', path: 'about' },
    { label: 'Experience', path: 'experience' },
    { label: 'Journey', path: 'journey' },
    { label: 'Projects', path: 'projects' },
    { label: 'Contact', path: 'contact' }
  ];

  // Toggle mobile navigation
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  // Smooth scrolling
  scrollTo(section: string): void {

    this.menuOpen = false;

    if (section === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      return;
    }

    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

}
