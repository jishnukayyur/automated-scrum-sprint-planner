import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { StoryItemDTO } from 'src/app/models/story';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { StoryItemComponent } from 'src/app/shared/components/story-item/story-item.component';

@Component({
  selector: 'app-auto-selected-sprint',
  standalone: true,
  imports: [CommonModule, StoryItemComponent],
  templateUrl: './auto-selected-sprint.component.html',
  styleUrls: ['./auto-selected-sprint.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoSelectedSprintComponent implements OnInit {
  autoSelectedSprintList: StoryItemDTO[] = [];

  constructor(private _dataServ: DataserviceService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.autoSelectedSprintList = this._dataServ.getSprint();
  }
}
