import React, { useState } from 'react';
import  {PageHOC,CustomInput, CustomButton }  from '../components';
import { useGlobalContext } from '../context';


const Home = () => {
  const { contract, walletAddress,setShowAlert } = useGlobalContext();
  const [playerName, setPlayerName] = useState('');

  const handleClick = async() => {
    try {
      const  playerExists = await contract.player(walletAddress);

      if(!playerExists) {
        await contract.registerPlayer(playerName,playerName)
        setShowAlert({
          status:false,
          type:'info',
          message:`${playerName} is being summoned!`
        })
      }
    } catch (error) {
      setShowAlert({
        status:true,
        type:'failure',
        message: "something went wrong"
      })
      alert(error)
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