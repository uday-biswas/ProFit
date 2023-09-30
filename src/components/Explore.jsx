const Explore = (props) => {

    return (
        <div>
            explore
            {
                props.workouts.filter((workout) => {
                    return workout.id === props.workout_id;
                }).map((workout) => {
                    return (
                        <div key={workout.id}>
                            <h1>{workout.title}</h1>
                            <img src={workout.image} alt={workout.title} />
                            <p>{workout.description}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Explore;