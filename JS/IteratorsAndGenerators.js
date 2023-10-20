// While and do-while-------------------
//         let b=3;
//         do{
//             console.log('hi');
//         }while(b<0)
        
//         while(b<0){
//             console.log('hi');
//         }       

//Array case---------------
// let a=[6,3,7,88,9,2]
// for(let i=0;i<a.length;i++){console.log(a[i])}
// a.forEach((e)=>console.log(e))//Array method
// for(let e in a){
    //     console.log(a[e])
    // }
    // for(let e of a){
    //     console.log(e)
    // }
    
//Key-Value case-----------------

// let b={c:1,d:'name',e:'gas'}
// for(i=0;i<Object.keys(b).length;i++){
//     let key=Object.keys(b)[i]
//     console.log(b[key])
// }

// for(let g in b){
        //     // console.log(b[e])
        //     console.log(b[g])
        // }
        


        
// //ITERATORS------------------
// An iterator is an object that can access one item at a time from a collection while keeping track of its current position.


// let a=[]
// a=[1,2,3,4,5,6,7]
// let b=a[Symbol.iterator]() //@@iterator function implementation //b is an iterator object
// console.log(b.next())
// console.log(b.next().value)
// console.log(b.next().value)

//Customizing iterators
// let a=[4,2,9,7,5,3];
// function rahul(arr){
//     let index=0
//     return {
//         next:function(){
//             if(index<arr.length) {
//                 index;
//                 return {
//                     value:arr[index++],
//                     status:'Pending'
//                 }
//             }
            // else{
            //     return {
            //         status:'Completed'
            //     }
//             }
//         }
//     }
// }
// let b=rahul(a) //b is an iterator object
// console.log(b.next().value)
// console.log(b.next().value)
// console.log(b.next().value)
// console.log(b.next().value)
// console.log(b.next().value)
// console.log(b.next().value)
// console.log(b.next().value)



// GENERATORS------------------
// A generator is  function that produces a sequence of results instead of a single value, i.e you generate ​a series of values.


// function* gen(){
//     // return [4,3,2,5]
//     // return {l:2,m:'hey'}
// }            
// let b=gen()
// // console.log(b.next().value[0])
// // console.log(b.next().value.m)

// function* gen(){
//     yield [2,9,4,6];
// }            
// let b=gen()
// console.log(b.next().value[0])



// function child(){
//     for(i=0;i<1000000000;i++){}
//     return 'mill'//If value is not returned or simply written return without any value, then we get undefined.
// }
// function* gen(){
//    console.log('Kill')
//     yield child()
//     console.log('pandey')
//     yield 'haha'
// }            
// let b=gen()
// console.log(b.next().value)//call//Number of calls for number of yields.
// console.log(b.next().value)//call
// console.log(b.next())//call


// function* child(){
//     // for(i=0;i<1000000000;i++){}
//     console.log('mill')
//     yield [2,1]//consume call
// }
// function* gen(){
//    console.log('Kill')
//     yield* child()//It is not general yield.Doesn't consume call
//     console.log('pandey')
//     yield* 'haha'//haha - each letter consumes a call
//     yield* [11,2,6,4]//each number in array consumes a call
// }            
// let b=gen()
// console.log(b.next().value)//call
// console.log(b.next().value)//call
// console.log(b.next())//call
// console.log(b.next())//call
// console.log(b.next())//call




// function* gen(){
//     console.log('one')
//     yield 1
//     console.log('two')
//     yield 2
//     console.log('three')
//     yield 3
//     console.log('four')
// }
// let b=gen();
// console.log(b.next())
// console.log(b.next())
// console.log(b.throw('hey'))//throw an error and terminate the execution
// console.log(b.return('hey'))//stops execution by given value in return


  