import React from 'react';
import ReactDOM from 'react-dom';
import WorldMoodTracker from './components/WorldMoodTracker.js';

export const host = 'http://35.193.41.118:9000';

ReactDOM.render(
    <WorldMoodTracker/>,
    document.getElementById('app')
);
