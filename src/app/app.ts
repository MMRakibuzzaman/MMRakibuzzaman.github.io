import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Skills } from './components/skills/skills';
import { AboutMe } from './components/about-me/about-me';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, Contact, Skills, AboutMe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
