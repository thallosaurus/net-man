import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
// import { Store } from 'vuex/types/index.js';

export interface State {
    count: number
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state: State) {
            state.count++;
        },
    },
    getters: {
        getCount(state: State) {
            return state.count;
        }
    }
});

/* fetch('backend')
.then(console.log); */

// store.state.count = 10;

/* export function useStore() {
    return baseUseStore(key)
} */