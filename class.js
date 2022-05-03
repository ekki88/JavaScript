//class: tempite
//object: instance of a class


// 1. class declarations
class person {
    // constructor 생성자
    constructor(name, age) {
        // fields  
        this.name = name;
        this.age = age;
    }


    // methods    
    speak() {
        console.log(`${this.name}: hello!`);
    }
}


// 2. getter and setters
class user {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    get age() {
        return this._age;
    }

    set age(value) {
        //if (value < 0 ) {
        //    throw error('age can not be negative');
        //}
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new user ('bo', 'mi', -1);
console.log(user1.age) ;


// 3. fields ( public, private)
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privatefield);


// 4. static
class article {
    static publisher = 'mi coding' ;
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(article.publisher);
    }
}

const article1 = new article(1);
const article2 = new article(2);
console.log(article.publisher);
article.printPublisher();


// 5. Inheritance 상속과 다양성
class shape{
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    drow() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return width * this.height;
    }
}

