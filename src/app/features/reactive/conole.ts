import c from "template-colors-web";

export const observer = (obName) => ({
  next: (val) =>
    console.log(
      c`  ${
        "OB " + obName + " NEXT:"
      }.underline.italic  ${val}`.white.blueBG.bold.style("font-size: 20px;")
    ),
  error: (err) =>
    console.log(
      c`  ${
        "OB " + obName + " ERROR:"
      }.underline.italic  ${err}`.white.redBG.bold.style("font-size: 20px;")
    ),
  complete: () =>
    console.log(
      c`  ${
        "OB " + obName + " COMPLETATO"
      }.underline.italic  `.white.greenBG.bold.style("font-size: 20px;")
    ),
});

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
