export class OL {

  constructor(){

  }
  concatenation(set1: string[], set2: string[]): string {
    let set3: string[] = ["g"];
    for (let i = 0; i < set1.length; i++) {
      for (let j = 0; j < set2.length; j++) {
            set3.push(set1[i] + set2[j]);
      }
    }
    return `the concatennation of the language set1 and set2 is {${set3}}`;
  }

  empowerment(set1: string[]): string {

    if (set1.length === 0) return "[g]";
    if (set1.length === 1) return `${set1}`;
    let SET1: string[] = set1;
    let newSet: string[] = [];
    for (let i = 0; i < set1.length; i++) {
      for (let L1 of  SET1) {
        for (let L2 of set1) {
          newSet.push(L1 + L2);
        }
      }
    }

    return `the empowerment of the operation the language is {${newSet}}`;
  }

  reflection(set1: string[]): string {
    let set2: string[] = ["g"];
    for (let L1 of set1) {
      set2.push(L1.split("").reverse().join(""));
    }

    return `the reflection of the elements of the set is {${set2}}`;
  }

  UnionSet(set1: string[], set2: string[]): string {
    let set3: string[] =[]
     set3=Array.from(new Set(["g",...set1,...set2]));
    return `the union L1 and L2 are {${set3}}`;
  }

  Intercession(set1: string[], set2: string[]): string {
    let set3:string[]=["g"]
    set3 = set1.filter((set1) => set2.includes(set1));
    return `the elements intercession the L1 and L2 are {${set3}}`;
  }

  subtraction(set1: string[], set2: string[]): string {
    let set3 = set1.filter((set1) => !set2.includes(set1));

    return `the substraction the L1 and L2 are {${set3}}`;
  }

  closureKlenne(set: string[], maxDepth: number): string {
    let result: string[] = [""];
  
    for (let power = 1; power <= maxDepth; power++) {
      let newWords: string[] = [];
      
      for (let word of result) {
        for (let symbol of set) {
          newWords.push(word + symbol);
        }
      }
      
      result = [...result, ...newWords];
    }
    return `the closure klenne is {${Array.from(result)}}`;
  }

  closurePositive(set: string[], maxDepth: number): string {
    let result: string[] = set;

  for (let power = 2; power <= maxDepth; power++) {
    let newWords: string[] = [];

    for (let word of result) {
      for (let symbol of set) {
        newWords.push(word + symbol);
      }
    }

    result = [...result, ...newWords];
  }


    return `the clousure positive is {${Array.from(result)}}`;
  }
}
