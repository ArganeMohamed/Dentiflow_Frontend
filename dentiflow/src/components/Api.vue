<template>
    <div class="main body">
        <div class="api">
            <div v-for="(assistant, i) in assistants" :key="i">
                <div class="post">
                    <h3>{{ assistant.id }}</h3>
                    <h3>{{ assistant.nom_Assistant }}</h3>
                    <h3>{{ assistant.prenom_Assistant }}</h3>
                    <h3>{{ assistant.email_Assistant }}</h3>
                    <h3>{{ assistant.motPasse_Assistant }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data () {
        return({
            assistants : []
        })
    },
    mounted () {
        axios.get("http://localhost:8000/api/assistants")
        .then(res => this.assistants = res.data.assistants);
    },
}

</script>

<style>
    .api {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 100%;
    }
    .post {
        text-align: center;
        border: 2px solid white;
        margin: 5px;
        color: white;
    }
</style>