let zuTrennendeZeichenkette = document.getElementById(
  "zuTrennendeZeichenkette"
);
let zeichenketteFürDieTrennungsposition = document.getElementById(
  "zeichenketteFürDieTrennungsposition"
);
let davorTrennen = document.getElementById("davorTrennen");
let danachTrennen = document.getElementById("danachTrennen");
let vorderTxt = document.getElementById("vorderTxt");
let hinterTxt = document.getElementById("hinterTxt");

function trennen() {
  //  zeichenketteFürDieTrennungsposition.value;
  let arr1 = zuTrennendeZeichenkette.value.split(" ");

  if (arr1.includes(zeichenketteFürDieTrennungsposition.value)) {
    console.log("its in");
    if (davorTrennen.checked) {
      let arr2 = arr1.slice(
        0,
        arr1.indexOf(zeichenketteFürDieTrennungsposition.value)
      );
      let arr3 = arr1.slice(
        arr1.indexOf(zeichenketteFürDieTrennungsposition.value),
        arr1.lenght
      );

      vorderTxt.innerHTML = arr2.join(" ");

      hinterTxt.innerHTML = arr3.join(" ");
    } else if (danachTrennen.checked) {
      let arr2 = arr1.slice(
        0,
        arr1.indexOf(zeichenketteFürDieTrennungsposition.value) + 1
      );
      let arr3 = arr1.slice(
        arr1.indexOf(zeichenketteFürDieTrennungsposition.value) + 1,
        arr1.lenght
      );

      vorderTxt.innerHTML = arr2.join(" ");

      hinterTxt.innerHTML = arr3.join(" ");
    }
  } else {
    vorderTxt.innerHTML = "Joo! Couldn't find any of that word.";
  }
}

zeichenketteFürDieTrennungsposition.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});
