import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../interfaces/subject';

@Component({
  selector: 'app-subject',
  standalone: false,
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent implements OnInit {
  public subjects: Subject[] = [];

  constructor(private subjectService: SubjectService) { }
  ngOnInit(): void {
    console.log(this.subjectService.listAll());
  }

  listAll() {
    this.subjectService.listAll().subscribe(
      result => {
        this.subjects = result;
        console.log(this.subjects)
        console.log(this.subjects.length)
      }
    )
  }

}
