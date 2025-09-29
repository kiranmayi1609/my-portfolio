import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; // Fixed import

import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
 contactForm: FormGroup;
  isSending = false;
  sendStatus: 'success' | 'error' | null = null;

  contactDetails = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      text: 'kiranmayi1609@gmail.com',
      link: 'mailto:kiranmayi1609@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      text: '+45-91421763',
      link: 'tel:+4591421763'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      text: 'Tobaksvejen,Søborg',
      link: 'https://www.google.com/maps/place/Tobaksvejen,+S%C3%B8borg/@55.7475,12.5001,15z/data=!4m2!3m1!1s0x4652b9f6c7c7c7c7:0x1234567890abcdef'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      text: 'https://github.com/kiranmayi1609',
      link: 'https://github.com/kiranmayi1609'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      text: 'www.linkedin.com/in/kiranmayi-tummala',
      link: 'https://www.linkedin.com/in/kiranmayi-tummala'
    }
  ];

  // CORRECTED: Inject FormBuilder instead of FormGroup
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  async sendMessage() {
    if (this.contactForm.invalid) {
      this.markFormGroupTouched();
      return;
    }
    
    this.isSending = true;
    this.sendStatus = null;

    try {
      //Map form values to template variables 
      const templateParams = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        message: this.contactForm.value.message,
        to_email: 'kiranmayi1609@gmail.com' 
      };
      
      // Send email using EmailJS
      await emailjs.send(
        'service_hblqlk1', // Replace with your service ID
        'template_0kkm7dc', // Replace with your template ID
        templateParams,
        'FPt6bKOfjOVACRtuZ' // Replace with your user ID
      );
      
      this.sendStatus = 'success';
      this.contactForm.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      this.sendStatus = 'error';
    } finally {
      this.isSending = false;

      // Reset status after a delay
      setTimeout(() => {
        this.sendStatus = null;
      }, 5000);
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.contactForm.controls).forEach(key => {
      this.contactForm.get(key)?.markAsTouched();
    });
  }

}
