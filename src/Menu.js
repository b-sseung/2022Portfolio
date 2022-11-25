export default function Menu({ $parent }) {
  this.aTag = ["Top", "Skill", "Project", "Contact"];
  this.target = document.createElement("header");
  $parent.appendChild(this.target);

  this.render = () => {
    this.target.innerHTML = `
      <nav class="menu">
        ${this.aTag
          .map((name) => {
            return `<a href="#${name}">${name}</a>`;
          })
          .join("")}
        <div class="under-line"></div>
      </nav>
    `;
  };

  this.render();
}
