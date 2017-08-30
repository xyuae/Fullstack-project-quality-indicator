import Highcharts from 'highcharts';
import React, {Component} from 'react';
import { PropTypes } from 'prop-types';

export class Chart extends Component {
  componentDidMount() {
    this.chart = new Highcharts['Chart'](
     this._chart,
     this.props.options
    );
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return (
     <div ref={(chart) => {this._chart = chart;}}/>
    );
  }
}

Chart.propTypes = {
  options: PropTypes.object
};
