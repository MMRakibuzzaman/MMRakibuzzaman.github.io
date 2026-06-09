import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  personalInfo = [
    { label: 'Name', value: 'M. M. Rakibuzzaman' },
    { label: "Father's Name", value: 'MD Moniruzzaman' },
    { label: "Mother's Name", value: 'Razia Zaman' },
    { label: 'Date of Birth', value: '11/10/1999' },
    { label: 'Nationality', value: 'Bangladeshi' },
    { label: 'Religion', value: 'Islam' },
    { label: 'Marital Status', value: 'Single' },
    { label: 'Languages', value: 'English (Fluent), Bengali (Native)' },
    { label: 'Permanent Address', value: '252, Aladatpur, Narail' }
  ];
}
