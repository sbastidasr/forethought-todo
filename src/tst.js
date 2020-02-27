const isPalindrome = str => {
  const half = Math.floor(str.length / 2);
  for (let i = 0; i < half; i++) {
    if (str[i] != str[str.length - 1 - i]) return false;
  }
  return true;
};

const substrings = str => {
  for (let subtringLength = str.length; subtringLength > 0; subtringLength--) {
    const contains = str.length - subtringLength;
    for (let j = 0; j <= contains; j++) {
      const subst = str.slice(j, j + subtringLength);
      if (isPalindrome(subst)) return subst;
    }
  }
};

const ret = substrings("taccat");
console.log(ret);
