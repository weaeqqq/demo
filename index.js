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