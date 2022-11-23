export default function Jogo(){
    return (
        <div class="game">
        <img class="img-forca" src={`assets/forca0.png`}></img>
        <div class="word-button">
            <div class="askWord"><button class="askWord" >Escolher Palavra</button></div>
            <div class="word">_ _ _ _ _ _ _ _ </div>

        </div>
        </div>
    )
}