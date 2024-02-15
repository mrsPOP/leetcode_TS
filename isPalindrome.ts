function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  let _new = 0;

  let a = x;
  let b: number;

  while (a) {
    b = a % 10;
    a = Math.floor(a / 10);
    _new = _new * 10 + b;
  }

  return x === _new;
}
