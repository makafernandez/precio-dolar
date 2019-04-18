import React, { Component, Fragment } from 'react';
import './dashboard.css';
// import Graph from './../graph/graph';
import DataDisplay from './../dataDisplay/dataDisplay';
//import { Toolbar } from '@material-ui/core';
import DateField from './../dateField/dateField';

let initDay, initMonth, initYear, finalDay, finalMonth, finalYear;

const apiKey = '9c84db4d447c80c74961a72245371245cb7ac15f';
const url = 'https://api.sbif.cl/api-sbifv3/recursos_api'; // /dolar/periodo/2019/04/dias_i/08/2019/04/dias_f/12?apikey=${apiKey}&formato=json;
const query = `${url}/dolar/periodo/${initYear}/${initMonth}/dias_i/${initDay}/${finalYear}/${finalMonth}/dias_f/${finalDay}?apikey=${apiKey}&formato=json`;

function Toolbar(props) {
   return <div>{props.children}</div>;
}

class Dashboard extends Component {
   constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
         date1: '2019-04-08',
         date2: '2019-04-12',
         isLoading: true,
         dolares: [],
         error: null
      };
   }

   componentDidMount = () => {
      this.fetchData(query);
   };

   handleChange = name => event => {
      this.setState({
         [name]: event.target.value
      });
   };

   fetchData = query => {
      this.transformDate(this.state.date1, this.state.date2);

      fetch(
         `${url}/dolar/periodo/${initYear}/${initMonth}/dias_i/${initDay}/${finalYear}/${finalMonth}/dias_f/${finalDay}?apikey=${apiKey}&formato=json`
      )
         .then(res => res.json())
         .then(
            result => {
               this.setState({ dolares: result.Dolares, isLoading: false });
               console.log('estado nuevo', this.state.dolares);
            },
            error => {
               this.setState({
                  isLoading: false,
                  error
               });
               console.log(error);
            }
         );
   };

   transformDate = (date1, date2) => {
      const arrDate1 = date1.split('-'),
         arrDate2 = date2.split('-');

      initDay = arrDate1[2];
      initMonth = arrDate1[1];
      initYear = arrDate1[0];
      finalDay = arrDate2[2];
      finalMonth = arrDate2[1];
      finalYear = arrDate2[0];
   };

   render() {
      const { isLoading, date1, date2, error, dolares } = this.state;

      return (
         <div className='dashboard'>
            <section>
               <Toolbar>
                  <DateField value={date1} onChange={this.handleChange('date1')} />
                  <DateField value={date2} onChange={this.handleChange('date2')} />
               </Toolbar>
            </section>
            <section>
               <Fragment>
                  {error ? (
                     <div className='errorMsg'>
                        <p>
                           Ha ocurrido un error, por favor <br />
                           inténtelo más tarde.
                        </p>
                     </div>
                  ) : null}

                  {!isLoading ? (
                     <DataDisplay precioDolar={dolares} />
                  ) : (
                     <div className='loading'>
                        <p>Cargando resultado...</p>
                     </div>
                  )}
               </Fragment>
            </section>
         </div>
      );
   }
}

export default Dashboard;
