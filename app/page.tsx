'use server'
import ExerciseTemplateForm from "@/components/forms/exerciseTemplateForm/ExerciseTemplateForm";
import TrainingTemplateForm from "@/components/forms/trainingTemplateForm/TrainingTemplateForm";

export default async function Home() {

  return (
    <div 
    className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center 
    min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#efefef] font-[family-name:var(--font-geist-sans)]"
    >
      {/* <button onClick={addExerciseTemplate} className="cursor-pointer">Add exercise</button> */}
      <ExerciseTemplateForm />
      <TrainingTemplateForm />
    </div>
  );
}
