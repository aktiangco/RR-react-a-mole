// This will be the component that decides which child component is rendered. We will store a Boolean state variable called displayMole here.
import React, { useState } from 'react'
// Importing child component
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = (props) => {
    // declaring a state variable
    let [theMole, setTheMole] = useState(false)
    // define the function that will handle a mole being bopped
    const handleClick = (e) => {
        // to iterate our score variable by 1 and set the mole display back to false.
        props.setScore(props.score + 1)
        setTheMole(false)
    }
    // ternary conditional operator
    // If it is true, we should see a Mole component.
    // If it is false, we should see the EmptySlot
    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />

    return (
            <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {/* <h2>Mole Container</h2> */}
            {/* return displayMole */}
            {displayMole}
            </div>
        )
}

// Export Component
export default MoleContainer