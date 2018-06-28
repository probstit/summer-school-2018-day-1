// a javascript syntax example
function upcase(strings, ...values) {
  return values.map(name => name[0].toUpperCase() + name.slice(1))
    .join(' ') + strings[2];
}

const person = {
  first: 'brendan',
  last: 'eich',
  age: 56,
  position: 'CEO of Brave Software',
};

const { first, last } = person;

console.log(upcase`${first} ${last} is the creator of JavaScript!`);

// nodejs goodies
const fs = require('fs');
const fileContent = fs.readFileSync('./example2.txt', {encoding: 'utf8'});
console.log(fileContent);

const https = require('https');
https.get('https://novabooker.ro', (resp) => {
  let data = '';

  resp.on('data', chunk => data += chunk);
  resp.on('end', () => {
    fs.writeFile('novabooker.html', data, () => {
      console.log('done writting file.');
    });
  });
});

