//2.2.1 Assignment: Events by Eileen

//complete STEP 1 then do STEP 2: modify event handlers (handleDelegation was started for you)

//QUESTION 1: modify clickCounterHandler so that each time there a 'click' event on the button with id #click-button, the data-clicks attribute is incremented, and the button text content is updated accordingly
// //working solution with comments- IGNORE
// const clickCounterHandler = (event) => {
//   // console.log("button just clicked; this is the event:", event, "the event type:", event.type, "and the event target:", event.target); //logging to visualize
//   let clickButton = event.target;
//   let clickCount = clickButton.dataset.clicks; //storing the number of clicks in a var (note: html dataset attributes are str types)
//   // console.log("clickCount type and starting count:", typeof clickCount, clickCount); //type starts as a str
//   clickCount++; //JS does type coercion to perform this operation
//   // console.log("updated clickCount type and count:", typeof clickCount, clickCount); //type is now a number
//   event.target.dataset.clicks = clickCount; //updating the dataset clicks value to the clickCount
//   if (clickCount === 1) { //checking for the more specific case first rather than doing if (clickCount > 1) first
//     clickButton.textContent = `I've been clicked ${clickCount} time.`;
//   } else clickButton.textContent = `I've been clicked ${clickCount} times!`; //making the text content of clickButton to the event target text content
// };

// //polished q1 solution simplified without comments
const clickCounterHandler = (event) => {
  event.target.dataset.clicks++;
  let clickCount = Number(event.target.dataset.clicks);
  if (clickCount === 1) {
    event.target.textContent = `I've been clicked ${clickCount} time.`;
 } else event.target.textContent = `I've been clicked ${clickCount} times!`;
};

//QUESTION 2: modify handleKeydown to track the last key code pressed and update the text content of the p tag with id #keydown-tracker with a str of the specific key pressed
// //working solution with comments- IGNORE
// const handleKeydown = (event) => {
//   // console.log('key just pressed; this is the event:', event, 'the event target:', event.target, 'and the event type:', event.type);
//   // console.log('this key was pressed:', event.code); //logging the exact key pressed
//   const keydownTracker = document.querySelector('#keydown-tracker'); //getting the right p tag node
//   keydownTracker.textContent = `You pressed ${event.code}`;
// };

// //polished q2 solution simplified without comments
const handleKeydown = (event) => {
  document.querySelector('#keydown-tracker').textContent = `You pressed ${event.code}`;
};

// We've started this one for you
const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  resultSpan.textContent = event.target.textContent;
};

const addNewRandomNumber = () => {
};


// STEP 1: select the elements and attach event handlers to event listeners inside main below
const main = () => {
  //q1: added an event listener on the #click-button node for click events, handling with clickCounterHandler func
  const clickButton = document.querySelector('#click-button');
  clickButton.addEventListener('click', clickCounterHandler);
  
  //q2: added an event listener on the document body for keydown events, handling with handleKeydown func
  document.body.addEventListener('keydown', handleKeydown);

  //q3: replaced the html inline handler with this regular event listener on #inline-example button node, handling with clickCounterHandler func from q1
  const inlineButton = document.querySelector('#inline-example');
  inlineButton.addEventListener('click', clickCounterHandler);
  
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.addEventListener('click', handleDelegation);

  
};

main();
