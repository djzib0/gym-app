export type ExerciseTemplateType = {
    _id?: string;
    userId: string;
    name: string;
    description: string;
    bodyPart: BodyParts | "";
    recordWeight?: number;
    initialWeight?: number;
    imgUrl?: string;
    isFavourite?: boolean;
    templateNote?: string;
}

export type ExerciseType = {
    _id?: string;
    excerciseTemplateId: string;
    name: string;
    description: string;
    sets?: SetType[];
    note?: string[];
    isFinished: boolean;
}

export type SetType =  {
    repsCount: number;
    weight: number;
}

export type TrainingTemplateType = {
    _id?: string;
    userId: string;
    title: string;
    exerciseIds?: string[];
}

export type TrainingType = {
    _id?: string;
    userId: string;
    trainingTemplateId: string;
    title: string;
    exercises?: string[];
    trainingDate: Date;
    isFinished?: boolean;
}

export enum BodyParts {
    Arms = 'arms',
    Chest = 'chest',
    Back = 'back',
    Shoulders = 'shoulders',
    Legs = 'legs',
    Other = 'other'
}