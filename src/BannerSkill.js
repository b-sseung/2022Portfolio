export default function BannerSkill({ $parent }) {
  this.$target = document.createElement("div");
  $parent.appendChild(this.$target);

  this.render = () => {
    this.$target.innerHTML = `
      <section class="banner Skill" id="Skill" style="background-color: gray">
        <div class="inner">
        </div>
      </section>
    `;
  };

  this.render();
}
