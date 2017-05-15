// JS的对象是一种无序的集合数据类型 由若干键值对组成
// JavaScript 的对象用于描述现实世界中的某个对象
var xiaoming = {
name:"小明",
birth:1990,
school:"No.1 Middle School",
height: 1.70,
weight: 65,
score:null

};
// JavaScript 用一个{...}表示一个对象，键值对以xxx:xxx形式声明，用,隔开 
// 最后一个键值对不需要在末尾加,低版本浏览器有可能报错
// 上述对象 申明了一些属性和值 把这个对象赋值给变量xiaoming后 就可以通过变量xiaoming来获取小明的属性
xiaoming.name; //"小明"
xiaoming.birth; //1990

// 访问属性是通过.操作符来完成的 但这要求属性名必须是一个有效的变量名 如果属性名 包含特殊字符 就必须用''括起来
var xiaohong = {
    name:"小红",
    'middle-school':"No.1MiddleSchool",
    "favorite-color":"green"
};
//xiaohong的属性名middle-school不是一个有效的变量 需要用""括起来 访问时用 xiaohong["middle-school"];
//xiaohong.name的写法明显更为简洁 所以在编写JavaScript代码的时候 属性名尽量使用标准变量名

//JavaScript的对象所有属性都是字符串 不过属性对应的值 可以是任意数据类型
//如果访问一个不存在的属性值不报错 会返回 undefined  
var xiaoming = {
    name:"小明"
};
xiaoming.age;


// 由于JavaScript的对象是动态类型 你可以自由地给一个对象添加删除属性
var xiaoming = {
    name:"小明"
};

xiaoming.age;// undefined
xiaoming.age = 18;// 新增一个age属性
xiaoming.age;//18
delete xiaoming.age;//删除age属性
xiaoming.age;//undefined
delete xiaoming["name"];//删除name属性
xiaoming.name;//undefined
delete xiaoming.school;//删除一个不存在的school属性不会报错

// 检测xiaoming是否拥有某一属性 可以用in操作符
var xiaoming = {
    name:"小明",
    birth:1990,
    school:"No.1Middle School",
    height:1.70,
    weight:65,
    score:null
};
"name" in xiaoming;//true
"grade" in xiaoming;//false
// 不过要小心 如果in 判断一个属性存在 这个属性不一定是xiaoming 的 它可能是xiaoming继承得到的
"tostring" in xiaoming;//true
//因为tostring定义在object对象中，而所有对象最终都会在原型链上指向object 所以xiaoming也拥有tostring属性
//判断一个属性是否是xiaoming自身拥有的 而不是继承得到的 可以用hasOwnProperty()方法；
var xiaoming = {
    name:"小明"
};
xiaoming.hasOwnProperty("name")//true
xiaoming.hasOwnProperty("toString");//false






