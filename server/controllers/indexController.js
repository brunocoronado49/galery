const indexController = {}

indexController.index = (req, res) => {
    res.send('Hello World!')
}

indexController.about = (req, res) => {
    res.send('About!')
}

export default indexController
