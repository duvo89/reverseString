function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Entered value isnt a string";
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

let reversedString = reverse("aloha whats up");
console.log(reversedString);
