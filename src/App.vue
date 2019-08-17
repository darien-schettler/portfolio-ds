<template>
    <div id="app">
        <router-view id="app-header" name="header" />
        <router-view id="app-body" />
        <router-view id="app-footer" name="footer" />
    </div>
</template>
<style lang="scss">
#app {
    font-family: "transat", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#app-body {
    min-height: 92.5vh !important;
}

html {
    scroll-behavior: smooth;
    height: 100%;
}
</style>