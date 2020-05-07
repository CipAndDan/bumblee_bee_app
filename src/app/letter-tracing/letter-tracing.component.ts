import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-tracing',
  templateUrl: './letter-tracing.component.html',
  styleUrls: ['./letter-tracing.component.scss']
})
export class LetterTracingComponent implements OnInit {
  currentLetter: number = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  next() {
    if (this.currentLetter < 4) {
      this.currentLetter += 1;
    }
  }

  back() {
    if (this.currentLetter > 1) {
      this.currentLetter -= 1;
    }
  }
}
