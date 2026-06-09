import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name = 'M. M. RAKIBUZZAMAN';
  role = 'Full Stack Developer (.NET)';
  phones = ['01888346061'];
  email = 'remon.narail@gmail.com';
  github = 'https://github.com/MMRakibuzzaman';
  linkedin = 'https://www.linkedin.com/in/m-m-rakibuzzaman-remon-6a9400349';
  address = 'West Nakhalpara, Farmgate, Dhaka.';
}
