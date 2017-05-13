// JavaScript中Arry可包含任意数据数据类型 并通过索引来访问每个元素
var arr1 = [1,2,3.14,"hello",true];
arr.length;//6 数组长度 就是数组内的元素个数

// 直接给array的length 赋一个新的值 会导致array大小的变化
var arr2 = [1,2,3]; 
arr2.length;//3
arr2.length = 6;
arr2;//arr 变为[1,2,3,undefined,undefined,undefined]
arr2.length = 2;
arr2;// arr变为[1,2]

// Array 可以通过索引把对应的元素修改为新的值 因为对Array的索引进行赋值 会直接修改这个Array
var arr3 = ["A","B","C"];
arr3[1] = 99;
arr3;//arr3 现在变为["A",99,"C"]

// 如果通过索引赋值时 索引超过了范围 同样会引起Array大小的变化
var arr4 = [1,2,3];
arr4[5] = "x";
arr4;//arr4变为[1,2,3,undefined,undefined,x]
// 大多数编程语言不允许直接改变数组的大小 越界访问索引会报错 
// 但是JavaScript的Array 不会报错 不建议直接修改array的大小  访问索引时 要确保索引不会越界

// indexOf
// 与String类似 Array也可以通过indexOf来搜索一个指定的元素的位置
var arr5 = [10,20,"30","xyz"];
arr5.indexOf(10);//元素10的索引为0
arr5.indexOf(20);//元素20的索引为1
arr5.indexOf(30)//元素30的索引没有找到返回-1
arr5.indexOf("30")//元素"30"的索引为2

// slice
//slice() 就是对应String的substring()版本 它截取Array的部分元素 然后返回一个新的Array
var arr6 = ["A","B","C","D","E","F","G"];
arr6.slice(0,3);//从索引0开始 到索引3结束 但不包括索引3：["A","B","C"]
arr6.slice(3);//从索引3开始到结束["D","E","F","G"]
// slice()的起止参数 包括开始索引 不包括结束索引 slice() 起始参数超过数组长度 则返回空数组
// 如果不给slice()传递任何参数 它就会从头到尾截取所有元素 利用这一点 我们可以很容易的复制一个Array
var arr7 = ["A","B","C","D","E","F","G"];
var aCopy = arr7.slice();
aCopy;
aCopy === arr7;//false

// push和pop
// push()向Array的末尾添加若干元素，pop()则把Array的最后一个元素删除掉
var arr8 = [1,2];
arr8.push("A","B");//返回Array新的长度4
arr8;//[1,2,"A","B"]
arr8.pop();//pop()返回"B"
arr8;//[1,2,"A"]
arr8.pop(); arr8.pop();arr8.pop();//连续pop 3次
arr8;//[]
arr8.pop();//空数组继续pop不会报错 而是返回underfined
arr8;

// unshift和shift
//如果要往Array的头部添加如果元素 使用unshift()方法，shift()方法则把Array的第一个元素删掉
var array = [1,2];
array.unshift("A","B");//返回Array新的长度 4
array;//["A","B",1,2]
array.shift();//"A"
array;//["B",1,2]
array.shift();array.shift();array.shift();//连续shift三次
array;//[]
array.shift();//空数组连续shift 不会报错 而是返回underfined
array;//[]

//sort
//sort()可以对当前Array进行排序 它会直接修改当前Array的元素位置 直接调用时 按照默认顺序排序
var array1 = ["B","C","A"];
array1.sort();
array1;//["A","B","C"]

//reverse
//reverse()把整个Array的元素给掉个个 也就是翻转
var array2 = ["one","two","three"];
array2.reverse();
array2;//["three","two","one"]

//splice
//splice()方法是修改Array的万能方法，它可以从指定的索引开始删除若干元素 然后再从该位置添加若干元素
var array3 = ["Microsoft","Apple","Yahoo","AOL","Excite","Oracle"];
array3.splice(2,3,"Google","Facebook");//返回删除的元素["Yahoo","Aol","Excited"]
array3;//["Microsoft","Apple","Google","Facebook","Oracle"];
//只删除不添加
array3.splice(2,2);// ['Google', 'Facebook']
array3;//['Microsoft', 'Apple', 'Oracle']
//只添加不删除
array3.splice(2,0,"Google","Facebook");//返回[]，因为没有删除任何元素
array3;//["Microsoft", "Apple", "Google", "Facebook", "Oracle"]

//concat()
//concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array
var array4 = ["A","B","C"];
var added = array4.concat([1,2,3]);
added;//["A", "B", "C", 1, 2, 3]
//注意 concat()方法并没有修改当前Array，而是返回了一个新的Array
//实际上，concat()方法可以接收任意个元素Array，并且自动把Array拆开，然后全部添加到新的Array里
var array5 = ["A","B","C"];
array5.concat(1,2,[3,4]);//["A", "B", "C", 1, 2, 3, 4]

//join
//join() 方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来 然后返回连接后的字符串
var array6 = ["A","B","C",1,2,3];
array6.join("-");//A-B-C-1-2-3
// 如果Array的元素不是字符串 将自动转换为字符串后在连接

// 多维数组
// 如果数组的某个元素又是一个Array则可以形成多维数组
var array7 = [[1,2,3],[400,500,600]];
// 上述Array包含三个元素，其中两个元素本身也是Array
// 通过索引取到500 这个值
var x = arr[1][1];

//练习 你拿到了新同学名单，请排序后显示：欢迎XXX，XXX，XXX和XXX同学！
var arr = ['小明', '小红', '大军', '阿黄'];
alert(`欢迎${arr.sort().slice(0, 3).join('，')}和${arr[3]}同学！`);
// 好像是必须要用反引号




