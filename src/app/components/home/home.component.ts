// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { RouterLink } from "@angular/router";

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.scss'
// })
// export class HomeComponent implements OnInit {

  

// phrases = [
//     'Kiranmayi',
//     'Dev + Data ',
//     'Full Stack (Passion +Patience)',
//     'Debugging Reality',
//     'Building pixels & pipelines with .Net+ Angular ',
//   ];
//   currentPhrase = '';
//   phraseIndex = 0;
//   charIndex = 0;
//   isDeleting = false;
//   isEnd = false;
//   typingSpeed = 150;
//   deletingSpeed = 100;

//     private typingTimer?: ReturnType<typeof setTimeout>;

//   // Start typing animation
//   ngOnInit(): void {
//     this.typingTimer = setTimeout(() => {
//       this.typeWriter();
//     }, 1000);
//   }

  

// downloadFile() {
//   const link = document.createElement('a');
//   link.href = 'public/CV.pdf';          // Correct path
//   link.download = 'My_CV.pdf';          // File name when saved
//   link.target = '_blank';               // Open in new tab
//   link.click();
// }
  
// //Typing animation 
//   typeWriter() {
//     this.isEnd = false;
//     const currentPhrase = this.phrases[this.phraseIndex];
    
//     if (this.isDeleting) {
//       this.currentPhrase = currentPhrase.substring(0, this.charIndex - 1);
//       this.charIndex--;
//     } else {
//       this.currentPhrase = currentPhrase.substring(0, this.charIndex + 1);
//       this.charIndex++;
//     }

//     if (!this.isDeleting && this.charIndex === currentPhrase.length) {
//       this.isEnd = true;
//       this.isDeleting = true;
//       setTimeout(() => this.typeWriter(), 1500);
//     } else if (this.isDeleting && this.charIndex === 0) {
//       this.isDeleting = false;
//       this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
//       setTimeout(() => this.typeWriter(), 500);
//     } else {
//       const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
//       setTimeout(() => this.typeWriter(), this.isEnd ? speed * 2 : speed);
//     }
//   }
//   scrollToSection(sectionId: string) {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   }
// }



import {
  CommonModule
} from '@angular/common';

import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  // Typing phrases
phrases: string[] = [
  'Junior Software Developer',
  'Full-Stack Web Developer',
  'Mobile Application Developer',
  'Backend & API Developer'
];

  currentPhrase = '';

  phraseIndex = 0;
  charIndex = 0;

  isDeleting = false;
  isEnd = false;

  typingSpeed = 150;
  deletingSpeed = 100;

  private typingTimer?: ReturnType<typeof setTimeout>;


  // Start typing animation
  ngOnInit(): void {
    this.typingTimer = setTimeout(() => {
      this.typeWriter();
    }, 1000);
  }


  // Typing animation
  typeWriter(): void {

    this.isEnd = false;

    const currentPhrase = this.phrases[this.phraseIndex];

    if (this.isDeleting) {

      this.currentPhrase = currentPhrase.substring(
        0,
        this.charIndex - 1
      );

      this.charIndex--;

    } else {

      this.currentPhrase = currentPhrase.substring(
        0,
        this.charIndex + 1
      );

      this.charIndex++;

    }


    // Finished typing
    if (
      !this.isDeleting &&
      this.charIndex === currentPhrase.length
    ) {

      this.isEnd = true;
      this.isDeleting = true;

      this.typingTimer = setTimeout(() => {
        this.typeWriter();
      }, 1500);

    }

    // Finished deleting
    else if (
      this.isDeleting &&
      this.charIndex === 0
    ) {

      this.isDeleting = false;

      this.phraseIndex =
        (this.phraseIndex + 1) % this.phrases.length;

      this.typingTimer = setTimeout(() => {
        this.typeWriter();
      }, 500);

    }

    // Continue typing or deleting
    else {

      const speed = this.isDeleting
        ? this.deletingSpeed
        : this.typingSpeed;

      this.typingTimer = setTimeout(() => {
        this.typeWriter();
      }, this.isEnd ? speed * 2 : speed);

    }

  }


  // Smooth scroll to project section
  scrollToSection(sectionId: string): void {

    const element = document.getElementById(sectionId);

    if (element) {

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }

  }


  // Clear timer when component is destroyed
  ngOnDestroy(): void {

    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }

  }

}
