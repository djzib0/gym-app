export type ExerciseTemplateType = {
    _id: string;
    name: string;
    description: string;
    recordWeight: number;
    initialWeight: number;
    imgUrl: string;
    isFavourite: boolean;
    templateNote: string;
    bodyPart: BodyParts;
}

export type ExerciseType = {
    _id: string;
    excerciseTemplateId: string;
    description: string;
    setsCount: number;
    repsCount: number[];
    finishedRepsCount: number[];
    repsWeight: number[];
    note: string[];
}

export type TrainingTemplateType = {
    _id: string;
    userId: string;
    title: string;
    exerciseIds: string[];
}

enum BodyParts {
    Arms = 'arms',
    Chest = 'chest',
    Back = 'back',
    Shoulders = 'shoulders',
    Legs = 'legs',
    Other = 'other'
}