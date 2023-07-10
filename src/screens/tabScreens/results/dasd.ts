

let temp = document.querySelectorAll('price')
console.log(temp)
let counter = 0

for (let i=1; i<temp.length; i++ ){
    let string = temp[i].innerHTML
    
    let trimmed1 = string.replace('<!----><!---->', '')
    let trimmed2= trimmed1.replace('$', '')
    let trimmed3= window.Number(trimmed2)
    console.log(trimmed3)
    counter += window.Number(trimmed3)
}
console.log(counter)               //работает, проверял