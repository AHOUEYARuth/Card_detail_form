<template>
    <div class="app">
        <div class="lateral_bar">
            <div class="info_card" v-for="item in mesDonnees.userTab">
                <img src="/src/assets/card-logo.svg" alt="">
                <p id="nbr">{{ item.cardNumber }}</p>
                <div class="user">
                    <p>{{ item.name }}</p>
                    <p>{{ item.month }} / {{ item.year }}</p>
                </div>
                <div class="card_back" v-for="i in mesDonnees.userTab"><span>{{ i.cvc }}</span></div>
            </div>
        </div>

        <div class="form_section">
            <div class="thank_card">
                <img src="/src/assets/icon-complete.svg" alt="">
                <p>THANK YOU</p>
                <p>We've added your card details</p>
                <router-link to="/">
                    <button >Continue</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useDataStore } from "../store/data.ts";
const mesDonnees = useDataStore()
/* const resetForm = () => {
  mesDonnees.data.name = "";
  mesDonnees.data.cardNumber = "";
  mesDonnees.data.month = "";
  mesDonnees.data.year = "";
  mesDonnees.data.cvc = "";
  mesDonnees.blankCard = "";
  mesDonnees.invalableCardN = "";
}; */
</script>

<style scoped>
.app {
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
    display: flex;
}

.lateral_bar {
    width: 35%;
    height: 100%;
    background-image: url(/src/assets/bg-main-desktop.png);
    background-repeat: no-repeat;
    background-size: cover;
}

.form_section {
    width: calc(100% - 35%);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.info_card {
    width: 360px;
    background-image: url(/src/assets/bg-card-front.png);
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    position: absolute;
    top: 15%;
    left: 13%;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.info_card img {
    width: 15%;
}

.user {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#nbr {
    font-size: 20px;
    letter-spacing: 5px;
}

.card_back {
    width: 400px;
    background-image: url(/src/assets/bg-card-back.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 112%;
    left: 20%;
    height: 205px;
    border-radius: 10px;
}

.card_back span {
    position: absolute;
    top: 49%;
    right: 12%;
    color: #fff;
}

.thank_card {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: hsl(278, 68%, 11%);
}

button {
    border: none;
    background-color: hsl(278, 68%, 11%);
    color: hsl(270, 3%, 87%);
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
}

a {
    width: 100%;
}
</style>