import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;

    return (
        console.log(props),
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum</p>
                </div>
                <div className="card action grey lighten-4 grey-text">
                    <div>Posted by Even</div>
                    <div>2nd of September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails