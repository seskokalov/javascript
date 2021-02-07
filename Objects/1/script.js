function doggo(name, kind){
    this.name = name;
    this.kind = kind;

    this.speak = function(){    
    return `${this.name} says WOOF!!!`
    }
}

let dog = new doggo('Sofi', 'Labrador');
console.log(dog.speak());