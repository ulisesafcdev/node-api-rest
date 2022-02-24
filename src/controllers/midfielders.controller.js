const controller = {};

controller.midfielders = (req, res) => {

    res.render('midfielders', {
        title: 'Midfielders',
        encabezado: 'Midfielders'
    })

}

module.exports = controller;