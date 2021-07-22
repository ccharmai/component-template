import { createApp, h } from "vue";
import wrapper from "vue3-webcomponent-wrapper";
import Custom from "./components/Custom.vue";

const webComponent = wrapper(Custom, createApp, h);
window.customElements.define("jet-custom", webComponent);
