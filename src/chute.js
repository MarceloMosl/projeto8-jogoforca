export default function Chute({chute, setChute, word, setWinOrLose, setStatusJogo, setImgForca, imgForca, setStatusPalavra, statusJogo}){

    function changeInput(event){
        setChute(event.target.value)
    }
    function guess(){
        if(chute ===  word){
            setStatusPalavra(true)
            setWinOrLose("green")
            setStatusJogo("off")
        }else{
                if(imgForca >= 6){
                    setStatusPalavra(true)
                    setWinOrLose("red")
                    setStatusJogo("off")
                } else {
                    setImgForca(imgForca + 1)
                }
        }
        setChute("")
    }

    return (
        <div class="guess">
            <p>Já sei a palavra!</p>
            <input onChange={changeInput} value={chute} disabled={statusJogo == "off" ? true : false} type="text" class="input-guess"></input>
            <button disabled={statusJogo == "off" ? true : false} onClick={guess} class="button-guess">Chutar!</button>
        </div>
    )
}