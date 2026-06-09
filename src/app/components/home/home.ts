import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  email = 'remon.narail@gmail.com';
  isCopied = signal(false);
  copyTooltip = signal('Copy email');

  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.isCopied.set(true);
      this.copyTooltip.set('Copied!');
      setTimeout(() => {
        this.isCopied.set(false);
        this.copyTooltip.set('Copy email');
      }, 2000);
    });
  }

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
