<script setup></script>

<template>
  <form class="callback__form">
    <h4 class="callback__title">
      Наш специалист свяжется<br />
      с вами в ближайшее время
    </h4>
    <div class="callback__inputs">
      <input class="callback__inp" type="text" name="name" placeholder="Имя" />
      <input
        class="callback__inp"
        type="tel"
        name="tel"
        placeholder="Номер телефона"
      />
      <input
        class="callback__inp"
        type="mail"
        name="mail"
        placeholder="E-mail"
      />
    </div>
    <button class="callback__btn" type="submit">Отправить</button>
  </form>
</template>

<style lang="scss" scoped>
.callback {
  &__title {
    font-family: "Onest";
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 30px;
    text-align: center;
  }

  &__inputs {
    display: grid;
    gap: 10px;
  }

  &__inp {
    padding: 18px 22px;
    border: 1px solid #191919;
    border-radius: 30px;
  }

  &__btn {
    font-family: "Onest";
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: calc(18 / 14 * 100%);
    border-radius: 100px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    background-color: #ffb05a;
    padding: 18px 22px;
    color: #191631;
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }
}
</style>
