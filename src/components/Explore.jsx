import React, { useEffect } from 'react';
import './Explore.css';
import { useState } from 'react';
import DayProgress from './DayProgress';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const Explore = (props) => {
    
    const [workout, setWorkout] = useState({});
    const [dayClicked, setDay] = useState(1);
    const [exercises, setExercises] = useState([]);
    const [label, setLabel] = useState("");
    const [workout_or_day_changed, setChange] = useState(false);
    let days = [], day;
    for (let i = 1; i <= 28; i++) {
        days[i] = i;
    }
    
    useEffect(() => {
        setWorkout(props.workouts.find((workout) => workout.id === props.workout_id));
    }, [props.workout_id]);

    useEffect(() => {
        day = dayClicked%7;
        if(day === 0) day = 7;

        // Conditionally set the exercises state based on props
        if (workout.tag === "daily") {
            setExercises(workout.exercises);
        } else if (workout.tag === "7-day routine") {
            setExercises(workout.exercises[day - 1].exercises);
            setLabel(workout.exercises[day - 1].label);
        }
        // Set the change
        setChange(!workout_or_day_changed);
    }, [workout, dayClicked]);

    return (
        <div>
            {
                <div>
                    <div key={workout.id} className="text-white flex items-center flex-col">
                        <h1 className="text-3xl mt-4 font-semibold text-white text-center">{workout.title}<div className="w-fit m-auto p-1 rounded-lg bg-gray-700">{workout.tag}</div></h1>
                        <div className="mt-4 w-3/4 text-center">" {workout.description} " </div>
                        <img className='w-3/4 md:w-1/3 m-4' src={workout.image} alt={workout.title} />
                    </div>
                    <h1 className="text-4xl mt-6 mb-6 font-semibold text-white text-center">progress tracking</h1>
                    <div class="flex overflow-x-scroll hide-scroll-bar">
                        <div class="flex ml-4 ">
                            {days.map((day) => {
                                return (
                                    <div onClick={() => setDay(day)} class="w-14 mr-4 hover:cursor-pointer text-center h-7 max-w-xs overflow-hidden rounded-lg shadow-md bg-stone-300 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                        day {day}
                                    </div>
                                )
                            })}
                        </div>
                    </div> 
                    <div className="font-semibold text-3xl m-6 text-white">Day {dayClicked} {label}</div>
                    {
                        props.isLoggedIn ? null :
                        <div className='text-center max-w-fit mx-auto text-white border-[1px] p-[7px] m-6 border-gray-600 rounded-md font-semibold'><NavLink to="/login" className="text-blue-500 font-extrabold text-xl">Sign in</NavLink> to track your progress</div>}
                    <DayProgress exercises={exercises} change={workout_or_day_changed}/>
                    <Footer/>
                </div>
            }
        </div>
    );
}

export default Explore;