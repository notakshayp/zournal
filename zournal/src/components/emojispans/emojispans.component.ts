import { Component,OnInit,Renderer2 } from '@angular/core';
import { CommonModule,NgFor} from '@angular/common';

@Component({
  selector: 'emojispans',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './emojispans.component.html',
  styleUrl: './emojispans.component.css'
})
export class EmojispansComponent implements OnInit{

  intervalId:any;
  ngOnInit(): void {
    this.intervalId  = setInterval(() => {
      this.emojiArr=this.generateEmojiDetailsList();
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }


  constructor(private renderer: Renderer2) {
  }

  emojiArr:{emojiVal:string, randomX:string, randomY:string, randomRotation:string,randomTextSize:string}[]=this.generateEmojiDetailsList();



  

  generateEmojiDetailsList():any{
    let tempEmojiArr=[];
    let emojiLibrary:string[] = ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🥹', '🙂', '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '☺️', '😚', '😙', '🥲', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🫢', '🤭', '🤫', '🤔', '🫡', '🤐', '🤨', '😐️', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '😮‍💨', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🫠', '🥵', '🥶', '😶‍🌫️', '🫥', '🥴', '🫨', '😵‍💫', '😵', '🤯', '🤠', '🥳', '🥸', '😎', '🤓', '🧐', '🫤', '😕', '😟', '🙁', '☹️', '😮', '😯', '😲', '😳', '🫣', '🥺', '😦', '😧', '😨', '😰', '😥', '😢', '😭', '😱', '😖', '😣', '😞', '😓', '😩', '😫', '🥱', '😤', '😡', '😠', '🤬', '😈', '👿', '💀', '☠️', '💩', '🤡', '👹', '👺', '👻', '👽️', '👾', '🤖', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🙈', '🙉', '🙊', '👋', '🤚', '🖐️', '✋', '🖖', '👌', '🤌', '🤏', '✌️', '🤞', '🫰', '🤟', '🤘', '🤙', '👈️', '👉️', '👆️', '🖕', '👇️', '☝️', '🫵', '👍️', '👎️', '✊', '👊', '🤛', '🤜', '👏', '🙌', '👐', '🫶', '🤲', '🫳', '🫴', '🫱', '🫲', '🤝', '🫸', '🫷', '🙏', '✍️', '💅', '🤳', '💪', '🦾', '🦿', '🦵', '🦶', '👂️', '🦻', '👃', '🧠', '🫀', '🫁', '🦷', '🦴', '👀', '👁️', '👅', '👄', '🫦', '💋', '👶', '🧒', '👦', '👧', '🧑', '👨', '👩', '🧔', '🧔‍♀️', '🧔‍♂️', '🧑‍🦰', '👨‍🦰', '👩‍🦰', '🧑‍🦱', '👨‍🦱', '👩‍🦱', '🧑‍🦳'
    ];
    for(let itr=0;itr<80;itr++){
      let randomIndex = Math.floor(Math.random() * emojiLibrary.length);
      tempEmojiArr.push(
        {
          "emojiVal":emojiLibrary[randomIndex],
          "randomX":this.generateRandomXPositionVals(),
          "randomY":this.generateRandomYPositionVals(),
          "randomRotation":this.generateRandomRotationVals(),
          "randomTextSize":this.generateTextSize()
        }
        );
    }
    return tempEmojiArr;
  }

  generateRandomXPositionVals(): string {
    const windowWidth = window.innerWidth;
    const minX = 100;//38; // Minimum distance from the left border
    const maxX = windowWidth-100;//38; // Maximum distance from the right border

    return '' + (Math.floor(Math.random() * (maxX - minX)) + minX);
}

 generateRandomYPositionVals(): string {
    const windowHeight = window.innerHeight;
    const minY = 100;//38; // Minimum distance from the top border
    const maxY = windowHeight-100;//38; // Maximum distance from the bottom border

    return '' + (Math.floor(Math.random() * (maxY - minY)) + minY);
}
  generateRandomRotationVals():string{
    let roationValue=(Math.floor(Math.random() *45 )+1);
    if(roationValue%2){
      return '0';
    }
    else{
      return ''+roationValue;
    }
    
  }


  generateTextSize():string{
    let sizeNum=Math.floor(Math.random() *8);
    while(sizeNum>7 && sizeNum<9){
      sizeNum=Math.floor(Math.random() * 8);
    }
      return 'text-'+sizeNum+'xl';
    
  }
}
