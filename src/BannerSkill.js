import SkillTable from "./SkillTable.js";

export default function BannerSkill({ $parent }) {
  this.$target = document.createElement("section");
  $parent.appendChild(this.$target);
  this.$target.className = "banner Skill";
  this.$target.id = "Skill";

  const language = {
    Language: ["Java", "JavaScript", "HTML", "CSS", "C", "Kotlin"],
    FrameWork: ["React", "Node.js"],
    Database: ["MySQL", "Firebase"],
    VersionControl: ["Github"],
  };

  this.render = () => {
    this.$target.innerHTML = `
      <div class="inner">
      ${Object.keys(language)
        .map((key) => {
          return `
          ${SkillTable({ key: key, value: language[key] })}
        `;
        })
        .join("")}
    </div>
    `;
  };

  this.render();
}
