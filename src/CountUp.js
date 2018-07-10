import React, { Component } from 'react';
import PropTypes from 'prop-types';

let intervalId;

class CountUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNum: props.startNum
    };
  }

  componentDidMount() {
    const {endNum, startNum, duration} = this.props;
    const intervalDuration = Math.abs(Math.floor(duration / (endNum - startNum)));
    intervalId = setInterval(() => {
      if(this.state.currentNum >= this.props.endNum) {
        clearInterval(intervalId);
        return;
      }
      this.setState({
        currentNum: this.state.currentNum + 1
      })
    }, intervalDuration)
  }

  componentWillUnmount() {
    clearInterval(intervalId);
  }

  render() {
    return (
      <span className={this.props.className}>{this.state.currentNum}</span>
    )
  }
}

CountUp.propTypes = {
  startNum: PropTypes.number,
  endNum: PropTypes.number,
  duration: PropTypes.number,
  className: PropTypes.string,
};

export default CountUp;