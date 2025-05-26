import ExerciseElement from '@/components/trainingExerciseElement/TrainingExerciseElement';
import ExerciseTemplateSelect from '@/components/forms/exerciseTemplateSelect/ExerciseTemplateSelect';
import { getExercisesByTrainingId } from '@/lib/actions';
import { ExerciseType } from '@/lib/types';
import React from 'react'

const TrainingPage = async ({params}: {params: Promise<{trainingId: string}>}) => {
  
  const trainingId = (await params).trainingId
  
  const exercisesData = await getExercisesByTrainingId(trainingId);

  const exercisesDataArr = exercisesData?.exercises?.map((exercise: ExerciseType) => (
    <ExerciseElement key={exercise._id} exerciseData={JSON.parse(JSON.stringify(exercise))} />
  ));

  return (
    <main className='pageContainer'>
      <div className='flex flex-col gap-4'>
        {exercisesDataArr?.length ? exercisesDataArr : <p>No exercises found.</p>}
      </div>
      <ExerciseTemplateSelect 
        trainingId={trainingId}
        isForTraining
      />
    </main>
  );
}

export default TrainingPage