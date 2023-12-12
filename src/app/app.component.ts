import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SubjectModule } from './components/subject/subject.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SubjectModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-project-front';
}
