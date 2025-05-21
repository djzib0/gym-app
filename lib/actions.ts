'use server' 
import { connectToDb } from "./utils";
import { Exercise, ExerciseTemplate, Training, TrainingTemplate } from "./models";
import { ExerciseTemplateType, ExerciseType, SetType, TrainingTemplateType, TrainingType } from "./types";
import { revalidatePath } from "next/cache";
import mongoose from "mongoose";


export const addExerciseTemplate = async (newExercise: ExerciseTemplateType) => {
    'use server'
    
    console.log(newExercise, " new exercise data")
    try {
        await connectToDb();
        const newExerciseTemplate = new ExerciseTemplate({
            ...newExercise
        })
        
        // check for duplicated name by searching for exercise template
        // with the same name as passed by user in form
        const duplicatedExerciseTemplateName = await ExerciseTemplate.find({name: newExercise.name}).exec();

        if (duplicatedExerciseTemplateName.length > 0) {
            return { error: "Template with a given name already exists. Try a different name." };
        }
        
        await newExerciseTemplate.save()

        
        return {success: true}
    } catch (error) {
        return error
    }
}

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

        const allExercises: ExerciseType[] = await Exercise.find().exec();;

        return allExercises;

    } catch (error) {
        console.log(error);
    }
}

export const getAllExerciseTemplates = async (userId: string) => {
    'use server'

    try {
        await connectToDb();

        const allExercises: ExerciseTemplateType[] = await ExerciseTemplate.find({userId: userId}).exec();

        return JSON.parse(JSON.stringify(allExercises));

    } catch (error) {
        console.log(error);
    }
}

export const getExerciseTemplatesById = async (exerciseIds: string[] | undefined) => {
    'use server'

    try { 
        await connectToDb();

        if (exerciseIds) {
            const exercises: ExerciseTemplateType[] = await ExerciseTemplate.find({_id: { $in: exerciseIds}}).exec();

            return exercises;

        }
    } catch (error) {
        console.log(error)
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

        revalidatePath("/trainings")

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

export const getAllTrainingTemplatesByUserId = async (userId: string) => {
    'use server'

    try {
        await connectToDb();

        const trainings: TrainingTemplateType[] = await TrainingTemplate.find({userId: userId}).exec();

        if (!trainings) {
            throw new Error("Couldn't fetch trainings data.")
        }

        return JSON.parse(JSON.stringify(trainings));
    } catch (error) {
        console.log(error)
    }
}

export const getTrainingTemplate = async (trainingTemplateId: string) => {
    'use server'

    try {
        await connectToDb();

        const trainingTemplate = await TrainingTemplate.findById(trainingTemplateId).exec();

        if (!trainingTemplate) {
            throw new Error("Couldn't fetch training template data.")
        }

        return trainingTemplate;

    } catch (error) {
        console.log(error)
    }
};

export const getAllTrainingsByUserId = async (userId: string) => {
    'use server'

    try {
        await connectToDb();

        const allTrainings: TrainingType[] = await Training.find({userId: userId}).exec();

        // below code is not necessary, find will always return an array. 
        // if nothing is found an empty array will be returned

        // if (!allTrainings) {
        //     throw new Error("Couldn't fetch training data.");
        // }

        return allTrainings;


    } catch (error) {
        console.log(error)
    }
};

// TODO: to be modified, show trainings for the selected week
export const getAllTrainingsByDate = async  (selectedMonday: Date) => {
    'use server'

    console.log(selectedMonday, "just checking if it works")

    try {
        await connectToDb();

        const sunday = new Date(selectedMonday);
        sunday.setDate(selectedMonday.getDate() + 6);



        const trainings = await Training.find({
            trainingDate: {
                $gte: selectedMonday,
                $lte: sunday,
            }
        });

        return JSON.parse(JSON.stringify(trainings));

        
    } catch (error) {
        console.log(error)
        return {error: error}
    }
}

export const addTraining = async (trainingTemplateId: string, trainingDate: Date) => {
    'use server'

    console.log(trainingTemplateId, trainingDate)

    try {
        
        await connectToDb();

        const loadedTrainingTemplate = await TrainingTemplate.findById(trainingTemplateId);
        
        if (!loadedTrainingTemplate) {
            throw new Error("Couldn't fetch training template data.")
        }

        const exerciseTemplates = await ExerciseTemplate.find({
            _id: { $in: loadedTrainingTemplate.exerciseIds}
        })

        // creating exercises and adding them to data base
        const exercises = await Exercise.insertMany(
            exerciseTemplates.map(template => {
                return {
                    exerciseTemplateId: template._id,
                    name: template.name,
                    description: template.description,
                    note: "",
                }
            })
        );

        // create an array of exercises ids
        const exerciseIds = exercises.map(exercise => exercise._id)

        const trainingData: TrainingType = {
            userId: loadedTrainingTemplate.userId,
            trainingTemplateId: loadedTrainingTemplate._id,
            title: loadedTrainingTemplate.title,
            exercises: exerciseIds,
            trainingDate: trainingDate,
        }

        const newTraining = new Training({
            ...trainingData
        })

        await newTraining.save();
        return {success: true}
    } catch (error) {
        return {error: error}
    }
};

export const getExercisesByTrainingId = async (trainingId: string) => {
    'use server'

    try {
        await connectToDb();

        const trainingExercises = await Training.findById(trainingId).populate("exercises").exec();

        if (!trainingExercises) {
            throw new Error("Couldn't fetch training data.");
        };

        return trainingExercises


    } catch (error) {
        return {error: error}
    }
}

export const addExerciseToTraining = async (trainingId: string, exerciseTemplateIds: string[]) => {
    'use server'

    console.log("Adding to training", trainingId)
    console.log("array of exerciseTemplates", exerciseTemplateIds)

    try {
        await connectToDb();

        const templates = await ExerciseTemplate.find({_id: { $in: exerciseTemplateIds}});

        // creating exercises and adding them to data base
        const createdExercises = await Exercise.insertMany(
            templates.map(template => {
                return {
                    exerciseTemplateId: template._id,
                    name: template.name,
                    description: template.description,
                    note: "",
                }
            })
        );

        // create an array of exercises ids
        const exerciseIds = createdExercises.map(exercise => exercise._id)

        // add newly created exercise ids to the training
        const updatedTraining = await Training.findByIdAndUpdate(
            trainingId,
            {$push: {exercises: {$each: exerciseIds}}},
            {new: true}
        )

        if (!updatedTraining) {
            throw new Error("Couldn't fetch training template data.")
        }

        revalidatePath(`/trainings/${trainingId}`)

        return {success: true}
    } catch (error) {
        return {error: error}
    }
}

export const addSetToExercise = async (exerciseId: string, setData: SetType) => {
    'use server'
    
    try {
        await connectToDb();

        if (!exerciseId) {
            throw new Error("Exercise id is required")
        }

        if (!setData._id || setData._id === "") {
            // ADD MODE
            // when set id is not passed, add a new set to
            // the exercise
            const newSet = {
                repsCount: Number(setData.repsCount),
                weight: Number(setData.weight),
            }

            const result = await Exercise.findByIdAndUpdate(
                exerciseId,
                { $push: {sets: newSet}},
                { new: true }
            );

            if (!result) {
                throw new Error("exercise not found")
            }
        } else {
            // UPDATE MODE
            const result = await Exercise.updateOne(
                {_id: exerciseId, 'sets._id': setData._id},
                {
                    $set: {
                        'sests.$.repsCount': Number(setData.repsCount),
                        'sets.$.weight': Number(setData.weight)
                    }
                }
            )

            if (result.modifiedCount === 0) {
                throw new Error("Set not found!")
            } 
        }

        revalidatePath(`trainings/`)

        return {success: true}

    } catch (error) {
        return {error: error}
    }
}