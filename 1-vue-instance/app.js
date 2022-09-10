const app = Vue.createApp({
  data() {
    return {
      title: "Vue.js Bootcamp 1. gün",
      content: "Lorem ipsum dolor sit amet..",
      eduflow: {
        title: "Müfredat ve Açıklamalar için Tıklayınız.",
        target: "_blank",
        url: "https://eduflow.kablosuzkedi.com",
        alt: "mufredat-kablosuzkedi-vue-bootcamp",
      },
      owner: "Pogaca",
    };
  },
}).mount("#app");

// Vue2 Version
// new Vue ({
// 	data:{

// 	}
// })
