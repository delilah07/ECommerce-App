const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(
    `<div>
      <form method="POST">
        <input name="email" placeholder="email">
        <input name="password" placeholder="password">
        <input name="passwordconfirmation" placeholder="password confirmation">
        <button>Sign up</button
      </form>
    </div>`
  );
});

//  my code, but using outside library
// const bodyParser = (req, res, next) => {
//   if (req.method === 'POST') {
//     //data is Buffer object we need to convert it .toString('utf8')
//     req.on('data', (data) => {
//       const parsed = data.toString('utf8').split('&');
//       const formData = {};
//       for (let pair of parsed) {
//         const [key, value] = pair.split('=');

//         formData[key] = value;
//       }
//       req.body = formData;
//       next();
//     });
//   } else {
//     next();
//   }
// };

// app.post('/', bodyParser.urlencoded({ extended: true }), (req, res) => {
app.post('/', (req, res) => {
  // get access to email, password and password confirmation
  console.log(req.body);

  res.send('account created');
});

app.listen(3000, () => {
  console.log('Listening');
});
