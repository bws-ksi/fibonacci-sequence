let fibanacci = (n) => {
  let first = 1
  let second = 1
  for (let i = 3; i <= n; i++) {
    let third = first + second
    first = second
    second = third    
  }
  return second
}
console.log(fibanacci(80))