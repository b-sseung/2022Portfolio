export default function SkillTable({ key, value }) {
  return `
    <div class="skillTable">
      <div class="key">${key}</div>
      <div class="value">
        ${value
          .map((name) => {
            return `
              <div class="name">
              <img src="./src/logo/${name
                .replace(".", "")
                .toLowerCase()}_logo.png"/>
              <p>${name}</p>
            </div>`;
          })
          .join("")}
      </div>
    </div>
  `;
}
