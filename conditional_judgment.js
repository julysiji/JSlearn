// JavaScript 使用if(){...}else{...}来进行判断 基本和C语言一样
var age = 20;
if(age>=18){//如果age>=18位true 则执行if 语句块
    alert("adult");
}else{//否则执行else语句块
    alert("teenager");
}
//如果只有一条语句可以省略{} 如果后面想添加语句 却忘记写{}那么后面那句 将会每次都执行 所以尽量还是都加上

// 多行条件判断
//更细致的判断条件 可以使用if..else..的组合
var age = 3;
if(age>=18){
    alert("adult");
}else if(age>=6){
    alert("teenager");
}else{
    alert("kid");
}
// 上述多个if...else...的组合 实际上相当于两层 if...else...
var age = 3;
if(age>=18){
    alert("adult");
}else{
    if(age>=6){
        alert("teenger");
    }else{
        alert("kid");
    }
}
// 注意 if...else...语句的执行特点是二选一 在多个if...else...语句中如果某个条件成立 后续不会再判断

var xiaoming = {
    name:"xiaoming",
    height:1.70,
    weight:53.5
};

var value = xiaoming.weight/(xiaoming.height*xiaoming.height);

if(value>32){
    alert("严重肥胖");
}else if(value>28){
    alert("肥胖");
}else if(value>25){
    alert("过重");
}else if(value>18.5){
    alert("正常");
}else{
    alert("过轻");
};


