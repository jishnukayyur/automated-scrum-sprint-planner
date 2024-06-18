import { Component, Input } from '@angular/core';
import { StoryItemDTO } from 'src/app/models/story';

@Component({
  selector: 'app-story-item',
  standalone:true,
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.css']
})
export class StoryItemComponent {
  @Input() storyItem!:StoryItemDTO;
}
