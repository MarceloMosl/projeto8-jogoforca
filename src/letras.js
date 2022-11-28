import React from "react";
export default function Letras({
  clicados,
  setClicados,
  underline,
  setLetraClicada,
  imgForca,
  setImgForca,
  statusJogo,
  setWinOrLose,
  palavraencriptada,
  word,
  setStatusPalavra,
  setStatusJogo,
}) {
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const [contador, setContador] = React.useState(0);

  function select(letra) {
    const click = [...clicados, letra];
    setClicados(click);
    setLetraClicada(click);
    let checker = (arr, target) => target.every((v) => arr.includes(v));
    const arrWord = [...word];
    console.log(word)

    if (checker(click, arrWord) == false && imgForca < 6) {
      if (!underline.includes(letra)) {
        setImgForca(imgForca + 1);
      } else {
        setContador(contador + 1);
      }
    } else if (checker(click, arrWord) == true) {
      setWinOrLose("green");
      setStatusJogo("off");
      setStatusPalavra(true);
      setTimeout(() => window.location.reload(), 5000);
    } else if (imgForca >= 6) {
      setWinOrLose("red");
      setStatusJogo("off");
      setStatusPalavra(true);
    }
  }

  return (
    <div class="alpha">
      {alfabeto.map((a) => (
        <div class="div-letters">
          <button
          onClick={() => select(a)}
          data-test="letter"
          class={`letters ${
            clicados.includes(a) ? "selecionado" : ""
          } ${statusJogo}`}
          disabled={statusJogo == "off" || clicados.includes(a) ? true : false}
          >
            {a}
            </button>
        </div>
      ))}
    </div>
  );
}
