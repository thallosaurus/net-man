<script setup lang="ts">
import { mapMutations } from 'vuex';
// import { State } from '../store';
</script>

<script lang="ts">
export default {
    methods: {
        ...mapMutations([
            'increment'
        ])
    },
}
</script>

<template>
    <button type="button" @click="$store.commit('increment')">Hallo</button>
    <p>Count: {{ $store.state.count }}</p>
</template>