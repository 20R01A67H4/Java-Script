// let a=Symbol('id')
// let b=Symbol('id')
// console.log(a===b)
// console.log(a)
// console.log(a.description)
// console.log(typeof a)

// const c={
//     fname:'rahul',
//     [a]:'anand'
// }
// c[b]='babu'
// console.log(c)

// for(let m in c){
//     console.log(c[m])
// }

// const d=Object.assign({},c)
// console.log(d[a])



// static methods---------
// let a=Symbol.for('id')
// let b=Symbol.for('id')//It checks 'id' in global symbol registry(GSR) and returns true if exist else creates new in global symbol registry 
// console.log(b)//true


// let a=Symbol.for('id')
// let b=Symbol.keyFor(a)//Takes symbol value and checks in global symbol registry(GSR) and returns string value.
// console.log(b)

// console.log(Symbol('desc').toString());// Expected output: "Symbol(desc)"
// console.log(Symbol.for('foo').toString());// Expected output: "Symbol(foo)"



