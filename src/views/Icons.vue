<template>
  <div class="bg-white">
       <!-- BootstrapVue Done -->
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-white">
      <!-- Card stats -->
      <b-row>
        <b-col xl="3" md="6">
          <stats-card title="F-score"
                      type="gradient-green"
                      sub-title="2,356"
                      icon="ni ni-chart-pie-35"
                      class="mb-4">

            <template slot="footer">
              <span class="text-danger mr-2">12.18%</span>
              <span class="text-nowrap">Desde o último mês</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Precisão"
                      type="gradient-gray"
                      sub-title="2,356"
                      icon="ni ni-chart-pie-35"
                      class="mb-4">

            <template slot="footer">
              <span class="text-danger mr-2">12.18%</span>
              <span class="text-nowrap">Desde o último mês</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Revocação"
                      type="gradient-orange"
                      sub-title="2,356"
                      icon="ni ni-chart-pie-35"
                      class="mb-4">

            <template slot="footer">
              <span class="text-warning mr-2">12.18%</span>
              <span class="text-nowrap">Desde o último mês</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Modelos"
                      type="green"
                      sub-title="924"
                      icon="ni ni-atom"
                      class="mb-4">

            <template slot="footer">
              <span class="text-danger mr-2">5.72%</span>
              <span class="text-nowrap">Desde o último mês</span>
            </template>
          </stats-card>
        </b-col>
      </b-row>

      <b-row>

        <b-col xl="3" md="6">
          <stats-card title="Aval. por modelo"
                      type="blue"
                      sub-title="10,17"
                      icon="ni ni-calendar-grid-58"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">54.8%</span>
              <span class="text-nowrap">Desde o último mês</span>
            </template>
          </stats-card>
        </b-col>

        <b-col xl="3" md="6">
          <stats-card title="Aval. por modelos distintos"
                      type="blue"
                      sub-title="49,32"
                      icon="ni ni-calendar-grid-58"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">54.8%</span>
              <span class="text-nowrap">Desde o último mês</span>
            </template>
          </stats-card>
        </b-col>

        <b-col xl="3" md="6">
          <stats-card title="Avaliações"
                      type="blue"
                      sub-title="25,60"
                      icon="ni ni-calendar-grid-58"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">54.8%</span>
              <span class="text-nowrap">Desde o último mês</span>
            </template>
          </stats-card>
        </b-col>

        <b-col xl="3" md="6">
          <stats-card title="Usuários"
                      type="orange"
                      sub-title="350,897"
                      icon="ni ni-spaceship"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">3.48%</span>
              <span class="text-nowrap">Desde o último mês</span>
            </template>
          </stats-card>
        </b-col>

      </b-row>
    </base-header>

    <b-container fluid class="mt--7 bg-white">
      <b-row class="justify-content-center">
        <b-col lg="12">
          <card header-classes="bg-transparent">
            <!-- <h3 slot="header" class="mb-0">Modelos</h3> -->
            <b-row class="icon-examples bg-white">

              <b-col lg="3" md="6" v-for="model in models" :key="model.modelName">
                <button type="button" class="btn-icon-clipboard bg-white" v-clipboard:copy="'ni ni-active-40'"
                        v-clipboard:success="onCopy"
                        title=""
                        data-original-title="Copy to clipboard">
                  <div>
                    <i class="ni ni-atom text-green"></i>
                    <span>{{ model.modelName }}</span>
                  </div>
                </button>
              </b-col>

            </b-row>
          </card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import Vue from 'vue'
  import VueClipboard from 'vue-clipboard2'
  import BaseHeader from '@/components/BaseHeader';
  import adam_models from '../../src/services/adam_models'

  Vue.use(VueClipboard)
  export default {
    name: 'Modelos',
    components: {
      BaseHeader
    },
    data() {
      return {
        models:[]
      }
    },
    mounted() {
      this.list_models()
    },
    methods: {
      onCopy() {
        this.$notify({
          type: 'success',
          message: 'Copied to clipboard'
        })
      },
      list_models(){
        adam_models.models().then(response => {
        this.models = response.data
        })
      }
    }
  };
</script>
<style></style>
