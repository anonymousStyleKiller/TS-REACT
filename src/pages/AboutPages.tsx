import React from "react";
import {useHistory} from 'react-router-dom';

export const AboutPages: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>About Pages</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci expedita, illo iste necessitatibus omnis pariatur quibusdam.
                Distinctio officia repellat rerum?
            </p>
            <button className="btn" onClick={()=>history.push("/")}>Обратно к списку дел</button>
        </>
    )
}