'use server' 
import { connectToDb } from "./utils";
import { Exercise, ExerciseTemplate, TrainingTemplate } from "./models";
import { BodyParts, ExerciseTemplateType, ExerciseType, TrainingTemplateType } from "./types";
import { revalidatePath } from "next/cache";
import mongoose from "mongoose";


export const addExerciseTemplate = async (newExercise: ExerciseTemplateType) => {
    'use server'
    
    console.log(newExercise, " new exercise data")
    try {
        await connectToDb();
        const newExerciseTemplate = new ExerciseTemplate({
            ...newExercise
            // userId: "123",
            // name: "Pull ups",
            // description: "Exercise description",
            // bodyPart: BodyParts.Chest,
            // recordWeight: 0,
            // initialWeight: 0,
            // imgUrl: "",
            // isFavourite: false,
            // templateNote: "",
        })
        
        await newExerciseTemplate.save()
        // check for duplicated name by searching for exercise template
        // with the same name as passed by user in form
        const duplicatedExerciseTemplateName = await ExerciseTemplate.find({name: newExercise.name})
        if (duplicatedExerciseTemplateName) {
            return {error: "Template with a given name already exist. Try a different name"}
        }

        // await newExerciseTemplate.save()

        
        return {success: true}
    } catch (error) {
        return error
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addExercise = async (data: ExerciseType) => {
    'use server'
    console.log(data, " data in add exercise")
    try {
        await connectToDb();
        const newExerciseTemplate = new Exercise({
            ...data
        })
        
        
        await newExerciseTemplate.save()
        
        return {success: true}
    } catch (error) {
        return {error: error}
    }
}

export const getAllExercises = async () => {
    'use server'

    try {
        await connectToDb();

        const allExercises: ExerciseType[] = await Exercise.find();

        if (!allExercises) {
            throw new Error("Couldn't fetch exercises data.")
        }

        return allExercises;

    } catch (error) {
        console.log(error);
    }
}

export const addExerciseToTrainingTemplate = async (trainingTemplateId: string, exerciseIds: string[]) => {
    'use server'

    try {
        await connectToDb();

        await TrainingTemplate.updateOne(
            {_id: trainingTemplateId},
            {
                $addToSet: {
                    exerciseIds: {
                        $each: exerciseIds.map(id => new mongoose.Types.ObjectId(id))
                    }
                }
            }
        );

    } catch (error) {
        console.log("Failed to add exercises:", error)
    }
}

export const addTrainingTemplate = async (data: TrainingTemplateType) => {
    'use server'

    try {
        await connectToDb();

        const newTrainingTemplate = new TrainingTemplate({
            ...data
        })

        await newTrainingTemplate.save()

        revalidatePath("/trainings")

        return {success: true}
    } catch (error) {
        return {error: error}
    }
}

export const getAllTrainingTemplates = async () => {
    'use server'

    try {
        await connectToDb();

        const trainings: TrainingTemplateType[] = await TrainingTemplate.find();

        if (!trainings) {
            throw new Error("Couldn't fetch trainings data.")
        }

        return trainings;
    } catch (error) {
        console.log(error)
    }
}

export const getTrainingTemplate = async (trainingTemplateId: string) => {
    'use server'

    try {
        await connectToDb();

        const trainingTemplate = await TrainingTemplate.findById(trainingTemplateId)

        if (!trainingTemplate) {
            throw new Error("Couldn't fetch training template data.")
        }

        return trainingTemplate;

    } catch (error) {
        console.log(error)
    }
} 