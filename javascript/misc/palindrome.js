function checkIfPalindrome(str) {
  let normalizedString = str.toLowerCase();

  for (let i = 0; i < str.length / 2; i++) {
    if (normalizedString[i] != normalizedString[str.length - 1 - i])
      return false;
  }

  return true;
}

function fibonacci(n) {
  if (n <= 1) return n;

  let prev = 0,
    curr = 1;
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }

  return curr;
}
