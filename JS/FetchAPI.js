// let b=fetch("https://jsonplaceholder.typicode.com/todos/1");//return unsettled promise in the form of http representation response object.
// let c=b.then((d)=>(d.json()),()=>console.log('Error')).then((d)=>console.log(d))
// console.log(c)


// let b=async ()=>{
//     return fetch("https://jsonplaceholder.typicode.com/todos/1")
// }
// console.log(b())


// let p=new Promise((resolve,reject)=>{resolve(2)})
// console.log(p)
// p.then((d)=>console.log(d*2))

// async function rahul(){
//     let a=await fetch("https://jsonplaceholder.typicode.com/todos/1")//returns settled promise
//     let b=await a.json()
//     console.log(b)
// }
// rahul()


//Fetch Operations//Dev Community
let url="https://jsonplaceholder.typicode.com/todos/1";
let data=  {
    "userId": 10,
    "id": 1,
    "title": "delectus rahul",
    "completed": false
  }
let Obj={
    method:'DELETE',
    // headers:{
    //     'Content-type':'application/json'
    // },
    // body : JSON.stringify(data)
}
async function crud(url,Obj){
   let b=await fetch(url,Obj)
   let c=await b.json()
   console.log(c)
}
crud(url,Obj)