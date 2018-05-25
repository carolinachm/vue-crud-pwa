<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <v-btn slot="activator" color="primary" dark class="mb-2">Novo Cliente</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="editedItem.nome" label="Nome"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="editedItem.cpf" label="CPF"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="editedItem.telefone" label="Telefone"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="editedItem.email" label="E-mail"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancelar</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
     <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>

    <v-data-table
      :headers="headers"
      :items="clientes"
      :search="search"
      :pagination.sync="pagination"
      hide-actions
      class="elevation-1"
    >
    
      <template slot="items" slot-scope="cliente">
        <td>{{ cliente.item.nome }}</td>
        <td class="text-xs-right">{{ cliente.item.cpf }}</td>
        <td class="text-xs-right">{{ cliente.item.telefone }}</td>
        <td class="text-xs-right">{{ cliente.item.email }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(cliente.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(cliente.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Iniciar</v-btn>
      </template>
    </v-data-table>
     <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    search: '',
    pagination: {},
    dialog: false,
    headers: [
      { text: 'Nome', value: 'nome' },
      { text: 'CPF', value: 'cpf' },
      { text: 'Telefone', value: 'telefone' },
      { text: 'E-mail', value: 'email' }
    ],
    clientes: [],
    editedIndex: -1,
    editedItem: {
      nome: '',
      cpf: '',
      telefone: '',
      email: ''
    },
    defaultItem: {
      nome: '',
      cpf: '',
      telefone: '',
      email: ''
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Novo Cliente' : 'Editar Cliente'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  created () {
    this.initialize()
  },
  methods: {
    async findAll () {
      try {
        const response = await axios.get('/clientes')
        console.log(response)
      } catch (error) {
        this.error
      }
    },
    initialize () {
      this.findAll()
    },

    editItem (item) {
      this.editedIndex = this.clientes.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem (item) {
      const index = this.clientes.indexOf(item)
      confirm('Tem certeza de que deseja excluir este cliente?') &&
        this.clientes.splice(index, 1)
      axios.delete('/clientes/' + this.editItem.id)
        .then(response => {
          console.log(response)
        })
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        console.log('editando')
        console.log(this.editItem)

        axios.put('/clientes/' + this.editItem.id)
        .then(response => {
          console.log(response)
        })
        Object.assign(this.clientes[this.editedIndex], this.editedItem)
      } else {
        console.log('salvando')
        console.log(this.editItem)
        axios.post('/clientes')
        .then(response => {
          console.log(response)
        })
        this.clientes.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>