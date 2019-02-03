//创建一个类
function Stack() {
  let items = []; //存放数据的数组
  this.push = function(element) {
    items.push(element);
  }; //添加元素
  this.pop = function() {
    return items.pop();
  }; //删除元素
  this.peek = function() {
    return items[items.length - 1];
  }; //查看栈顶元素
  this.isEmpty = function() {
    return items.length == 0;
  }; //判断是否为空
  this.size = function() {
    return items.length;
  }; //获取栈个数
  this.clear = function() {
    return items = [];
  }; //清空栈
  //辅助方法
  this.print = function() {
    console.log(items.toString());
  };
  this.toString = function() {
    return items.toString();
  }
}

//实例
let stack = new Stack();
console.log(stack.isEmpty());//true
stack.push(5);
stack.push(6);
console.log(stack.isEmpty());//false
console.log(stack.print());//[5, 6]
const res = stack.pop();
console.log(res);
console.log(stack.print());//[5]
console.log(stack.size()); //1
stack.push(7);
stack.push(8);
console.log(stack.size()); //3
stack.clear();
console.log(stack.isEmpty()); //true
