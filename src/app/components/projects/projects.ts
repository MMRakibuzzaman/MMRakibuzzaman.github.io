import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  category: string;
  title: string;
  technologies: string[];
  about: string;
  url: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      category: 'ASP.NET Core MVC',
      title: 'Cricket Tournament Manager',
      technologies: ['ASP.NET Core', 'Generic Repository', 'Dependency Injection', 'SQL Server', 'AJAX', 'HTML/CSS'],
      about: 'Full-stack application utilizing Generic Repository and Dependency Injection patterns. The system features a dynamic, seamless AJAX-driven UI designed for real-time squad management, roster updates, and executing complex tournament scheduling logic without full page reloads.',
      url: 'https://github.com/MMRakibuzzaman/Cricket-Tournament-Manager'
    },
    {
      category: '.NET API & ONNX Runtime',
      title: 'ONNX Image Upscaler',
      technologies: ['.NET Core API', 'Angular', 'ONNX Runtime', 'SkiaSharp', 'REST API', 'Image Processing'],
      about: 'A proof-of-concept image upscaling service with a .NET backend and Angular frontend. The backend leverages ONNX Runtime and SkiaSharp to execute super-resolution models (Grayscale Sub-Pixel and Color RGB) via a REST API to dynamically process and upscale uploaded images.',
      url: 'https://github.com/MMRakibuzzaman/ImageUpscaler_CoreApi_Angular'
    },
    {
      category: 'ASP.NET Web API 2',
      title: 'Cricket Player REST API',
      technologies: ['ASP.NET Web API 2', 'Entity Framework 6', 'View Models', 'JSON'],
      about: 'A backend service dedicated to demonstrating advanced CRUD operations. Optimized for JSON, this project securely handles complex file uploads (like player imagery) via multipart/form-data. It extensively utilizes ViewModels to decouple internal data models from the external API surface.',
      url: 'https://github.com/MMRakibuzzaman/MVC5-API'
    },
    {
      category: 'ASP.NET MVC 5',
      title: 'Sports Jersey Inventory System',
      technologies: ['ASP.NET MVC 5', 'Entity Framework 6 (Code First)', 'SQL Server', 'Async Programming'],
      about: 'A robust inventory management system implementing EF6 Code-First approach. Handles complex relational data models and asynchronous programming. Utilizes strict SQL transactions and stored procedures to ensure high-reliability data integrity across the inventory lifecycle.',
      url: 'https://github.com/MMRakibuzzaman/MVC5_CodeFirst'
    },
    {
      category: 'Node.js Backend',
      title: 'Sports Data API',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
      about: 'A NoSQL backend service built with Express and MongoDB. Demonstrates effective document database schema modeling utilizing Mongoose and provides a structured, scalable RESTful API design tailored for modern frontend application consumption.',
      url: 'https://github.com/MMRakibuzzaman/NodeJS_MongoDB'
    },
    {
      category: 'Desktop & Architecture Development',
      title: 'Player Management & Clean Architecture Apps',
      technologies: ['C# WinForms', 'ADO.NET', 'Repository Pattern', 'Factory Pattern'],
      about: 'Two consolidated projects demonstrating core C# engineering. Player Management System highlights low-level DB interactions, Master-Detail relationships, and manual transaction management. Repository Pattern App demonstrates deep architectural decoupling of data access from business logic for enhanced unit testing.',
      url: 'https://github.com/MMRakibuzzaman/ADO.NET_WinForms'
    }
  ];
}
