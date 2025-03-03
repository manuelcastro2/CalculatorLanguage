import { OA } from "./OA.js";
import PromptSync from "prompt-sync";

export default function MENUOA() {
  const prompt = PromptSync();
  const oa = new OA();
  let option2: number = 0;
  do {
    console.log("\n--------MENU ALPHABETS--------");
    console.log("1.SUBSET");
    console.log("2.BELONGING");
    console.log("3.UNION SET");
    console.log("4.INTERCESSION SET");
    console.log("5.COMPLEMENT SET");
    console.log("6.ABSOLUTE DIFFERENCE");
    console.log("7.DIFFERENCE SYMMETRICAL");
    console.log("0.LEAVE ");

    option2 = Number(prompt("\ntype the option \n"));
    if (isNaN(option2)) console.log("alone accept numbers");

    switch (option2) {
      case 1:

        console.log("\nSUBSET");
        const setSUB1: string = prompt("type the set one\n");
        const setSUB2: string = prompt("type the set two\n");
        const rSubset = oa.subSet(setSUB1.split(","), setSUB2.split(","));
        console.log(rSubset);

        break;
      case 2:

        console.log("\nBELONGING");
        const setB1: string = prompt("type the set one\n");
        const setB2: string = prompt("type the set two\n");
        const rBelonging = oa.belonging(setB1.split(","), setB2.split(","));
        console.log(rBelonging);

        break;
      case 3:

        console.log("\nUNION SET");
        const setU1: string = prompt("type the set one\n");
        const setU2: string = prompt("type the set two\n");
        const rUnionSet = oa.UnionSet(setU1.split(","), setU2.split(","));
        console.log(rUnionSet);

        break;
      case 4:

        console.log("\nINTERCESSION SET");
        const setI1: string = prompt("type the set one\n");
        const setI2: string = prompt("type the set two\n");
        const rIntercessionSet = oa.IntercessionSet(
          setI1.split(","),
          setI2.split(",")
        );
        console.log(rIntercessionSet);

        break;
      case 5:

        console.log("\nCOMPLEMENT SET");
        const setC1: string = prompt("type the set one\n");
        const setC2: string = prompt("type the set two\n");
        const rComplementSet = oa.complementSet(
          setC1.split(","),
          setC2.split(",")
        );
        console.log(rComplementSet);

        break;
      case 6:

        console.log("\nABSOLUTE DIFFERENCE");
        const setAD1: string = prompt("type the set one\n");
        const setAD2: string = prompt("type the set two\n");
        const rAbsoluteDifference = oa.absoluteDifference(
          setAD1.split(","),
          setAD2.split(",")
        );
        console.log(rAbsoluteDifference);

        break;
      case 7:
        
        console.log("\nDIFFERENCE SYMMETRICAL");
        const setDS1: string = prompt("type the set one\n");
        const setDS2: string = prompt("type the set two\n");
        const rDifferentSymmetrical = oa.differentSymmetrical(
          setDS1.split(","),
          setDS2.split(",")
        );
        console.log(rDifferentSymmetrical);

        break;
      case 0:

        console.log("\nThe close is alphabet");

        break;
      default:
        console.log("\nchoose option that it is predefined");
        break;
    }
  } while (option2 != 0);
}
