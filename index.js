// code away!


// function atGate(req, res, next) {
//     console.log('At gate outside Moria');

//     next();
// }

// function auth(req, res, next) {
//     if (req.url === '/mellon') {
//         next();
//     } else {
//         res.send("You shall not pass!")
//     };
// };

// server.get('/mellon', auth, (req, res) => {
//     console.log('Gate opening ...');
//     console.log('Inside and safe!');
//     res.send('Welcome traveler!');

// });

const express = require('express');

const userRouter = require('./users/userRouter');

const server = require('./server.js')

server.use(express.json());



function logger(req, res, next) {
    console.log(
      `[${new Date().toISOString()}] ${req.method} 
      to ${req.url} from ${req.get('Origin')}`
    );
    
    next();
  }
  
//   server.use(logger);
  server.use("/api/users",logger, userRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is running just for you my guy...'});
})

const port = process.env.PORT || 2000;

server.listen(port, () => {
    console.log('\n*** Server Running on http://localhost:2000***\n')
})