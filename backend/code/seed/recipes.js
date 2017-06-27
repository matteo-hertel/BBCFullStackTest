const loki = require("lokijs");


var db = new loki('./db.json');
var children = db.addCollection('recipes')

children.insert([
    {
        name: "Lemon Chicken",
        cookingtime: 30 * 60,
        ingredients: [
            "4 x Chicken Breasts",
            "1 tsp Thyme",
            "1 x Lemon"
        ],
        image: "https://cdn.matteohertel.com/assignments/BBC/lemon_chicken.jpg",
        description: "Lemon chicken is the name of several dishes found in cuisines around the world which include chicken and lemon. In Canadian Chinese cuisine it usually consists of pieces of chicken meat that are sautéed or deep-fried and coated with a thick, sweet lemon-flavored sauce.[citation needed] The Chinese restaurant of the Panda Hotel in Tsuen Wan, Hong Kong, used to serve its version of Lemon Chicken with the chicken pieces coated in batter, then rolled in almond slivers and deep-fried, and served with the lemon-glaze sauce. Description from wikipedia"
    },
    {
        name: "Lemon Chicken",
        cookingtime: 30 * 60,
        ingredients: [
            "3 cloves garlic",
            "1/2 cup extra-virgin olive oil, plus more for brushing",
            "2 to 4 anchovy fillets, chopped",
            "Juice of 1 lemon",
            "Kosher salt and freshly ground pepper",
            "1 pound skin-on, boneless chicken breasts ",
            "4 (1/2-inch-thick) slices focaccia or whole-wheat Italian bread",
            "4 romaine lettuce hearts, halved lengthwise",
            "3/4 cup freshly grated parmesan cheese, plus more for garnish"
        ],
        image: "https://cdn.matteohertel.com/assignments/BBC/chicken_caesar_salad.jpg",
        description: "A Caesar salad is a salad of romaine lettuce and croutons dressed with parmesan cheese, lemon juice, olive oil, egg, Worcestershire sauce, garlic, and black pepper. It is traditionally prepared tableside. Description from wikipedia"
    }
]);
db.saveDatabase();
// process.exit();
