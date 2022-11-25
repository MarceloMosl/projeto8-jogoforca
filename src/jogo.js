import React from "react"

export default function Jogo({word, clicados, underline}){
    
    return (
        <div class="game">
        <img class="img-forca" src={`assets/forca0.png`}></img>
        <div class="word-button">
            <div class="askWord"><button class="askWord" >Escolher Palavra</button></div>
            <div class="word">{underline.map(() => " _ " )}</div>

        </div>
        </div>
    )
}