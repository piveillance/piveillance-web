<script setup lang="ts">
    import WS from '../ws'
</script>

<script lang="ts">

    const action = () => {
        console.log("The button has being pressed")

        WS.on
    }

    export default {
        data() {
            return {
                disabled: false,
            }
        },
        props: {
            color: String,
            textContent: String,
            scoreChange: Number,
            timeout: Number,
        },
        methods: {
            action
        }
    }
</script>

<template>
    <div id="container" :class="['container', color]" @click="action()">
        {{ textContent }}
    </div>
</template>

<style scoped>
    .container {
        border-radius: 25px;
        width: 120px;
        height: 120px;
        padding: 10px;
        text-align: center;
        color: #ffffff;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .green {
        background-color: #2ECC71;
        /* grid-column-start: 1;
        grid-column-end: 2; */
    }

    .red {
        background-color: #E74C3C;
        /* grid-column-start: 2;
        grid-column-end: 3; */
    }

    .green.disabled {
        background-color: #166336
    }

    .red.disabled {
        background-color: #882d23;
    }
</style>