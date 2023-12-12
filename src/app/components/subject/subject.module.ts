import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectService } from '../../services/subject.service';
import { HttpClientModule } from '@angular/common/http';
import { SubjectComponent } from './subject.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SubjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    SubjectService
  ]
})
export class SubjectModule { }
