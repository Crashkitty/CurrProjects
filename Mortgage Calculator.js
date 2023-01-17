import React from 'react';

var MortgageCalculator = React.createClass({
  
  getInitialState: function() {
    return {
      principal: this.props.principal,
      years: this.props.years,
      rate: this.props.rate
    }
  },
  
  principalChange: function(event) {
    this.setState({principal: event.target.value});
  },
  
  yearsChange: function(event) {
    this.setState({years: event.target.value});
  },
  
  rateChange: function(event) {
    this.setState({rate: event.target.value});
  },
  
  render: function() {
    
    var payment = calculatePayment(this.state.principal, this.state.years, this.state.rate);
    var monthlyPayment = payment.monthlyPayment;
    var amortization = payment.amortization;
    
    var rows = [];
    for (var i = 0
