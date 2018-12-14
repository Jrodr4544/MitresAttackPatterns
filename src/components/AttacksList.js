import React from 'react';
import { Link } from 'react-router-dom';
import { PanelGroup, Panel } from 'react-bootstrap';


const AttacksList = ({ attacks }) => {
    {/* AttackPatterns will be rendered here */}
    debugger
  const renderAttacks = attacks.map( attack => 
    <PanelGroup accordion id="accordion-example" key={attack.id}>
      <Panel eventKey={attack.id}>
        <Panel.Heading>
          <Panel.Title toggle>
            { attack.name }
          </Panel.Title>
            <br></br>
            <Link style={{ marginRight: '12px' }} key={attack.id} to={`/attacks/${attack.id}`}>View Pattern Details</Link>
        </Panel.Heading>
        <Panel.Body className="panelText" collapsible>
          {attack.description}
        </Panel.Body>
      </Panel>
    </PanelGroup>
  );
  
  return (
    <div>
        {/* Attacks List */}
      {renderAttacks}
    </div>
  );
};

export default AttacksList;