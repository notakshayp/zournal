import { Component } from '@angular/core';
import { EmojispansComponent } from '../emojispans/emojispans.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [EmojispansComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

  emojiArr:{emojiVal:string, classStyle:string}[]=this.generateEmojiDetailsList();



  

  generateEmojiDetailsList():any{
    let tempEmojiArr=[];
    let emojiLibrary:string[] = [
      '😂', '❤️', '🤣', '👍', '😭', '🙏', '😘', '😍', '😊', '🎉',
      '😁', '💕', '🥺', '😅', '🔥', '☺️', '🤦‍♂️', '♥️', '🤷‍♀️', '🙄',
      '😆', '🤗', '😉', '🎂', '🤔', '👏', '😊', '😳', '🎈', '😎'
    ];
    for(let itr=0;itr<21;itr++){
      let randomIndex = Math.floor(Math.random() * emojiLibrary.length);
      tempEmojiArr.push(
        {
          "emojiVal":emojiLibrary[randomIndex],
          "classStyle":this.generateRandomEmojiStyle()
        }
        );
    }
    return tempEmojiArr;
  }

  generateRandomPositionVals():string{
    return ''+(Math.floor(Math.random() * 21)+1);
  }

  generateTextSize():string{
    let sizeNum=Math.floor(Math.random() * 9);
    if(sizeNum==0){
      return 'text-xl';
    }
    else{
      return 'text-'+sizeNum+'xl';
    }
  }
  generateRandomEmojiStyle():string{
    let textSizeClass=this.generateTextSize();
    return (textSizeClass+' top-'+this.generateRandomPositionVals()+'/'+this.generateRandomPositionVals()+' left-'+this.generateRandomPositionVals()+'/'+this.generateRandomPositionVals()+' right'+this.generateRandomPositionVals()+'/'+this.generateRandomPositionVals()+' bottom-'+this.generateRandomPositionVals()+'/'+this.generateRandomPositionVals()+'');
   
  }
}
