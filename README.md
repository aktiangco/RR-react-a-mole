
## ACTIVITY: RR-react-a-mole

In this activity, you will develop a React-based Whac-a-Mole game from scratch. You will use all of the concepts learned in this module.

You will:

- Generate components dynamically.
- Use state to track the score and mole status.
- Utilize the useEffect hook to govern the mole (component) lifecycle.

## Setup

1. Instantiate a new React app with create-react-app. We will call this project react_a_mole.
Windows Users: As of Dec. 2021, there is an issue with create-react-app in Windows. If you run npm start with a React app in Git Bash, there will be a path error due to the way Git Bash handles paths. To get around this, you can either use VSCode's terminal, or once you run npm start, open package.json, make a minor change then delete that chance, and save. This will reload the application without errors.

2. Open the generated project and remove the boilerplate code.
3. You can download image assets at: [https://github.com/HackerUSA-CE/RR-React-A-Mole-Images]
4. Once the setup is complete, pause and consider all the elements needed for this application. Because we will be dealing with a complex state and unique, dynamically generated components, we want to plan and understand before writing any code.

## PLanning

First, we will plan the structure of our application. Your application can look however you like, so feel free to style it in any way you see fit. The foundation, however, should follow this structure:

- App - Stores the score state variable
  - MoleContainer
This will be the component that decides which child component is rendered. We will store a Boolean state variable called displayMole here.

    - Mole
This will represent a displayed mole. It ultimately will contain a timer determining the lifespan of a mole. This component will render when displayMole === true

    - EmptySlot
This will represent an empty molehill or an invalid location to click. Much like its sister component, it will have an internal timer to cycle the display. This component will render when displayMole === false

After deciding on the components, we must plan the type of functionality for each.

- App
  - A function to generate nine MoleContainers
- MoleContainer
  - A handleClick function that will increment the score by 1 and immediately set the clicked-on mole to no longer display (we will pass this down only to Mole components)
  - A ternary that will determine which child to render
- Mole and EmptySlot
  - A useEffect hook that will start the timer and clean it up afterward
Now that we have planned everything we need, it may be helpful to draw a diagram to represent the component structure. Identify where state variables are instantiated and compare that to where functions are locate

## Getting Started

Take a moment to generate the component files needed for this application. Fill out each with basic boilerplate code and test rendering each component where it belongs to ensure your basic syntax is handled correctly.

## Generating MoleContainers

In JSX, we typically do not have access to a traditional for loop to generate variables. However, if we want to generate a fixed number of components, a traditional for loop would be best. Luckily, there is a way around this behavior: We just describe a function that runs a typical for loop outside our JSX return.

- Declare a function called createMoleHill()
- Inside this function, define an empty array. Perhaps call it hills
- Build a basic for loop that iterates nine times. (You can choose any number. It is your game after all!) On each iteration, a MoleContainer component should be pushed to hills
  - It may be worthwhile to send props to the MoleContainer
  - Score and setScore could go down.
  - A key with the value of i would also be best practice.
- Outside the for loop, define a return value that formats the hills variable between div tags.
- Next, simply call this function inside the app's return method.

## Developing MoleContainer Behavior

We are ready to begin developing the behavior that will determine what renders within our MoleContainer

- We need to declare a state variable to determine the status of the mole in this container. Is the mole above ground and ready to be bopped or hiding within the mole hole? Define a state variable called displayMole and instantiate it to false
- Next, define the function that will handle a mole being bopped. We want the function to iterate our score variable by 1 and set the mole display back to false.
- Before our return value, define a variable called displayMole that will represent which component to render (the Mole or the EmptySlot), depending on whether displayMole is true.
Hint: Remember to use the ternary here. Which values must be passed as props to the respective components?

  - If it is true, we should see a Mole component.
  - If it is false, we should see the EmptySlot
- Finally, within our return, reference displayMole

## useEffect and Building a Mole Timer

We are ready to give functionality to our EmptySlot and Mole components. Start with EmptySlot and then move onto Mole when you are finished.

- Declare a useEffect that takes a callback function, as we have done in the past.
- Within the callback function, start by defining a random number of seconds. We want each mole to exist on its own random timer. Otherwise, our game would not be much fun.
- Next, declare a variable called timer. This variable will be assigned to a setTimeout()
- The setTimeout() callback should only toggle props.displayMole to true.
- Important: Do not forget to define a cleanup for our useEffect using clearTimeout(timer)
Once EmptySlot is built, Mole will be easy as well.

- Complete the same steps as above but invert the toggle. The timer should handle setting displayMole back to false. We do not want moles just sitting around waiting to be bopped. They should go back into their holes after a certain amount of time.
- Afterward, simply render the image of a Mole within a div and give it the onClick behavior of our handleClick property we built on the MoleContainer level. Hopefully, you remembered to ship that function down as a prop.

## Source

Image
[https://github.com/HackerUSA-CE/RR-React-A-Mole-Images]

Solution Code
[https://github.com/HackerUSA-CE/RR-React-A-Mole/tree/main/src]
