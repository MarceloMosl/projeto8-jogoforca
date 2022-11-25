import React from "react"

export default function Letras({clicados, setClicados, word,underline}){
     const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
     
     function select(letra){
      setClicados([...clicados, letra])
        if(underline.includes(letra)){
            console.log("tem")
        }else{
            console.log("error")
        }
      
    }


     return (
        <div class="alpha">
            {alfabeto.map((a) => (
            <div onClick={() => select(a)} class={`letters ${clicados.includes(a) ? "selecionado" : ""}`} >{a}</div>
            ))}
        </div>
    )
}