import { Dataset } from './../../class/chart/dataset';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Chart, ChartConfigurationCustomTypesPerDataset } from 'chart.js/auto';
import { Dashboard } from 'src/app/class/chart/dashboard';
import { Data } from 'src/app/class/chart/data';
import { Clasification } from 'src/app/class/clasification/clasification';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements AfterViewInit {

  userId!: string;
  token!: string;
  lists!: Array<Clasification>;
  @ViewChild('doughnutCanvas')
  private doughnutCanvas!: ElementRef; 
  doughnutChart: any;

  constructor(
    private router: Router
    , private toastCtrl: ToastController
    , public dataService: ApiService) { }

  ngAfterViewInit() {
    this.getDataU();
  }

  private getDataU() {
    this.dataService.getStorage('userId')
    .then((data: any) => {
      if (data) {
        this.userId = data;
        this.getDataT();
      }
    });
  }

  private getDataT() {
    this.dataService.getStorage('token')
    .then((data: any) => {
      if (data) {
        this.token = data;
        this.listClasificado();
      }
    });
  }

  private listClasificado(){
    this.dataService.getClientsClasification(this.token, this.userId)
    .subscribe((result) => {
      this.getDataResult(result);
    });
  }

  private getDataResult(data: any) {
    if (data.error) {
      this.dataService.showToast(this.toastCtrl, data.statusText);
    } else {
      const dataTemp: Array<Clasification> = data.result;
      this.lists = dataTemp;
      let dashboard: Dashboard = new Dashboard();
      let data_: Data = new Data();
      let dataset_: Dataset = new Dataset();
      dataset_.label = 'Clasificación: '
      this.lists.forEach(element => {
        data_.labels.push(element.clasif_Name.replace('[\r]',''));
        dataset_.data.push(element.count);
        const color = this.dataService.random_rgba();
        dataset_.backgroundColor?.push(color);
        dataset_.hoverBackgroundColor?.push(color.replace(',0.2)',')'));
        element.backgroundColor = color;
        element.hoverBackgroundColor = color.replace(',0.2)',')');
      });   
      data_.datasets.push(dataset_);
      dashboard.data = data_;
      console.log(this.lists);  
      this.doughnutChartMethod(dashboard);
    }
  }

  doughnutChartMethod(dashboard: Dashboard) {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: dashboard.data?.labels,
        datasets: dashboard.data.datasets
      },
      options: {
          plugins: {
              legend: {
                  display: false
              },
          }
      }
    });
  }

  public goTo() {
    this.router.navigate(['/clients/lists']);
  }

  public regresar() {
    this.router.navigate(['/main']);
  }

}
