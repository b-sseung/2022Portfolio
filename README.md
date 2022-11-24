## 📌 221124
JavaScript로 짜기 전에 HTML로 어떻게 DOM을 구성할 것인지 만들어가면서 CSS 틀 다짐
### ✔ 검색한 내용
1. 세로 가운데 정렬 방법 : https://www.codingfactory.net/10835
	- 한 줄이고, height를 정해놨다면 line-height로 설정
	- 부모객체에서 display: table로 설정해서 자식객체에서 display: table-cell, vertical-align: middle로 설정
	- display가 flex거나 grid면 align-items: center로 설정
2. %와 vw, vh의 차이는 길이를 가져올 때 스크롤바를 제외하냐 포함하냐의 차이
	- 그래서 이번의 경우에는 body에서 100%를 사용함
3. href="객체id" 를 쓰면 그 위치로 스크롤 이동함
4. iframe 태그를 활용하면 웹 in 웹이 가능함
5. 무언가를 고정할 땐 position: fixed
