import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SprintItemDTO, StoryItemDTO } from 'src/app/models/story';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-sprint-calculator-form',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './sprint-calculator-form.component.html',
  styleUrls: ['./sprint-calculator-form.component.css']
})
export class SprintCalculatorFormComponent {

  sprintPoints: number = 0;

  storyForm!: FormGroup<
    Record<
      keyof Omit<SprintItemDTO, 'addedOn' | 'updatedOn'>,
      FormControl
    >
  >;

    constructor(private _dataserv: DataserviceService) {
      this.buildForm();
    }

    private buildForm(): void {
      this.storyForm = new FormGroup({
        id: new FormControl(''),
        targetPoint: new FormControl('', [Validators.required, Validators.min(1)]),
      });
    }

    autoSelectStories(){
      
      this._dataserv.generateSprint(this.storyForm.value.targetPoint);
    }

    clearStories(){
      this._dataserv.clearStories()
    }

    clearSelectedStories(){
      this._dataserv.clearSprints()
    }
}
