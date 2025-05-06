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

export function getToday() {
    const date = new Date()
    const year = date.getFullYear()
    const day = date.getDate()
    const month = date.getMonth()
    
    return (formatDate(`${year}-${month + 1}-${day}`))
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

export function getCurrentWeekMondayDate() {
    const today = new Date(getToday())
    const dayOfWeek = today.getDay()
    const monday = new Date(today.setDate(today.getDate() - dayOfWeek + 1))
    return monday
}

