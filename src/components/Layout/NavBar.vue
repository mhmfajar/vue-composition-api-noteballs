<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>

        <a
          @click.prevent="showMobileNav = !showMobileNav"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          :class="{ 'is-active': showMobileNav }"
          data-target="navbarBasic"
          ref="navbarBurgerRef"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
        ref="navbarMenuRef"
        id="navbarBasic"
      >
        <div class="navbar-end">
          <RouterLink
            @click="showMobileNav = false"
            to="/"
            class="navbar-item"
            active-class="is-active"
            >Notes</RouterLink
          >
          <RouterLink
            @click="showMobileNav = false"
            to="/stats"
            class="navbar-item"
            active-class="is-active"
            >Stats</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// imports
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

// mobile nav
const showMobileNav = ref(false)

const handleResize = () => {
  if (window.innerWidth > 1023 && showMobileNav.value) showMobileNav.value = false
}

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

// click outside to close
const navbarMenuRef = ref(null)
const navbarBurgerRef = ref(null)
onClickOutside(navbarMenuRef, () => (showMobileNav.value = false), {
  ignore: [navbarBurgerRef]
})
</script>

<style scoped>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
