<template>
  <div id="app">
  
    <nav>
      <div class="nav-wrapper darken-1 main-color">
        <a href="#" class="logo brand-logo left main-color">DARK</a>
      </div>
    </nav>

    <div class="container">
      <form @submit.prevent="training">
        <input type="text" v-model="training_parameters.modelName">
        <label>Nome do modelo</label>
        <select class="form-control" v-model="selected">
          <option v-for="model of models" :key="model.modelName">
          {{ model.modelName }}
          </option>
        </select>
        <input type="text" v-model="training_parameters.typeLearning">
        <label>Tipo do modelo</label>
        <input type="text" v-model="training_parameters.model">
        <label>Algoritmo</label>
        <input type="text" v-model="training_parameters.datasetName">
        <label>Dataset</label>
        <input type="text" v-model="training_parameters.targetColumn">
        <label>Target</label>
        <br>
        <button class="waves-effect waves-light btn primary-color">Treinar<i class="material-icons left">event_available</i></button>
        <br>
        <br>
        <label class="alert-color">{{ this.success_message }}</label>
      </form>

      <table class="centered">

        <thead>
          <tr>
            <th>Nome do modelo</th>
            <th>Algoritmo</th>
            <th>Tipo do modelo</th>
            <th>Versão</th>
            <th>Opções</th>
          </tr>
        </thead>

        <tbody>

          <tr v-for="model of models" :key="model.modelName">

            <td>{{ model.modelName }}</td>
            <td>{{ model.model }}</td>
            <td>{{ model.typeLearning }}</td>
            <td>{{ model.version }}</td>
            <td>
              <button class="waves-effect waves-light btn-small primary-color"><i class="material-icons">description</i></button>
              <button class="waves-effect waves-light btn-small primary-color"><i class="material-icons">assessment</i></button>
              <button class="waves-effect waves-light btn-small button-edit-color"><i class="material-icons">mode_edit</i></button>
              <button @click="delete_model(model)" class="waves-effect waves-light btn-small button-delete-color"><i class="material-icons">delete</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

import adam_models from './services/adam_models'

export default {

  data(){
    return {
      training_parameters: {
        modelName: '',
        model: '',
        typeLearning: '',
        datasetName: '',
        targetColumn: ''
      },
      models:[],
      success_message: '',
      error_message: ''
    }
  },
  mounted() {
    this.list_models()
  },
  methods: {
    list_models(){
      adam_models.models().then(response => {
      this.models = response.data
      })
    },
    training() {
      adam_models.model_training(this.training_parameters).then(response => {
        this.success_message = '# MODELO TREINADO COM SUCESSO'
        this.training_parameters = {}
        this.list_models()
      })
    },
    delete_model(model) {
      if(confirm('Deseja remover o modelo?')) {
        adam_models.delete_model(model).then(response => {
        this.list_models()
      })
      }
    }
  }
}

</script>

<style>

body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
  background-color: #f9f9f9;
}

.alert-color {
  color: #42d079;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
}

.logo {
  margin-left: 20px;
}

.main-color {
  background-color: #42d079;
}

.primary-color {
  background-color: #333333;
}

.primary-color:hover {
  background-color: #42d079;
}

.secondary-color {
  background-color: #42d079;
}

.secondary-color:hover {
  background-color: #333333;
}

button {
  margin-top: 20px;
}

.button-edit-color { 
  background-color: #ff8a5c;
}

.button-edit-color:hover {
  background-color: #333333;
}

.button-delete-color {
  background-color: #eb5f5d;
}

.button-delete-color:hover {
  background-color: #333333;
}

form {
  margin-top: 60px;
  margin-bottom: 60px;
}

</style>