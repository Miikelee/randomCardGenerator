window.onload = () => {
  let generateRandomNumber = () => {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    let randomNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[randomNumbers];
  };
  let generateRandomSymbol = () => {
    let symbols = ["&clubs;", "&diams;", "&hearts;", "&spades;"];
    let randomSymbols = Math.floor(Math.random() * symbols.length);
    return symbols[randomSymbols];
  };

  const button = document.querySelector(".btn");

  button.onclick = function () {
    let simbolos = generateRandomSymbol(); //creo una variable que va a ser igual al resultado de la funcion
    document.querySelector(".symbol1").innerHTML = simbolos;
    document.querySelector(".symbol2").innerHTML = simbolos;
    document.querySelector("p").innerHTML = generateRandomNumber();
    if (simbolos == "&hearts;") {
      document.querySelector(".symbol1").style.color = "red";
      document.querySelector(".symbol2").style.color = "red";
    } else if (simbolos == "&diams;") {
    } else {
      document.querySelector(".symbol1").style.color = "black";
      document.querySelector(".symbol2").style.color = "black";
    }
  };
};
