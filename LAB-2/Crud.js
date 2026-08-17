import readline from "readline/promises";
import { stdin, stdout } from "process";

const main = async () => {
  let choice;
  const cin = readline.createInterface({ input: stdin, output: stdout });

  do {
    console.log("Welcome the Flipkart :🛒 ");
    console.log("1......... Show Cart");
    console.log("2......... Add Product");
    console.log("3......... Remove Product");
    console.log("4......... Update Quantity");
    console.log("5......... Exit");

    choice = await cin.question("Enter Your Choice: ");

    switch (choice) {
      case "1":
        console.log("Show Product");
        break;

      case "2":
        console.log("product Added");
        break;

      case "3":
        console.log("remove Product");
        break;

      case "4":
        console.log("Update product quanatity");
        break;

      case "5":
        console.log("see You Later");
        break;

      default:
        console.log("Invalid Choice! Try again");
    }
  } while (choice != 5);
  cin.close();
};

main();
