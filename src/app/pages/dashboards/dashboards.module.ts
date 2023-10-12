import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';
import { NgxChartistComponent, NgxChartistModule } from 'ngx-chartist';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdownModule, NgbTooltipModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultComponent } from './default/default.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardsRoutingModule,
    UIModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    WidgetModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    NgxChartistModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class DashboardsModule { }
