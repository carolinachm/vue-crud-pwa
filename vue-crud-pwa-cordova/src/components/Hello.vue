<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <Cliente></Cliente>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>

import Cliente from './Cliente'

export default {
  data () {
    return {
      clientes: []
    }
  },
  components: {
    Cliente
  }
}
</script>
