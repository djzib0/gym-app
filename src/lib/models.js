import mongoose from "mongoose";

const exerciseTemplateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 50,
        },
        description: {
            type: String,
            min: 3, 
            max: 300,
        },
        recordWeight: {
            type: Number,
            default: 0,
            min: 0,
        },
        initialWeight: {
            type: Number,
            default: 0,
            min: 0,
        },
        imgUrl: {
            type: String,
        },
        isFavourite: {
            type: Boolean,
            default: false
        },
        note: {
            type: String,
        }
    }
)

const exerciseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 50,
        },
        exerciseTempalteId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ExerciseTemplate"
        },
        description: {
            type: String,
            min: 3, 
            max: 300,
        },
        weight: {
            type: Number,
            default: 0,
            min: 0,
        },
        imgUrl: {
            type: String,
        },
        note: {
            type: String,
        }
    }
)

export const ExerciseTemplate = mongoose.models.ExerciseTemplate || mongoose.model("ExerciseTemplate", exerciseTemplateSchema);
export const Exercise = mongoose.models.Exercise || mongoose.model("Exercise", exerciseSchema);