import React, { memo, useContext } from 'react';
import { GrudgeContext } from './GrudgeContext';

const Grudge = memo(({ grudge }) => {
  const { toggleForgiveness } = useContext(GrudgeContext);

  console.log(`${grudge.id} rerendered`);

  return (
    <article className="Grudge">
      <h3>{grudge.person}</h3>
      <p>{grudge.reason}</p>
      <div className="Grudge-controls">
        <label className="Grudge-forgiven">
          <input
            type="checkbox"
            checked={grudge.forgiven}
            onChange={() => toggleForgiveness(grudge.id)}
          />{' '}
          Forgiven
        </label>
      </div>
    </article>
  );
});

export default Grudge;
