const BASE_URL = "https://restcountries.com/v2/name";

const countries = [
  "germany",
  "usa",
  "brazil",
  "iceland",
  "afghanistan",
  "aland",
  "albania",
  "algeria",
];

async function getData(country) {
  const response = await fetch(`${BASE_URL}/${country}`);
  const json = await response.json();
  return json[0];
}

const app = new Vue({
  el: "#app",
  created() {
    countries.forEach(async (country) => {
      const data = await getData(country);
      this.countries.push(data);
    });
  },
  data() {
    return {
      countries: [],
      searchTerm: "",
      detailActive: false,
    };
  },
  methods: {
    getDetails(e) {
      if (e.key === "Enter") {
        this.detailActive = true;
      }
    },
  },
  computed: {
    async updatedData() {
      if (this.searchTerm.length > 1) {
        const country = await getData(this.searchTerm);
        if (country) {
          console.log(country);
        }
      }
    },
  },
});
