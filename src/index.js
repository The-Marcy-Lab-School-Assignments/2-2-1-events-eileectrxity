//QUESTION 7: fill out the index.html with boilerplate code. then add a click event listener on the button + an event handler that increments results counter by 1 with each click
// //working solution with comments- IGNORE
// const handleIncrement = (event) => {
//     console.log("the event:", event, "the event target:", event.target, "and its text content:", event.target.textContent);
//     const results = document.querySelector('#results');
//     let count = results.textContent;
//     count++;
//     results.textContent = count;
// };

// //polished q7 solution simplified without comments- noting that although less readable and more reliant on the DOM structure not changing, event.target.nextElementSibling.textContent++ would have also worked as p tag #results is the next sibling element of #add-one button el
const handleIncrement = () => {
  document.querySelector('#results').textContent++;
};

const main = () => {
  const incrementorButton = document.querySelector('#add-one');
  incrementorButton.addEventListener('click', handleIncrement);
};

main();