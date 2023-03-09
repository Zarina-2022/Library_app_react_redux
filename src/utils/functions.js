// Cumledeki tum kelimeleri ilk harfi buyuk harfle yazilsin

// 1st METHOD

// cumledeki her kelime buyuk harfle baslamasi icin split(verdigin parametreye gore kelimeleri ayirir) use:
export const upperFirstLetter = (sample) => {
  /* parametre olapak (sample) gelen cumleyi bosluk ayracina gore kelimelere ayir */

  const words = sample.split(" ");

  let newWords = [];
  // cumledeki her kelime tek tek gezilir
  for (let i = 0; i < words.length; i++) {
    // cumleden alinan her bir kelimeyi harf harf dolasalim
    let tempWord = "";
    for (let x = 0; x < words[i].length; x++) {
      // 0 = kelimenin ilk harfi
      if (x === 0) {
        // i.(o anki kelimenin) x. harfi
        // her kelimenin ilk harfi buyuk harf ile yazilsin
        tempWord += words[i][x].toLocaleUpperCase();
      } else {
        // her kelimenin ikinci harfinden itibaren kucuk harf ile yazar
        tempWord += words[i][x].toLocaleLowerCase();
      }
    }
    newWords.push(tempWord);
  }
  //olusan kelimeleri tekrar cumle seklinde yazmak icin join() use. Parametre olarak bosluk verildi kelimeler arasi:
  const newSample = newWords.join(" ");

  return newSample;
};

// 2nd METHOD

export const upperFirstLetter2 = (sample) => {
  return sample
    .split(" ")
    .map(
      (word) =>
        word.charAt(0).toLocaleUpperCase("eb-EN") +
        word.slice(1).toLocaleLowerCase("en-EN") // 1 dahil 
    )
    .join(" ");
};
