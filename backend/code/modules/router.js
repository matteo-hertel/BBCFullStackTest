const router = require('express').Router();
const Recipes = require("./../models/recipes");
const RecipesModel = new Recipes();
const HTTPError = require("./../errors/httpError");

router.get('/recipes', async function (req, res) {
    try {
        let recipes = await RecipesModel.getRecipes();

        res.json(recipes)
    } catch (exc) {
        let error = makeError(exc);
        res.status(error.statusCode);
        res.send(error.errorCode);
        /**
         * in here we can add all the error loggin possible, 
         * the error info are in the error object, so if logstash or any other loggin 
         * system are implementd we should have enough info to have a quick and effective
         * troubleshooting
         */
        console.error(error)
    }
});
router.get('/recipes/:id', async function (req, res) {
    try {
        let recipe = await RecipesModel.getRecipeByID(req.params.id);

        res.json(recipe)
    } catch (exc) {
        let error = makeError(exc);
        res.status(error.statusCode);
        res.send(error.errorCode);
        /**
         * in here we can add all the error logging possible, 
         * the error info are in the error object, so if logstash or any other logging 
         * system are implemented we should have enough info to have a quick and effective
         * troubleshooting
         */
        console.error(error)
    }
});

function makeError(exc) {
    if (exc instanceof HTTPError) {
        return exc;
    } else {
        let error = new HTTPError("Unexpected Error");
        error.stack = exc.stack;
        return error;
    }
}


module.exports = router;
