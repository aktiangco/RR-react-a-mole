// This will represent an empty molehill or an invalid location to click. Much like its sister component, it will have an internal timer to cycle the display. This component will render when displayMole === false
import { useEffect } from "react"
import MoleHill from '../pics/molehill.png'

const EmptySlot = (props) => {
// Declaring a use effect with a callback function
    useEffect(() => {
        // Defining a random number of seconds with random timer
        let randSeconds = Math.ceil(Math.random() * 6000)
        // declare a variable called timer. This variable will be assigned to a setTimeout()
        let timer = setTimeout(() => {
            // setTimeout() callback should only toggle props.displayMole to true.
            props.toggle(true)
        }, randSeconds)
            // define a cleanup for our useEffect using clearTimeout(timer)
        return () => clearTimeout(timer)
    })

    return (
        // render the image of a MoleHill within a div
        <div>
            <img
                style={{ 'width': '30vw' }}
                src={MoleHill}
                alt={[]} />
        </div>
    )
}

export default EmptySlot