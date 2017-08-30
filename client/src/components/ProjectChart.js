import React, {Component} from 'react';
import { Chart } from './Chart';	// must use destructor form to import
//import { PropTypes } from 'prop-types';

/*
A chart showing the change of project satus
*/

export class ProjectChart extends Component {
  render() {
    if (!this.props.name) {
      return null;
    }
    let technical_history = Array();
    let safety_history = Array();
    let cyber_history = [];
    let development_history = Array();
    for (let i = 0; i < this.props.history.length; i++){
      let history = this.props.history[i];
      let date = new Date(history.updateAt);
      date = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
      technical_history.push(Array(date, history.technical_mastery_status));
      safety_history.push([date, history.safety_status]);
      cyber_history.push([date, history.cyber_status]);
      development_history.push([date, history.development_mastery_status]);
    }
    //console.log(technical_history);
    const options = {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Resume History'
      },
      subtitle: {
        text: 'Project Name: ' + this.props.name
      },
      xAxis: {
        type: 'datetime',
        title: {
          text: null
        }
      },
      yAxis: {
        title: {
          text: 'Status (%)'
        },
        min: 0,
        max: 1,
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} %'
      },
      plotOptions: {
        spline: {
          marker: {
            enabled: true
          }
        }
      },
      series: [
      {
        name: 'Technical Mastery Status',
        // Define the data points. All series have a dummy year
        // of 1970/71 in order to be compared on the same x axis. Note
        // that in JavaScript, months start at 0 for January, 1 for February etc.
        data: technical_history
      },
      {
        name: 'Safety Status',
        data: safety_history
      },
      {
        name: 'Cyber Status',
        data: cyber_history
      },
      {
        name: 'Development Management Mastery Status',
        data: development_history
      }
    ]
    };
    return (
     <Chart options={options}/>
    );

  }
}

/*
ProjectChart.propTypes = {	// validate props type
	projectName: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	safety_require: PropTypes.bool,
	cyber_require: PropTypes.bool,
	technical_mastery_status: PropTypes.number,
};
*/
