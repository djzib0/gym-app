import { TrainingType } from "./types";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { default: mongoose } = require("mongoose")  

export const connectToDb = async () => {
    const connection: {isConnected: boolean | undefined} = {
    isConnected: undefined
};

    try {
        if(connection.isConnected) {  
            console.log("Using existing connection")
            return;
        }
        const db = await mongoose.connect(process.env.MONGO); 
        // connection.isConnected = db.connection[0].readyState;
        connection.isConnected = db.connection[0];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log(error)
        throw new Error(error);
    }
}

export const getToday = () => {
    const date = new Date()
    const year = date.getFullYear()
    const day = date.getDate()
    const month = date.getMonth()
    
    return (formatDate(`${year}-${month + 1}-${day}`))
 }

 export const getDayNumber = (date: Date, delta: number) => {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + delta)
    return newDate.getDate();
 }

 // formats date
 export function formatDate(date: string) {
    const dateArr = date.split("-")
    // if month is September or earlier, function adds
    // zero before the month number
    const month = dateArr[1].length < 2 ? `0${dateArr[1]}` : dateArr[1]
    // if day is less than nine, function adds
    // zero before the day number
    const day = dateArr[2].length < 2 ? `0${dateArr[2]}` : dateArr[2]
    return (`${dateArr[0]}-${month}-${day}`)
}

export const getCurrentWeekMondayDate =() => {
    const today = new Date(getToday())
    const dayOfWeek = today.getDay()
    const monday = new Date(today.setDate(today.getDate() - dayOfWeek + 1))
    return monday
}

export const filterTrainingsByDate = (selectedMonday: Date, allTrainings: TrainingType[], dateDelta: number): TrainingType[] => {
        console.log(allTrainings, " all trainings in function")
        const selectedTrainings: TrainingType[] | undefined = allTrainings?.filter(training => {
            console.log(selectedMonday, " selected monday")

            console.log(training.trainingDate, " training")
            const trainingDate = new Date(training.trainingDate)
            const dayToCompare = new Date(selectedMonday);
            dayToCompare.setDate(dayToCompare.getDate() + dateDelta)
            console.log(dayToCompare, " day to compare")
            // const trainingDate = new Date(training.trainingDate)
            // console.log(trainingDate, 'training')
            // const monday = new Date(selectedMonday)
            // const dayToCompare = new Date(selectedMonday);
            // dayToCompare.setDate(selectedMonday.getDay() + dateDelta);
            // console.log(dayToCompare, "day to compare")
            // console.log(trainingDate.getTime() === dayToCompare.getTime());
            return trainingDate.getTime() === dayToCompare.getTime();
        });

        console.log(selectedTrainings, " in function")

        return selectedTrainings
    
}

// this is a solution given by ChatGPT
export function getWeekNumberFromMonday(monday: Date): number {
  // Convert to UTC for consistency
  const mondayUTC = new Date(Date.UTC(monday.getFullYear(), monday.getMonth(), monday.getDate()));

  // Find January 4th of the same year — it's guaranteed to be in week 1
  const jan4 = new Date(Date.UTC(mondayUTC.getUTCFullYear(), 0, 4));

  // Find the Monday of the first ISO week
  const dayOfWeek = jan4.getUTCDay() || 7; // Sunday = 7
  const isoWeek1Monday = new Date(jan4);
  isoWeek1Monday.setUTCDate(jan4.getUTCDate() - dayOfWeek + 1);

  // Calculate the difference in days
  const daysDiff = (mondayUTC.getTime() - isoWeek1Monday.getTime()) / 86400000;

  // Divide by 7 to get the week number
  const weekNumber = Math.floor(daysDiff / 7) + 1;

  return weekNumber;
}

