import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Graph extends Component {
   constructor(props) {
      super(props);
      console.log('props', props);
      this.state = {
         options: {
            chart: {
               id: 'linearGraph',
               animations: {
                  enabled: true,
                  easing: 'easeinout',
                  speed: 800,
                  animateGradually: {
                     enabled: true,
                     delay: 150
                  },
                  dynamicAnimation: {
                     enabled: true,
                     speed: 350
                  }
               },
               background: '#fff',
               toolbar: {
                  show: true,
                  tools: {
                     download: true,
                     selection: true,
                     zoom: true,
                     zoomin: true,
                     zoomout: true,
                     pan: true,
                     reset: true | '<img src="/static/icons/reset.png" width="20">',
                     customIcons: []
                  },
                  autoSelected: 'zoom'
               },
               defaultLocale: 'es',
               locales: [
                  {
                     name: 'es',
                     options: {
                        months: [
                           'Enero',
                           'Febrero',
                           'Marzo',
                           'Abril',
                           'Mayo',
                           'Junio',
                           'Julio',
                           'Agosto',
                           'Septiembre',
                           'Octubre',
                           'Noviembre',
                           'Diciembre'
                        ],
                        shortMonths: [
                           'Ene',
                           'Feb',
                           'Mar',
                           'Abr',
                           'May',
                           'Jun',
                           'Jul',
                           'Ago',
                           'Sep',
                           'Oct',
                           'Nov',
                           'Dic'
                        ],
                        days: [
                           'Domingo',
                           'Lunes',
                           'Martes',
                           'Miércoles',
                           'Jueves',
                           'Viernes',
                           'Sábado'
                        ],
                        shortDays: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
                        toolbar: {
                           download: 'Descargar SVG',
                           selection: 'Selección',
                           selectionZoom: 'Zoom Selección',
                           zoomIn: 'Acercar',
                           zoomOut: 'Alejar',
                           pan: 'Vista Panorámica',
                           reset: 'Resetear Zoom'
                        }
                     }
                  }
               ]
            },
            xaxis: {
               categories: props.options,
               labels: {
                  show: true,
                  rotate: -90,
                  rotateAlways: true,
                  hideOverlappingLabels: true,
                  showDuplicates: false,
                  trim: true,
                  minHeight: undefined,
                  maxHeight: 120,
                  style: {
                     colors: [],
                     fontSize: '10px',
                     fontFamily: 'Helvetica, Arial, sans-serif',
                     cssClass: 'apexcharts-xaxis-label'
                  },
                  offsetX: 0,
                  offsetY: 0,
                  format: undefined,
                  formatter: undefined,
                  datetimeFormatter: {
                     year: 'yyyy',
                     month: "MMM 'yy",
                     day: 'dd MMM',
                     hour: 'HH:mm'
                  }
               },
               theme: {
                  palette: 'palette4'
               },
               annotations: {
                  position: 'front',
                  yaxis: [
                     {
                        y: 0,
                        y2: null,
                        strokeDashArray: 0,
                        borderColor: '#c2c2c2',
                        fillColor: '#c2c2c2',
                        opacity: 0.5,
                        offsetX: 0,
                        offsetY: -3,
                        yAxisIndex: 0,
                        label: {
                           borderColor: '#c2c2c2',
                           borderWidth: 1,
                           text: 'Máximo',
                           textAnchor: 'end',
                           position: 'right',
                           offsetX: 0,
                           offsetY: 0,
                           style: {
                              background: '#fff',
                              color: '#777',
                              fontSize: '11px',
                              cssClass: 'apexcharts-yaxis-annotation-label',
                              padding: {
                                 left: 5,
                                 right: 5,
                                 top: 0,
                                 bottom: 2
                              }
                           }
                        }
                     }
                  ],
                  xaxis: [
                     {
                        x: 0,
                        x2: null,
                        strokeDashArray: 1,
                        borderColor: '#c2c2c2',
                        fillColor: '#c2c2c2',
                        opacity: 0.3,
                        offsetX: 0,
                        offsetY: 0,
                        label: {
                           borderColor: '#c2c2c2',
                           borderWidth: 1,
                           text: undefined,
                           textAnchor: 'middle',
                           position: 'top',
                           orientation: 'vertical',
                           offsetX: 0,
                           offsetY: 0,
                           style: {
                              background: '#fff',
                              color: '#777',
                              fontSize: '12px',
                              cssClass: 'apexcharts-xaxis-annotation-label'
                           }
                        }
                     }
                  ],
                  points: [
                     {
                        x: 0,
                        y: null,
                        yAxisIndex: 0,
                        seriesIndex: 0,
                        marker: {
                           size: 0,
                           fillColor: '#fff',
                           strokeColor: '#333',
                           strokeWidth: 3,
                           shape: 'circle',
                           radius: 2,
                           OffsetX: 0,
                           OffsetY: 0,
                           cssClass: ''
                        },
                        label: {
                           borderColor: '#c2c2c2',
                           borderWidth: 1,
                           text: undefined,
                           textAnchor: 'middle',
                           offsetX: 0,
                           offsetY: -15,
                           style: {
                              background: '#fff',
                              color: '#777',
                              fontSize: '12px',
                              cssClass: 'apexcharts-point-annotation-label',
                              padding: {
                                 left: 5,
                                 right: 5,
                                 top: 0,
                                 bottom: 2
                              }
                           }
                        }
                     }
                  ]
               },
               markers: {
                  size: 4,
                  colors: undefined,
                  strokeColor: '#fff',
                  strokeWidth: 2,
                  strokeOpacity: 0.9,
                  fillOpacity: 1,
                  discrete: [],
                  shape: 'circle',
                  radius: 2,
                  offsetX: 0,
                  offsetY: 0,
                  hover: {
                     size: 6,
                     sizeOffset: 3
                  }
               }
            }
         },
         series: props.series
      };
   }

   componentDidMount() {}

   render() {
      return (
         <div className='graph'>
            <div className='row'>
               <div className='mixed-chart'>
                  <Chart options={this.state.options} series={this.state.series} type='line' />
               </div>
            </div>
         </div>
      );
   }
}

export default Graph;
