import {
  createStore,
} from 'vuex'

import axios from 'axios'

export default createStore({
  state: {
    units: [],
    selectedUnits: [],
    filterUnits: [],
    filterName: null,
    ages: ['Dark', 'Feudal', 'Castle', 'Imperial'],
    //costs:['Wood', 'Food', 'Gold'],
    costsFood: [],
    Wood: [],
    costsGold: [],
    isDisableWood: false,
    isDisableFood: false,
    isDisableGold: false,
    index: 0,
    characters: [{
        name: 'James T. Kirk',
        series: ['Star Trek']
      },
      {
        name: 'Spock',
        series: ['Star Trek', 'Star Trek: The Next Generation']
      },
      {
        name: 'Jean-Luc Picard',
        series: ['Star Trek: The Next Generation']
      },
      {
        name: 'Worf',
        series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine']
      }
    ],
  },
  getters: {
    isSelectedUnit: (state) => (unit) => {
      return state.selectedUnits.some((r) => r.id === unit.id);
    },
    //for selected and show for list
    filteredUnits: (state) => {
      if (state.selectedUnits.length !== 0) {
        // There's selected units, return filtered
        return state.selectedUnits;
      } else {
        return
      }
    },

    // filterByCost:( state, Wood,unit )=> {
    //   state.Wood = Wood
    //   if(Wood <= 50) {
    //     console.log('filterby cost çalıştı');
    //      return state.units.filter(unit = unit.id)
    //   }

    // }

  },
  mutations: {
    //first set units
    SET_UNITS: (state, units) => {
      state.units = units;
      state.filterUnits = units;
      state.filterByCost = units;

    },
    addUnitSelection(state, unit) {
      state.selectedUnits.push(unit);
    },
    removeUnitSelection(state, unit) {
      state.selectedUnits = state.selectedUnits.filter(
        (r) => r.id !== unit.id
      );
    },
    //for age filter
    filterUpdateByAgeUnit(state, filter) {
      if (filter) {
        state.filterUnits = state.units.filter((f) => f.age === filter);
        state.filterName = filter;
      } else {
        state.filterUnits = state.units;
        state.filterName = null;
      }
    },
    filterCostsWood(state, Wood,) {
      state.Wood = Wood;
      // const arr = [];
      // state.units.filter(val => {
      //   if (val.cost !== null) {
      //     Object.keys(val.cost).map(v => {
      //       if (v === 'Wood') {
      //         arr.push(val)
      //       }
      //     })
      //   }
      // });
      // console.log(arr)
      const arr = state.units.filter(val => {
        if (val.cost !== null) {
          return val
        }
      });
      //console.log(arr)
      //state.filterUnits = arr.filter(c => c.cost.Wood >= '75' && c.cost.Wood <= '100' )

      if (Wood > 150) {
        //   console.log("50 -100 ");
        state.filterUnits = arr.filter(c => c.cost.Wood >= '150')
      } else if (Wood > 100 && Wood < 150) {
        console.log("100-150");
        state.filterUnits = arr.filter(c => c.cost.Wood >= '100' && c.cost.Wood <= '150')
      } else if (Wood > 50 && Wood < 100) {
        console.log("50-100");
        state.filterUnits = arr.filter(c => c.cost.Wood >= '50' && c.cost.Wood <= '100')
      } else if (Wood < 50) {
        console.log("50 e kadar");
        state.filterUnits = arr.filter(c => c.cost.Wood <= '50')
      }
      // else {
      //   state.filterUnits = state.units;
      //   state.filterName = null;
      // }

    },
    filterCostsFood(state, Food, ) {
      state.Food = Food;
      // const arr = [];
      // state.units.filter(val => {
      //   if (val.cost !== null) {
      //     Object.keys(val.cost).map(v => {
      //       if (v === 'Wood') {
      //         arr.push(val)
      //       }
      //     })
      //   }
      // });
      // console.log(arr)
      const arr = state.units.filter(val => {
        if (val.cost !== null) {
          return val
        }
      });
      if (Food > 150) {
        state.filterUnits = arr.filter(c => c.cost.Food >= '150')
      } else if (Food > 100 && Food < 150) {
        state.filterUnits = arr.filter(c => c.cost.Food >= '100' && c.cost.Food <= '150')
      } else if (Food > 50 && Food < 100) {
        state.filterUnits = arr.filter(c => c.cost.Food >= '50' && c.cost.Food <= '100')
      } else if (Food < 50) {
        state.filterUnits = arr.filter(c => c.cost.Food <= '50')
      }
      // else {
      //   state.filterUnits = state.units;
      //   state.filterName = null;
      // }

    },
    filterCostsGold(state, Gold, ) {
      state.Gold = Gold;
      // const arr = [];
      // state.units.filter(val => {
      //   if (val.cost !== null) {
      //     Object.keys(val.cost).map(v => {
      //       if (v === 'Wood') {
      //         arr.push(val)
      //       }
      //     })
      //   }
      // });
      // console.log(arr)
      const arr = state.units.filter(val => {
        if (val.cost !== null) {
          return val
        }
      });
      //console.log(arr)
      //state.filterUnits = arr.filter(c => c.cost.Wood >= '75' && c.cost.Wood <= '100' )

      if (Gold > 150) {
        state.filterUnits = arr.filter(c => c.cost.Gold >= '150')
      } else if (Gold > 100 && Gold < 150) {
        state.filterUnits = arr.filter(c => c.cost.Gold >= '100' && c.cost.Gold <= '150')
      } else if (Gold > 50 && Gold < 100) {
        state.filterUnits = arr.filter(c => c.cost.Gold >= '50' && c.cost.Gold <= '100')
      } else if (Gold < 50) {
        state.filterUnits = arr.filter(c => c.cost.Gold <= '50')
      }
      // else {
      //   state.filterUnits = state.units;
      //   state.filterName = null;
      // }

    },
    //  updateCost(state, isDisableW, isDisableF, isDisableG) {
    // //   console.log("çalışı");
    //    if ( isDisableW == true && isDisableF == false && isDisableG == false ){
    //      console.log("true eşitliği çalıştı");
    //      state.isDisableW = true;
    //      return isDisableW = true
    //    } else if (isDisableW == false && isDisableF == true && isDisableG == false) {
    //     state.isDisableF = true;
    //     return isDisableF = true
    //    }
    //    else if (isDisableW == false && isDisableF == false && isDisableG == true) {
    //     state.isDisableG = true;
    //     return isDisableG = true
    //    }
    //  },
    updateCostWood(state, isDisableWood) {
      if (isDisableWood == true) {
        state.isDisableWood = true;
        return isDisableWood = true
      } else {
        state.isDisableWood = false
      }
    },
    updateCostFood(state, isDisableFood) {
      if (isDisableFood == true) {
        state.isDisableFood = true;
        return isDisableFood = true
      } else {
        state.isDisableFood = false
      }
    },
    updateCostGold(state, isDisableGold) {
      if (isDisableGold == true) {
        state.isDisableGold = true;
        return isDisableGold = true
      } else {
        state.isDisableGold = false
      }
    },

  },

  actions: {
    getUnits({
      commit
    }) {
      axios.get('data.json')
        .then(response => {
          commit('SET_UNITS', response.data.units);
        })
    }
  },
  modules: {}
});