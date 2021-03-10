<template>
    <div class="units">
        <h2>Ages</h2>
        <ul class="Filters__Ages">
            <li>
                <a @click="filteredByAge('')">All</a></li>
            <li v-for="age in ages" :key="age">
                <a @click="filteredByAge(age)">{{age}}</a></li>

        </ul>
        <h2>Costs</h2>
        <div class="Filters__Costs">
            <div class="CheckedBoxes">
                <!-- v-for="cost in costs" :key="cost"  <input type="checkbox" id="wood" value="Wood" v-model="cost.name">
                <label for="cost"> {{cost.name}}</label><br>
-->
                <!-- <input type="checkbox" id="test" value="test" v-model="isDisable">
                <label for="test"> test</label><br> -->
                <input type="checkbox" id="wood" value="Wood" v-model="isDisableWood">
                <label for="Wood"> Wood</label><br>
                <input type="checkbox" id="Food" value="Food" v-model="isDisableFood">
                <label for="Food"> Food</label><br>
                <input type="checkbox" id="Gold" value="Gold" v-model="isDisableGold">
                <label for="Gold"> Gold</label><br>

                 </div>
            <div class="RangeSelectors">
                <div class="sliders">
                    <!-- <input type="range" id="slide" :disabled='!isDisable' min="0" max="200" class="slider"> -->

                    <input type="range" :disabled='!isDisableWood' v-model="Wood" min="0" max="200" step="5" class="slider">
                    <input type="range" :disabled='!isDisableFood' min="0" max="200" v-model="Food" step="5"
                        class="slider">
                    <input type="range" :disabled='!isDisableGold' min="0" max="200" v-model="Gold" step="5"
                        class="slider">
                          
                </div>
            </div>
            <div class="RangeSelected">
                <span> cost wood  {{Wood}}</span>
                <span>cost food {{Food}}</span>
                <span>cost gold {{Gold}}</span>
            </div>
        </div>
         
        <div class="tables">
            <div class="tables__left">
                <table>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Costs- wood</th>
                        <th> costs - gold</th>
                    </tr>
                    <tr :key="index" v-for="(item, index) in units" @click="addUnitSelection(item)">
                        <td v-if="!isSelectedUnit(item)" style="cursor:pointer">
                            {{item.id}}</td>
                        <td v-else style="cursor:pointer;" @click="removeUnitSelection(item)"> {{item.id}}
                            <small>[x]</small></td>
                        <td> {{item.name}}</td>
                        <td> {{item.age}}</td>
                        <td v-for="cost in item.cost" :key="cost"> {{cost}}</td>
                    </tr>

                </table>
            </div>
            <div class="tables__right">
                <unitlist />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

.units {
    width: 100%;
    align-self: flex-start;

    ul.Filters__Ages {
        margin: 24px 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;

        li {
            list-style: none;
            border: 1px solid black;
            background-color: fff;
            padding: .25em;

            a {
                cursor: pointer;
                padding: .25em;
                margin: .75em;
                color: black;
            }

        }

        :hover {
            background-color: #d3d3d3;
        }
    }

    .Filters__Costs {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        padding: 8px 0;
        width: 50%;

        .CheckedBoxes {
            flex: 1;
        }

        .RangeSelectors {
            flex: 2;

            .sliders {
                .slider {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 100%;
                    height: 0px;
                    background: #fff;
                    border: 1px solid black;
                    opacity: 0.7;
                    -webkit-transition: .2s;
                    transition: opacity .2s;
                    outline: none;
                    margin: 4px 0;

                    &:hover {
                        opacity: 1;
                        /* Fully shown on mouse-over */
                    }

                }

            }

        }
        .RangeSelected {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            flex-direction: column;
            padding: 0 16px;
        }
    }

    .tables {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        flex-direction: row;

        &__.left {
            flex: 2;
        }

        &__.right {
            flex: 1;
        }

    }

    

    }
</style>
<script>
    import unitlist from './Unitslist'

    export default {
        components: {
            unitlist
        },

        data() {
            return {
                
            }
        },
        computed: {
            units() {
                return this.$store.state.filterUnits;
            },
            ages() {
                return this.$store.state.ages;
            },
            isDisable: {
                get() {
                    return this.$store.state.isDisable
                },
                set(value) {
                    this.$store.commit('updateCost', value)
                }
            },

            isDisableWood: {
                get() {
                    return this.$store.state.isDisableWood
                },
                set(value) {

                     this.$store.commit('updateCostWood', value)
                }
            },
            isDisableFood: {
                get() {
                    return this.$store.state.isDisableFood
                },
                set(value) {
                     this.$store.commit('updateCostFood', value)
                },

            },
            isDisableGold: {
                get() {
                    return this.$store.state.isDisableGold
                },
                set(value) {
                     this.$store.commit('updateCostGold', value)
                }
            },
            Wood: {
                get() {
                    return this.$store.state.Wood
                },
                set(value) {
                    this.$store.commit('filterCostsWood', value)
                    this.$store.state.Wood = value
                }
            },
             Food: {
                get() {
                    return this.$store.state.costsFood
                },
                set(value) {
                    this.$store.commit('filterCostsFood', value)
                    this.$store.state.costsFood = value
                },
                 
            },
            Gold: {
                get() {
                    return this.$store.state.costsGold
                },
                set(value) {
                    this.$store.commit('filterCostsGold', value)
                    this.$store.state.costsGold = value
                }
            },

        },
        methods: {
            addUnitSelection(unit) {
                this.$store.commit("addUnitSelection", unit);
            },
            removeUnitSelection(unit) {
                this.$store.commit("removeUnitSelection", unit);
            },
            isSelectedUnit(unit) {
                return this.$store.getters.isSelectedUnit(unit);
            },
            filteredByAge(filter) {
                this.$store.commit("filterUpdateByAgeUnit", filter);
            },

        },
        mounted() {
            this.$store.dispatch("getUnits");


        }


    }
</script>