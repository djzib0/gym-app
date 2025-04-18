'use server' 
import { connectToDb } from "./utils";
import { Exercise, ExerciseTemplate, TrainingTemplate } from "./models";
import { ExerciseTemplateType, TrainingTemplateType } from "./types";


export const addExerciseTemplate = async (newExercise: ExerciseTemplateType) => {
    'use server'
    
    try {
        await connectToDb();
        const newExerciseTemplate = new ExerciseTemplate({
            ...newExercise
        })

        // check for duplicated name by searching for exercise template
        // with the same name as passed by user in form
        const duplicatedExerciseTemplateName = await ExerciseTemplate.find({name: newExercise.name})
        if (duplicatedExerciseTemplateName) {
            return {error: "Template with a given name already exist. Try a different name"}
        }

        await newExerciseTemplate.save()

        
        return {success: true}
    } catch (error) {
        return error
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addExercise = async (data: any) => {
    'use server'
    console.log(data, " data in add exercise")
    try {
        await connectToDb();
        const newExerciseTemplate = new Exercise({
            name: "Pull ups",
            userId: "123",
            imgUrl: "",
        })
        
        
        await newExerciseTemplate.save()
        
        return {success: true}
    } catch (error) {
        return {error: error}
    }
}

export const addTrainignTemplate = async (data: TrainingTemplateType) => {
    'use server'

    try {
        await connectToDb();

        const newTrainingTemplate = new TrainingTemplate({
            ...data
        })

        await newTrainingTemplate.save()

        return {success: true}
    } catch (error) {
        return {error: error}
    }
}