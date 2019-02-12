import React from 'react';

 const Smurf = props => {
    return (
        <section className = 'smurf'>
            <h1 className = 'smurf-name'>{props.smurf.name}</h1>
            <p className = 'smurf-age'><span className = 'smurf-label'>Age:</span> {props.smurf.age} years old</p>
            <p className ='smurf-height'><span className = 'smurf-label'>Height:</span> {props.smurf.height} tall</p>
        </section>
    )
}

 export default Smurf;