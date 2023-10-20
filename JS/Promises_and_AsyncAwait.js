// let pro=new Promise((resolve,reject)=>{
//     // resolve(56);
//     reject("No")
// });
// pro.then((data)=>{
//     console.log('Done',data)
// }).catch((data)=>{
//     console.log('sorry',data)
// })


// let pro=new Promise((resolve,reject)=>{
//     resolve(56);
//     // reject("No")
// });
// pro.then((data)=>{
//     console.log('Done',data)
// },(data)=>{
//     console.log(data)
// })


// let pro=new Promise((resolve,reject)=>{
//     // resolve();
//     reject("No")
// });
// pro.then(()=>{console.log('1')})
// .then(null,(data)=>{console.log(data,'20')})


// let p=new Promise((resolve,reject)=>{
//     resolve(56)
// })
// p.then((data)=>console.log(data,'kill'))
// console.log(p);




// let pro=new Promise((resolve,reject)=>{
//     // resolve(1);
//     reject(new Error("HEY"))
// });
// pro.then((data)=>(data*2))
// .then((data)=>(data*3))
// .then((data)=>(data*4))
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))


// let a=new Promise((resolve,reject)=>{resolve(1)})
// let b=Promise.reject("no")
// let c=20;
// let d=Promise.all([a,b,c])
// d.then((data)=>console.log(data))
// let d=Promise.allSettled([a,b,c,Promise.reject(6)])
// d.then((data)=>console.log(data))
// let d=Promise.any([a,b,c,Promise.reject(6)])
// d.then((data)=>console.log(data))
// let d=Promise.race([a,b,c,Promise.reject(6)])
// d.then((data)=>console.log(data))
//Promise.resolve()
//Promise.reject()


// Promise.reject('lok').catch((data)=>console.log(data))
// let p=new Promise((res,rej)=>rej(new Error('kill')))
// p.catch((data)=>console.log(data))


// let s=7;
// let d=s.toString()
// console.log(d)
// let e='99';
// let u=Number.parseInt(e)
// console.log(u)



// let n=async ()=>{
//      return 2
// }
// console.log(n())

// let j=new Promise((res,rej)=>res(2))
// console.log(j)

// let k=Promise.resolve(2)
// console.log(k)




//  let lp=30

// let lp= function (){
//     for(let i=0;i<2000000000;i++){}
//     return 3;
// }

// let l=async function (){
//     for(let i=0;i<2000000000;i++){}
//     return 2;
// }
// console.log(l())

// let n=async ()=>{
//     let p=await l();
//     console.log(p)
//     let q=await lp();
//     let qq=await new Promise((res,rej)=>{res(30)});
//     console.log(p,q,qq)
//      return 20
// }
// console.log(n())
// n()





// function hello(error,src){
//     if(error){
//         console.log(error)
//         return;
//     }
//     console.log(src)
// }

// function hii(){
//     hello(null,34);
// }
// hii();