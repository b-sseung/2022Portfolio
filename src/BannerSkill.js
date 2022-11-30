export default function BannerSkill({ $parent }) {
  this.$target = document.createElement("div");
  $parent.appendChild(this.$target);

  const language = {
    Language: ["Java", "JavaScript", "HTML", "CSS", "C", "Kotlin"],
    FrameWork: ["React", "Node.js"],
    Database: ["MySQL", "Firebase"],
    VersionControl: ["Github"],
  };

  this.render = () => {
    this.$target.innerHTML = `
      <section class="banner Skill" id="Skill" style="background-color: gray">
        <div class="inner">
          <table class="skillTable">
            ${Object.keys(language)
              .map((key) => {
                const value = language[key];
                return `
                <tr>
                  <td rowspan='${value.length + 1}'>${key}</td>
                </tr>
                ${value
                  .map((name) => {
                    return `
                    <tr>
                      <td>
                        <img src='/src/logo/${name
                          .replace(".", "")
                          .toLowerCase()}_logo.png'/>
                        <p>${name}</p>
                      </td>
                    </tr>
                  `;
                  })
                  .join("")}
              `;
              })
              .join("")}
          </table>
        </div>
      </section>
    `;
  };

  this.render();
}
