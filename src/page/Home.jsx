import React from 'react';
import { PageHOC } from '../components';
import { useGlobalContext } from '../context';

const Home = () => {
  return (
    <div>
      
    </div>
  )
};

export default PageHOC(
  Home,
  <>Welcome to Avax Gods <br/>a Web3 NFT Card Game</>,
  <>Connect your wallet to start playing <br/> the unlimited
  Web3 Battle Card Game</>
)