import React from 'react';
import { Link } from 'react-router-dom';

const AttacksList = ({ attacks }) => {
    {/* AttackPatterns will be rendered here */}
  const renderAttacks = attacks.map(attack => 
    <Link style={{ marginRight: '12px' }} key={attack.id} to={`/attacks/${attack.id}`}>{attack.name}</Link>
  );
  
  return (
    <div>
        <h1> Attacks List </h1>
      {renderAttacks}
    </div>
  );
};

export default AttacksList;