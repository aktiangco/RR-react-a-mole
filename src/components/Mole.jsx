// This will represent a displayed mole. It ultimately will contain a timer determining the lifespan of a mole. This component will render when displayMole === true

import {useEffect} from 'react'
import moleImg from '../pics/mole.png';

const Mole = (props) => {
    // Declaring a use effect with a callback function
    useEffect(() => {
         // Defining a random number of seconds with random timer
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 2000)
        // declare a variable called timer. This variable will be assigned to a setTimeout()
        let timer = setTimeout(() => {
             // setTimeout() callback should only toggle props.setDisplayMole to false.
            props.setDisplayMole(false)
        }, randSeconds)
         // define a cleanup for our useEffect using clearTimeout(timer)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            {/* Afterward, simply render the image of a Mole within a div and give it the onClick behavior of our handleClick property we built on the MoleContainer level. Hopefully, you remembered to ship that function down as a prop. */}
            <img
                style={{ 'width': '30vw' }}
                src={moleImg}
                onClick={props.handleClick}
                alt={[]}
            />
        </div>
    )
}
export default Mole
