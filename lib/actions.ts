'use server' 
import { connectToDb } from "./utils";
import { Exercise, ExerciseTemplate } from "./models";
import { ExerciseTemplateType } from "./types";


export const addExerciseTemplate = async (newExercise: ExerciseTemplateType) => {
    'use server'
    
    try {
        connectToDb();
        const newExerciseTemplate = new ExerciseTemplate({
            ...newExercise
        })
        await newExerciseTemplate.save()
        
        return {success: true}
    } catch (error) {
        // return {error: error}
        console.log(error)
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addExercise = async (data: any) => {
    'use server'
    console.log(data, " data in add exercise")
    try {
        connectToDb();
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