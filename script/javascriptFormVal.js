// JavaScript Document

//return true if the input value is not empty
function notEmpty(inputID, errorMsg){
	var theInput = document.getElementById(inputID).value.trim();
	var isValid = (theInput.length !== 0);	
	showMsg(isValid,errorMsg,inputID);
	return isValid;
}

function nameValid(inputID, errorMsg){
	var nameInput = document.getElementById(inputID).value.trim();
	var isValid = nameInput.match(/^[A-Za-z]+$/);
	showMsg(isValid,errorMsg,inputID);
	return isValid;
}

function emailValid(inputID, errorMsg){
	var emailInput = document.getElementById(inputID).value.trim();
	var isValid = /(.+)@(.+){2,}\.(.+){2,}/.test(emailInput);
	showMsg(isValid,errorMsg,inputID);
	return isValid;
}

function allNumbers(inputID, errorMsg){
	var theInput = document.getElementById(inputID).value.trim();
	var isValid = theInput.match(/(8|9)\d{7}/);
	showMsg(isValid,errorMsg,inputID);
	return isValid;
}
function checkLength(inputID, errorMsg, minLength, maxLength){
	var theInput = document.getElementById(inputID).value.trim();
	var isValid = (theInput.length >= minLength) && (theInput.length <= maxLength);
	showMsg(isValid,errorMsg,inputID);
	return isValid;
}

function notDefaultValue(selectID, errorMsg){
	var itemIndex = document.getElementById(selectID).selectedIndex;
	var inputValue = document.getElementById(selectID).options[itemIndex].value;
	var isValid = (inputValue !== "$0.00");
	showMsg(isValid,errorMsg,selectID);
	return isValid;
}

function showMsg(isValid,errorMsg,inputID){
	if (!isValid){
		alertify.error(errorMsg);
		document.getElementById(inputID).focus();
	}
}