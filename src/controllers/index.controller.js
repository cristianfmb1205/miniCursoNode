const controller = {}

const title = 'index desde el servidor con variables'



controller.index = (req, res) => {


    res.render('index', { title })



}

module.exports = controller