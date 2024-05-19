<template>
    <div>
        <div v-for="(assistant , i) in assistants" :key="i">
            <div class="assistant">
                <h1>{{ assistant.id }}</h1>
                <h1>{{ assistant.nom_Assistant }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data () {
            return({
                assistants : [],
            })
        },
        mounted () {
            axios.get("http://localhost:8000/api/assistants")
            .then(res => this.assistants = res.data.assistants )
        }
    }
</script>