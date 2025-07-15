import { defineStore } from "pinia";
import { ref } from "vue";

// 1. Type pour les données de la carte
interface CardData {
  name: string;
  cardNumber: string;
  month: string;
  year: string;
  cvc: string;
}

export const useDataStore = defineStore("myStore", () => {
  // 2. États typés
  const data = ref<CardData>({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  const invalableCardN = ref<string>("");
  const blankCard = ref<string>("");

  // 3. Tableau local pour stocker les utilisateurs
  const userTab = ref<CardData[]>([]);

  // 4. Fonction de validation et d'ajout
  function confirm() {
    if (
      data.value.name === "" ||
      data.value.cardNumber === "" ||
      data.value.month === "" ||
      data.value.year === "" ||
      data.value.cvc === ""
    ) {
      blankCard.value = "Veuillez remplir tous les champs.";
    } /* else if (!/^\d+$/.test(data.value.cardNumber)) {
      invalableCardN.value =
        "Format incorrect : uniquement des chiffres sont autorisés pour le numéro de carte.";
    } */ else if (data.value.cardNumber.replace(/\s+/g, "").length !== 16) {
      invalableCardN.value =
        "Le numéro de carte doit contenir exactement 16 chiffres.";
    } else {
      userTab.value.push({ ...data.value }); // Ajout d'une copie des données
      blankCard.value = "";
      invalableCardN.value = "";

      // Réinitialisation du formulaire
      data.value = {
        name: "",
        cardNumber: "",
        month: "",
        year: "",
        cvc: "",
      };
    }
  }

  return {
    data,
    confirm,
    invalableCardN,
    blankCard,
    userTab,
  };
});
