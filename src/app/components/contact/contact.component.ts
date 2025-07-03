import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  //  formData = {
  //   name: '',
  //   email: '',
  //   message: ''
  // };

  // submitForm() {
 
  //   console.log('Form submitted:', this.formData);
  //   alert('Message sent successfully!');
  //   this.formData = { name: '', email: '', message: '' };
  // }

    contactDetails = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      text: 'dev@example.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      text: '+1 (555) 123-4567'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      text: 'San Francisco, CA'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      text: 'github.com/yourusername'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      text: 'linkedin.com/in/yourprofile'
    }
  ];

}
