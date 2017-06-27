/**
 * The best use of Node 8 is for the async/await support, not many operation are 
 * asynchronous in thi simple app so let's mix together ES6 class generators and async await
 * to simulate a more real life scenario
 */
const loki = require("lokijs");
const db = new loki('db.json');
const lol = db.getCollection('recipes');
const HTTPError = require("./../errors/httpError");

class Recipes {
    constructor() {
        this.collection;
    }
    async ensureLoadedDb() {
        return new Promise((resolve, reject) => {
            if (this.collection) {
                resolve(this.collection);
            } else {
                db.loadDatabase({}, () => {
                    this.collection = db.getCollection("recipes");
                    resolve(this.collection);
                });
            }
        });
    }
    async getRecipes() {
        let collection = await this.ensureLoadedDb();
        return collection.find();
    }

    async getRecipeByID(id = 0) {
        if (!id) {
            let error = new HTTPError("getRecipeByID requires a valid ID");
            error.statusCode = 400;
            error.errorCode = "0x0002";
            throw error;
        }
        let collection = await this.ensureLoadedDb();

        let recipe = collection.where((obj) => {
            return obj["$loki"] == id;
        });

        if (!recipe || !recipe.length) {
            let error = new HTTPError("Recipe Not Found");
            error.statusCode = 404;
            error.errorCode = "0x0003";
            throw error;
        }

        return recipe[0];
    }
}

module.exports = Recipes;