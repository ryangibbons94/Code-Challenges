// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//first i split the string into an array, then i mapped through the array and changed the mistaken values to the correct values, then i joined the array back as a string
function correct(string) {
  let arr = string.split("");
  return arr
    .map((a) => {
      if (a === "0") {
        return "O";
      } else if (a === "5") {
        return "S";
      } else if (a === "1") {
        return "I";
      } else {
        return a;
      }
    })
    .join("");
}
