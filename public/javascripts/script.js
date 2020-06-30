// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < steak.length; i++) {
//   addFood(steak[i], '#steak');
// }

// // Iteration 1 using callbacks
// addFood(steak[0], '#steak', () => {
//   addFood(steak[1], '#steak', () => {
//     addFood(steak[2], '#steak', () => {
//       addFood(steak[3], '#steak', () => {
//         addFood(steak[4], '#steak', () => {
//           addFood(steak[5], '#steak', () => {
//             addFood(steak[6], '#steak', () => {
//               addFood(steak[7], '#steak');
//               document.querySelector('#table').innerHTML += `<img src="public/images/steak.jpg"/>`;
//             })
//           })
//         })
//       })
//     })
//   })
// });

// // Iteration 2 using `.then()`
// addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
//   addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
//     addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
//       addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
//         addFood(mashPotatoes[4], '#mashPotatoes')
//         document.querySelector('#table').innerHTML += `<img src="public/images/mashPotatoes.jpg"/>`;
//       })
//     })
//   })
// });

// // Iteration 3 using async and await

// brusselSprouts.forEach(eachStep => {
//   async function makeFood(step) {
//     await addFood(step, '#brusselSprouts')
//     if (brusselSprouts.indexOf(step) === brusselSprouts.length -1){
//       document.querySelector('#table').innerHTML += `<img src="public/images/brusselSprouts.jpg"/>`;
//     }
//   }
//   makeFood(eachStep);
// });

// BONUS 2

async function makeFood(steps, id) {
  // steps.forEach(step => {
  //   await addFood(step, id)
  // })
  for (const step of steps) {
      await addFood(step, id);
    }
    document.querySelector('#table').innerHTML += `<img src="public/images/${id.replace('#', '')}.jpg" />`;
}

Promise.all([
  makeFood(steak, '#steak'),
  makeFood(brusselSprouts, '#brusselSprouts'),
  makeFood(mashPotatoes, '#mashPotatoes')
]).then(() => {
  document.body.innerHTML += `<button onclick="new Audio('public/media/dinnerIsServed.mp3').play()">Dinner is served.</button>`;
});
