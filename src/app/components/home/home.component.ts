import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

phrases = [
    'Kiranmayi',
    'a Developer',
    'a Problem Solver',
    'a Tech Enthusiast'
  ];
  currentPhrase = '';
  phraseIndex = 0;
  charIndex = 0;
  isDeleting = false;
  isEnd = false;
  typingSpeed = 150;
  deletingSpeed = 100;

  ngOnInit(): void {
    setTimeout(() => this.typeWriter(), 1000);
  }

  typeWriter() {
    this.isEnd = false;
    const currentPhrase = this.phrases[this.phraseIndex];
    
    if (this.isDeleting) {
      this.currentPhrase = currentPhrase.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentPhrase = currentPhrase.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    if (!this.isDeleting && this.charIndex === currentPhrase.length) {
      this.isEnd = true;
      this.isDeleting = true;
      setTimeout(() => this.typeWriter(), 1500);
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      setTimeout(() => this.typeWriter(), 500);
    } else {
      const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
      setTimeout(() => this.typeWriter(), this.isEnd ? speed * 2 : speed);
    }
  }
}
