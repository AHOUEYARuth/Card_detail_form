<template>
  <div class="app">
    <div class="lateral_bar">
      <div class="card_back" v-for="i in mesDonnees.userTab" :key="i.cvc">
        <span>{{ i.cvc }}</span>
      </div>
      <div class="info_card" v-for="item in mesDonnees.userTab" :key="item.cardNuber">
        <img src="/src/assets/card-logo.svg" alt="">
        <p id="nbr">{{ item.cardNuber }}</p>
        <div class="user">
          <p>{{ item.name }}</p>
          <p>{{ item.month }} / {{ item.year }}</p>
        </div>
      </div>
    </div>
    
    <div class="form_section">
      <form @submit.prevent="submitForm">
        <label for="">Cardholder Name</label>
        <input type="text" v-model="mesDonnees.data.name" placeholder="e.g. Jane Appleseed">
        
        <label for="">Card Number</label>
        <input type="number" v-model="mesDonnees.data.cardNuber" placeholder="e.g. 1234 5678 9123 0000">
        <div class="erro_msg">{{ mesDonnees.invalableCardN }}</div>
        
        <div class="date_section">
          <div class="date">
            <label for=""> Exp. Date (MM/YY)</label>
            <div class="inp_date">
              <input type="number" v-model="mesDonnees.data.month" placeholder="MM">
              <input type="number" v-model="mesDonnees.data.year" placeholder="YY">
            </div>
          </div>
          <div class="cv_section">
            <label for="">CVC</label>
            <input type="number" v-model="mesDonnees.data.cvc" placeholder="e.g. 123">
          </div>
        </div>
        
        <div class="erro_msg">{{ mesDonnees.blankCard }}</div>
        <button type="submit">Confirm</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useDataStore } from "../store/data";

const mesDonnees = useDataStore();
const router = useRouter();

const submitForm = () => {
  mesDonnees.confirm();

  if (!mesDonnees.blankCard && !mesDonnees.invalableCardN) {
    router.push('/thank');
  }
};

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
  flex-direction: column;
  gap: 20px;
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
  top: 55%;
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

.form_section form {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

input {
  border: 1px solid grey;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 20px;
  outline: none;
}

label {
  color: hsl(278, 68%, 11%);
}

.date {
  display: flex;
  flex-direction: column;
}

.date_section {
  display: flex;
  align-items: center;
  gap: 20px;
}

.date,
.cv_section {
  width: 50%;
}

.date input {
  width: 40%;
}

.inp_date {
  width: 100%;
  padding-top: 10px;
  display: flex;
  gap: 7px;
}

.cv_section input {
  width: 85%;
}

.cv_section {
  display: flex;
  flex-direction: column;
  gap: 10px;
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

.erro_msg {
  color: red;
  font-size: 12px;
}

@media screen and (max-width: 375px) {
  .app {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .lateral_bar {
    width: 100%;
    height: 50%;
  }

  .form_section {
    width: 100%;
  }

  .info_card {
    width: 280px;
    position: absolute;
    top: 20%;
    left: 5%;
    gap: 0px;
    padding: 10px;
  }

  .card_back {
    width: 300px;
    position: absolute;
    top: 2%;
    left: 15%;
    height: 130px;
  }

  .form_section form {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 0px;
  }

  input {
    padding: 4px;
  }

  .card_back span {
    position: absolute;
    top: 55%;
    right: 12%;
    color: #fff;
  }
}
</style>
