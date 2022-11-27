import React from "react";
import Chute from "./chute";
import Jogo from "./jogo";
import Letras from "./letras";

export default function App() {
    const [word, setWord] = React.useState([])
    const [clicados, setClicados] = React.useState([]) 
    const [underline, setUnderline] = React.useState([])
    const [letraClicada, setLetraClicada] = React.useState([])
    const [imgForca, setImgForca] = React.useState(0)
    const [statusJogo, setStatusJogo] = React.useState("off")
    const [winOrLose, setWinOrLose] = React.useState("")
    const lgl = underline.map((a,b) => letraClicada.includes(a) ? `${a}` : " _ " )
    const palavraencriptada = lgl
    const [statusPalavra, setStatusPalavra] = React.useState(false)

    

    return (
        <> 
        <Jogo 
        word={word}
        setWord={setWord}
        clicados={clicados}
        setUnderline={setUnderline}
        setLetraClicada={setLetraClicada}
        imgForca={imgForca}
        statusJogo={statusJogo}
        setStatusJogo={setStatusJogo}
        winOrLose={winOrLose}
        palavraencriptada={palavraencriptada}
        statusPalavra={statusPalavra}
        />
        <Letras 
        clicados={clicados}
        setClicados={setClicados}
        word={word}
        underline={underline}
        letraClicada={letraClicada}
        setLetraClicada={setLetraClicada}
        imgForca={imgForca}
        setImgForca={setImgForca}
        statusJogo={statusJogo}
        setWinOrLose={setWinOrLose}
        palavraencriptada={palavraencriptada}
        setStatusJogo={setStatusJogo}
        setStatusPalavra={setStatusPalavra}

        />
        <Chute />
        </>
    )

}
