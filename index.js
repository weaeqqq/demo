// 递归树节点
function treeNode(data, pid) {
  var arr = [];
  for (var i = 0; i < data.length; i++) {
    var node = data[i];
    if (node.pid == pid) {
      arr.push(node);
      arr = arr.concat(treeNode(data, node.id));
    }
  }
  return arr;
}

// 数组扁平化
function flatten(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// 数组去重
function unique(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) == -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 数组排序
function sort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 数组最大
const max = (arr) => Math.max.apply(null, arr);

// 数组切割
const chunk = (arr, size) => {
  var result = [];
  for (var i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

// 匹配非0的整数
const matchInt = (str) => {
  var reg = /^[1-9]\d*$/;
  return reg.test(str);
};

// 匹配价格
const matchPrice = (str) => {
  var reg = /^[0-9]+(.[0-9]{1,2})?$/;
  return reg.test(str);
};

// 匹配1-100的整数
const match100 = (str) => {
  var reg = /^[1-9]\d?$/;
  return reg.test(str);
};

// 浮点数计算精度
const accMul = (options) => {
  const { num1: arg1, num2: arg2, type = "addition", decimal = 2 } = options;
  const types = {
    addition: "addition", // 加法
    subtraction: "subtraction", // 减法
    multiplication: "multiplication", // 乘法
    division: "division", // 除法
  };

  const s1 = arg1.toString(),
    s2 = arg2.toString();
  const m1 = s1.split(".")[1] ? s1.split(".")[1].length : 0;
  const m2 = s2.split(".")[1] ? s2.split(".")[1].length : 0;
  const max = Math.max(m1, m2);
  const m = Math.pow(10, max);
  let result = 0;

  if (type == types.addition) {
    result = (arg1 * m + arg2 * m) / m;
  } else if (type == types.subtraction) {
    result = (arg1 * m - arg2 * m) / m;
  } else if (type == types.multiplication) {
    result = (arg1 * m * arg2 * m) / (m * m);
  } else if (type == types.division) {
    result = (((arg1 * m) / arg2) * m) / (m * m);
  }

  result =
    result.toString().split(".")[1]?.length > 2
      ? result.toFixed(decimal)
      : result;
  return parseFloat(result);
};

// 生成全局唯一ID
// 国外stackoverflow大佬： https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
// 链接对比：https://cythilya.github.io/2017/03/12/uuid/
const getUUID = () => {
  var d = Date.now();
  if (
    typeof performance !== "undefined" &&
    typeof performance.now === "function"
  ) {
    d += performance.now();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
};

// chrome桌面提醒
const notify = async (options) => {
  // chrome浏览器http网站开启桌面提醒 https://www.codesky.me/archives/using-notification-api-in-chrome.wind
  // 先获取通知接口权限
  var status = await Notification.requestPermission() === "granted";
  if (!status) {
    return;
  }

  var popNotice = function () {
    if (Notification.permission == "granted") {
      var notification = new Notification("Hi，帅哥：", {
        body: "视频需要验证，请点击按钮进行验证",
        icon: "//image.zhangxinxu.com/image/study/s/s128/mm1.jpg",
      });
    }
  };
  popNotice();
};


// 判断是否为空
const isEmpty = (obj) => {
  if (obj == null) return true;
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;
  if (typeof obj !== "object") return true;
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }
  return true;
}

// tree转换为list
const treeToList = (data) => {
  let list = [];
  const loop = (data) => {
    data.forEach((item) => {
      list.push(item);
      if (item.children) {
        loop(item.children);
      }
    });
  };
  loop(data);
  return list;
}

// 获取时段
function getTimeSeries(startTime, endTime) {
  const TIME_LIST = Array(48).fill("0");
  const isHasError = ![startTime, endTime].every(item => item.includes(":"));
  if (isHasError) {
    console.error("请输入正确的时间格式，如：00:00");
    return TIME_LIST.join("");
  }
  
  let [start1, start2] = startTime.split(":");
  let [end1, end2] = endTime.split(":");
  let start = start2 === "00" ? +start1 : +start1 + 0.5;
  let end = end2 === "00" ? +end1 : +end1 + 0.5;
  start = Math.ceil(start) * 2;
  end = Math.min(end * 2, TIME_LIST.length);

  for (let i = start; i < end; i++) {
    TIME_LIST[i] = "1";
  }
  return TIME_LIST.join("");
}
/*
getTimeSeries("01:00", "01:30")
'001000000000000000000000000000000000000000000000'
*/


// 获取世界货币列表 https://coinyep.com/zh/currencies
const getCurrencyList = () => {
  return [...$(".cliccabile")].reduce((res, item) => {
    const children = [...item.children].map(el => el.getAttribute("data-value"))
    const [, name, symbol, id] = children;
    res.push({name, id, symbol})
    return res;
  }, [])
}