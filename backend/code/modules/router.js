const router = require('express').Router();
const Recipes = require("./../models/recipes");
const RecipesModel = new Recipes();
const HTTPError = require("./../errors/httpError");
/**
 * get all the recipes
 */
router.get('/recipes', async function (req, res) {
    /**
     * Because node 8 is in use we can fully leverage async/await
     * to have async code easy to read and troubleshoot, everything can be done in
     * a syncronous way for this app but the less we impact the event loop 
     * the more request we can serve!
     */
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
        console.error(error)
    }
});
/**
 * because a custom error is in use, do a quick check to see if is in use or not
 * if so create a new one
 * 
 * @param Error/HTTPError exc 
 * @returns 
 */
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
