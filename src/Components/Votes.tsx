import { useState } from 'react';
import './Votes.css';



function Votes() {
    
    const [ chocolateVotes, setChocolateVotes ] = useState(0);
    const [ vanillaVotes, setVanillaVotes ] = useState(0);
    const [ strawberryVotes, setStrawberryVotes ] = useState(0);

   let totalVotes:number = chocolateVotes + vanillaVotes + strawberryVotes;

    let chocolateShare:number = 0
    let vanillaShare:number = 0
    let strawberryShare:number = 0

   if (totalVotes) {
        chocolateShare = chocolateVotes / totalVotes * 100;
        vanillaShare = vanillaVotes / totalVotes * 100;
        strawberryShare = strawberryVotes / totalVotes * 100;
   }

   const chocolateWidth = {width: chocolateShare + "%"};
   const vanillaWidth = {width: vanillaShare + "%"};
   const strawberryWidth = {width: strawberryShare + "%"};
   

   

    return (
        <div className="Votes">
            <h2>Vote Here</h2>
            <p className="vote_controls">
                <button onClick={() =>setChocolateVotes(prev => prev +1)}>Chocolate</button>
                <button onClick={() =>setVanillaVotes(prev => prev +1)}>Vanilla</button>
                <button onClick={() =>setStrawberryVotes(prev => prev +1)}>Strawberry</button>
            </p>
            {totalVotes === 0 && <p>No votes yet</p>}
            <div className="displayVotes">
                {chocolateVotes !== 0 && <label>Chocolate: {chocolateVotes} ({chocolateShare.toFixed(2)}%)</label>}
                <div className="bar" id="chocolate" style={chocolateWidth}></div>
                {vanillaVotes !== 0 && <label>Vanilla: {vanillaVotes} ({vanillaShare.toFixed(2)}%)</label>}
                <div className="bar" id="vanilla" style={vanillaWidth}></div>
                {strawberryVotes !== 0 && <label>Strawberry: {strawberryVotes} ({strawberryShare.toFixed(2)}%)</label>}
                <div className="bar" id="strawberry" style={strawberryWidth}></div>
            </div>
        </div>
    )
}

export default Votes;