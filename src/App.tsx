import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [characters, setCharacters] = useState([])

    useEffect( () => {
        fetch('https://potterapi-fedeperin.vercel.app/es/characters')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setCharacters(res)
            })
    }, [ ]);

    type Character = {
        fullName: string;
        image: string;
        birthdate: string;
    }

    console.log("characters -----", characters);

  return (
    <>
      <h1>Harry Potter characters</h1>
        {characters.map((character: Character) => (
            <div>

                <h2>{character.fullName}</h2>
                <img src={character.image} alt={"picture of chatracyers"}/>
            </div>
        ))}
        </>
  )
}

export default App
