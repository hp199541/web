//检验手机号
export const valudatetel = function (tel) {
  var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
  if (!myreg.test(tel)) {
      return false;
  } else {
      return true;
  } 
}
//校验密码
export const valudatepass = function (pass) {
  var patrn=/^(\w){6,20}$/;
  if (!patrn.exec(pass)) return false
  return true
 
}