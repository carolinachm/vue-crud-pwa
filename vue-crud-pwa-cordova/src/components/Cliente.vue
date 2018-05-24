<template>
    <v-layout row>
        <v-flex xs7 offset-xs2>
            <v-form>
                <v-text-field label= "Nome" required></v-text-field>
                  <v-text-field label="CPF" required></v-text-field>
                  <v-text-field label= "Telefone" required></v-text-field>
                   <v-text-field label= "E-mail" required></v-text-field>

                    <v-btn color="info">Salvar</v-btn>
            <v-btn >Cancelar</v-btn>
            </v-form>
           
           <h1>Clientes Cadastrados</h1>

            <v-data-table
    :headers="headers"
    :items="clientes"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="cliente">
      <td>{{ cliente.nome }}</td>
      <td class="text-xs-right">{{ cliente.cpf }}</td>
      <td class="text-xs-right">{{ cliente.telefone }}</td>
      <td class="text-xs-right">{{ cliente.email }}</td>
      
    </template>
  </v-data-table>
        </v-flex>
    </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      clientes: []
    }
  },
  methods: {
    async findAll () {
      try {
        let response = await axios.get('/clientes')
        this.clientes = response.data
      } catch (e) {
        this.errors.push(e)
      }
    }
  }
}
</script>