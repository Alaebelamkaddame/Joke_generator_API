import { useState } from "react";
import Button from "./Button";

function Joke() {
    const [joke, setJoke] = useState(""); // Follow camelCase naming for state variables

    const fetchJoke = () => { // Rename the function to avoid conflicts
        const url = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";
        fetch(url) // Use the global fetch function correctly
            .then((res) => res.json())
            .then((data) => setJoke(data.joke))
            .catch((error) => console.error("Error fetching the joke:", error));
    };

    return (
        <div className="joke">
            <Button callApi={fetchJoke} />
            <p>{joke}</p> {/* Ensure the variable name matches the state */}
        </div>
    );
}

export default Joke;
