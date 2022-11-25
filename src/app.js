import React from "react";
import Chute from "./chute";
import Jogo from "./jogo";
import Letras from "./letras";

export default function App() {
    const [word, setWord] = React.useState("quarentena")
    const [clicados, setClicados] = React.useState([]) 
    const [underline, setUnderline] = React.useState([...word])

    return (
        <> 
        <Jogo 
        word={word}
        clicados={clicados}
        underline={underline}/>
        <Letras 
        clicados={clicados}
        setClicados={setClicados}
        word={word}
        underline={underline}
        />
        <Chute />
        </>
    )

}
