<template>
    <div class="main">
        <Header />
        <router-view />
    </div>
</template>

<script>
    import Header from "./components/Layouts/Header.vue";
    // import Main from "./components/Main.vue";
    // import Api from "./components/Api.vue";
    export default {
        components : { Header },
    }
</script>
