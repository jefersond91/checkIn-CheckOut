// Model Check
const { Check } = require('../models/check.model');

// Functions
const getAllChecks = async (req, res) => {
  try {
    const checks = await Check.findAll()
    
  res.status(200).json({
    status: 'success',
    checks,
  });
  } catch (err) {
    console.log(err)
  }
};

const checkIn = async (req, res) => {
  try {
    const { entranceTime, exitTime, status } = req.body;

    const newCheckIn = await Check.create({
      entranceTime,
      exitTime,
      status,
    });

    res.status(201).json({
      status: 'success',
      newCheckIn,
    });
  } catch (err) {
    console.log(err);
  }
};

const getCheckById = async (req, res) => {
  const { id } = req.params;

  const check = await Check.findOne({ where: { id } });

  if(!check){
    return res.status(404).json({
      status: 'error',
      message: 'check not found'
    });
  }

  res.status(200).json({
    status: 'success',
    check,
  });
};

const checkOut = async (req, res) => {
  const { id } = req.params;
  const { exitTime } = req.body;

  const check = await Check.findOne({ where: { id } });

  if(!check){
    return res.status(404).json({
      status: 'error',
      message: 'check not found',
    });
  }

  await check.update({ exitTime, status:'out' });

  res.status(204).json({ status: 'success' });
};

const cancelCheck = async (req, res) => {
  const { id } = req.params;

  const check = await Check.findOne({ where: { id } });

  if(!check){
    return res.status(404).json({
      status: 'error',
      message: 'check not found',
    });
  }

  await check.update({ status: 'cancelled'});

  res.status(204).json({ status: 'success'});
};

module.exports = {
  getAllChecks,
  checkIn,
  checkOut,
  cancelCheck,
  getCheckById,
};