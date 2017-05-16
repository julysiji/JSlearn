// for 循环
var x = 0;
var i;

for(i=1;i<=100;i++){
    x = x+i;
}
x;

//for 循环练习
var x = 1;
var i;
for(i=1;i<=10;i++){
  x = x*i;
}
x;

// for循环最常用的地方是利用索引开遍历数组
var arr = ["Apple","Google","Microsoft"];
var i,x;
for(i=0; i<arr.length;i++){
    x = arr[i];
    alert(x);
}

//for循环的3个条件都是可以省略的 如果没有退出循环的判断条件 就必须使用break语句退出循环 否则就是死循环
var x=0;
for(;;){//将无限循环下去
    if(x>100){
        break;//通过if判断来退出循环
    }
    x++;
}

//for...in
//for 循环的一个变体是for...in循环 可以把一个对象的所有属性一次循环出来
var o = {
    name:"Jack",
    age:20,
    city:"beijing"
};

for(var key in o){
    if(o.hasOwnProperty(key)){
        alert(key);
    }
}

//由于array也是对象 而它的每个元素的索引被视为对象的属性 因此 for...in 循环可以直接循环出Array的索引
var a = ["A","B","C"];
for(var i in a){
    alert(i);
    alert(a[i]);
}


//while for循环在已知循环的初始和结束条件时非常有用 而上述忽略了条件的for循环 容易让人看不清循环逻辑此时用while循环更佳
// while 循环只有一个判断条件 条件满足 就不断循环 条件不满足时 则退出循环 比如计算100以内的奇数之和
var x = 0;
var n = 99;
while(n>0){
    x = x+n;
    n = n-2;
}
x;


var arr = ['Bart', 'Lisa', 'Adam'];

for(var x in arr){
 alert(`hello,${arr[x]}!`);
//  alert('欢迎'+arr.sort()+'同学！');
 alert("欢迎"+arr.sort()+"同学！");
}