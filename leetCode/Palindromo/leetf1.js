// Transformando em substrings para verificar se é um palíndromo

x = 121;

var isPalindrome = function (x) {
  let str = x.toString();
  let palindrome = "";

  for (let i = str.length - 1; i >= 0; i--) {
    palindrome += str[i];
  }

  if (str === palindrome) {
    return true;
  } else {
    return false;
  }
};
