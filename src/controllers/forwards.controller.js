const controller = {};

controller.index = (req, res) => {

    res.render('index', {
        title: 'Inicio',
        encabezado: 'API REST con NODE y AJAX'

    })

}

controller.forwards = (req, res) => {

    res.render('forwards', {
        title: 'Forwards',
        encabezado: 'Forwards'
    });

}

module.exports = controller;