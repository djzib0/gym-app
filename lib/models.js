import mongoose from "mongoose";
const Schema = mongoose.Schema;

const exerciseTemplateSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
            min: 3,
            max: 50,
        },
        description: {
            type: String,
            min: 3, 
            max: 300,
        },
        bodyPart: {
            type: String,
            required: true,
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
        templateNote: {
            type: String,
        },
    },
    {timestamps: true}
)

const setSchema = new mongoose.Schema(
    {
        trainingId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Training"
        },
        repsCount: {
            type: Number,
        },
        setWeight: {
            type: Number,
        },
        liftedWeight: {
            type: Number
        },
    },
    {_id: false}
)

const exerciseSchema = new mongoose.Schema(
    {
        exerciseTemplateId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ExerciseTemplate"
        },
        description: {
            type: String,
            min: 3, 
            max: 300,
        },
        sets: [
            {
              repsCount: { type: Number, default: 0 },
              weight: { type: Number, default: 0 },
              liftedWeight: { type: Number }
            }
          ],
        note: {
            type: String,
            max: 400,
        },
        isFinished: {
            type: Boolean,
            default: false,
        }
    },
    {timestamps: true}
)

const trainingTemplateSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 50,
        },
        exerciseIds: [
            {
                type: Schema.Types.ObjectId,
                ref: 'ExerciseTemplate',
            }
        ]
        
    },
    {timestamps: true}
)

const trainingSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        trainingTemplateId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
        },
        exercises: [
            {
                type: mongoose.Schema.ObjectId,
                ref: "Exercise"
            },
        ],
        trainingDate: {
            type: Date,
        },
        isFinished: {
            type: Boolean,
            default: false,
        }
    }
)

export const ExerciseTemplate = mongoose.models.ExerciseTemplate || mongoose.model("ExerciseTemplate", exerciseTemplateSchema);
export const Exercise = mongoose.models.Exercise || mongoose.model("Exercise", exerciseSchema);
export const Set = mongoose.models.Set || mongoose.model("Set", setSchema);
export const TrainingTemplate = mongoose.models.TrainingTemplate || mongoose.model("TrainingTemplate", trainingTemplateSchema);
export const Training = mongoose.models.Training || mongoose.model("Training", trainingSchema);