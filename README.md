## 📌 221126

#### ✔ 검색한 내용

## 📌 221125
메뉴 함수형 프로그래밍으로 구현. 메뉴 언더바 구현
#### ✔ 검색한 내용
1. a 태그 href 밑줄 제거 방법 : text-decoration: none; 으로 설정
2. 글자 커서 제거 : user-select: none; 으로 설정
3. 루트 html 설정의 폰트 크기로 하고 싶으면 rem 단위를 쓸 것 => em도 있으나 둘의 차이가 있음
	- html 기본 폰트 크기가 16px이므로 10px로 바꾸고 싶다면 html의 font-size를 10px로 바꿀 것
4. href의 이동을 부드럽게 설정하려면 scroll-behavior: smooth로 변경
5. css에서 last-child와 last-of-type의 차이
	- 마지막으로 오는 태그를 가져오는 공통점
	- last-child의 경우 맨 마지막의 태그와 가져오려는 태그가 동일하지 않으면 null을 반환
	- last-of-type의 경우 맨 마지막의 태그가 아니더라도 해당 태그의 맨 마지막 값을 가져옴
	> 참고 링크 : https://homzzang.com/b/js-1266
6. scroll 위치 : window.scrollX, window.scrollY 이용
	> 참고 링크 : https://www.delftstack.com/ko/howto/javascript/get-scrollbar-position-in-javascript/
7. 스크롤에 따른 언더바 구현 과정에서 스크롤에 따른 DOM 요소 좌표 구할 경우
	> 참고 링크 : https://maxkim-j.github.io/posts/dom-pos-scroll/
	- 이번에는 DOM.offsetTop과 DOM.offsetHeight로도 구현이 가능해서 위의 내용은 참고하지 않았음.
8. 가로 슬라이드 언더바 구현시 참고 링크
	> 참고 링크 : https://jforj.tistory.com/207
9. CSS로 언더바 구현 시 참고 링크
	> 참고 링크 : http://rwdb.kr/342357954/
---

## 📌 221124
JavaScript로 짜기 전에 HTML로 어떻게 DOM을 구성할 것인지 만들어가면서 CSS 틀 다짐
#### ✔ 검색한 내용
1. 세로 가운데 정렬 방법 : https://www.codingfactory.net/10835
	- 한 줄이고, height를 정해놨다면 line-height로 설정
	- 부모객체에서 display: table로 설정해서 자식객체에서 display: table-cell, vertical-align: middle로 설정
	- display가 flex거나 grid면 align-items: center로 설정
2. %와 vw, vh의 차이는 길이를 가져올 때 스크롤바를 제외하냐 포함하냐의 차이
	- 그래서 이번의 경우에는 body에서 100%를 사용함
3. href="객체id" 를 쓰면 그 위치로 스크롤 이동함
4. iframe 태그를 활용하면 웹 in 웹이 가능함
5. 무언가를 고정할 땐 position: fixed
