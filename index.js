const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  //For each item in tutorials, split | e.g. what does the this keyword mean? >> [ 'what', 'does', 'the', 'this', 'keyword', 'mean?' ],
  //Next, For each word (subitem) in item, capitalise 1st char | e.g. what >> What
  //Then convert the split array to a string (using join), adding a space between subitems
  return tutorials
  .map(item => item.split(' ')
    .map(subitem => `${subitem.substring(0,1).toUpperCase()}${subitem.substring(1)}`).join(' ')
  );
}

console.log(titleCased())