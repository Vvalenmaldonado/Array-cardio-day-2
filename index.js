const people = [
    {name: 'Wes', year: 1988},
    {name:'Krait',year:1986},
    {name:'Irv',year: 1970},
    {name: 'Lux', year: 2015},

];

const comments =[
    {text:'Love this!', id: 523423},
    {text: 'Super good', id: 823423},
    {text:'You are the best', id: 203984},
    {text: 'Ramen in my fav food ever', id:123532},
    {text: 'Nice nice nice!', id: 542328}
];

//Some and Every checks
//Array.protoype.some()// Is at least one person 19?
const isOld = people.some(e=>{
   const currentYear = (new Date()).getFullYear()
    if(currentYear - e.year >= 19){
        return true
    }
})  
console.log(isOld)
//Array.prototype.every()// is everyone 19?

const allAdults = people.every(e=>(new Date()).getFullYear() - e.year>= 19);
console.log(allAdults)

//Array.prototype.find()
//Find is like filter, but instead returns just the one you are looking for
//find the comment with the ID of 823423

const find = comments.find(e=>e.id === 823423)
console.log(find) 

//Array.prototype.findIndex()
//Find the comment with this ID
//delete the comment with the ID of 823423

const fI = comments.findIndex(e=> e.id === 823423)
console.log(fI)

comments.splice(fI, 1)
console.log(comments)
