const fs = require('fs')

module.exports = (req, res) => {
    const active = JSON.parse(fs.readFileSync('../server/DataTable/activeList.json', 'utf-8'))
    console.log(active)
    active.list.push(req.body)
    fs.writeFileSync('../server/DataTable/activeList.json', JSON.stringify(active))
    res.end(JSON.stringify('Success'))
}