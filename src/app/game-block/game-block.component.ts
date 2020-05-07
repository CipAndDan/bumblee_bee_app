import { Component } from '@angular/core';

@Component({
  selector: 'game-block',
  templateUrl: './game-block.component.html',
  styleUrls: ['./game-block.component.scss']
})
export class GameBlockComponent {
  letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  currentLetter: string = this.letters[0];

  changeCurrentLetter(letter: string) {
    this.currentLetter = letter;
  }

  previous() {
    let currLetPosition = this.letters.indexOf(this.currentLetter);
    if (currLetPosition === this.letters.indexOf('A')) {
      currLetPosition = this.letters.length;
    }
    currLetPosition--;
    this.currentLetter = this.letters[currLetPosition];
    this.playAudio();
  }

  next() {
    let currLetPosition = this.letters.indexOf(this.currentLetter);
    if (currLetPosition === this.letters.indexOf('Z')) {
      currLetPosition = 0;
    } else {
      currLetPosition++;
    }
    this.currentLetter = this.letters[currLetPosition];
    this.playAudio();
  }

  playAudio() {
    let audio = new Audio('../../assets/audio/' + this.currentLetter + '.mp3');
    audio.load();
    audio.play();
  }
}
