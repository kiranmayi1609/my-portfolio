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
    { icon: 'github', url: 'https://github.com/kiranmayi1609' },
    { icon: 'linkedin', url: 'www.linkedin.com/in/kiranmayi-tummala' },
    { icon: 'codepen', url: 'https://codepen.io/yourprofile' },
    { icon: 'medium', url: 'https://medium.com/@yourusername' }
  ];

}
