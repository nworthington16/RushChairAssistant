const express = require('express');
const router = express.Router();

// Rushee model
const Rushee = require('../../models/Rushee');

// @route GET api/rushees
// @desc Get All rushees
// @access Public
router.get('/', (req, res) => {
  Rushee.find()
    .sort({ date: -1 })
    .then(rushees => res.json(rushees))
});


// @route POST api/rushees
// @desc Create a rushee
// @access Public
router.post('/', (req, res) => {
  const newRushee = new Rushee({
    name: req.body.name,
    gtid: req.body.gtid,
    status: req.body.status
  });

  newRushee.save().then(item => res.json(item));
});

// @route DELETE api/rushees
// @desc Delete a rushee
// @access Public
router.delete('/:id', (req, res) => {
  Rushee.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));;
});

module.exports = router;
