<template>
  <div>
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
      <b-row>
        <b-col>
          <light-table/>
        </b-col>
      </b-row>
      <div class="mt-5"></div>
      <dark-table></dark-table>
    </b-container>
  </div>
</template>
<script>
  import { Dropdown, DropdownItem, DropdownMenu, Table, TableColumn } from 'element-ui';
  import projects from './Tables/projects'
  import users from './Tables/users'
  import LightTable from "./Tables/RegularTables/LightTable";
  import DarkTable from "./Tables/RegularTables/DarkTable";

  export default {
    components: {
      LightTable,
      // DarkTable,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
      return {
        projects,
        users
      };
    }
  };
</script>
<style>
.el-table.table-dark{
  background-color: #172b4d;
  color: #f8f9fe;
}

.el-table.table-dark th,
.el-table.table-dark tr{
  background-color: #172b4d;
}

.el-table.table-dark td,
.el-table.table-dark th.is-leaf{
  border-bottom: none;
}
</style>
