import React, { useState } from 'react';
import  {PageHOC,CustomInput, CustomButton }  from '../components';
import { useGlobalContext } from '../context';


const Home = () => {
  const { contract, walletAddress } = useGlobalContext();
  const [playerName, setPlayerName] = useState('');

  const handleClick = async() => {
    try {
      
    } catch (error) {
      
    }
  }
  return (
    <div className='flex flex-col'>
        <CustomInput
        label='Name'
        placeholder='Enter your player name'
        value={playerName}
        handleValueChanged={setPlayerName}
        />
        <CustomButton
        title='Register'
        handleClick={handleClick}
        restStyles='mt-6' 
        />
    </div>
  )
};

export default PageHOC(
  Home,
  <>Welcome to Avax Gods <br/>a Web3 NFT Card Game</>,
  <>Connect your wallet to start playing <br/> the unlimited
  Web3 Battle Card Game</>
);