// Object inheritance--------
// let a={
//     id:1,
//     name:'ram'
// }
// let b={
//     idd:2,
//     names:'laxman'
// }
// b.__proto__=a;
// console.log(b)


// let a={
//     id:1,
//     name:'ram'
// }
// let b=Object.create(a,{
//     idd:{value:2,writable:true},
//     name1:{value:'ramu'}
// });
// b.idd='kill'
// console.log(b.idd)


// let a={
//     id:1,
//     name:'ram'
// }
// let c=Object.create(a)
// c.idd=3
// console.log(c.id)


// let a={
//     id:1
// }
// a.__proto__.name='ram is good boy'
// // let b=Object.create(a)
// let b={};
// b.__proto__= a
// console.log(b.name)


//Constructor Inheritance----------
// function rahul(id,name){
//     this.id=id;
//     this.name=name;
// }
// function anand(id,name,place){
//     rahul.call(this,id,name)
//     this.place=place;
    // anand.__proto__=Object.create(rahul.__proto__)
    // anand.prototype=Object.create(rahul.prototype)
    // anand.__proto__=rahul.__proto__
    // anand.prototype=rahul.prototype
    // anand.__proto__=new rahul()
// }
// let yes=new anand(1,'ram','hyd')
// console.log(yes.name)



// function rahul(id,name){
//     this.id=id;
//     this.name=name;
// }
// rahul.prototype.user='texas'//used by different objects of same constructors

// function anand(id,name,place){
//     rahul.call(this,id,name)
//     this.place=place;
//     // anand.__proto__=Object.create(rahul.__proto__)
//     // anand.prototype=Object.create(rahul.prototype)
//     // anand.__proto__=rahul.__proto__
//     anand.__proto__=new rahul()
// // }
// // let yes=new rahul(1,'ram')
// // yes.__proto__.villa='hyd'
// let yes1=new anand(1,'ram','kill')
// // // let no=new rahul(1,'ram')
// // // console.log(rahul.prototype===rahul.__proto__)
// console.log(yes1.user)

class Rahul{
    // constructor(){
    //     this.name=function(){}
    //     console.log('Rahul')
    // }
}
// class Anand extends Rahul{

//     // constructor(){
//     //     super()
//     //     this.name=function(){
//     //     console.log('hi')}
//     //     this.name()
//     // }
// }
// let b=new Anand();