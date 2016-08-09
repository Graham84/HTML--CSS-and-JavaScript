function validate(form) {
var returnValue = “”;
returnValue += validateConfirmPassword(form.txtPassword,
form.txtPassword2,
‘Your passwords did not match’);
returnValue += validateMinimumLength(form.txtPassword, 6,
‘Your password must be at least 6 characters long’);
returnValue += validateMinimumLength(form.txtUserName, 6,
‘Your username must be at least 6 characters long’);
if (returnValue != “”) {
return false;
}
return true;
}