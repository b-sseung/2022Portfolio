export default function BannerTop({ $parent }) {
  this.$target = document.createElement("div");
  $parent.appendChild(this.$target);

  this.render = () => {
    this.$target.innerHTML = `
      <section class="banner Top" id="Top">
        <div class="inner">
          <h1>Portfolio</h1>
          <div>
            <p>프론트엔드 개발자 배승희입니다.</p>
            <ul>
              <li><a href="#Skill">start→</a></li>
            </ul>
          </div>
        </div>
      </section>
    `;
  };

  this.render();
}
