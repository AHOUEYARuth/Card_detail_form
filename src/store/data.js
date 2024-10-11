import { defineStore } from "pinia";
import { ref } from "vue";
export const useDataStore = defineStore("myStore", () => {
  const data = ref({
    name: "",
    cardNuber: "",
    month: "",
    year: "",
    cvc: "",
  });
  let invalableCardN = ref("");
  let blankCard = ref("");
  let tabInLocalStorage = localStorage.getItem("client");
  if (!tabInLocalStorage) localStorage.setItem("client", JSON.stringify([]));
  let userTab = JSON.parse(localStorage.getItem("client"));
  function confirm() {
    if (
      data.value.name == "" ||
      data.value.cardNuber == "" ||
      data.value.month == "" ||
      data.value.year == "" ||
      data.value.cvc == ""
    ) {
      blankCard.value = "Please fill in an all field";
    } else if (data.value.cardNuber == "''") {
      invalableCardN.value = "Wrong format , number only";
    } else {
      userTab.push(data.value);
    }
    console.log(userTab);

    localStorage.setItem("client", JSON.stringify(userTab));
  }
  return {
    data,
    confirm,
    invalableCardN,
    blankCard,
    userTab
  }
});
