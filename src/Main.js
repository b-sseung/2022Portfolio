import Menu from "./Menu.js";
import Menu_UnderBar from "./Menu_UnderBar.js";

export default function Main($target) {
  console.log("main");
  const menu = new Menu({
    $parent: $target,
  });

  const menuUnderBar = new Menu_UnderBar({
    $parent: $target.querySelector(".menu"),
  }).render();
}
