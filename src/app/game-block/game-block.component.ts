import { Component } from '@angular/core';

@Component({
  selector: 'game-block',
  templateUrl: './game-block.component.html',
  styleUrls: ['./game-block.component.scss']
})
export class GameBlockComponent {
  letters:string[] = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L", "M", 
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  curentLetter:string = this.letters[0];

  changeCurrentLetter(letter:string) {
    this.curentLetter = letter;
  }

  previous() {
    let currLetPosition = this.letters.indexOf(this.curentLetter);
    if (currLetPosition === this.letters.indexOf("A")) {
      currLetPosition = this.letters.length;
    }
    currLetPosition--;
    this.curentLetter = this.letters[currLetPosition];
  }

  next() {
    let currLetPosition = this.letters.indexOf(this.curentLetter);
    if (currLetPosition === this.letters.indexOf("Z")) {
      currLetPosition = 0;
    } else {
      currLetPosition++;
    }
    this.curentLetter = this.letters[currLetPosition];
  }

  playAudio() {
    let audio = new Audio("../../assets/audio/A.mp3");
    // when the button is press it will play the sound of the letter which is on the screen  {

    // }
    audio.load();
    audio.play();
  }
}
