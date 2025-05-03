'use server'
import ExerciseTemplateForm from "@/components/forms/exerciseTemplateForm/ExerciseTemplateForm";
import TrainingTemplateForm from "@/components/forms/trainingTemplateForm/TrainingTemplateForm";

export default async function Home() {

  return (
    <div 
    className="pageContainer"
    >
      {/* <button onClick={addExerciseTemplate} className="cursor-pointer">Add exercise</button> */}
      <ExerciseTemplateForm />
      <TrainingTemplateForm />
    </div>
  );
}
