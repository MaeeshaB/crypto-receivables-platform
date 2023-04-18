import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DummyComponent } from './dummy/dummy.component';
import { NumericalChartComponent } from './numerical-chart/numerical-chart.component';
import { NewsComponent } from './news/news.component';
import { NewsItemComponent } from './news-item/news-item.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent, NumericalChartComponent, DummyComponent, NumericalChartComponent, NewsComponent, NewsItemComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent, DummyComponent, NumericalChartComponent, NewsComponent]
})
export class ComponentsModule {}
