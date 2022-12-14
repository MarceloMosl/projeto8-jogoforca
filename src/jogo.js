import React from "react"
import palavras from "./palavras";

export default function Jogo({palavraencriptada, setUnderline, imgForca, setWord, setStatusJogo, winOrLose, statusPalavra, word}){

    function startGame(){
        if(statusPalavra == true){
            window.location.reload()
        }else {
    const wordSetting = palavras[Math.floor(Math.random() * palavras.length)]
    setWord(wordSetting)
    setUnderline([...wordSetting])
    setStatusJogo("")}
    }   

    return (
    <div class="game">
        <img class="img-forca" data-test="game-image" src={`assets/forca${imgForca}.png`}></img>
        <div class="word-button">
            <div class="askWord"><button onClick={startGame} data-test="choose-word" class="askWord" >Escolher Palavra</button></div>
            <div class={`word ${winOrLose}`}>

            {statusPalavra ? word : <div data-test="word" data-answer={`${word}`}>{palavraencriptada}</div>}

            </div>

            


        </div>
    </div>

    )
}
