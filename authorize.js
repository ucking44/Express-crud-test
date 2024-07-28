const authorize = (req, res, next) => {
    const { user } = req.query
    if (user === 'Uche') {
        req.user = { name: 'Uche', id: 4 }
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize
