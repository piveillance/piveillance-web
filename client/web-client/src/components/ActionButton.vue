<script setup lang="ts">
    import WS from '../ws'
    import config from '../config'
    import addScore from './ReportScreen.vue'
</script>

<script lang="ts">

    export default {
        data() {
            return {
                disabled: false,
            }
        },
        props: {
            color: String,
            textContent: String,
            propsId: Number,
            score: Number,
        },
        methods: {
            action() {
                console.log(`Button ${this.propsId} pressed`)
                WS.send(`${config.discordId} ${this.propsId}`)
            }
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
        transition: all 0.3s;
        cursor: pointer;
    }

    .container:hover {
        scale: 105%;
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

    .green:hover {
        background-color: #27aa5d;
    }

    .red:hover {
        background-color: #c54233;
    }
</style>