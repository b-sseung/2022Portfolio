export default function BannerProject({ $parent }) {
  this.$target = document.createElement("div");
  $parent.appendChild(this.$target);

  this.render = () => {
    this.$target.innerHTML = `
      <section class="banner Project" id="Project" style="background-color: pink">
        <div class="inner">
        </div>
      </section>
    `;
  };

  this.render();
}
