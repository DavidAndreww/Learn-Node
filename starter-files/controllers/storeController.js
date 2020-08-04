exports.homePage = (req, res) => {
    res.render('index')
}

exports.addStore = (req, res) => {
    res.render('editStore', {
        title: 'Add Store'
    })
}

exports.createStore = (req, res)=>{
    console.log('create store')
    res.json(req.body)
    // res.render('index', {
    //     store: req.body.name
    // })
}