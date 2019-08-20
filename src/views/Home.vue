<template>
    <div>
        <div id="hero">
            <section class="hero-section container-fluid">
                <div class="row mx-lg-5 pl-2 pt-2 my-5 py-lg-5 py-3">
                    <div class="col-lg-9">
                        <div class="text-left">
                            <h1 class="py-3 text-white">Hi. I'm Darien Schettler.<br /></h1>
                            <h1 class="py-3 ml-lg-4 text-teal-50" style="font-size: 200%;">
                                <router-link to="/about" class="hero-link text-teal-A400">A machine-learning engineer, </router-link>
                                <router-link to="/about" class="hero-link text-teal-A200">full-stack developer, </router-link>
                                and
                                <router-link to="/about" class="hero-link text-teal-A100">scientist</router-link>
                                with a history of building and leading exceptional teams.
                            </h1>
                        </div>
                    </div>
                </div>
                <button type="button" class="scroll_down" id="scroll_down" v-on:click="moveTo('projects')"></button>
            </section>
        </div>
        <div id="projects">
            <section class="container-fluid">
                <div class="header text-center">
                    <h1 class="mx-5 mt-3">Projects</h1>
                </div>
                <div class="row justify-content-between mx-5 mt-4 mb-4">
                    <div class="col-lg-4">
                        <a href="http://anigen.darienschettler.ca" title="" style="text-decoration: none; color: inherit;">
                            <div class="col-md-12 p-2 shadow rounded-lg project-card">
                                <div class="teal-to-teal-A400 rounded-lg" style="min-height:500px;">
                                    <div class="px-3 py-3 text-center">
                                        <img src="../assets/images/anigen.png" alt="Anigen" class="mw-100 img-fluid h-auto rounded" />
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
                                                <span class="font-italic font-weight-light">& more...</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4">
                        <a href="http://anigen.darienschettler.ca" title="" style="text-decoration: none; color: inherit;">
                            <div class="col-md-12 p-2 shadow rounded-lg project-card">
                                <div class="blue-to-blue rounded-lg" style="min-height:500px;">
                                    <div class="px-3 py-3 text-center">
                                        <img src="../assets/images/anigen.png" alt="Anigen" class="mw-100 img-fluid h-auto rounded" />
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
                                                <span class="font-italic font-weight-light">& more...</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4">
                        <a href="http://anigen.darienschettler.ca" title="" style="text-decoration: none; color: inherit;">
                            <div class="col-md-12 p-2 shadow rounded-lg project-card">
                                <div class="teal-to-teal-A400 rounded-lg" style="min-height:500px;">
                                    <div class="px-3 py-3 text-center">
                                        <img src="../assets/images/anigen.png" alt="Anigen" class="mw-100 img-fluid h-auto rounded" />
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
                                                <span class="font-italic font-weight-light">& more...</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="accordion" id="accordionExample">
                    <div class="card rounded-lg shadow my-2">
                        <div class="card-header grad-1 py-4 text-center" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed font-weight-bold text-dark" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="font-size: 75%; text-decoration: none;">
                                    Github · Histopathologic Cancer Detection · Python Jupyter Notebook
                                </button>
                            </h2>
                        </div>
                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body px-5 mx-lg-5 text-center">
                                <p>This is a project that utilizes basic machine learning and data exploration techniques to both explore, and create a baseline model for, the dataset/competition 'Histopathologic Cancer Detection'.</p>
                                <p>The image below shows examples of images to be classified. Note the red-dotted square indicates that there is cancerous tissue within, while the blue-dotted square indicates benign tissue.</p>
                                <img src="../assets/images/github_histo.png" alt="Histopathologic Cancer Images">
                                <br><br>
                                <p>The baseline model is a headless VGG-16 model initialized with weights from Image-NET. A fully-connected layer followed by 40% dropout is added which then converges into a single node (sigmoid activation for binary classification)</p>
                                <p>The baseline model achieves a validation accuracy of <span class="font-weight-bold">~96%</span> after ten epochs</p>
                                <p>The image below is displaying a confusion matrix showing the correlations between features included in the dataset prior to preprocessing.</p>
                                <a href="https://github.com/darien-schettler/histopathologic-cancer-detection" title="Github" class="btn btn-light px-5 py-3 mt-2"><span class="font-weight-bold">Link to Github Repo</span> <img src="../assets/icons/github_2.svg" alt="Github" width='30px' class="mb-1 ml-2"></a>

                            </div>
                        </div>
                    </div>
                    <div class="card rounded-lg shadow my-3">
                        <div class="card-header grad-1 py-4 text-center" id="headingTwo">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed font-weight-bold text-dark" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style="font-size: 75%; text-decoration: none;">
                                    Github · House Sales in King-County EDA/Models · Google Colab Notebook
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body px-5 mx-lg-5 text-center">
                                <p>
                                    This is a notebook that utilizes basic machine learning and in-depth data exploration techniques to explore and create baseline models for, the dataset/competition 'House Sales in King-County'.
                                </p>
                                <p>
                                    This is a solid example of structured data that can be heavily pre-processed to obtain better results. The preprocessing and data-cleaning is the focus of this tutorial I made and the modelling at the end is just one solution of many that would be appropriate.    
                                </p>
                                <div>
                                    <img src="../assets/images/github_kc_confusion.jpg" class="mx-auto w-25 img-fluid" alt="King County Housing Confusion Matrix">
                                </div>
                                <a href="https://github.com/darien-schettler/king-county-house-price-eda-and-model" title="Github" class="btn btn-light px-5 py-3 mt-2"><span class="font-weight-bold">Link to Github Repo</span> <img src="../assets/icons/github_2.svg" alt="Github" width='30px' class="mb-1 ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <div class="card rounded shadow my-3">
                        <div class="card-header grad-1 py-4 text-center" id="headingThree">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed text-dark font-weight-bold" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style="font-size: 75%; text-decoration: none;">
                                    Github · Very Detailed How-To & EDA of MNIST Modelling Using Keras · Python Jupyter Notebook   
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div class="card-body px-5 mx-lg-5 text-center">
                                    <p>This is a tutorial/how-to document that I wrote detailing how to create a model for multi-class classification in Keras. The dataset used is MNIST to keep things as simple as possible for those learning.</p>
                                    <p>The tutorial explores how to preprocess the data step-by-step before beginning an exploration of 5 different types of models that could be used to tackle this problem
                                    </p>
                                        <p class="pt-3 pb-1 m-0"><span class="font-weight-bold">Model 1 ·</span> Simple One Layer Neural Network (Stochastic Gradient Descent)</p>
                                        <p class="py-1 m-0"><span class="font-weight-bold">Model 2 ·</span> Basic Five Layer Neural Network (Multilayer Perceptron)</p>
                                        <p class="py-1 m-0"><span class="font-weight-bold">Model 3 ·</span> Five Layer Neural Network With Adam & Dropout & Regularization</p> 
                                        <p class="py-1 m-0"><span class="font-weight-bold">Model 4 ·</span> Small Convolutional Neural Network Trained From Scratch</p>
                                        <p class="py-1 m-0"><span class="font-weight-bold">Model 5 ·</span> Larger Convolutional Neural Network Trained From Scratch</p>
                                        <p class="text-faded pt-1 pb-2 m-0"><span class="font-weight-bold">Model 6 ·</span> Convolutional Neural Network Utilizing Transfer Learning (TBD)</p>
                                    <div>
                                        <img src="../assets/images/github_mnist_graphs.jpg" alt="Mnist Training Graphs - 5 Models" class="mx-auto w-75 img-fluid"></div>
                                    <a href="https://github.com/darien-schettler/mnist-with-keras" title="Github" class="btn btn-light px-5 py-3 mt-2"><span class="font-weight-bold">Link to Github Repo</span> <img src="../assets/icons/github_2.svg" alt="Github" width='30px' class="mb-1 ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="card rounded-lg shadow my-2">
                        <div class="card-header grad-1 py-4 text-center" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed font-weight-bold text-dark" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Github Project 4

                                </button>
                            </h2>
                        </div>
                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div class="card rounded-lg shadow my-3">
                        <div class="card-header grad-1 py-4 text-center" id="headingTwo">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed font-weight-bold text-dark" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Github Project 5
                                </button>
                            </h2>
                        </div>
                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div class="card rounded shadow my-3">
                        <div class="card-header grad-1 py-4 text-center" id="headingSix">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed text-dark font-weight-bold" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    Github Project 6
                                </button>
                            </h2>
                        </div>
                        <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div> -->
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

    @media all and (max-width: 600px) {
        background-image: linear-gradient(rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.66)),
            url("../assets/images/hero_900.jpg");
    }

    @media all and (min-width: 600px) {
        background-image: linear-gradient(rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.66)),
            url("../assets/images/hero_1250.jpg");
    }

    @media all and (min-width: 800px) {
        background-image: linear-gradient(rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.66)),
            url("../assets/images/hero_2500.jpg");
    }

    // @media all and (min-width: 1250px){
    //   background-image: linear-gradient(rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.66)),
    //     url("../assets/images/hero.jpg");
    //   }
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

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active for <2.1.8 */
    {
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
.grad-1{
background: #0cebeb;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, lighten(#29ffc6,33%), lighten(#20e3b2,33%), lighten(#0cebeb,33%));  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, lighten(#29ffc6,33%), lighten(#20e3b2,33%), lighten(#0cebeb,33%)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>