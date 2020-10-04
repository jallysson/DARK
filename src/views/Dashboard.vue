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

    <!--Charts-->
    <b-container fluid class="mt--7 bg-white">
      <b-row>
        <b-col xl="4" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Desempenho</h6>
                <h5 class="h3 mb-0">F-score</h5>
              </b-col>
            </b-row>

            <line-chart
              :height="250"
              ref="lineChart"
              :chart-data="redBarChart.chartData"
            >
            </line-chart>
          </card>
        </b-col>

        <b-col xl="4" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Desempenho</h6>
                <h5 class="h3 mb-0">Precisão</h5>
              </b-col>
            </b-row>

            <line-chart
              :height="250"
              ref="lineChart"
              :chart-data="redBarChart.chartData"
            >
            </line-chart>
          </card>
        </b-col>

        <b-col xl="4" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Desempenho</h6>
                <h5 class="h3 mb-0">Precisão</h5>
              </b-col>
            </b-row>

            <line-chart
              :height="250"
              ref="lineChart"
              :chart-data="redBarChart.chartData"
            >
            </line-chart>
          </card>
        </b-col>
      </b-row>

      <br>

      <b-row>

      <b-col xl="6" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Desempenho</h6>
                <h5 class="h3 mb-0">Qtd. Modelos</h5>
              </b-col>
            </b-row>

            <bar-chart
              :height="250"
              ref="lineChart"
              :chart-data="redBarChart.chartData"
            >
            </bar-chart>
          </card>
        </b-col>

        <b-col xl="6" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Desempenho</h6>
                <h5 class="h3 mb-0">Qtd. Avaliações</h5>
              </b-col>
            </b-row>

            <bar-chart
              :height="250"
              ref="lineChart"
              :chart-data="redBarChart.chartData"
            >
            </bar-chart>
          </card>
        </b-col>
      </b-row>

      <br>

      <b-row>

      <b-col xl="12" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Desempenho</h6>
                <h5 class="h3 mb-0">F-score diário</h5>
              </b-col>
            </b-row>

            <line-chart
              :height="250"
              ref="lineChart"
              :chart-data="redBarChartDay.chartData"
            >
            </line-chart>
          </card>
        </b-col>

      </b-row>

      <!-- End charts-->

      <!--Tables-->
      <b-row class="mt-5">
        <b-col xl="7" class="mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </b-col>
        <b-col xl="5" class="mb-5 mb-xl-0">
          <social-traffic-table></social-traffic-table>
        </b-col>
      </b-row>
      <!--End tables-->
    </b-container>

  </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';

  // Tables
  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';

  export default {
    components: {
      LineChart,
      BarChart,
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 15, 35, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 38, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [
              {
                label: 'Performance',
                data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
              }
            ],
            labels: ['Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [{
              label: 'Sales',
              data: [7, 45, 25, 41, 58, 11, 25, 20, 30, 22, 17, 29]
            }]
          },
          extraOptions: chartConfigs.blueChartOptions
        },
        redBarChartDay: {
          chartData: {
            labels: ['01/12', '02//12', '03//12', '04/12', '05/12', '06/12', '07/12', '08/12', '09/12', '10/12', '11/12', '12/12'],
            datasets: [{
              label: 'Sales',
              data: [3, 7, 5, 11, 12, 9, 10, 30, 15, 14, 12, 18]
            }]
          },
          extraOptions: chartConfigs.blueChartOptions
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>
