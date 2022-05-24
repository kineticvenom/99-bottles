function bottleSong() {
  let numOfBeer = 99;

  for (let i = 0; i < 99; i++) {
    if (numOfBeer > 2) {
      console.log(numOfBeer + " bottles of beer on the wall, " + numOfBeer + " bottles of beer.");
      numOfBeer--;
      console.log("Take one down and pass it around, " + numOfBeer + " bottles of beer on the wall.");
    }
    if (numOfBeer <= 2 && numOfBeer !== 0) {
      console.log(numOfBeer + " bottles of beer on the wall, " + numOfBeer + " bottles of beer.");
      numOfBeer--;
      console.log("Take one down and pass it around, " + numOfBeer + " bottle of beer.");

      console.log(numOfBeer + " bottle of beer on the wall, " + numOfBeer + " bottle of beer.")
      console.log("Take one down and pass it around, no more bottles of beer.");
      numOfBeer--;
      console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
    };
  };
};

bottleSong();
