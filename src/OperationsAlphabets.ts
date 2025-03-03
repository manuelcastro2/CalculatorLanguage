export class OperationsAlphabets {

  constructor(){}
 
  subSet(set1:string[],set2:string[]):string{
  let set3=set1.every(set1=>set2.includes(set1))
  return `the elements of the set b {${set3}} is in the set A ${set2}`
 }

 belonging(set1:string[],set2:string[]):String{
  let set3=set1.every(set1=>set2.includes(set1))
  return `the elements of the set b {${set3}} is belonging to the set A ${set1}`
 }
 
  UnionSet(set1:string [], set2:string []): string {
   let set3=Array.from( new Set([...set1,...set2]));
    return`the union sets A and B are {${set3}}`
  }

  IntercessionSet(set1: string[], set2: string[]): string {
    let set3=set1.filter(set1 =>set2.includes(set1))
    return `the elements intercession the A and B are {${set3}}`
  }

  complementSet(set1:string[], set2:string []): string {
   let set3= set1.filter(set1=>!set2.includes(set1))
    return `the complement is {${set3}}`
  }

  absoluteDifference(set1:string[],set2:string[]):string{
    set1.filter(set1=>!set2.includes(set1))
    set2.filter(set2=>!set1.includes(set2))

   let set3:number=set1.length+set2.length
    return `the diferent of the set1 is {${set1}} \n the diferent of the set2 is {${set2}} \n the duferent absolute is {${set3}}`
  }

  differentSymmetrical(set1:string[],set2:string[]):string{
      let set3:string[]=[]
      set3=[...set1.filter(el => !set2.includes(el)), ...set2.filter(el => !set1.includes(el))]
    return `the difference symmetrical is {${set3}}`
  }
}
