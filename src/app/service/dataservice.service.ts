import { Injectable, signal } from '@angular/core';
import { SPRINT_KEY, STORY_ITEM_KEY, StoryItemDTO } from '../models/story';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  storyList = signal<StoryItemDTO[]>([]);
  sprintList = signal<StoryItemDTO[]>([]);


  initArray():void{
    console.log(JSON.parse(localStorage.getItem(STORY_ITEM_KEY)||'[]'))
    this.storyList.set(JSON.parse(localStorage.getItem(STORY_ITEM_KEY)||'[]'))
    this.sprintList.set(JSON.parse(localStorage.getItem(SPRINT_KEY)||'[]'))
  }

  getSprint():StoryItemDTO[]{
    return this.sprintList()
  }

  getStories():StoryItemDTO[]{
    return this.storyList()
  }


  clearStories() {
    this.storyList.set([])
    this.sprintList.set([])
    localStorage.removeItem(STORY_ITEM_KEY)
    localStorage.removeItem(SPRINT_KEY)
  }

  clearSprints(){
    this.sprintList.set([])
    localStorage.removeItem(SPRINT_KEY)
  }

  addStoryItem(item:StoryItemDTO):void{
    this.storyList.update(values => {
      return [...values, {...item,id:this.uuidv4(),updatedOn:new Date(),addedOn:new Date()}];
   });
    localStorage.setItem(STORY_ITEM_KEY,JSON.stringify(this.storyList()));
  }


  private uuidv4():string{
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
      .replace(/[xy]/g, function (c) {
          const r = Math.random() * 16 | 0, 
              v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
      });
  
  }

  generateSprint(targetNumber:number):void{
    const storyItems = this.autoGenerateSprints(this.storyList(),targetNumber);
    if(storyItems.length ){
      localStorage.setItem(SPRINT_KEY,JSON.stringify(storyItems[0]));
      this.sprintList.set(storyItems[0])
    }
    
  }

  knapsack(userStories:StoryItemDTO[], maxPoints:number):StoryItemDTO[] {
    const n = userStories.length;
    const dp = Array.from({ length: n + 1 }, () => Array(maxPoints + 1).fill(0));
    const keep = Array.from({ length: n + 1 }, () => Array(maxPoints + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= maxPoints; w++) {
            if (userStories[i - 1].point <= w) {
                if (userStories[i - 1].point + dp[i - 1][w - userStories[i - 1].point] > dp[i - 1][w]) {
                    dp[i][w] = userStories[i - 1].point + dp[i - 1][w - userStories[i - 1].point];
                    keep[i][w] = 1;
                } else {
                    dp[i][w] = dp[i - 1][w];
                }
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    let w = maxPoints;
    const selectedStories = [];
    for (let i = n; i > 0; i--) {
        if (keep[i][w] === 1) {
            selectedStories.push(userStories[i - 1]);
            w -= userStories[i - 1].point;
        }
    }

    return selectedStories;
}

 autoGenerateSprints(userStories:StoryItemDTO[], targetSprintPoints:number):StoryItemDTO[][] {
  const sprints = [];
  console.log(userStories)
  while (userStories.length > 0) {
      const selectedStories = this.knapsack(userStories, targetSprintPoints);

      sprints.push(selectedStories);

      // Remove selected stories from the original list
      userStories = userStories.filter(story => !selectedStories.includes(story));
  }

  console.log("Generated Sprints:", sprints);
  return sprints;
}



}
