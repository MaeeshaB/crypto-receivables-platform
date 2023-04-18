import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Chart from 'chart.js';
import {PortfolioService} from '../../services/portfolio.service';
import {AuthenticationService} from '../../services/authentication.service';
import {NumericalChartComponent} from '../../components/numerical-chart/numerical-chart.component';
import {InvestorRecommendationsService} from "../../services/investor-recommendations.service";
import {CompanyDataService} from "../../services/company-data.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  months: Array<string>;

  // Performance overview chart
  performanceOverviewDatasets: any;
  performanceOverviewData: any;
  performanceOverviewChartLabels: Array<string>;
  performanceOverviewXAxisLabels: Array<Array<string>>;
  loggedInClientID: number;

  // Recommendation charts
  recommendationDatasets: Array<any>;
  recommendationData: Array<any>;
  recommendationChartLabels: Array<Array<string>>;
  recommendationXAxisLabels: Array<Array<Array<string>>>;

  // @ViewChild('overallPerformanceChart', {static: false}) overallPerformanceChart: ElementRef<NumericalChartComponent>;
  // @ViewChild('recommendation0Chart', {static: false}) recommendation0Chart: ElementRef<NumericalChartComponent>;
  // @ViewChild('recommendation1Chart', {static: false}) recommendation1Chart: ElementRef<NumericalChartComponent>;
  // @ViewChild('recommendation2Chart', {static: false}) recommendation2Chart: ElementRef<NumericalChartComponent>;

  constructor(private authenticationService: AuthenticationService,
              private portfolioService: PortfolioService,
              private recommendationService: InvestorRecommendationsService,
              private companyDataService: CompanyDataService) {
    this.loggedInClientID = this.authenticationService.getLoggedInClientID();
    this.recommendationDatasets = [];
    this.recommendationData = [];
    this.recommendationChartLabels = [];
    this.recommendationXAxisLabels = [];

    this.months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const d = new Date();
    const month = d.getMonth();

    if (month !== 11) {
      this.months = this.months.splice(month + 1, 12).concat(this.months.splice(0, month + 1));
    }
  }

  ngOnInit() {
    this.setupPerformanceOverviewChart();
    this.setupRecommendationCharts();
  }

  public setupPerformanceOverviewChart() {
    this.performanceOverviewChartLabels = ['Nominal Value', 'Purchases', 'Income'];
    this.performanceOverviewXAxisLabels = [this.months, this.months, this.months];
    this.performanceOverviewDatasets = [
      [],
      [],
      []
    ];
    this.performanceOverviewData = this.performanceOverviewDatasets[0];

    this.portfolioService.getPortfolioByID(this.loggedInClientID).subscribe(portfolio => {
      this.performanceOverviewDatasets = [
        portfolio.last_12_performance_millions,
        portfolio.purchases_millions,
        portfolio.contract_income_millions
      ];
      this.performanceOverviewData = this.performanceOverviewDatasets[0];
    })
  }

  private setupRecommendationCharts() {
    this.recommendationService.getInvestorRecommendationByID(this.loggedInClientID).subscribe(recommendation => {
      const recommendedCompanies = recommendation.recommended_companies;
      let count = 0;

      recommendedCompanies.forEach(companyID => {
        count++;
        this.companyDataService.getCompanyDataByID(companyID).subscribe(companyData => {
          const revenues = companyData.last_12_monthly_revenue_millions;
          this.setupRecommendationChart(revenues, count);
        })
      })
    })
  }

  public setupRecommendationChart(revenues: number[], index: number) {
    this.recommendationChartLabels = [...this.recommendationChartLabels, ['Revenues']];
    this.recommendationXAxisLabels = [...this.recommendationXAxisLabels, [this.months]];
    this.recommendationDatasets = [...this.recommendationDatasets, [revenues]];
    this.recommendationData = [...this.recommendationData, revenues];

    console.log("--------");
    console.log(this.recommendationChartLabels);
    console.log(this.recommendationXAxisLabels);
    console.log(this.recommendationDatasets);
    console.log(this.recommendationData);
  }
}
