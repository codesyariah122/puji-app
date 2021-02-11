const {poolUsers, poolPortfolios} = require('./conf')

const db = {
  tb1: "users",
  tb2: "portfolios"
}


const getUsers = async(req, res) => {
  try{    
    const users = await poolUsers.query(`SELECT * FROM ${db.tb1}`)
    return users.rows
  }catch(err){
    console.error(err.message)
  }
}

const getPortfolios = async(req, res) => {
  try {
    const Portfolio = await poolPortfolios.query(`SELECT * FROM ${db.tb2}`)
    res.json(Portfolio.rows)
  } catch(err) {
    console.error(err.message)
  }
}

module.exports = {
  getUsers,
  getPortfolios
}