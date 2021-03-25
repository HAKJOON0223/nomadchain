interface Human{
    name:string;
    age:number;
    gender:string;
}

const person = {
    name:"nicolas",
    gender:"male",
    age:22
}


const sayHi = (person:Human):void => {
    console.log(`hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
}

sayHi(person);

export {};