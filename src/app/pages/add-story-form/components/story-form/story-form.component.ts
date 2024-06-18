import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { StoryItemDTO } from 'src/app/models/story';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-story-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css'],
})
export class StoryFormComponent {
  storyName: string = '';
  storyPoints: number | null = null;

  storyForm!: FormGroup<
    Record<
      keyof Omit<StoryItemDTO, 'addedOn' | 'updatedOn' | 'sprintId'>,
      FormControl
    >
  >;

  constructor(private _dataserv: DataserviceService) {
    this.buildForm();
  }

  private buildForm(): void {
    this.storyForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      point: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }

  addStory() {
    this._dataserv.addStoryItem(this.storyForm.value as StoryItemDTO);
  }
}
