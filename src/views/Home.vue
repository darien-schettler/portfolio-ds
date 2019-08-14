<template>
  <div>
    <div id="hero">
      <section class="hero-section container-fluid">
        <div class="row mx-lg-5 pl-2 pt-2 my-5 py-lg-5 py-3">
          <div class="col-lg-9">
            <div class="text-left">
              <h1 class="py-3 text-white">Hi. I'm Darien Schettler.<br /></h1>
              <h1 class="py-3 ml-lg-4 text-teal-50" style="font-size: 200%;">
                <router-link to="/about" class="hero-link text-teal-A400"
                  >A machine-learning engineer</router-link
                >,
                <router-link to="/about" class="hero-link text-teal-A200"
                  >full-stack developer</router-link
                >
                and,
                <router-link to="/about" class="hero-link text-teal-A100"
                  >scientist</router-link
                >
                with a history of building and leading exceptional teams.
              </h1>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="scroll_down"
          id="scroll_down"
          v-on:click="moveTo('projects')"
        ></button>
      </section>
    </div>
    <div id="projects">
      <section class="container-fluid">
        <div class="header text-center">
          <h1 class="mx-5 mt-3">Projects</h1>
        </div>
        <div class="row justify-content-between mx-5 mt-4 mb-4">
          <div class="col-lg-4">
            <a href=" " title="" style="text-decoration: none; color: inherit;">
              <div class="col-md-12 p-2 shadow rounded-lg project-card">
                <div
                  class="teal-to-teal-A400 rounded-lg"
                  style="min-height:500px;"
                >
                  <div class="px-3 py-3 text-center">
                    <img
                      src="../assets/images/anigen.png"
                      alt="Anigen"
                      class="mw-100 img-fluid h-auto rounded"
                    />
                  </div>
                  <div class="bg-white">
                    <div class="px-3 py-3 text-center">
                      <hr class="hr-text my-1" data-content="DESCRIPTION" />
                      <p class="my-2">
                        <span class="font-weight-bold">Anigen is</span> a
                        website I created that uses character level embeddings
                        to generate unique anime titles
                      </p>
                      <hr class="hr-text my-1" data-content="TOOLS" />
                      <p class="mt-2 pb-0 mb-0">
                        Flask, Vue, Bootstrap-Vue, Tensorflow, Docker, AWS,
                        PostgreSQL, Github,
                        <span class="font-italic font-weight-light"
                          >& more...</span
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4">
            <div class="col-md-12 p-2 shadow rounded-lg project-card">
              <div class="blue-to-blue rounded-lg" style="min-height:500px;">
                <div class="px-3 py-3 text-center">
                  <img
                    src="../assets/images/anigen.png"
                    alt="Anigen"
                    class="mw-100 img-fluid h-auto rounded"
                  />
                </div>
                <div class="bg-white">
                  <div class="px-3 py-3 text-center">
                    <hr class="hr-text my-1" data-content="DESCRIPTION" />
                    <p class="my-2">
                      Anigen is a website I created that uses character level
                      embeddings to generate unique anime titles
                    </p>
                    <hr class="hr-text my-1" data-content="TOOLS" />
                    <p class="mt-2 pb-0 mb-0">
                      Flask, Vue, Bootstrap-Vue, Tensorflow, Docker, AWS,
                      PostgreSQL, Github,
                      <span class="font-italic font-weight-light"
                        >& more...</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="col-md-12 p-2 shadow rounded-lg project-card">
              <div
                class="teal-to-teal-A400 rounded-lg"
                style="min-height:500px;"
              >
                <div class="px-3 py-3 text-center">
                  <img
                    src="../assets/images/anigen.png"
                    alt="Anigen"
                    class="mw-100 img-fluid h-auto rounded"
                  />
                </div>
                <div class="bg-white">
                  <div class="px-3 py-3 text-center">
                    <hr class="hr-text my-1" data-content="DESCRIPTION" />
                    <p class="my-2">
                      Anigen is a website I created that uses character level
                      embeddings to generate unique anime titles
                    </p>
                    <hr class="hr-text my-1" data-content="TOOLS" />
                    <p class="mt-2 pb-0 mb-0">
                      Flask, Vue, Bootstrap-Vue, Tensorflow, Docker, AWS,
                      PostgreSQL, Github,
                      <span class="font-italic font-weight-light"
                        >& more...</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-between mx-5">
          <div class="col-lg-4">
            <div class="col-md-12 p-2 shadow rounded-lg project-card">
              <div
                class="teal-to-teal-A400 rounded-lg"
                style="min-height:500px;"
              >
                <div class="px-3 py-3 text-center">
                  <img
                    src="../assets/images/anigen.png"
                    alt="Anigen"
                    class="mw-100 img-fluid h-auto rounded"
                  />
                </div>
                <div class="bg-white">
                  <div class="px-3 py-3 text-center">
                    <hr class="hr-text my-1" data-content="DESCRIPTION" />
                    <p class="my-2">
                      Anigen is a website I created that uses character level
                      embeddings to generate unique anime titles
                    </p>
                    <hr class="hr-text my-1" data-content="TOOLS" />
                    <p class="mt-2 pb-0 mb-0">
                      Flask, Vue, Bootstrap-Vue, Tensorflow, Docker, AWS,
                      PostgreSQL, Github,
                      <span class="font-italic font-weight-light"
                        >& more...</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="col-md-12 p-2 shadow rounded-lg project-card">
              <div class="blue-to-blue rounded-lg" style="min-height:500px;">
                <div class="px-3 py-3 text-center">
                  <img
                    src="../assets/images/anigen.png"
                    alt="Anigen"
                    class="mw-100 img-fluid h-auto rounded"
                  />
                </div>
                <div class="bg-white">
                  <div class="px-3 py-3 text-center">
                    <hr class="hr-text my-1" data-content="DESCRIPTION" />
                    <p class="my-2">
                      Anigen is a website I created that uses character level
                      embeddings to generate unique anime titles
                    </p>
                    <hr class="hr-text my-1" data-content="TOOLS" />
                    <p class="mt-2 pb-0 mb-0">
                      Flask, Vue, Bootstrap-Vue, Tensorflow, Docker, AWS,
                      PostgreSQL, Github,
                      <span class="font-italic font-weight-light"
                        >& more...</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="col-md-12 p-2 shadow rounded-lg project-card">
              <div
                class="teal-to-teal-A400 rounded-lg"
                style="min-height:500px;"
              >
                <div class="px-3 py-3 text-center">
                  <img
                    src="../assets/images/anigen.png"
                    alt="Anigen"
                    class="mw-100 img-fluid h-auto rounded"
                  />
                </div>
                <div class="bg-white">
                  <div class="px-3 py-3 text-center">
                    <hr class="hr-text my-1" data-content="DESCRIPTION" />
                    <p class="my-2">
                      Anigen is a website I created that uses character level
                      embeddings to generate unique anime titles
                    </p>
                    <hr class="hr-text my-1" data-content="TOOLS" />
                    <p class="mt-2 pb-0 mb-0">
                      Flask, Vue, Bootstrap-Vue, Tensorflow, Docker, AWS,
                      PostgreSQL, Github,
                      <span class="font-italic font-weight-light"
                        >& more...</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-me"></section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    this.interval = setInterval(() => this.changeTitle(), 3000);
  },
  data() {
    return {};
  },
  methods: {
    changeTitle() {
      if (this.index === 4) {
        this.index = 0;
      } else {
        this.index += 1;
      }
    },
    moveTo(moveID) {
      var navBarOffset = -59;
      var windowTopOffset =
        window.pageYOffset || document.documentElement.scrollTop;
      var extraOffset = -10;
      var idPos = document.getElementById(moveID).getBoundingClientRect().top;
      var destination = navBarOffset + idPos + extraOffset + windowTopOffset;
      console.log(destination);
      window.scrollTo(0, destination);
    }
  }
};
</script>
<style scoped lang="scss">
.hero-section {
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.66)),
    url("../assets/images/hero.jpg");
  /* flex-box thing */
  display: flex;
  flex-direction: column;
  background-size: cover;
}

.hero-text {
  font-size: 400%;
  font-weight: 500;
}

.hero-titles {
  font-size: 240%;
  font-weight: 800;
}

.down-arrow {
  position: absolute;
  top: 85vh;
  padding: 20px;
  font-size: 2.5em;
}

.down-arrow:hover {
  cursor: pointer;
  background-color: #ffffff;
  opacity: 0.1;
}

button.scroll_down {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  height: 50px;
  width: 30px;
  bottom: 60px;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
}

button.scroll_down:before {
  position: absolute;
  top: 10px;
  left: 50%;
  content: "";
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: #fff;
  border-radius: 100%;
  -webkit-animation: scroll_down_btn-animation 2s infinite;
  animation: scroll_down_btn-animation 2s infinite;
  box-sizing: border-box;
}

@keyframes scroll_down_btn-animation {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes scroll_down_btn-animation {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(0, 20px);
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.slide-fade-enter-active {
  transition: all 0.9s ease;
}
.slide-fade-leave-active {
  transition: all 0.9s cubic-bezier(1, 0.5, 0.8, 1) !important;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}

.hero-link {
  text-decoration: none !important;
  transition: top ease 0.3s;
  position: relative;
  top: 0;
  &:hover {
    top: -4px;
  }
}
.hr-text {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;
  &:before {
    content: "";
    // use the linear-gradient for the fading effect
    // use a solid background color for a solid bar
    background: linear-gradient(to right, transparent, #818078, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }
  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: black;

    padding: 0 0.5em;
    line-height: 1.5em;
    // this is really the only tricky part, you need to specify the background color of the container element...
    color: #818078;
    background-color: #fcfcfa;
  }
}
.project-card {
  transition: all ease-in-out 0.3s;
  position: relative;
  top: 0;
  &:hover {
    top: -10px;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  }
}
</style>
