import React, { Component, Fragment } from 'react';
import './dataDisplay.css';
import Graph from './../graph/graph';

let initDay, initMonth, initYear, finalDay, finalMonth, finalYear;

const apiKey = '9c84db4d447c80c74961a72245371245cb7ac15f';
const url = 'https://api.sbif.cl/api-sbifv3/recursos_api'; // /dolar/periodo/2019/04/dias_i/08/2019/04/dias_f/12?apikey=${apiKey}&formato=json;
const query = `${url}/dolar/periodo${initYear}/${initMonth}/dias_i/${initDay}/${finalYear}/${finalMonth}/dias_f/${finalDay}/12?apikey=${apiKey}&formato=json`;

class DataDisplay extends Component {
   constructor(props) {
      super(props);
      console.log(props);
      //this.handleChange = this.handleChange.bind(this);
      this.state = {
         isLoading: true,
         precioDolar: props.precioDolar,
         error: null,
         avgValue: 0,
         maxValue: 0,
         minValue: 0,
         categories: [],
         series: []
      };
   }

   componentDidMount = () => {
      this.processData(this.state.precioDolar);
   };

   /*handleChange = name => event => {
      this.setState({
         [name]: event.target.value
      });
   };*/

   processData = arr => {
      const values = arr.map(item => parseFloat(item.Valor.replace(',', '.')));
      const dates = arr.map(item => item.Fecha);

      //Promedio
      const sum = values.reduce((previous, current) => (current += previous), 0);
      let avg = sum / values.length;

      let min = Math.min(...values);
      let max = Math.max(...values);

      this.setState({
         isLoading: false,
         categories: dates,
         series: [
            {
               name: 'CLP$',
               data: values
            }
         ],
         avgValue: avg,
         maxValue: max,
         minValue: min
      });
   };

   render() {
      const { isLoading, error, avgValue, maxValue, minValue, categories, series } = this.state;
      console.log('series', series);
      return (
         <Fragment>
            <div className='dataDisplay'>
               <div>Dólar</div>
               <div>Valor promedio: ${avgValue}</div>
               <div>Valor máximo: ${maxValue} - 08/04/2019</div>
               <div>Valor mínimo: ${minValue} - 08/04/2019</div>
            </div>
            {!isLoading ? (
               <div>
                  <Graph options={categories} series={series} />
               </div>
            ) : (
               <div className='loading'>
                  <p>Cargando resultado...</p>
               </div>
            )}
         </Fragment>
      );
   }
}

export default DataDisplay;
