exports.homePage = (req, res) => {
    res.render('index')
}

exports.addStore = (req, res) => {
    res.render('editStore', {
        title: 'Add Store'
    })
}

exports.createStore = (req, res)=>{
    const {name, description, ...rest} = req.body;
    res.render('index', {
        name: name,
        description: description
    })
}