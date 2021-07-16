import { createApp, h } from "vue";
import wrapper from "vue3-webcomponent-wrapper";
import Counter from "./components/Filter.vue";

const webComponent = wrapper(Counter, createApp, h);
window.customElements.define("jet-filter", webComponent);
