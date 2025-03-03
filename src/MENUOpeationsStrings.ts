import { OperationsStrings } from "./OperationsStrings.js";
import PromptSync from "prompt-sync";

export default function MenuOpeationsStrings() {
  const prompt = PromptSync();
  const oc = new OperationsStrings();
  let option2: number = 0;
  do {
    console.log("\n--------MENU STRINGS--------");
    console.log("1.STRING UNIVERSAL");
    console.log("2.LENGTH STRING");
    console.log("3.CHAIN STRING");
    console.log("4.CONCATENATION STRING");
    console.log("5.EMPOWERMENT STRING");
    console.log("6.REFLECTION STRING");
    console.log("0.LEAVE ");

    option2 = Number(prompt("\ntype the option \n"));
    if (isNaN(option2)) console.log("\nalone accept numbers");

    switch (option2) {
      case 1:
        console.log("\nSTRING UNIVERSAl");
        const setSU: string = prompt("type the string\n");
        const rUniversalString = oc.SetUniversal(setSU.split(","));
        console.log(rUniversalString);

        break;
      case 2:
        console.log("\nLENGTH STRING");
        const setL: string = prompt("type the string\n");
        const rLength = oc.lengthWord(setL.split(","));
        console.log(rLength);

        break;
      case 3:
        console.log("\nCHAIN STRING");
        const setC: string = prompt("type the set one\n");
        const rChainString = oc.chainWord(setC.split(","));
        console.log(rChainString);

        break;
      case 4:
        console.log("\nCONCATENATION STRING");
        const setConcat1: string = prompt("type the string one\n");
        const setConcat2: string = prompt("type the string two\n");
        const rIntercessionSet = oc.concatenation(setConcat1, setConcat2);
        console.log(rIntercessionSet);

        break;
      case 5:
        console.log("\nEMPOWERMENT STRING");
        const setE1: string = prompt("type the string\n");
        const setE2: number = Number(prompt("type the number of potency\n"));
        if (isNaN(setE2)) {
          console.log("alone accept numbers");
          break;
        }
        const rEmpowerment = oc.empowerment(setE1, setE2);
        console.log(rEmpowerment);

        break;
      case 6:
        console.log("\nREFLECTION STRING");
        const setR: string = prompt("type the string\n");
        const rReflection = oc.reflection(setR);
        console.log(rReflection);

        break;
      case 0:
        console.log("\nThe close is strings");

        break;
      default:
        console.log("\nchoose option that it is predefined");
        break;
    }
  } while (option2 != 0);
}
