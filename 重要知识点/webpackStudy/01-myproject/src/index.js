// 完成计算功能
// 引入 计算方法
import cal from './asstes/js/cal'

// 得到所有的元素
var v1 = document.querySelector("#v1");
var v2 = document.querySelector("#v2");
var v3 = document.querySelector("#v3");
var sel = document.querySelector("#sel");
var btn = document.querySelector("#btn");

// 给按钮添加点击事件
btn.onclick = function() {
  // 1. 得到两个输入框中的内容
  var val1 = +v1.value;
  var val2 = +v2.value;
  // 2. 获取计算符号
  var sim = sel.value;
  // 3. 计算
  switch (sim) {
    case "0":
      v3.value = cal.jia(val1,val2)
      break;
    case "1":
      v3.value = cal.jian(val1,val2)
      break;
    case "2":
      v3.value = cal.cheng(val1,val2)
      break;
    case "3":
      v3.value = cal.chu(val1,val2)
      break;
  }
};
