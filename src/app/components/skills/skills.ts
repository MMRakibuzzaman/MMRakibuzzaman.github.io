import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  categories: SkillCategory[] = [
    {
      title: 'Languages',
      skills: ['C#', 'SQL', 'JavaScript / TypeScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Technologies',
      skills: ['ASP.NET Core', 'ASP.NET MVC 5', 'Web API', 'Node.js']
    },
    {
      title: 'Frontend',
      skills: ['Angular', 'React', 'Bootstrap']
    },
    {
      title: 'Database',
      skills: ['Microsoft SQL Server', 'MongoDB']
    },
    {
      title: 'Architecture',
      skills: ['Clean Architecture', 'Repository Pattern', 'Dependency Injection', 'Factory Pattern']
    },
    {
      title: 'Tools & Others',
      skills: ['Entity Framework (EF Core & EF6)', 'Git', 'GitHub', 'AJAX', 'JSON','Linux']
    }
  ];
}
