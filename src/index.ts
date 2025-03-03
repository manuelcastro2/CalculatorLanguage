import MenuOperationsAlphabets from "./MenuOperationsAlphabets.js";
import MenuOperationsLanguage from "./MenuOperationsLanguage.js";
import MenuOperationsStrings from  "./MenuOperationsStrings.js";
import PromptSync from "prompt-sync";

const prompt = PromptSync();

let option = 0;

do {
  console.log("\nTHE CALCULATOR");
  console.log("--------MENU--------");
  console.log("1.ALPHABETS");
  console.log("2.STRINGS");
  console.log("3.LANGUAGE");
  console.log("0.LEAVE");

  option = Number(prompt("type the option\n"));
  if (isNaN(option)) console.log("alone accept numbers");
  switch (option) {
    case 1:
      MenuOperationsAlphabets();
      break;
    case 2:
      MenuOperationsStrings();
      break;
    case 3:
      MenuOperationsLanguage();
      break;
    case 0:
      console.log("The program close");
      option=0
      break;
    default:
      console.log("choose option that it is predefined");
      break;
  }
} while (option != 0);
