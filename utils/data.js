const username = [
  'StanSmith',
  'BarryBliss',
  'CarmenCane',
  'MaryMinor',
  'LulaLemon',
   ];

const reactions = [
  'Awesome! 🤩',
  'Dislike!!! 😠 ',
  'Too Funny! 🤣',
  'Love it! 😍',
  'Ned, you so crazy! 🤪',
];

const thought = [
  'Learning NoSQL!',
  'Graduation Day looms!',
  'I got a new puppy!',
  'London, here I come...',
  'Happy Birthday Freyja!',
];

const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const getRandom = () => `${thought[genRandomIndex(thought)]}`;

const getRandomThought = (words) => {
  let post = '';
  for (let i = 0; i < words; i++) {
    post += ` ${getRandom()}`;
  }
  return post;
};

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full UserName
const getRandomUserName = () =>
  `${getRandomArrItem(username)} ${getRandomArrItem(username)}`;

// Function to generate random reaction given a number (ex. 10 comments === getRandomReaction(10))
const getRandomReaction = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      text: getRandomArrItem(reactions),
      username: getRandomUserName().split(' ')[0],
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = {
  getRandomUserName,
  getRandomReaction,
  getRandomThought,
  genRandomIndex,
};
