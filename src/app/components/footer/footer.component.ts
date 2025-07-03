import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
    currentYear = new Date().getFullYear();
  socialLinks = [
    { icon: 'github', url: 'https://github.com/yourusername' },
    { icon: 'linkedin', url: 'https://linkedin.com/in/yourprofile' },
    { icon: 'codepen', url: 'https://codepen.io/yourprofile' },
    { icon: 'medium', url: 'https://medium.com/@yourusername' }
  ];

}
