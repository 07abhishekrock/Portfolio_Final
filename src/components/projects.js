import React, {useRef,useEffect,useState} from 'react';
function ProjectsList(props){
    let list_ref = useRef(null);
    return <div className="project-container">
        <h1>Take a look at my <b>Projects</b></h1>
        <ul className="project-list" ref={list_ref} >
            {props.children}
        </ul>
    </div>
}
function Project(props){
   let ref = useRef(null);
    return (
        <li className="project" ref={ref}>
            <div>
                <span className="icon">
                    <i style={{backgroundImage:`url(${props.icon})`}}></i>
                </span>
                <div className="links">
                    <span class="github"></span>
                    <span class="live"></span>
                </div>
            </div>
            <div>
                <div className="project-info">
                    <span className="heading">{props.title}</span>
                    <p>
                    This pwa helps you create app-collections created by users like you , for all possible categories, like entertainment, sports , health etc. (even custom ones)
                    </p>
                </div>
                <div className="review">
                    <input type="text" placeholder="Add Your Review" />
                    <button className="submit-review" >SUBMIT</button>
                </div>
            </div>
        </li>
    )
}

export {Project, ProjectsList};