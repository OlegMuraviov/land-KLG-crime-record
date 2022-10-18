import { tns } from "../../node_modules/tiny-slider";
var slider = tns({
  container: ".my-slider",
  items: 1,
  slideBy: 1,
  autoplay: true,
  speed: 300,
  mode: "gallery",
//   fixedWidth: 210,
  nav: false,
  controls: false,
  autoplayButtonOutput: false,
});
