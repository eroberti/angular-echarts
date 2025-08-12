// Datos de ejemplo proporcionados
const surveyData = {
  "md": [0, 163.07, 187.07, 244, 260, 266, 284.55, 299.5, 326.45, 344.67, 366.14, 379.34, 405.74, 432.68, 445.95, 486.84, 526.95, 567.44, 593.87, 607.03, 646.59, 672.98, 686.24, 701, 714.46, 727.72, 740.99, 754.26, 767.42, 780.61, 793.85, 807.12, 820.39, 833.64, 846.84, 886, 926, 966, 992.38, 1018.83, 1045.22, 1071.79, 1098.28, 1138.02, 1177.72, 1218.17, 1258.48, 1298.18, 1337.88, 1377.54, 1417.21, 1456.8, 1496.89, 1536.55, 1576.23, 1629.08, 1681.99, 1722.05, 1762.21, 1801.9, 1841.52, 1894.32, 1935.27, 1975.44, 2015.55, 2056.55, 2097.5, 2138.45, 2225],
  "inc": [0, 0.3, 0.5, 0.3, 0.3, 0.3, 1, 2.4, 4.6, 6.4, 8.5, 9.7, 10.6, 12.9, 12.8, 13.1, 12.2, 11.8, 11.6, 11.4, 11.3, 11.7, 12, 12, 11.9, 11.9, 11.7, 11.6, 11.8, 12, 11.8, 12.3, 11.6, 11.8, 11.5, 11.4, 8.7, 6.7, 4.7, 2.2, 1, 0.3, 0.3, 0.3, 0.3, 0.6, 0.8, 1.1, 1.2, 1, 0.9, 0.7, 0.6, 0.6, 0.5, 1, 0.8, 0.3, 0.3, 0.6, 0.6, 0.8, 0.6, 0.6, 0.7, 0.4, 0.5, 0.8, 0.6],
  "azi": [0, 22.1, 47.1, 159.3, 8, 8, 275.7, 257.7, 241.5, 235.1, 228.4, 229.9, 233.7, 242.6, 243.5, 240.7, 238.2, 237.2, 234.5, 236.5, 238.8, 241.7, 240.6, 240.2, 240.3, 240.4, 240, 239.1, 238.2, 238.3, 238.5, 237.9, 237.3, 237.6, 236.9, 238, 235, 230.1, 226.8, 233.8, 236.6, 177.9, 60, 29.5, 352.6, 355.8, 328, 335.9, 344.7, 331.1, 325.9, 329.4, 305.8, 327.8, 308.43, 304.7, 317.8, 317.6, 236.8, 232.6, 210.9, 181, 199.6, 193.12, 162.27, 154.2, 132.6, 149, 158],
  "tvd": [0, 163.07, 187.07, 244, 260, 266, 284.55, 299.49, 326.39, 344.52, 365.81, 378.85, 404.83, 431.21, 444.15, 484, 523.13, 562.74, 588.62, 601.51, 640.3, 666.16, 679.14, 693.58, 706.74, 719.72, 732.71, 745.71, 758.59, 771.5, 784.45, 797.43, 810.41, 823.39, 836.32, 874.7, 914.08, 953.72, 979.97, 1006.37, 1032.75, 1059.31, 1085.8, 1125.54, 1165.24, 1205.69, 1246, 1285.69, 1325.39, 1365.04, 1404.7, 1444.29, 1484.38, 1524.03, 1563.71, 1616.56, 1669.46, 1709.52, 1749.68, 1789.37, 1828.99, 1881.78, 1922.73, 1962.9, 2003, 2044, 2084.95, 2125.9, 2212.44],
  "ns": [0, 0.4, 0.53, 0.55, 0.56, 0.59, 0.65, 0.6, -0.04, -0.97, -2.71, -4.07, -6.94, -9.79, -11.13, -15.42, -19.88, -24.37, -27.38, -28.87, -33.03, -35.64, -36.95, -38.47, -39.85, -41.2, -42.55, -43.91, -45.3, -46.73, -48.16, -49.62, -51.09, -52.54, -53.98, -58.16, -61.99, -65.23, -66.95, -68, -68.42, -68.62, -68.65, -68.51, -68.32, -68, -67.55, -66.97, -66.22, -65.52, -64.96, -64.49, -64.16, -63.86, -63.58, -63.17, -62.63, -62.35, -62.33, -62.51, -62.82, -63.42, -63.91, -64.31, -64.75, -65.12, -65.37, -65.73, -66.67],
  "ew": [0, 0.16, 0.26, 0.5, 0.52, 0.52, 0.37, -0.07, -1.57, -3.05, -5.21, -6.79, -10.45, -15.12, -17.75, -25.85, -33.41, -40.53, -44.96, -47.12, -53.7, -58.27, -60.65, -63.32, -65.74, -68.12, -70.47, -72.78, -75.06, -77.37, -79.7, -82.05, -84.37, -86.64, -88.88, -95.43, -101.26, -105.53, -107.5, -108.7, -109.3, -109.49, -109.43, -109.29, -109.25, -109.28, -109.44, -109.75, -110.01, -110.29, -110.63, -110.93, -111.22, -111.5, -111.75, -112.31, -112.94, -113.19, -113.35, -113.61, -113.88, -114.03, -114.1, -114.22, -114.19, -114.06, -113.86, -113.58, -113.1],
  "dogleg": [0, 0.055, 0.326, 0.355, 1.09, 0, 1.707, 2.973, 2.661, 3.127, 3.171, 2.78, 1.274, 3.254, 0.506, 0.51, 0.788, 0.334, 0.662, 1.017, 0.352, 0.799, 0.85, 0.169, 0.228, 0.047, 0.488, 0.469, 0.617, 0.457, 0.463, 1.165, 1.607, 0.473, 0.754, 0.184, 2.062, 1.577, 2.304, 2.87, 1.367, 0.996, 0.582, 0.119, 0.143, 0.223, 0.289, 0.247, 0.153, 0.248, 0.1, 0.156, 0.212, 0.173, 0.159, 0.285, 0.162, 0.374, 0.29, 0.228, 0.171, 0.233, 0.22, 0.051, 0.268, 0.226, 0.143, 0.256, 0.079],
  "sequenze": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68]
};
import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Importar ECharts y el módulo GL
import * as echarts from 'echarts/core';
import { Scatter3DChart } from 'echarts-gl/charts';
import { Grid3DComponent } from 'echarts-gl/components';
import { TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([Scatter3DChart, Grid3DComponent, TooltipComponent, CanvasRenderer]);

@Component({
  selector: 'app-scatter3d-chart',
  standalone: false,
  templateUrl: './scatter3d-chart.component.html',
  styleUrl: './scatter3d-chart.component.css'
})
export class Scatter3dChartComponent implements AfterViewInit, OnChanges, OnDestroy {
  private resizeListener = () => {
    if (this.chartInstance) {
      this.chartInstance.resize();
    }
  };
  surveyData = surveyData;

  selectedIndex: number | null = null;

  // Maneja el click en un punto del gráfico
  onChartClick = (params: any) => {
    if (params && typeof params.dataIndex === 'number') {
      if (this.selectedIndex === params.dataIndex) {
        this.selectedIndex = null;
      } else {
        this.selectedIndex = params.dataIndex;
      }
      this.renderChart();
    }
  };

  // Maneja el click en una fila de la tabla
  onRowClick(i: number) {
    if (this.selectedIndex === i) {
      this.selectedIndex = null;
    } else {
      this.selectedIndex = i;
    }
    this.renderChart();
  }

  getTableIndexes(): number[] {
    // Devuelve los índices de los datos para la tabla
    return Array.from({ length: this.surveyData.sequenze.length }, (_, i) => i);
  }
  @Input() theme: 'light' | 'dark' = 'light';
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef<HTMLDivElement>;
  private chartInstance: echarts.EChartsType | null = null;

  ngAfterViewInit(): void {
    this.renderChart();
    window.addEventListener('resize', this.resizeListener);
  }
  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeListener);
    if (this.chartInstance) {
      this.chartInstance.dispose();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['theme'] && !changes['theme'].firstChange && this.chartInstance) {
      this.renderChart();
    }
  }

  renderChart(): void {
    if (!this.chartInstance) {
      this.chartInstance = echarts.init(this.chartContainer.nativeElement, this.theme === 'dark' ? 'dark' : undefined);
    } else {
      this.chartInstance.dispose();
      this.chartInstance = echarts.init(this.chartContainer.nativeElement, this.theme === 'dark' ? 'dark' : undefined);
    }
    const axisLabelColor = this.theme === 'dark' ? '#fff' : '#222';
    const axisLineColor = this.theme === 'dark' ? '#aaa' : '#888';
    const option = {
      tooltip: {
        backgroundColor: 'auto',
        borderWidth: 0,
        textStyle: { color: '#fff', fontWeight: 500 },
        formatter: (params: any) => {
          const i = params.dataIndex;
          const dogleg = surveyData.dogleg[i];
          const color = params.color || (params.data && params.data.itemStyle && params.data.itemStyle.color) || '#222';
          return `<div style="background:${color};padding:6px 10px;min-width:90px;">
            <div style='font-size:13px;font-weight:bold;margin-bottom:2px;'>Sequence ${i}</div>
            <div><b>E/W:</b> ${params.value[0]}</div>
            <div><b>N/S:</b> ${params.value[1]}</div>
            <div><b>TVD:</b> ${params.value[2]}</div>
            <div><b>Dogleg:</b> ${dogleg}</div>
          </div>`;
        }
      },
      xAxis3D: {
        name: 'E/W',
        nameTextStyle: { color: axisLabelColor },
        axisLabel: { color: axisLabelColor },
        axisLine: { lineStyle: { color: axisLineColor } },
      },
      yAxis3D: {
        name: 'N/S',
        nameTextStyle: { color: axisLabelColor },
        axisLabel: { color: axisLabelColor },
        axisLine: { lineStyle: { color: axisLineColor } },
      },
      zAxis3D: {
        name: 'TVD',
        nameTextStyle: { color: axisLabelColor },
        axisLabel: { color: axisLabelColor },
        axisLine: { lineStyle: { color: axisLineColor } },
      },
      grid3D: {
        viewControl: {
          projection: 'perspective',
          distance: 250 // aleja la cámara para hacer zoom out
        }
      },
      series: [
        {
          type: 'scatter3D',
          symbolSize: (value: any, params: any) => {
            if (typeof params.dataIndex === 'number' && params.dataIndex === this.selectedIndex) {
              return 20;
            }
            return 12;
          },
          data: this.generateData(),
        }
      ]
    };
    this.chartInstance.setOption(option);
    this.chartInstance.off('click');
    this.chartInstance.on('click', this.onChartClick);
  }

  generateData(): any[] {
    // Usar ew (x), ns (y), tvd (z) y dogleg para color
    const data: any[] = [];
    const len = Math.min(surveyData.ew.length, surveyData.ns.length, surveyData.tvd.length, surveyData.dogleg.length);
    for (let i = 0; i < len; i++) {
      const doglegValue = surveyData.dogleg[i];
      let color = '#08306B';
      if (doglegValue < 0.46) {
        color = '#08306B';
      } else if (doglegValue >= 0.46 && doglegValue < 0.93) {
        color = '#4292C6';
      } else if (doglegValue >= 0.93 && doglegValue < 1.4) {
        color = '#66C2A4';
      } else if (doglegValue >= 1.4 && doglegValue < 1.9) {
        color = '#238B45';
      } else if (doglegValue >= 1.9 && doglegValue < 2.3) {
        color = '#FFD700';
      } else if (doglegValue >= 2.3 && doglegValue < 2.8) {
        color = '#FF8C00';
      } else {
        color = '#B22222';
      }
      // Si está seleccionado, poner borde negro
      let itemStyle: any = { color };
      if (this.selectedIndex === i) {
        itemStyle = { ...itemStyle, borderColor: '#222', borderWidth: 3 };
      }
      data.push({
        value: [
          surveyData.ew[i], // x
          surveyData.ns[i], // y
          surveyData.tvd[i] // z
        ],
        itemStyle
      });
    }
    return data;
  }
}
