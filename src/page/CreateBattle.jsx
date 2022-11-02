import React from 'react';
import PageHOC from '../components/PageHoc';

const CreateBattle = () => {
  return (
    <div>
      <h1 className='text-white text-xl'>Hello from CreateBattle</h1>
    </div>
  )
};

export default PageHOC(
  CreateBattle,
  <>Create <br/>a new Battle</>,
  <>Create your own battle and wait 
  for other players to join you</>
)