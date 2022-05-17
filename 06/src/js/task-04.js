let counterValue = 0;

const value = document.querySelector("#value");

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

// я здаюся, не розумію, що за магія, чи це тому, що я після нашого заняття втомився, але
//  тут число, що повинно бути додатнім - від'ємне, а те, що повинно бути від'ємним - додатнє, тому
//  я просто поміняв місцями -= і +=
const increaseCount = () => { value.textContent = counterValue -= 1}; 
const decreaseCount = () => { value.textContent = counterValue += 1};

decrementBtn.addEventListener("click", increaseCount);
incrementBtn.addEventListener("click", decreaseCount);
