<template>
  <div>
    <!-- filtrelenmiş liste -->
    <table v-for="unit in units" :key="unit.age" style="width:100%">
      <tr>
        <th>ID:</th>
        <td>{{ unit.id }}</td>
      </tr>
      <tr>
        <th>Name:</th>
        <td>{{ unit.name }}</td>
      </tr>
      <tr>
        <th>Description:</th>
        <td>{{unit.description}}</td>
      </tr>
      <tr>
        <th>Min. Required Age</th>
        <td>{{unit.age}}</td>
      </tr>
      <tr>
        <th>Wood Cost</th>
        <td><div v-for="cost in unit.cost" :key="cost">{{cost}}</div></td>
     
        <th>Gold Cost:</th>
        <td><div v-for="cost in unit.cost" :key="cost">{{cost}}</div></td>
      </tr>
      <tr>
        <th>Build Time:</th>
        <td>{{unit.build_time}}</td>
      </tr>
      <tr>
        <th>Reload Time:</th>
        <td>{{unit.reload_time}}</td>
      </tr>
      <tr>
        <th>Hit Points:</th>
        <td>{{unit.hit_points}}</td>
      </tr>
      <tr>
        <th>Attack:</th>
        <td>{{unit.attack}}</td>
      </tr>
      <tr>
        <th>Accuracy:</th>
        <td>{{unit.accuracy}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
  export default {
    name: 'agelist',
    computed: {
      units() {
        return this.$store.getters.filteredUnits;
      },
    },
  };
</script>

<style lang="scss">
@import '../assets/main.scss';


</style>