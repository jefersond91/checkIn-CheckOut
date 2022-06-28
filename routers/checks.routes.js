const express = require('express');

// controllers
const { 
  getAllChecks,
  checkIn,
  getCheckById,
  checkOut,
  cancelCheck
} = require('../controllers/checks.controller')

const checksRouter = express.Router();

// Define endpoints
checksRouter.get('/', getAllChecks);

checksRouter.post('/', checkIn);

checksRouter.get('/:id', getCheckById);

checksRouter.patch('/:id', checkOut);

checksRouter.delete('/:id', cancelCheck);

module.exports = { checksRouter };