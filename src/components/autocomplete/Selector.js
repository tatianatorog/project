import React from 'react';
import Select from 'react-select';
import dataTimeZone from './timeZones'

// const options = [
//   { value: 'chocolate/bogota', label: 'Chocolate/bogota' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

export default class Selector extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={dataTimeZone}
      />
    );
  }
}
