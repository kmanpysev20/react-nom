//class
let name = 'pys' //전역변수

class Product { //추상화
    name = ''
    price = 0
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class TV extends Product { //상속
    size = ''
    constructor(name, price, size) { //생성자 (초기값 설정 함수) , 매개변수
        super(name, price)
        this.size = size;
    }   
}

class AC extends Product { //상속
    type = '';
    constructor(name, price, type) {
        super(name, price)
        this.type = type;
    }
}

let tv1 = new TV('pys1 tv' , 200 , '56inch');
let tv2 = new TV('pys2 tv' , 300 , '60inch');
let ac1 = new AC('pys1 ac' , 50 , 'vertical');
console.log(tv1,'안녕')
console.log(tv2)
console.log(ac1)

    //객체
    // let tv1 = {
    //     name : 'pys1 tv',
    //     price : 200,
    //     size : '56inch'
    // }

    //객체
    // let tv2 = {
    //     name : 'pys2 tv',
    //     price : 300,
    //     size : '66inch'
    // }