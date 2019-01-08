import React from 'react';
import { Link } from 'react-router-dom';
import { PanelGroup, Panel } from 'react-bootstrap';


const AttacksList = ({ attacks, datasourceFilter, platformFilter, textFilter }) => {
    {/* AttackPatterns will be rendered here */}
    debugger

  let attackPatterns = attacks;
  
  if ( textFilter ) {
    attackPatterns = attackPatterns.filter (
      attack => Object.values(attack).flat().join('').includes(textFilter)
    )
  }

  if ( datasourceFilter !== 'all') {
    attackPatterns = attackPatterns.filter( attack => attack.x_mitre_data_sources.includes(datasourceFilter));
  } 

  if (platformFilter !== 'all') {
    attackPatterns = attackPatterns.filter( attack => attack.x_mitre_platforms.includes(platformFilter));
  } 
  
  const renderAttacks = attackPatterns.map( attack => 
    <PanelGroup accordion id="accordion-example" key={attack.id}>
      <Panel eventKey={attack.id}>
        <Panel.Heading>
          <Panel.Title toggle>

            <Link style={{ marginRight: '12px' }} to={`/attacks`}>
              { attack.name }
            </Link>

          </Panel.Title>
            <br></br>
        </Panel.Heading>
        <Panel.Body className="panelText" collapsible>
          {attack.description}
        </Panel.Body>
            <Link style={{ marginRight: '12px' }} key={attack.id} to={`/attacks/${attack.id}`}>View Pattern Details</Link>
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