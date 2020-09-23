<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="my-5">
        <transition name="anim-trans" mode="out-in">
          <router-view></router-view>
        </transition>
      </div> 
    </div>
  </div>
</template>

<script>

  import Header from './components/Header.vue';

  export default {

    components: {
      appHeader: Header
    },

    created() {
      this.$store.dispatch('initCurrencys');
    }

  }
</script>

<style>

body {
  padding: 30px;
}

.anim-trans-enter-active {
  animation: anim-trans-in 600ms ease-out forwards;
}

.anim-trans-leave-active {
  animation: anim-trans-out 600ms ease-out forwards;
}

@keyframes anim-trans-in {
  0% {
    transform: translate(-10px, -20px);
    opacity: 0;
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translate(0px, 0px);
    opacity: 1;
  }
}

@keyframes anim-trans-out {
  0% {
    transform: translate(0px, 0px);
    opacity: 1;
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translate(-10px, -20px);
    opacity: 0;
  }
}

</style>
