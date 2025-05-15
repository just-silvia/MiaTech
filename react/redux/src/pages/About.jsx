import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <h1>La mia applicazione di Todo-List!</h1>
                <p>Questa applicazione usa un componente TodoList che con useFetch prende le informazioni da un'API.</p>
            </div>
            <div>
                <button onClick={() => navigate("/home")}>Home</button>
            </div>
        </>
    );
}

export default About;