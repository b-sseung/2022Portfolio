export default function BannerContact({ $parent }) {
  this.$target = document.createElement("div");
  $parent.appendChild(this.$target);

  this.render = () => {
    this.$target.innerHTML = `
      <section class="banner Contact" id="Contact" style="background-color: lightblue">
        <div class="inner">
        </div>
      </section>
    `;
  };

  this.render();
}
