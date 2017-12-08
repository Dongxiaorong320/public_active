module.exports = (req,res) =>{
    var addr = require('../DataTable/addr.json')
    res.end(JSON.stringify(addr))
}