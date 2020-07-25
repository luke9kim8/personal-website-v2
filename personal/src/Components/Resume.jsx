import React from 'react';
import SkillsChart from './SkillsChart'
function Resume(props) {
  return (
    <div ref={props.divRef} className="resume">
        <div className="resume title">
            <h3 className="titleText"> Resume </h3>
        </div>
        <div className="resume description">
            
        </div>
    </div>
  );
}

export default Resume;
