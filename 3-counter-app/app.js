const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {
    // 🔻 Dom da hata verdiren kodlar ikisi beraber çalışıyor. computed e geçiyoruz
    // getCounterResult() {
    //   console.log("Counter 1 Çalıştı");
    //   return this.counter > 2 ? "BÜYÜK" : "KÜÇÜK";
    // },
    // getCounter2Result() {
    //   console.log("Counter 2 Çalıştı");
    //   return this.counter2 > 2 ? "BÜYÜK" : "KÜÇÜK";
    // },
    // 🔺 Dom da hata verdiren kodlar ikisi beraber çalışıyor. computed e geçiyoruz
  },
  computed: {},
}).mount("#app");
