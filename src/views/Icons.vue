<template>
  <div>
       <!-- BootstrapVue Done -->
    <base-header class="pb-8 pt-5 bg-gray">
    </base-header>

    <b-container fluid class="mt--7">
      <b-row class="justify-content-center">
        <b-col lg="12">
          <card header-classes="bg-transparent">
            <!-- <h3 slot="header" class="mb-0">Modelos</h3> -->
            <b-row class="icon-examples">

              <b-col lg="3" md="6" v-for="model in models" :key="model.modelName">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-active-40'"
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
          type: 'info',
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
