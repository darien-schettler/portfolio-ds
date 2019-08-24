<template>
  <nav
    class="navbar navbar-expand-lg px-5 fixed-top"
    :class="{
      'bg-transparent navbar-dark': topOfPage && !droppedDown,
      'bg-light navbar-light': !topOfPage || droppedDown
    }"
    style="-webkit-transition: background-color 0.5s ease-out; -moz-transition: background-color 0.5s ease-out; -o-transition: background-color 0.5s ease-out; transition: background-color 0.5s ease-out;"
  >
    <a class="navbar-brand cool-font" href="#">DS</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      v-on:click="droppedDown = !droppedDown"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active px-lg-2 py-1">
          <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item px-lg-2 py-1">
          <a class="nav-link" href="#">Projects</a>
        </li>
        <li class="nav-item px-lg-2 py-1">
          <a class="nav-link" href="#">About Me</a>
        </li>
        <li class="nav-item px-lg-2 py-1">
          <a class="nav-link" href="#">Resume</a>
        </li>
        <li class="nav-item px-lg-2 py-1">
          <a class="nav-link" href="#">Contact </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Header",

  data() {
    return {
      topOfPage: true,
      lastScrollPosition: 0,
      droppedDown: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      }

      // Here we determine whether we need to show or hide the navbar
      this.topOfPage = currentScrollPosition < 1;

      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cool-font {
  font-family: continuo, sans-serif;
  font-size: 180%;
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
