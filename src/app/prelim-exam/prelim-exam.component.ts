import { Component, signal } from "@angular/core";

@Component({
  selector: 'prelim-exam',
  templateUrl: './prelim-exam.component.html',
  styleUrls: ['./prelim-exam.component.scss']
  })
export class prelimExam {
  public title = signal('prelim exam');

  }
