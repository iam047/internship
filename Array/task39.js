function filter(arr) {
    var len = arr.length;
    var i;
    for(i = 0; i < len; i++ )
        arr[i] && arr.push(arr[i]);
    arr.splice(0 , len);
  console.log(arr);
};
var arr = [1,2,null, undefined,3,'',3,'','',0,'','',[],'',{},'',5,'',6,false,false,'',''];
filter(arr);