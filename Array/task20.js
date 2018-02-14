var arr=["asfsagshrjhgeafagga"];
var asd = arr.toString();
var arr2=[];
for(i in asd){
    if (arr2[asd[i]]!=undefined) {
        (arr2[asd[i]]++)
    } else {
        (arr2[asd[i]]=1)
    }

}
console.log(arr2);
