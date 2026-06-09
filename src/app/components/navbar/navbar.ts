import { Component, signal, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit, OnDestroy {
  activeSection = signal('home');
  isMenuOpen = signal(false);
  private observer: IntersectionObserver | null = null;
  private isClickScrolling = false;
  private clickTimeout: any = null;

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  navigateTo(section: string) {
    this.setActive(section);
    this.isMenuOpen.set(false);
  }

  setActive(section: string) {
    this.activeSection.set(section);
    this.isClickScrolling = true;
    
    if (this.clickTimeout) {
      clearTimeout(this.clickTimeout);
    }

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // Temporarily pause scroll spy updates during click smooth-scroll to prevent jittering
    this.clickTimeout = setTimeout(() => {
      this.isClickScrolling = false;
    }, 850);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isClickScrolling) return;

    if (typeof window !== 'undefined') {
      const isAtTop = window.scrollY === 0;
      const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 50);

      if (isAtTop) {
        this.activeSection.set('home');
      } else if (isAtBottom) {
        this.activeSection.set('contact');
      }
    }
  }

  ngAfterViewInit() {
    // SSR environment check: only run in browser
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const options = {
        root: null, // viewport
        rootMargin: '-35% 0px -50% 0px', // trigger when section is in the center view
        threshold: 0
      };

      this.observer = new IntersectionObserver((entries) => {
        if (this.isClickScrolling) return;

        const isAtTop = window.scrollY === 0;
        const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 50);

        if (isAtTop || isAtBottom) return;

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      }, options);

      // List of section IDs to observe
      const sections = ['home', 'projects', 'skills', 'about', 'contact'];
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          this.observer?.observe(el);
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.clickTimeout) {
      clearTimeout(this.clickTimeout);
    }
  }
}
