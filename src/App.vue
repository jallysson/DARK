<template>
  <div id="app">
  
    <nav>
      <div class="nav-wrapper darken-1 secondary-color">
        <a href="#" class="brand-logo center secondary-color">DARK</a>
      </div>
    </nav>

    <div class="container">
      <form>

        <label>Nome do modelo</label>
        <input type="text">
        <label>Tipo</label>
        <input type="text">
        <button class="waves-effect waves-light btn primary-color">Treinar<i class="material-icons left">event_available</i></button>
      </form> 

      <table>

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
              <button class="waves-effect waves-light btn-small primary-color">Parâmetros<i class="material-icons left">description</i></button>
              <button class="waves-effect waves-light btn-small primary-color">Validação<i class="material-icons left">assessment</i></button>
              <button class="waves-effect waves-light btn-small button_edit"><i class="material-icons">mode_edit</i></button>
              <button class="waves-effect waves-light btn-small button_delete"><i class="material-icons">delete</i></button>
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
      models:[]
    }
  },
  mounted() {
    adam_models.all_models().then(response => {
      console.log(response.data)
      this.models = response.data
    })
  }
}

</script>

<style>

body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
  background-color: #fff;
}

.primary-color {
  background-color: #5b5656;
}

.primary-color:hover {
  background-color: #42d079;
}

.secondary-color {
  background-color: #42d079;
}

button {
  height: 42px;
  padding: 8px;
  border: none;
  background: #5b5656;
  color: #fff;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.2);
}

button:hover {
  background-color: #42d079;
}

.button_edit { 
  background-color: #ff8a5c;
}

.button_edit:hover {
  background-color: #696464;
}

.button_delete {
  background-color: #eb5f5d;
}

.button_delete:hover {
  background-color: #696464;
}

button:active {
  position: relative;
  top: 1px;
  left: 1px;
  box-shadow: none;
}

form {
  margin-top: 60px;
  margin-bottom: 60px;
}

</style>