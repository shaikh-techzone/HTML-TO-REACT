let char = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    char += "*";
  }
  char += "</br>";
}
document.write(char);

let string = "";
for (let i = 1; i <= 5; i++) {
  console.log(`Loop i ${i} times`, i);
  for (let j = 0; j < i; j++) {
    console.log(`Loop j ${j} times`, j);
    string += "*";
  }
  string += "\n";
}
console.log(string);

// a = 1;
// b = 1;
// console.log(a < b);
