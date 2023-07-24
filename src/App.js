// 4) create a component
import './App.css';
import React, { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}


/*React va a correr esta función del componente un montón de veces.
la primera vez que se renderiza en la pantalla, React lo llama por defecto. Luego vamos a estar 
cambiando la variable "animals" en los siguientes 3 pasos */
function App() {
    /* 3 ) Esta es la pieza de estado. El primer argumento es el nombre de la pieza 
        y el segundo es la función que dice cómo se inicializa, el "useSatate" solo
        se usa para inicializar la pieza la primera vez que se ejecuta*/
    const [animals, setAnimals] = useState([]); 

    /* 2) Esta es la setter function. Aquì seteamos el comportamiento del event handler ("handleClick").
       Tan pronto cuando queremos actualizar el estado, react lo capta y lo re-renderiza. En este caso
       coge todos los animales (...animals) y le pasa la función "getRandomAnimal" para seleccionar uno al
       azar del array.
       También se puede encontrar escrito como "onClick" o "onButtonClick".
       (Estas son solo convenciones de la comunidad para una mejor lectura y entendimiento).*/
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };

    /* Building List:
        Es lo que usamos en la función de
    */
    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow key={index} type={animal} />
    });

    /* 1) cuando queremos escuchar un evento añadimos el nombre del prop,
    en este caso "onClick" y luego le asignamos su "callback function" o 
    "event handler" en este caso "handleClick": onClick={handleClick} */ 
    return (
        <div className='app'>
            <button onClick={handleClick}>Add animal</button>
            <div className='animal-list'>{renderedAnimals}</div> 
        </div>
    )
}

export default App;

/*
five things to understand rigth now with "State Sistem":
1) use the state sistem when you want to update content on the screen
2) calling "useState" defines a new piece of state
3) the first argument to 'useState' is used as the initial value
4) Updating state es done ONLY using the setter function
5) Calling the setter function casuses React to re-rendered the component
*/ 

