import React from 'react';
import { connect } from 'react-redux';

const IndexView = React.createClass({
  render() {
    return (
      <div>
        <span>hello index</span>
      </div>
    );
  },
});

export default connect(
  (state) => (state)
)(IndexView);
