import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles';
import { useGlobalContext } from '../context';
import { CustomButton, CustomInput, PageHOC, GameLoad } from '../components';

const CreateBattle = () => {
  const { contract, battleName, setBattleName} = useGlobalContext();
  const [waitBattle, setWaitBattle] = useState(false)
  const navigate = useNavigate();

  const handleClick = async() => {
    if(!battleName || battleName.trim()) return null;
    try {
      await contract.createBattle(battleName)

      setWaitBattle(true);
    } catch (error) {
      
    }

  }
  return (
    <>
    {waitBattle && <GameLoad/>}

    <div className='flex flex-col mb-5'>
      <CustomInput
      label="Battle"
      placeholder='Enter battle name'
      value={battleName}
      handleValueChange={setBattleName}
      />
      <CustomButton
      title='Create Battle'
      handleClick={handleClick}
      restStyles='mt-6'
      />
    </div>
    <p className={styles.infoText} onClick={() => navigate('/join-battle')}>
      Or join already existing battles</p>
    </>
  )
};

export default PageHOC(
  CreateBattle,
  <>Create <br/>a new Battle</>,
  <>Create your own battle and wait 
  for other players to join you</>
)