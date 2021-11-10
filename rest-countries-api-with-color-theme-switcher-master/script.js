const theme = document.querySelector(".theme");
const icon = document.querySelector(".theme i");
theme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  icon.classList.toggle("fa-light");
  // icon.classList.toggle("fa-solid");
});

function shuffle(a) {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

const BASE_URL = "https://restcountries.com/v2";

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

async function getData(search, type) {
  const response = await fetch(`${BASE_URL}/${type}/${search}`);
  const json = await response.json();
  return json;
}
let timer;

const app = new Vue({
  el: "#app",
  created() {
    countries.forEach(async (country) => {
      const data = await getData(country, "name");
      this.countries.push(data[0]);
    });
  },
  data() {
    return {
      darkTheme: true,
      countries: [],
      countryDetails: null,
      searchTerm: "",
      matchingCountries: [],
      detailActive: false,
    };
  },
  methods: {
    async processInput() {
      this.matchingCountries = [];
      clearTimeout(timer);
      if (this.searchTerm.length > 2) {
        timer = setTimeout(async () => {
          const currentData = await getData(this.searchTerm, "name");
          if (currentData.status !== 404) {
            currentData.forEach((data) => {
              this.matchingCountries.push(data.name);
            });
          }
        }, 350);
      }
    },

    async showDetails(countryName) {
      this.matchingCountries = [];
      const data = await getData(countryName, "name");
      const countryData = data[0];
      if (countryData) {
        this.detailActive = true;
        this.countryDetails = countryData;

        this.searchTerm = "";
      }
    },
    goBack() {
      this.detailActive = false;
      this.countryDetails = null;
    },
    async filterCountries(region) {
      this.countries = [];
      const data = await getData(region, "region");
      this.countries = data;
    },
  },
});
