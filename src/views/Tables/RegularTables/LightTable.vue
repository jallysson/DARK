<template>
    <b-card no-body>
        <b-card-header class="border-0">
            <!-- <h3 class="mb-0">Modelos</h3> -->
        </b-card-header>

        <el-table class="table-responsive table"
                  header-row-class-name="thead-light"
                  :data="models">
            <el-table-column label="Nome"
                             min-width="310px"
                             prop="name">
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                            <img alt="Image placeholder" :src="'img/theme/vue.jpg'">
                        </a>
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm">{{ row.modelName }}</span>
                        </b-media-body>
                    </b-media>
                </template>
            </el-table-column>
            <el-table-column label="Status"
                             min-width="170px"
                             prop="status">
                <template v-slot="{row}">
                    <badge class="badge-dot mr-4" type="">
                        <i :class="`bg-${'warning'}`"></i>
                        <span class="status" :class="`text-${'warning'}`">{{'pending'}}</span>
                    </badge>
                </template>
            </el-table-column>

            <el-table-column label="Usuários" min-width="190px">
                <div class="avatar-group">
                    <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip"
                       data-original-title="Ryan Tompson">
                        <img alt="Image placeholder" src="img/theme/team-1.jpg">
                    </a>
                    <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip"
                       data-original-title="Romina Hadid">
                        <img alt="Image placeholder" src="img/theme/team-2.jpg">
                    </a>
                    <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip"
                       data-original-title="Alexander Smith">
                        <img alt="Image placeholder" src="img/theme/team-3.jpg">
                    </a>
                    <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip"
                       data-original-title="Jessica Doe">
                        <img alt="Image placeholder" src="img/theme/team-4.jpg">
                    </a>
                </div>
            </el-table-column>
            <el-table-column label="Conclusão"
                             prop="completion"
                             min-width="240px">
                <template v-slot="{row}">
                    <div class="d-flex align-items-center">
                        <span class="completion mr-2">{{60}}%</span>
                        <div>
                            <base-progress :type="'warning'" :value="60"/>
                        </div>
                    </div>
                </template>
            </el-table-column>
        </el-table>

        <b-card-footer class="py-4 d-flex justify-content-end">
            <base-pagination v-model="currentPage" :per-page="10" :total="50"></base-pagination>
        </b-card-footer>
    </b-card>
</template>
<script>

  import projects from './../projects'
  import { Table, TableColumn} from 'element-ui'
  import adam_models from '../../../services/adam_models'

  export default {
    name: 'light-table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
      return {
        models:[],
        projects,
        currentPage: 1
      };
    },
    mounted() {
    this.list_models()
    },
    methods: {
      list_models(){
        adam_models.models().then(response => {
        this.models = response.data
        })
      }
    }
  }
</script>
