
/** 
 * 영문자로 시작하는 영문자 또는 숫자 6~20자 정규식
 * @param {*} asValue 
 * @returns 
 */
export const isId = (asValue) => {
	var regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
	return regExp.test(asValue);
}

/** 
 * 한글 영문 정규식
 * @param {*} asValue 
 * @returns 
 */
export const isCorrect = (asValue) => {
	var regExp = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]*$/;
 
	return regExp.test(asValue);
}

/** 
 * 8 ~ 16자 영문, 숫자 조합 정규식
 * @param {*} asValue 
 * @returns 
 */
export const isPassword = (asValue) => {
	var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
	return regExp.test(asValue);
}

/** 
 * 8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합
 * @param {*} asValue 
 * @returns 
 */
export const isSecPassword = (asValue) => {
    var regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
 
	return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

/** 
 * 이메일 체크
 * @param {*} asValue 
 * @returns 
 */
export const isEmail = (asValue) => {
	var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	return regExp.test(asValue);
}

/**
 * 닉네임 체크 정규식
 * @param {*} asValue 
 * @returns 
 */
export const isNickName = (asValue) => {
	var regExp1 = /(^[가-힣0-9]{5,10}|^[a-zA-Z]{5,16})/g;
	var regExp2 = /(운영자|관리자|babble)/g;
	
	let res = false;
	
	res = regExp1.test(asValue);
	if(res) {
		let wordCheck = !regExp2.test(asValue);
		return wordCheck;
	}
	return false;
}