import React from 'react';


function Projects(props) {

    return(
        <div>
            <p className={`${props.color} rounded-full text-xs p-2 text-white font-semibold`}>{props.name}</p>
        </div>
    )

}

export default Projects
