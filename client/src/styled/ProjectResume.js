import React from 'react';
import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';
HighchartsMore(ReactHighcharts.Highcharts);
/*
A chart showing the change of project satus
*/

export const ProjectPolarSpider = ({categories, data}) => {
  data = data.map( decimal => decimal * 100);
  let options = {
    chart: {
      polar: true,
      type: 'line'
    },
    title: {
      text: 'Radar Chart',
      x: -80
    },
    xAxis: {
      categories: categories,
      tickmarkPlacement: 'on',
      lineWidth: 0  
    },
    
    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      tickInterval: 20,
      min: 0,
      max: 100,
    },
    tooltip: {
      shared: true,
      //pointFormat: '<span>{series.name}: <b>${point.y:,.0f}</b><br/>'
      pointFormat: '{series.name}: {point.y:.2f} %'
    },
    legend: {
      align: 'right',
      verticalAlign: 'top',
      y: 70,
      layout: 'vertical'
    },
    
    series: [{
      name: 'Detailed Status',
      data: data,
      //pointPlacement: 'on'
    }] 
  };  // let options
  return (
    <ReactHighcharts config={options}/>
  );  //return
};

/*
ProjectChart.propTypes = {	// validate props type
	projectName: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	safety_require: PropTypes.bool,
	cyber_require: PropTypes.bool,
	technical_mastery_status: PropTypes.number,
};
*/
