import {AfterViewInit, Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-numerical-chart',
  templateUrl: './numerical-chart.component.html',
  styleUrls: ['./numerical-chart.component.scss']
})
export class NumericalChartComponent implements OnInit, AfterViewInit {
  @Input() name: string;
  @Input() header: string;
  @Input() subtitle: string;
  @Input() datasets: Array<Array<number>>;
  @Input() dataLabels: Array<string>;
  @Input() xAxisLabels: Array<Array<string>>;
  @Input() color: 'blue' | 'purple' | 'red' | 'orange' | 'green';
  @Input() format: 'line' | 'bar';

  @ViewChild('canvas', {static: false}) canvas: ElementRef<HTMLCanvasElement>;

  gradientChartOptionsConfigurationWithTooltip: any;
  ctx: CanvasRenderingContext2D;
  gradientStroke: CanvasGradient;
  currentDataset: number;
  myChartData: Chart;
  accentColor: string;
  data: Array<number>;

  public clicked = true;
  public clicked1 = false;
  public clicked2 = false;

  constructor() { }

  ngOnInit(): void {
    this.currentDataset = 0;
  }

  ngAfterViewInit() {
    this.setupCanvasAndContext();
    this.setupColor();
    this.setupChartData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.myChartData !== undefined) {
      this.updateOptions();
    }
  }

  setupCanvasAndContext() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }

  setupColor() {
    if (this.color === 'blue') {
      this.gradientChartOptionsConfigurationWithTooltip = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },

        tooltips: {
          backgroundColor: '#f5f5f5',
          titleFontColor: '#333',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: 'nearest',
          intersect: 0,
          position: 'nearest'
        },
        responsive: true,
        scales: {
          yAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.0)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              suggestedMin: 0,
              // suggestedMax: 125,
              padding: 20,
              fontColor: '#2380f7'
            }
          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.1)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              padding: 20,
              fontColor: '#2380f7'
            }
          }]
        }
      };
      this.accentColor = '#0d4cec';
      this.gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
      this.gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
      this.gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
      this.gradientStroke.addColorStop(0, 'rgba(29,140,248,0)');
    }

    if (this.color === 'purple') {
      this.gradientChartOptionsConfigurationWithTooltip = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },

        tooltips: {
          backgroundColor: '#f5f5f5',
          titleFontColor: '#333',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: 'nearest',
          intersect: 0,
          position: 'nearest'
        },
        responsive: true,
        scales: {
          yAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.0)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              suggestedMin: 0,
              // suggestedMax: 125,
              padding: 20,
              fontColor: '#9a9a9a'
            }
          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(225,78,202,0.1)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              padding: 20,
              fontColor: '#9a9a9a'
            }
          }]
        }
      };
      this.accentColor = '#c30dec';

      // Temporarily using the blue gradients for purple
      this.gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
      this.gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
      this.gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
      this.gradientStroke.addColorStop(0, 'rgba(29,140,248,0)');
    }

    if (this.color === 'red') {
      this.gradientChartOptionsConfigurationWithTooltip = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },

        tooltips: {
          backgroundColor: '#f5f5f5',
          titleFontColor: '#333',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: 'nearest',
          intersect: 0,
          position: 'nearest'
        },
        responsive: true,
        scales: {
          yAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.0)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              suggestedMin: 0,
              // suggestedMax: 125,
              padding: 20,
              fontColor: '#9a9a9a'
            }
          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(233,32,16,0.1)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              padding: 20,
              fontColor: '#9a9a9a'
            }
          }]
        }
      };
      this.accentColor = '#ec250d';
      this.gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
      this.gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
      this.gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
      this.gradientStroke.addColorStop(0, 'rgba(233,32,16,0)');
    }

    if (this.color === 'orange') {
      this.gradientChartOptionsConfigurationWithTooltip = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },

        tooltips: {
          backgroundColor: '#f5f5f5',
          titleFontColor: '#333',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: 'nearest',
          intersect: 0,
          position: 'nearest'
        },
        responsive: true,
        scales: {
          yAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.0)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              suggestedMin: 0,
              // suggestedMax: 110,
              padding: 20,
              fontColor: '#ff8a76'
            }
          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(220,53,69,0.1)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              padding: 20,
              fontColor: '#ff8a76'
            }
          }]
        }
      };
      this.accentColor = '#ec7c0d';

      // Temporarily using the red gradients for orange
      this.gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
      this.gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
      this.gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
      this.gradientStroke.addColorStop(0, 'rgba(233,32,16,0)');
    }

    if (this.color === 'green') {
      this.gradientChartOptionsConfigurationWithTooltip = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },

        tooltips: {
          backgroundColor: '#f5f5f5',
          titleFontColor: '#333',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: 'nearest',
          intersect: 0,
          position: 'nearest'
        },
        responsive: true,
        scales: {
          yAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.0)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              suggestedMin: 0,
              // suggestedMax: 125,
              padding: 20,
              fontColor: '#9e9e9e'
            }
          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(0,242,195,0.1)',
              zeroLineColor: 'transparent',
            },
            ticks: {
              padding: 20,
              fontColor: '#9e9e9e'
            }
          }]
        }
      };
      this.accentColor = '#4cec0d';
      this.gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
      this.gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
      this.gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)');
      this.gradientStroke.addColorStop(0, 'rgba(66,134,121,0)');
    }
  }

  setupChartData() {
    let config;

    if (this.format === 'line') {
      config = {
        type: 'line',
        data: {
          labels: this.xAxisLabels[this.currentDataset],
          datasets: [{
            label: this.dataLabels[this.currentDataset],
            fill: true,
            backgroundColor: this.gradientStroke,
            borderColor: this.accentColor,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: this.accentColor,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: this.accentColor,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.data,
          }]
        },
        options: this.gradientChartOptionsConfigurationWithTooltip
      };
    } else {
      // format = 'bar
      config = {
        type: 'bar',
        responsive: true,
        legend: {
          display: false
        },
        data: {
          labels: this.xAxisLabels[this.currentDataset],
          datasets: [{
            label: this.dataLabels[this.currentDataset],
            fill: true,
            backgroundColor: this.gradientStroke,
            borderColor: this.accentColor,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: this.data,
          }]
        },
        options: this.gradientChartOptionsConfigurationWithTooltip
      }
    }

    this.myChartData = new Chart(this.ctx, config);
    this.data = this.datasets[0];
    this.updateOptions();
  }

  public updateOptions() {
    this.data = this.datasets[this.currentDataset];
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }

  public switchDataset(index: number) {
    this.currentDataset = index;
    this.updateOptions();
  }
}
