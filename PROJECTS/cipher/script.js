var plain_txt = "ShaikhAbdulSami";
// console.log(plain_txt[5]);
var all_letter = "QAZWSXEDCRFVTGBYHNUJMKIOLPqazwsxedcrfvtgbyhnujmikolp";

// ENCRYPT FUNCTION

var dict1 = {};
var key = 1;

for (var i = 0; i <= all_letter.length - 1; i++) {
  dict1[all_letter[i]] = all_letter[(i + key) % all_letter.length];
  // console.log(all_letter[(i + key) % all_letter.length]);
}

var cipher_txt = [];
var a = "";
var temp = "";
for (var char in plain_txt) {
  if (char.indexOf(all_letter)) {
    a = plain_txt[char];
    temp = dict1[a];
    // console.log(temp);
    cipher_txt.push(temp);
    // console.log(cipher_txt);
  } else {
    temp = char;
    // console.log(temp);
    cipher_txt.push(temp);
  }
}
cipher_txt = cipher_txt.join("");

console.log("Cipher Text is ", cipher_txt);

// DECRYPT FUNCTION

var dict2 = {};
for (var i = 0; i <= all_letter.length - 1; i++) {
  dict2[all_letter[i]] = all_letter[(i - key) % all_letter.length];
}
var decrypt_txt = [];
var b = "";
var temp2 = "";
for (var char in cipher_txt) {
  if (char.indexOf(all_letter)) {
    b = cipher_txt[char];
    temp2 = dict2[b];
    // console.log(temp2);
    decrypt_txt.push(temp2);
    // console.log(decrypt_txt);
  } else {
    temp2 = char;
    // console.log(temp2);
    decrypt_txt.push(temp2);
  }
}
decrypt_txt = decrypt_txt.join("");

console.log("Decrypt Text is ", decrypt_txt);
