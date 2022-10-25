const models = require('../database/models');

const getAllRooms = async (req, res) => {
  try {
    const post = await models.room.findAll();
    return res.status(200).json({ room });
  } 
  catch (error) 
  {
    return res.status(500).send({error: error.message})
  }
}

module.exports = {
  getAllRooms
}