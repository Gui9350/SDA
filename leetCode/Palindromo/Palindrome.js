x = -121;

var isPalindrome = function (x) {
  let str = x.toString();
  let palindrome75 = "";

  for (let i = str.length - 1; i >= 0; i--) {
    palindrome75 += str[i];
  }

  console.log("Invertido:", palindrome75);

  if (str === palindrome75) {
    console.log("É um palíndromo");
    return true;
  } else {
    console.log("Não é um palíndrome");
    return false;
  }
};

console.log(isPalindrome(x));
