export class OC {

  constructor(){}

  SetUniversal(set1: string[]): string {
    let lengthMax = 5;
    let resultado: string[] = ["g"];
    for (let i = 0; i < lengthMax; i++) {
      resultado = resultado.concat(
        resultado.flatMap((string1) => set1.map((chart1) => string1 + chart1))
      );
    }
    return `Σ = {${resultado}}`;
  }

  lengthWord(set1: string[]): string {
    if (set1.length == 0) return `the string is λ`;
    let concat: number = 0;
    set1.map((item) => {
      concat = +item.length;
    });
    return `the string or the strings have a length of {${concat}}`;
  }

  chainWord(set1: string[]): string {
    let word: string[] = ["g"];
    let lengthMax = 4;
    for (let index = 0; index < lengthMax; index++) {
      word = word.concat(
        word.flatMap((chain) => set1.map((item) => chain + item))
      );
    }
    return `chain the alphabet is {${word}}`;
  }

  concatenation(set1: string, set2: string): string {
    return `the concatenation A,B is {${set1+","+ set2}} /n the concatenation ab is {${set2 + set1}}`;
  }

  empowerment(set1: string, set2: number): string {
    let set3=set1.repeat(set2)
    return `repetition of the chain {${set3}} times {${set2}}`;
  }

  reflection(set1: string): string {
      let set2=set1.split("").reverse().join("")
    
    return `reflection of the chain {${set2}}`
  }
}
