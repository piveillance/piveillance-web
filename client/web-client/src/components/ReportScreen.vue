<script setup lang="ts">
import ActionButton from './ActionButton.vue';
import WS from '../ws';

import config from '../config'
</script>

<script lang="ts">

    // WS.addEventListener("message", (e) => {
    //     console.log("Message from server", e.data)

    //     if (e.data.split(" ")[0] === config.discordId) {
    //         var newScore = e.data.split(" ")[1];

    //         setNewScore(newScore);
    //     }
    // })

    const getColour = (score: number | undefined): string => {
        // let val = 0;

        if (score)

            if (score >= 900) {
                return "#3498DB";
            } else if (score >= 800) {
                return "#2ECC71";
            } else if (score >= 600) {
                return "#F1C40F";
            } else if (score >= 400) {
                return "#E67E22";
            }
        return "#E74C3C";
    }

    const getScore = (): number => {
        return 800;
    }

    const getRank = (): number => {
        return 14;
    }

    export default {
        data() {
            return {
                scoreData: 800,
            }
        },
        props: {
            username: String,
            score: Number,
            rank: Number,
        },
        methods: {
            // addScore(n: number) {
            //     if (this.scoreData) {
            //         this.scoreData += n;
            //     } else {
            //         this.scoreData = n;
            //     }
            // }
        }
    }
</script>

<template>
    <div class="wrapper">
        <div class="top">
            <div class="username" :style="{backgroundColor: getColour(scoreData)}">{{username}}</div>
            <div class="score" :style="{color: getColour(scoreData)}">{{scoreData}}</div>
            <div class="rank" :style="{color: getColour(scoreData)}">#{{rank}}</div>
        </div>
        <div class="bottom">
            <div class="bottomGrid">
                <ActionButton id="0" color="green" textContent="Save someone's life" @click="scoreData = Math.min(scoreData + 300, 1000)" />
                <ActionButton id="1" color="red" textContent="Commit murder" @click="scoreData = Math.max(scoreData - 300, 0)"  />
                <ActionButton id="2" color="green" textContent="Buy your friend a car" @click="scoreData = Math.min(scoreData + 150, 1000)"  />
                <ActionButton id="3" color="red" textContent="Steal a car" @click="scoreData = Math.max(scoreData - 150, 0)"  />
                <ActionButton id="4" color="green" textContent="Help a stranger" @click="scoreData = Math.min(scoreData + 80, 1000)" />
                <ActionButton id="5" color="red" textContent="Refuse to help someone" @click="scoreData = Math.max(scoreData - 80, 0)"  />
                <ActionButton id="6" color="green" textContent="Feed a street cat" @click="scoreData = Math.min(scoreData + 20, 1000)"  />
                <ActionButton id="7" color="red" textContent="Ignore a hungry cat" @click="scoreData = Math.max(scoreData - 20, 0)"  />
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.top {
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.bottom {
    display: flex;
}

.bottomGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 20px;
    margin-left: auto;
    margin-right: auto;
}

.username {
    color: white;
    padding: 10px 20px 10px 20px;
    border-radius: 25px;
    font-size: 30px;
}

.score, .rank {
    font-size: 40px;
}

</style>