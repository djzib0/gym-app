import ExerciseElement from '@/components/exerciseElement/ExerciseElement';
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
    <section>
      <div className='flex flex-col bg-red-300'>
        {exercisesDataArr?.length ? exercisesDataArr : <p>No exercises found.</p>}
      </div>
    </section>
  );
}

export default TrainingPage