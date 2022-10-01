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
                score: this.score,
                rank: this.rank,
            }
        },
        props: {
            username: String,
            score: Number,
            rank: Number,
        },
        methods: {
            setNewScore(newScore: number) {
                this.score = newScore;
            }
        }
    }
</script>

<template>
    <div class="wrapper">
        <div class="top">
            <div class="username" :style="{backgroundColor: getColour(score)}">{{username}}</div>
            <div class="score" :style="{color: getColour(score)}">{{score}}</div>
            <div class="rank" :style="{color: getColour(score)}">#{{rank}}</div>
        </div>
        <div class="bottom">
            <div class="bottomGrid">
                <ActionButton id="0" color="green" textContent="Save someone's life" />
                <ActionButton id="1" color="red" textContent="Commit murder" />
                <ActionButton id="2" color="green" textContent="Buy your friend a car" />
                <ActionButton id="3" color="red" textContent="Steal a car" />
                <ActionButton id="4" color="green" textContent="Help a stranger" />
                <ActionButton id="5" color="red" textContent="Refuse to help someone" />
                <ActionButton id="6" color="green" textContent="Feed a street cat" />
                <ActionButton id="7" color="red" textContent="Ignore a hungry cat" />
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