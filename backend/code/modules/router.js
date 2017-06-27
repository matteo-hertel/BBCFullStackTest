const router = require('express').Router();

router.get('/teapot', function (req, res) {
    res.status(418);
    res.send(`I'm a teapot`);
});


module.exports = router;
