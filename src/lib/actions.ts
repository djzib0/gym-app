import { connectToDb } from "./utils";
import { ExerciseTemplate } from "./models";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addExerciseTemplate = async () => {
    'use server'
    
    try {
        connectToDb();
        const newExerciseTemplate = new ExerciseTemplate({
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addExercise = async () => {
    'use server'
    
    try {
        connectToDb();
        const newExerciseTemplate = new ExerciseTemplate({
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