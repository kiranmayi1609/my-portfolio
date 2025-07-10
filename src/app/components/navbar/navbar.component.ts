import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  // navLinks = [
  //   { path: '/', label: 'home' },
  //   { path: '/about', label: 'about' },
  //   { path: '/experience', label: 'experience' },
  //   { path: '/projects', label: 'projects' },
  //   { path: '/contact', label: 'contact' }
  // ];

   navItems = [
    { path: '/', label: 'home', exact: true
      
     },
    { path: '/about', label: 'about' },
    { 
      path: '/experience', 
      label: 'experience',
      children: [
        { path: '/experience/journey', label: 'journey' }
      ]
    },
    { path: '/projects', label: 'projects' },
    { path: '/contact', label: 'contact' }
  ];

  constructor(private router: Router) {}

  isActive(path: string, exact: boolean = false): boolean {
    return this.router.isActive(path, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }

  navigate(path: string): void {
    this.router.navigateByUrl(path);
  }

  navigateWithFragment(path: string, fragment: string): void {
    this.router.navigate([path], { fragment });
  }
}
