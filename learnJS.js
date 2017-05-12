//字符串学习


// ' 引号是字符就用" 双引号
"I'm ok"
// 引号 双引号都是字符就用转义符\
"I'm\"ok\""
// ES6 开始反引号支持多行字符
alert(`反引号支持多行
ES6标准开始
测试是否支持ES6
`)

// 模板字符串

var name = "小明";
var age = 20;
var messsage = "你好，"+name +"，你今年"+"岁了";
alert(messsage);

// $ 自动替换字符串中的变量 

var name = "小红";
var age = 10;
var messsage1 = "你好，${name},你今年${age}岁了";
var messsage2 = '你好，${name},你今年${age}岁了';
alert(messsage1);
alert(messsage2);

// 操作字符串
var s1 = "hello,world";
s1.length;

// 要获取字符串某个指定位置的字符，使用类似Array的下标操作 索引从0开始
var s2 = "hello,world";
s2[0];//H
s2[6];//W

// 字符串是不可变的 如果对字符串的某个索引赋值 不会有任何错误 但也没有任何效果
var s3 = "test";
s3[0] = "x";
alert(s3);

// JavaScript为字符串提供的方法 调用不会改变字符串内容 而是返回一个新的字符串
var s4 = "hello";
var s5 = s4.toUpperCase();

// 把字符串全部变为小写
var s6 = s5.toLowerCase();

// 搜索指定字符串出现的位置
var s7 = "hello,world";
s7.indexOf("world");//返回7
s7.indexOf("World");//没有找到返回-1

// 获取指定索引区的子串
var s8 ="hello,word";
s8.substring(0,5);//从索引0开始到5 不包括5 返回hello
s8.substring(7);//从索引7开始到结束 返回world

