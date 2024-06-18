import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { SprintItemDTO, StoryItemDTO } from 'src/app/models/story';
import { StoryItemComponent } from 'src/app/shared/components/story-item/story-item.component';

@Component({
  selector: 'app-stories-and-points',
  standalone: true,
  imports: [CommonModule,StoryItemComponent],
  templateUrl: './stories-and-points.component.html',
  styleUrls: ['./stories-and-points.component.css']
})
export class StoriesAndPointsComponent {
  storyList: StoryItemDTO[] = [];

  constructor(private _dataServ: DataserviceService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.storyList = this._dataServ.getStories();
  }
}
