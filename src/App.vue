<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">DARK</a>
      </div>
    </nav>

    <div class="container">

      <form>

          <label>Modelo</label>
          <input type="text" placeholder="Modelo">
          <label>Algoritmo</label>
          <input type="text" placeholder="Algoritmo">
          <label>Tipo</label>
          <input type="text" placeholder="Tipo">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>Modelo</th>
            <th>Algoritmo</th>
            <th>Tipo</th>
            <th>Opções</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="model of models" :key="model.modelName">

            <td>{{ model.modelName }}</td>
            <td>{{ model.model }}</td>
            <td>{{ model.typeLearning }}</td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
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
</style>