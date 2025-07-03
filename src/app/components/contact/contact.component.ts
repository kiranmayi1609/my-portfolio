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
   formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', this.formData);
    alert('Message sent successfully!');
    this.formData = { name: '', email: '', message: '' };
  }

}
