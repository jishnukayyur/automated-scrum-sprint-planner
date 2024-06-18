
export interface StoryItemDTO{
    id:string;
    title:string;
    point:number;
    addedOn:Date;
    updatedOn:Date;
    sprintId:string;
}

export interface SprintItemDTO {
    id:string;
    targetPoint:number;
    addedOn:string;
    updatedOn:string;
}

export const STORY_ITEM_KEY = 'stories';
export const SPRINT_KEY = 'sprint';