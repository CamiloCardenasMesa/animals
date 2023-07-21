// 4) create a component
import './App.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
// esta es la pieza de estado. El primer argumento es el nombre de la pieza 
// y el segundo es la función que dicecomo se inicializa:
    const [animals, setAnimals] = useState([]); 

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    return (
        <div className='app'>
            <button onClick={handleClick}>Add animal</button>
            <div className='animal-list'>{renderedAnimals}</div> 
        </div>
    )
}

export default App;

/*
five things to understand rigth now:
1) use the state sistem wheb you want to update content on the screen
2) calling "useState" defines a new piece of state
3) the first argument to 'useState' is used as the initial value
4) Updating state es done ONLY using the setter function
5) Calling the setter function casuses React to rendered the component
*/ 
