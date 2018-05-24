<template>
    <v-layout row>
        
         <v-flex xs6>
        <v-subheader>Categoria</v-subheader>
      </v-flex>
      <v-flex xs6>
        <v-select
          label="Select"
          single-line
        ></v-select>
      </v-flex>
        <v-flex xs12 sm6 offset-sm3>
             <v-subheader>Imagem</v-subheader>
           <v-btn raised class="primary">Upload Imagem</v-btn>
           <input type="file" style="display:none">
        </v-flex>
        
        <v-btn color="info">Salvar</v-btn>
            <v-btn >Cancelar</v-btn>
       
    </v-layout>
</template>

