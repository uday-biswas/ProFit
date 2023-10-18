import React from "react";
import WorkOutCards from "./WorkOutCards";
import Footer from "./Footer";

const Training = (props) => {

    const trainingPrograms = props.workouts;
    return (
        <div>
            <h1 className="text-3xl p-3 font-semibold text-white text-center">Training Programs</h1>
            <div className="flex flex-wrap justify-center mt-6 space-x-4">
                {trainingPrograms.map((workout) => {
                    return <WorkOutCards key={workout.id} {...workout} explore={props.explore} />
                })}
            </div>
            <Footer className='foot'>Made with ❤️ by ProFit</Footer>
        </div>
    );
}

export default Training;