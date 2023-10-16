console.log("switch statement ");

const superHero = "Captain America";
switch (superHero) {
  case "Iron Man":
    console.log("I am Iron Man...");
    break;
  case "Thor":
    console.log("That is my hammer!");
    break;
  case "Captain America":
    console.log("Nerver give up. ");
    break;
  case "Black Widow":
    console.log("One shot, one kill.");
    break;
  default:
    console.log("Enter a valid superhero name");
    break;
}

// Switch statement is extremely similar to the if statement. They can be used interchangeably, but there are some situations where switch is preferred.

const goodFellow = "They are open minded";
switch (goodFellow) {
  case " They are open minded":
    console.log("They are my people");
    break;
  case "come around":
    console.log("its me");
    break;
  case "me":
    console.log("come in");
    break;
  default:
    console.log("enter a correct value");
}
