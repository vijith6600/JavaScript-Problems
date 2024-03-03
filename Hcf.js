num1 = 3;
num2 = 6;

hcf = 0;

for (i = 1; i <= num1 && num2; i++) {
  if (num1 % i == 0 && num2 % i == 0) {
    hcf = i;
  }
}

console.log(hcf);
