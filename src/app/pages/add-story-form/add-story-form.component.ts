import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryFormComponent } from './components/story-form/story-form.component';

@Component({
  selector: 'app-add-story-form',
  standalone: true,
  imports: [CommonModule,StoryFormComponent],
  templateUrl: './add-story-form.component.html',
  styleUrls: ['./add-story-form.component.css']
})
export class AddStoryFormComponent {

}
