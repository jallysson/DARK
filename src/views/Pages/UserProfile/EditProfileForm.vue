<template>

  <card class="bg-primary">
    <b-row align-v="center" slot="header" class="bg-primary">
      <b-col cols="8" class="bg-primary">
        <h3 class="mb-0 bg-primary">Criar projeto</h3>
      </b-col>
    </b-row>

    <form @submit.prevent="training">
      <h6 class="heading-small text-muted mb-4 bg-primary">Informações do projeto</h6>

      <div class="pl-lg-4 bg-primary">
        <b-row>
          <b-col lg="6">
            <base-input 
              type="text"
              label="Nome"
              placeholder=""
              v-model="training_parameters.modelName"
            >
            </base-input>
          </b-col>

          <b-col lg="6">
            <base-input label="Tipo">
              <select class="form-control" type="text" v-model="training_parameters.typeLearning">
                <option>classification</option>
              </select>
            </base-input>
          </b-col>

          <b-col lg="6">
            <base-input label="Algoritmo">
              <select class="form-control" type="text" v-model="training_parameters.model">
                <option>svm</option>
              </select>
            </base-input>
          </b-col>

          <b-col lg="6">
            <base-input label="Dataset">
              <select class="form-control" type="text" v-model="training_parameters.datasetName">
                <option>a1_va3</option>
              </select>
            </base-input>
          </b-col>

          <b-col lg="6">
            <base-input label="Target">
              <select class="form-control" type="text" v-model="training_parameters.targetColumn">
                <option>Phase</option>
              </select>
            </base-input>
          </b-col>

        </b-row>
        
      </div>

      <hr class="my-4 bg-primary">

    <div>
      <b-alert
        :show="dismissCountDown"
        dismissible
        fade
        variant="success"
        @dismiss-count-down="countDownChanged"
      >
        <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
        <span class="alert-inner--text"><strong> Sucesso! </strong>O projeto foi criado ;)</span>
         ... {{ dismissCountDown }} segundos...
      </b-alert>

    </div>
      
      <button class="btn btn-primary" title="Iniciar"><i class="ni ni-spaceship"></i> Start</button> 

    </form>

    <!--Notice modal-->
      <modal :show.sync="modals.notice"
          modal-classes="modal-success"
          modal-content-classes="bg-success">
        <h4 slot="header" class="modal-title">D A R K</h4>

        <div class="py-3 text-center">
          <i class="ni ni-spaceship ni-3x"></i>
          <h4 class="heading mt-4">Nosso projeto foi criado =D</h4>
          <p>Nos já podemos conferir ele na página de projetos, e acompanhar o seu progresso.</p>
        </div>

        <template slot="footer">
          <base-button type="link" class="text-white">VAMOS VER :D</base-button>
          <base-button type="link" class="text-white ml-auto" @click="modals.notice = false">RETORNAR</base-button>
        </template>

      </modal>

  </card>
</template>
<script>

import adam_models from '../../../services/adam_models'

export default {
  data() {
    return {
      training_parameters: {
         modelName: '',
         model: '',
         typeLearning: '',
         datasetName: '',
         targetColumn: ''
      },
      dismissSecs: 60,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      statusSuccess: false,
      modals: {
        notice: false
      }
    }
  },
  methods: {
    training() {
      adam_models.model_training(this.training_parameters).then(response => {
        this.training_parameters = {}
        // this.dismissCountDown = this.dismissSecs
        this.modals.notice = true
        console.log(response)
      })
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    }
  }
};
</script>
<style></style>