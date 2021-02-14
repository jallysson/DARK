<template>
  <div class="bg-black">
       <!-- BootstrapVue Done -->
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-black">
      <!-- Card stats -->
    </base-header>

    <b-container fluid class="mt--7 bg-black">
      <b-row class="justify-content-center">
        <b-col lg="12">
          <card header-classes="bg-transparent">
            <h3 slot="header" class="mb-0">Modelos</h3>
            <b-row class="icon-examples bg-black">

              <b-col lg="3" md="6" v-for="model in models" :key="model.modelName">
                <button type="button" class="btn-icon-clipboard bg-black" v-clipboard:copy="'ni ni-active-40'"
                        v-clipboard:success="modalShow"
                        title=""
                        data-original-title="">
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

      <!--Notice modal-->
      <modal :show.sync="modals.notice"
          modal-classes="modal-success"
          modal-content-classes="bg-success">
        <h4 slot="header" class="modal-title">D A R K</h4>

        <div class="py-3 text-center">
          <i class="ni ni-atom ni-3x"></i>
          <h4 class="heading mt-4">{{ this.modelName }}</h4>
        </div>

        <template slot="footer">
          <base-button type="link" class="text-white">MAIS DETALHES :D</base-button>
          <base-button type="link" class="text-white ml-auto" @click="modals.notice = false">OK!</base-button>
        </template>

      </modal>

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
        models:[],
        modals: {
          notice: false
        },
        modelName:''
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
      },
      modalShow(){
        this.modals.notice = true
      }
    }
  };
</script>
<style></style>
