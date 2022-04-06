/* login form */
// input과 버튼 찾기
const loginForm = document.querySelector('#login_form');
const loginInput = document.querySelector('#login_form input');

function onLoginSubmit(event) {
	// 어떤 function에 대해 브라우저가 기본적으로 수행하는 동작을 막는다.
	// 자식 <li></li> 태그에 클릭 이벤트를 실행하고 만약 부모에도 클릭 이벤트가 있다면 타고타고 올라가 부모의 이벤트까지 의도하지 않게 실행되어 버림(버블링)
	// e.stopPropagation -> 부모태그로의 이벤트 전파를 중지하라는 의미.
	event.preventDefault();
	console.log(loginInput.value);
}

loginForm.addEventListener('submit', onLoginSubmit);
