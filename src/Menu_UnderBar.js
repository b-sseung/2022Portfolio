export default function Menu_UnderBar({ $parent }) {
  this.render = () => {
    this.bannerList = document.querySelectorAll(".banner"); //배너

    this.menuList = $parent.querySelectorAll("a"); //menu a태그
    this.first_aTag = $parent.querySelector("a:first-child"); //menu 첫번째 a태그
    this.last_aTag = $parent.querySelector("a:last-of-type"); //menu 마지막 a태그
    this.line = $parent.querySelector(".under-line"); //underline
    this.width = $parent.clientWidth; //메뉴 가로 길이

    this.selectedIndex = 0;

    this.menuList.forEach((aTag, index) => {
      aTag.addEventListener("click", (e) => {
        this.line.style.width = `${e.currentTarget.offsetWidth}px`;
        this.line.style.left = `${e.currentTarget.offsetLeft}px`;

        this.selectedIndex = index;
      });
    });

    // 초기 line 위치 지정
    this.line.style.width = `${this.first_aTag.offsetWidth}px`;
    this.line.style.left = `${this.first_aTag.offsetLeft}px`;
    //top은 모두 동일하기 때문에 처음 한 번만 설정
    this.line.style.top = `${
      this.first_aTag.offsetTop + this.first_aTag.offsetHeight
    }px`;

    // console.log(this.last_aTag.offsetWidth + this.last_aTag.offsetLeft);
    this.nowScroll = window.scrollY;
    window.addEventListener("scroll", (event) => {
      let y = window.scrollY;
      if (this.nowScroll > y) {
        if (this.selectedIndex !== 0) {
          if (
            this.bannerList[this.selectedIndex - 1].offsetTop +
              this.bannerList[this.selectedIndex - 1].offsetHeight / 2 >
            y
          ) {
            this.line.style.width = `${
              this.menuList[this.selectedIndex - 1].offsetWidth
            }px`;
            this.line.style.left = `${
              this.menuList[this.selectedIndex - 1].offsetLeft
            }px`;
            this.selectedIndex--;
          }
        }
      } else {
        if (this.selectedIndex !== this.menuList.length - 1) {
          if (
            this.bannerList[this.selectedIndex].offsetTop +
              this.bannerList[this.selectedIndex].offsetHeight / 2 <
            y
          ) {
            this.line.style.width = `${
              this.menuList[this.selectedIndex + 1].offsetWidth
            }px`;
            this.line.style.left = `${
              this.menuList[this.selectedIndex + 1].offsetLeft
            }px`;
            this.selectedIndex++;
          }
        }
      }
      this.nowScroll = y;
    });
  };
}
