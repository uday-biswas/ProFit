import React from "react";
import workouts from "../json_data/workouts.json";
import WorkOutCards from "./WorkOutCards";
import Footer from "./Footer";

const Training = () => {

    const trainingPrograms = workouts;
    return (
        <div>
            <h1 className="text-3xl font-semibold text-white text-center">Training Programs</h1>
            <div className="flex flex-wrap justify-center mt-6 space-x-4">
                {trainingPrograms.map((workout) => {
                    return <WorkOutCards key={workout.id} {...workout} />
                })}
            </div>
            <Footer className='foot'>Made with ❤️ by Taarzan</Footer>
        </div>
    );
}

export default Training;