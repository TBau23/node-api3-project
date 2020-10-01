const express = require('express');

const db = require('./userDb');

const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
  db.insert(req.body)
  .then(user => {
    res.status(201).json(user)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({
      message: 'Error adding user ...'
    })
  })
});

// router.post('/:id/posts', (req, res) => {
//   // do your magic!
// db.insert(req.body)
//   .then(post => {
//     res.status(201).json(post)
//   })
//   .catch(error => {
//     console.log(error)
//     res.status(500).json({
//       message: 'Error adding post ...'
//     });
//   });
// });

router.get('/', (req, res) => {
  // do your magic!
  db.get()
  .then(users => {
    res.status(200).json({users})
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({
      message: 'Error fetching users ... sorry bro'
    })
  })
});

router.get('/:id', (req, res) => {
  // do your magic!
  db.getById(req.params.id)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: "Error fetching user ..."})
  })
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
  db.getUserPosts(req.params.id)
  .then(posts => {
    res.status(200).json(posts)
    
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({message : 'Error fetching user posts'});
  })
});

router.delete('/:id', (req, res) => {
  // do your magic!
  db.remove(req.params.id)
  .then(count => {
    if (count > 0) {
      res.status(200).json({message: 'User removed forever'})
    } else {
      res.status(404).json({message: "The post could not be found"})
    }
  })
  .catch(error => {
    res.status(500).json({ message: "Error deleting user"})
  })

});

router.put('/:id', (req, res) => {
  // do your magic!
  const changes = req.body;
  db.update(req.params.id, changes)
  .then(user => {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "The post could not be found"})
    }
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({message: "error updating user"})
  });
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
