export default function BannerSkill({ $parent }) {
  this.$target = document.createElement("div");
  $parent.appendChild(this.$target);

  this.render = () => {
    const language = {
      Language: ["Java", "JavaScript", "HTML", "CSS", "C", "Kotlin"],
      FrameWork: ["React", "Node.js"],
      Database: ["MySQL", "Firebase"],
      VersionControl: ["Github"],
    };

    this.$target.innerHTML = `
      <section class="banner Skill" id="Skill" style="background-color: gray">
        <div class="inner">
          <table>
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
                        <img style="height:20px; width:2s0px;" src='/src/logo/${name
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
