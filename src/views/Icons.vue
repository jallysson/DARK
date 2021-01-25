<template>
  <div class="bg-primary">
       <!-- BootstrapVue Done -->
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-primary">
      <!-- Card stats -->
    </base-header>

    <b-container fluid class="mt--7 bg-primary">
      <b-row class="justify-content-center">
        <b-col lg="12">
          <card header-classes="bg-transparent">
            <h3 slot="header" class="mb-0">Modelos selecionados</h3>
            <b-row class="icon-examples bg-primary">

              <b-col lg="3" md="6" v-for="model in models" :key="model.modelName">
                <button type="button" class="btn-icon-clipboard bg-primary" v-clipboard:copy="'ni ni-active-40'"
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
