const connection = require('../database/connection');
module.exports = {
  async index(request, response){
    const {id} = request.body;
    const ong = await connection('ongs').where('id', id)
    .select('name')
    .first();
    
    if (!ong) {
      return response.status(400).json({error: "ONG não econtrado ou incorreta"})
    }
    return response.json(ong);

  }
}