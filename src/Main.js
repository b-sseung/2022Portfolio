import BannerContact from "./BannerContact.js";
import BannerProject from "./BannerProject.js";
import BannerSkill from "./BannerSkill.js";
import BannerTop from "./BannerTop.js";
import Menu from "./Menu.js";
import MenuUnderBar from "./MenuUnderBar.js";

export default function Main($target) {
  const menu = new Menu({
    $parent: $target,
  });

  const bannerTop = new BannerTop({
    $parent: $target,
  });

  const bannerSkill = new BannerSkill({
    $parent: $target,
  });

  const bannerProject = new BannerProject({
    $parent: $target,
  });

  const bannerContact = new BannerContact({
    $parent: $target,
  });

  const menuUnderBar = new MenuUnderBar({
    $parent: $target.querySelector(".menu"),
  }).render();
}
