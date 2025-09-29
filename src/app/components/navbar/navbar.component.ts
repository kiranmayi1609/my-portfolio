import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';

interface NavItem {
  path: string;
  label: string;
  exact?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  // isAltTheme = false;
    navItems = [
    { label: 'About', path: 'about' },
    { label: 'Experience', path: 'experience' },
    { label: 'Journey', path: 'journey' },
    { label: 'Projects', path: 'projects' },
    { label: 'Contact', path: 'contact' }
  ];

  // toggleTheme() {
  //   this.isAltTheme = !this.isAltTheme;
  //   document.documentElement.classList.toggle('alt-theme');
  // }

  

  constructor(private router: Router) {}
   



  isActive(path: string, exact: boolean = false): boolean {
    return this.router.isActive(path, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }

  scrollTo(section: string) {
    if (section === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigate(path: string): void {
    this.router.navigateByUrl(path);
  }

  navigateWithFragment(path: string, fragment: string): void {
    this.router.navigate([path], { fragment });
  }

 

}
