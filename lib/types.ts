export type ExerciseTemplateType = {
    _id?: string;
    userId: string;
    name: string;
    description: string;
    bodyPart: BodyParts | "";
    recordWeight?: number;
    initialWeight?: number;
    imgUrl: string;
    isFavourite?: boolean;
    templateNote: string;
}

export type ExerciseType = {
    _id?: string;
    excerciseTemplateId: string;
    description: string;
    setsCount: number;
    reps: RepType[];
    note: string[];
    isFinished: boolean;
}

export type RepType =  {
    repsCount: number;
    setWeight: number;
    liftedWeight: number;
}

export type TrainingTemplateType = {
    _id?: string;
    userId: string;
    title: string;
    exerciseIds?: string[];
}

export enum BodyParts {
    Arms = 'arms',
    Chest = 'chest',
    Back = 'back',
    Shoulders = 'shoulders',
    Legs = 'legs',
    Other = 'other'
}