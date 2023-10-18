import React, { useState } from "react";
import { useEffect } from "react";
import { IoIosArrowDroprightCircle, IoIosArrowDropdownCircle } from 'react-icons/io';

const DayProgress = (props) => {

    const [exerciseStates, setExerciseStates] = useState(props.exercises.map((exercise) => false));
    const [completedExercises, setCompletedExercises] = useState(0);
    let totalExercises = props.exercises.length; // Set the total number of exercises here
    totalExercises = props.exercises.length; // Set the total number of exercises here

    useEffect(() => {
        setCompletedExercises(0);
        setExerciseStates(props.exercises.map((exercise) => false));
    }, [props.change]);

    // Calculate the percentage of completed exercises
    const progress = Math.round((completedExercises / totalExercises) * 100);

    const handleExerciseCompletion = (event) => {
        if (event.target.checked === true) {
            setCompletedExercises(completedExercises + 1);
        }
        else {
            setCompletedExercises(completedExercises - 1);
        }
    };

  const toggleArrow = (index) => {
    const updatedStates = [...exerciseStates];
    updatedStates[index] = !updatedStates[index];
    setExerciseStates(updatedStates);
  };

    return (
        <div className="text-white">
            <div className="flex w-full p-1 md:w-2/3 m-auto mb-12">
                <div className="font-semibold ">Progress bar : </div>
                <div className="ml-2 w-4/6 md:w-4/5 h-8 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-blue-600 h-8 flex justify-center items-center text-xs font-medium text-blue-100 text-center leading-none rounded-full" style={{ width: `${progress}%` }} > <div className="relative left-3">{progress}%</div></div>
                </div>
            </div>

            <div>
                { 
                    props.exercises.map((exercise, index) => {
                        return (
                            <div>
                            <div className="flex justify-between w-full p-2 md:w-2/3 m-auto mt-6">
                                 <div className="flex w-2/6 font-semibold hover:cursor-pointer" onClick={() => toggleArrow(index)}>
                                    {exerciseStates[index] ? <IoIosArrowDropdownCircle className="relative w-10 top-1 mr-3 scale-150"/> : <IoIosArrowDroprightCircle className="relative w-10 top-1 mr-3 scale-150"/>} {exercise.name}
                                </div>
                            <div className="flex">
                            <div className="font-semibold mr-2">Completed</div>
                            <input
                                key={props.change} // Add the key prop here, so that the component re-renders when the change prop changes
                                type="checkbox"
                                className="form-checkbox h-6 w-6"
                                onChange={handleExerciseCompletion}
                            />
                            </div>
                            </div>
                            {
                                exerciseStates[index] && (
                                    <div className="flex flex-col w-5/6 md:w-2/3 m-auto mt-6">
                                        <div className="text-lg font-semibold mb-2">How to do</div>
                                        <div className="mb-4">
                                            <img src={exercise.image} alt={`${exercise.name} photo`} className="w-full md:w-2/3 h-auto m-auto rounded-lg" />
                                        </div>
                                        <div style={{whiteSpace: "pre-line"}} className="bg-slate-900 p-4 rounded-lg">{exercise.description}</div>
                                    </div>

                                )
                            }
                            <hr className="w-full md:w-2/3 m-auto border-1 mt-3" />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};


export default DayProgress;