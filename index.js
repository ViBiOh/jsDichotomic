//jsDichotomic@0.0.1
!function(root,factory){"use strict";"function"==typeof define&&define.amd?define(factory):"object"==typeof exports?module.exports=factory():root.Dichotomic=factory()}(this,function(){"use strict";function defaultCompareFn(a,b){return b>a?-1:a===b?0:1}function getCompareFn(compareFn){return"function"==typeof compareFn?compareFn:defaultCompareFn}function findIndex(element,array,compareFn){if(!array)return void 0;var compare=getCompareFn(compareFn),min=0,max=array.length-1;if(max>=0)for(;max>=min;){var current=Math.floor((min+max)/2),compareResult=compare(element,array[current]);if(0===compareResult)return{found:!0,index:current};0>compareResult?max=current-1:min=current+1}return{found:!1,index:min}}return{checkSort:function(array,compareFn){if(!array)return void 0;for(var compare=getCompareFn(compareFn),i=array.length-2;i>=0;i-=1)if(compare(array[i],array[i+1])>0)return!1;return!0},insert:function(element,array,compareFn){var result=findIndex(element,array,compareFn);return result?(array.splice(result.index,0,element),result.index):void 0},search:function(element,array,compareFn){var result=findIndex(element,array,compareFn);return result&&result.found?array[result.index]:void 0}}});