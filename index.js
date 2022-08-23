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
const max = arr => Math.max.apply(null, arr);

// 数组切割
const chunk = (arr, size) => {
    var result = [];
    for (var i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

// 匹配非0的整数
const matchInt = str => {
    var reg = /^[1-9]\d*$/;
    return reg.test(str);
}

// 匹配价格
const matchPrice = str => {
    var reg = /^[0-9]+(.[0-9]{1,2})?$/;
    return reg.test(str);
}

// 匹配1-100的整数
const match100 = str => {
    var reg = /^[1-9]\d?$/;
    return reg.test(str);
}

// 浮点数计算精度
const accMul = (options) => {
    const {num: arg1, num2: arg2, type = "addition", decimal = 2 } = options;
    const types = {
        addition: 'addition', // 加法
        subtraction: 'subtraction', // 减法
        multiplication: 'multiplication', // 乘法
        division: 'division' // 除法
    }

    const s1 = arg1.toString(), s2 = arg2.toString();
    const m1 = s1.split('.')[1] ? s1.split('.')[1].length : 0;
    const m2 = s2.split('.')[1] ? s2.split('.')[1].length : 0;
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
        result = (arg1 * m / arg2 * m) / (m * m);
    }

    result = result.toString().split('.')[1]?.length > 2 ? result.toFixed(decimal) : result;
    return result;
}
