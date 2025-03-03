import { OL } from "./OperatiosLanguage.js";
import PromptSync from "prompt-sync";

export default function MENUOL() {
  const prompt = PromptSync();
  const ol = new OL();
  let option2: number = 0;
  do {
    console.log("\n--------MENU LANGUAGE--------");
    console.log("1.CONCATENATION");
    console.log("2.EMPOWERMENT");
    console.log("3.REFLECTION");
    console.log("4.UNION");
    console.log("5.INTERCESSION");
    console.log("6.SUBTRACTION");
    console.log("7.CLOSURE KLENNE");
    console.log("8.CLOSURE POSITIVE");
    console.log("0.LEAVE ");

    option2 = Number(prompt("\ntype the option \n"));
    if (isNaN(option2)) console.log("alone accept numbers");

    switch (option2) {
      case 1:
        console.log("\nCONCATENATION");
        let rConcatenation=""
        const setC1: string = prompt("type the set one\n");
        const setC2: string = prompt("type the set two\n");
        if (Array.isArray(setC1.split(","))) {
          if (Array.isArray(setC2.split(","))) {
             rConcatenation= ol.concatenation(
              setC1.split(","),
              setC2.split(",")
            );
          }else{
            rConcatenation= ol.concatenation(
              setC1.split(","),
              Array.from(setC2)
            );
          }
        }else{
          rConcatenation= ol.concatenation(
            Array.from(setC1),
            Array.from(setC2)
          );
        }

        console.log(rConcatenation);
        break;
      case 2:
        console.log("\nEMPOWERMENT");
        const setE1: string = prompt("type the set one\n");
        const rEmpowerment = ol.empowerment(setE1.split(","));
        console.log(rEmpowerment);

        break;
      case 3:
        console.log("\nREFLECTION");
        const setR1: string = prompt("type the set one\n");
        const rReflection = ol.reflection(setR1.split(","));
        console.log(rReflection);

        break;
      case 4:
        console.log("\nUNION LANGUAGE");
        const setU1: string = prompt("type the set one\n");
        const setU2: string = prompt("type the set two\n");
        const rUnion = ol.UnionSet(setU1.split(","), setU2.split(","));
        console.log(rUnion);

        break;
      case 5:
        console.log("\nINTERCESSION SET");
        const setI1: string = prompt("type the set one\n");
        const setI2: string = prompt("type the set two\n");
        const rIntercessionSet = ol.Intercession(
          setI1.split(","),
          setI2.split(",")
        );
        console.log(rIntercessionSet);

        break;
      case 6:
        console.log("\nSUBTRACTION");
        const setSub1: string = prompt("type the set one\n");
        const setSub2: string = prompt("type the set two\n");
        const rSubtraction = ol.subtraction(
          setSub1.split(","),
          setSub2.split(",")
        );
        console.log(rSubtraction);

        break;
      case 7:
        console.log("\nCLOSURE KLENNE");
        const setCK1: string = prompt("type the set one\n");
        const setCK2: number = Number(prompt("type the number\n"));
        if (isNaN(setCK2)) {
          console.log("\nalone accept numbers");
          break;
        }
        const rClosureKlenne = ol.closureKlenne(setCK1.split(","), setCK2);
        console.log(rClosureKlenne);

        break;
      case 8:
        console.log("\nCLOSURE POSITIVE");
        const setCP1: string = prompt("type the set one\n");
        const setCP2: number = Number(prompt("type the number\n"));
        if (isNaN(setCP2)) {
          console.log("\nalone accept numbers");
          break;
        }
        const rClosurePositive = ol.closurePositive(setCP1.split(","), setCP2);
        console.log(rClosurePositive);

        break;
      case 0:
        console.log("\nThe close is language");

        break;
      default:
        console.log("\nchoose option that it is predefined");
        break;
    }
  } while (option2 != 0);
}
