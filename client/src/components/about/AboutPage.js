import React, {Component} from 'react';

export default class AboutPage extends Component{
  render() {
    return (
    <div className='container'>
      <h1>About Us</h1>
      <p>
        This is the page that tells you all about us.
      </p>
      <p>
        The Quality Indicator, which measures the firmware quality status during and at the end of the project life cycle, are composed of “DO” data and “END IT” data. Currently, the Project Quality Indicator is documented in Excel. However, the excel version lacks flexibility in maintenance and expandability. In addition, the quality indicator should have the capability to be integrated into the quality state model for future expansion. Therefore, a web-based application that record and present the project quality data is required.
      </p>
      <p>
        Functional requirement
      </p>
      <ul>
        <li>1.	CRUD of Project Information</li>
        <li>2.	Present project quality indicator</li>
        <li>3.	Show the current status and history of the quality indicator</li>
        <li>4.	Upload and download interface for data in Excel format</li>
      </ul>
    </div>
    );
  }
}
