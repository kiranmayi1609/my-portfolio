import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import emailjs from '@emailjs/browser';

interface ContactDetail {
  icon: string;
  title: string;
  text: string;
  link?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnDestroy {

  contactForm: FormGroup;
  isSending = false;
  sendStatus: 'success' | 'error' | null = null;

  private statusTimer?: ReturnType<typeof setTimeout>;

  contactDetails: ContactDetail[] = [
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
      text: 'Søborg, Denmark'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      text: 'github.com/kiranmayi1609',
      link: 'https://github.com/kiranmayi1609'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      text: 'linkedin.com/in/kiranmayi-tummala',
      link: 'https://www.linkedin.com/in/kiranmayi-tummala'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  async sendMessage(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending = true;
    this.sendStatus = null;

    try {
      const templateParams = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        message: this.contactForm.value.message,
        to_email: 'kiranmayi1609@gmail.com'
      };

      await emailjs.send(
        'service_hblqlk1',
        'template_0kkm7dc',
        templateParams,
        'FPt6bKOfjOVACRtuZ'
      );

      this.sendStatus = 'success';
      this.contactForm.reset();

    } catch (error) {
      console.error('Error sending email:', error);
      this.sendStatus = 'error';

    } finally {
      this.isSending = false;

      if (this.statusTimer) {
        clearTimeout(this.statusTimer);
      }

      this.statusTimer = setTimeout(() => {
        this.sendStatus = null;
      }, 5000);
    }
  }

  ngOnDestroy(): void {
    if (this.statusTimer) {
      clearTimeout(this.statusTimer);
    }
  }
}