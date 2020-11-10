// 防抖函数，防止重复提交表单请求
// export  function Debounce (fn,wait){
//     let time
//     return function () {
//       let args = arguments
//       let ctx = this
//       clearTimeout(time)
//       time = setTimeout(()=>{
//         fn.apply(ctx,args)
//       },wait)
//     }
//   }

//   //节流函数，防止一段时间内重复提交
//   export function throttle (fn,wait){
//     let time
//     return (...args) => {
//       let ctx = this
//       if(time) {return}
//       time = setTimeout(() => {
//         fn.apply(ctx,args)
//         time = null
//       },wait)
//     }
//   }

// throttle 和 debouce 函数的底层实现
function limit(func, wait = 300, isDebounce = false) {
  let timeout
  return function limit1(...args) {
    const context = this
    // 封装函数,用于延迟调用
    const throttler = function throttler() {
      // 只是节流函数的时候,对其timeout进行赋值为null,这样可以设置下一次的setTimtout
      timeout = null
      func.apply(context, args)
    }
    // 如果debouce是true的话,前一个函数的调用timeout会被清空,不会被执行
    if (isDebounce) clearTimeout(timeout)
    // 如果debouce是true 或者 timeout 为空的情况下,设置setTimeout
    if (isDebounce || !timeout) timeout = setTimeout(throttler, wait)
  }
}

// throttle 节流函数
export function throttle(func, wait) {
  return limit(func, wait, false)
}

// debouce 多次调用,只执行最后一次.
export function Debounce(func, wait) {
  return limit(func, wait, true)
}

//时间补零
export function AddZero(time){
  if (time >= 9) {
    return time + 1
  } else {
    return `0${time+1}`
  }
}

//分类型函数
export const Type = (array) => {
  var  array1 = array.filter(item => (item.flag === 0))
  var  array2 = array.filter(item => (item.flag === 0))
  var  array3 = array.filter(item => (item.flag === 0))
  return [
    {title:'老曹说事1',list:array1},
    {title:'老曹说事2',list:array2},
    {title:'老曹说事3',list:array3},
  ]
}