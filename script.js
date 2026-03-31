const BASE = 'https://brasaomenu.netlify.app';

const cocktails = [
  // ─── SEASONAL ───────────────────────────────────────────────────
  {
    name: "Cutie Gold Caipirinha", category: "Seasonal", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/cutie-gold-caipirinha-website.jpg",
    desc: "A sunny spin on Brazil's national cocktail. We use premium Gold Cachaça and fresh Cutie mandarins for a richer, sweeter citrus profile that's incredibly refreshing and bright.",
    garnish: "Orange Slice",
    method: "Muddle the Mandarine. Add all other ingredients. Shaken, Pour.",
    ice: "Regular Ice",
    ingredients: [{ name: "Cutie Mandarine", amount: "1 1/2oz" }, { name: "Gold Cachaça", amount: "2oz" }, { name: "Sugar", amount: "2 tbsp" }]
  },
  {
    name: "Ube Horchata", category: "Seasonal", glass: "Licor 43 Glass", glassIcon: "🥃",
    image: "2026-cocktails/ube-horchata-website.jpg",
    desc: "Creamy, nutty, and visually stunning. This modern twist on traditional horchata features vibrant ube for an earthy sweetness, served over a sphere rock for a smooth, chilled finish.",
    garnish: "None",
    method: "Add ice and 1 1/2oz of the Licor 43 Horchata. Add the other 1 1/2oz of the Licor 43 Horchata to shaker with 1/2 tsp of ube powder. Shake and pour slowly into the glass.",
    ice: "Sphere Ice",
    ingredients: [{ name: "Licor 43 Horchata", amount: "3oz" }, { name: "Ube Powder", amount: "1/2 tsp" }]
  },
  {
    name: "Cucumber Matcharita", category: "Seasonal", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/cucumber-matcharita-website.jpg",
    desc: "Crisp and energizing. This 'Macharita' pairs Corazon Tequila with fresh cucumber and a touch of matcha powder for an earthy, botanical edge that's perfect for springtime sipping.",
    garnish: "Cucumber Slice",
    method: "Muddle the Cucumbers. Add all other ingredients. Shaken, Double strain.",
    ice: "Regular Ice",
    ingredients: [{ name: "Cucumber Slices", amount: "3" }, { name: "Tequila", amount: "2oz" }, { name: "Cointreau", amount: "1/2oz" }, { name: "Agave", amount: "3/4oz" }, { name: "Lime Juice", amount: "1/4oz" }, { name: "Triple Sec", amount: "1/2oz" }, { name: "Matcha Powder", amount: "1/2 tsp" }]
  },
  {
    name: "Tiki 43", category: "Seasonal", glass: "Licor 43 Mug", glassIcon: "🍹",
    image: "2026-cocktails/tiki-43-website.jpg",
    desc: "A bold, tropical blend of Licor 43 and white rum with a surprising coffee kick. Brightened by fresh citrus and served in our signature 43 mug, it's a sophisticated take on a beachside classic.",
    garnish: "Dry Orange Wheel",
    method: "Add all ingredients. Shaken & Double strain.",
    ice: "Regular Ice",
    ingredients: [{ name: "Licor 43", amount: "2oz" }, { name: "White Rum", amount: "1oz" }, { name: "Espresso", amount: "1/2oz" }, { name: "Orange Juice", amount: "1/2oz" }, { name: "Lime Juice", amount: "1/2oz" }]
  },
  {
    name: "Hibiscus Margarita (Spicy)", category: "Seasonal", glass: "Rocks Glass (Tajín Rim)", glassIcon: "🥃",
    image: "2026-cocktails/hibiscus-margarita-(spicy)-website.jpg",
    desc: "A floral blend of hibiscus and fresh citrus, finished with a smooth, subtly spicy tequila note. Elegant, vibrant, unmistakably seasonal.",
    garnish: "Orange Twist & Edible Flower",
    method: "Add all ingredients. Shaken & double strain.",
    ice: "Regular Ice",
    ingredients: [{ name: "Ghost Tequila", amount: "2oz" }, { name: "Hibiscus Syrup", amount: "1/2oz" }, { name: "Agave", amount: "3/4oz" }, { name: "Triple Sec", amount: "3/4oz" }, { name: "Lime Juice", amount: "3/4oz" }]
  },
  // ─── WINTER / LIMITED ────────────────────────────────────────────
  {
    name: "Dark 'N' Stormy", category: "Limited", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/dark-and-stormy-website.jpg",
    desc: "Bold Brugal 1888 rum, zesty lime, and ginger spice — deep, warming, and perfectly cozy for winter nights.",
    garnish: "Lime Wheel",
    method: "Add Ice, Lime Juice, Ginger Beer & top with the Rum slowly.",
    ice: "Regular Ice",
    ingredients: [{ name: "Brugal 1888", amount: "2oz" }, { name: "Ginger Beer", amount: "4oz" }, { name: "Lime Juice", amount: "3/4oz" }]
  },
  {
    name: "Coquito", category: "Limited", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/coquito-website.jpg",
    desc: "Creamy coconut and cinnamon blended with Brugal 1888 rum — rich, silky, and holiday-perfect.",
    garnish: "Cinnamon Stick & Cinnamon Powder",
    method: "Add all ingredients. Shaken, Double strain.",
    ice: "Large Cube",
    ingredients: [{ name: "Brugal 1888", amount: "1oz" }, { name: "Vanilla Vodka", amount: "1oz" }, { name: "Licor 43 Crème Brulee", amount: "1/2oz" }, { name: "Coco Lopez", amount: "1oz" }, { name: "Condensed Milk", amount: "1/2oz" }, { name: "Half & Half", amount: "3/4oz" }]
  },
  {
    name: "Cranberry Mojito", category: "Limited", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/cranberry-mojito-website.jpg",
    desc: "Fresh mint, tart cranberry, and bright citrus — elevated with Brugal 1888 rum for a smooth, warm finish.",
    garnish: "Lime Wheel, Mint and 3 cranberries",
    method: "Add all ingredients besides the Cranberry Juice. Shaken & Pour. Top with Cranberry Juice slowly.",
    ice: "Regular Ice",
    ingredients: [{ name: "Cranberries", amount: "6" }, { name: "Mint", amount: "Pinch Of" }, { name: "Brugal 1888", amount: "2oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }, { name: "Cranberry Juice", amount: "1oz" }]
  },
  {
    name: "Autumn Pineapple", category: "Limited", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/autumn-pineapple-website.jpg",
    desc: "(Abacaxi de Outono) Grilled pineapple with cinnamon and sugar meets cachaça, citrus, honey, and a touch of bitters, served over ice with a smoky pineapple and cinnamon garnish.",
    garnish: "Cinnamon Stick & Piece of Grilled Pineapple",
    method: "Muddle 3 Slice of Grilled Pineapple. Add the other ingredients, Shake and Double Strain.",
    ice: "Large Cube",
    ingredients: [{ name: "Silver Cachaça", amount: "1 1/2oz" }, { name: "Lime Juice", amount: "1oz" }, { name: "Pineapple Juice", amount: "1/2oz" }, { name: "Honey Syrup", amount: "3/4oz" }, { name: "Dry Curacao", amount: "1/4oz" }, { name: "Angostura Bitters", amount: "2 dashes" }, { name: "Grilled Pineapple", amount: "3 slices" }]
  },
  // ─── BRASÃO SIGNATURES ──────────────────────────────────────────
  {
    name: "Caipirinha", category: "Signature", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/caipirinha-website.jpg",
    desc: "Flavors: Lime, Strawberry, Pineapple, Wild Berries or Coconut (Caipicoco). Blended with sugar and premium Cachaça rum, shaken to perfection and served on the rocks.",
    garnish: "Lime Wheel",
    method: "Muddle the fruit. Add sugar and Cachaça. Shaken & Pour.",
    ice: "Regular Ice",
    ingredients: [{ name: "Cachaça (Brazilian Rum)", amount: "2oz" }, { name: "Sugar", amount: "2 tbsp" }, { name: "Choice of Fruit", amount: "Lime/Strawberry/Pineapple/Tropical/Wild Berries" }]
  },
  {
    name: "Premium Caipirinha", category: "Signature", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/premium-caipirinha-website.jpg",
    desc: "Flavors: Lime, Strawberry, Pineapple or Wild Berries. Blended with sugar and premium Gold Cachaça rum, shaken to perfection and served on the rocks.",
    garnish: "Lime Wheel",
    method: "Muddle the fruit. Add sugar and Premium Gold Cachaça. Shaken & Pour.",
    ice: "Regular Ice",
    ingredients: [{ name: "Gold Cachaça (Premium Brazilian Rum)", amount: "2oz" }, { name: "Sugar", amount: "2 tbsp" }, { name: "Choice of Fruit", amount: "Lime/Strawberry/Pineapple/Tropical/Wild Berries" }]
  },
  {
    name: "Caipiroska", category: "Signature", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/caipiroska-website.jpg",
    desc: "Flavors: Lime, Strawberry, Pineapple or Wild Berries. Blended with sugar and premium Vodka, shaken to perfection and served on the rocks.",
    garnish: "Lime Wedge",
    method: "Muddle the fruit. Add sugar and Vodka. Shaken & Pour.",
    ice: "Regular Ice",
    ingredients: [{ name: "Vodka", amount: "2oz" }, { name: "Sugar", amount: "2 tbsp" }, { name: "Choice of Fruit", amount: "Lime/Strawberry/Pineapple/Tropical/Wild Berries" }]
  },
  {
    name: "Old Fashioned", category: "Signature", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/old-fashioned-website.jpg",
    desc: "Indulge in the bold flavors of premium Bourbon or Rye whiskey, balanced with aromatic bitters and a hint of orange, stirred to perfection and served over a single large rock.",
    garnish: "Orange Peel & Maraschino Cherry",
    method: "Add all ingredients. Stir & Pour.",
    ice: "Large Cube",
    ingredients: [{ name: "Bourbon or Rye Whiskey", amount: "2oz" }, { name: "Angostura Bitters", amount: "3 Dashes" }, { name: "Orange Bitters", amount: "2 Dashes" }, { name: "Simple Syrup", amount: "1/2oz" }]
  },
  {
    name: "Watermelon Breeze", category: "Signature", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/watermelon-breeze-website.jpg",
    desc: "A refreshing blend of premium berry vodka, fresh watermelon, lemon and Velvet Falernum, served ice-cold for the perfect balance of bold and crisp flavors.",
    garnish: "Watermelon",
    method: "Add all ingredients. Shaken & double strain.",
    ice: "Regular Ice",
    ingredients: [{ name: "Watermelon", amount: "4-5 Pieces" }, { name: "Sugar", amount: "1/4 tsp" }, { name: "Grey Goose Berry Vodka", amount: "2oz" }, { name: "Velvet Falernum", amount: "1/2oz" }, { name: "Lemon Juice", amount: "3/4oz" }]
  },
  {
    name: "Passion Fruit Margarita 🔥", category: "Signature", glass: "Rocks Glass (Sugar Rim)", glassIcon: "🥃",
    image: "2026-cocktails/passion-fruit-margarita-website.jpg",
    desc: "A bold mix of Ghost Tequila, passion fruit, and a kick of heat, perfectly balanced for a refreshing and fiery twist on a classic margarita.",
    garnish: "Lime Wheel",
    method: "Add all ingredients. Shaken & Double Strain.",
    ice: "Regular Ice",
    ingredients: [{ name: "Ghost Tequila", amount: "1 1/2oz" }, { name: "Triple Sec", amount: "1/2oz" }, { name: "Passion Fruit Pulp", amount: "1oz" }, { name: "Lime Juice", amount: "1/2oz" }, { name: "Agave", amount: "3/4oz" }]
  },
  {
    name: "Cucumber Ivy", category: "Signature", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/cucumber-ivy-website.jpg",
    desc: "Gin, floral St. Germain, lime juice, simple syrup, muddled cucumbers and a pinch of mint expertly blended, shaken, double strained, and served in a stylish coupe glass.",
    garnish: "Cucumber Slice & Mint Leaf",
    method: "Muddle the cucumber slices. Add all other ingredients. Shaken, Double strain.",
    ice: "None",
    ingredients: [{ name: "Cucumber slices", amount: "2" }, { name: "Fresh mint", amount: "Pinch of" }, { name: "Gin", amount: "2oz" }, { name: "St.Germain", amount: "1/2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }]
  },
  {
    name: "Oaxaca Spice", category: "Signature", glass: "Rocks Glass (Tajín Rim)", glassIcon: "🥃",
    image: "2026-cocktails/oaxaca-spice-website.jpg",
    desc: "A perfectly blended mix of spicy tequila, agave nectar, crème de Cassis and lime juice. Shaken to perfection with bold Oaxacan character.",
    garnish: "Orange Peel with Tajin & Jalapeño Slice",
    method: "Add all ingredients. Shaken & Double Strain.",
    ice: "Crushed Ice",
    ingredients: [{ name: "Spicy Tequila", amount: "1 1/2oz" }, { name: "Crème de Cassis", amount: "1/2oz" }, { name: "Agave Nectar", amount: "3/4oz" }, { name: "Lime Juice", amount: "3/4oz" }]
  },
  // ─── CLASSICS ──────────────────────────────────────────────────
  {
    name: "Moscow Mule", category: "Classics", glass: "Copper Mug", glassIcon: "🫖",
    image: "2026-cocktails/moscow-mule-website.jpg",
    desc: "A timeless combination of premium vodka, spicy ginger beer and fresh lime, served ice-cold in our signature copper mug for the perfect chill.",
    garnish: "Lime Wheel",
    method: "Add all ingredients besides the ginger beer. Shaken & Double Strain. Top with Ginger Beer.",
    ice: "Regular Ice",
    ingredients: [{ name: "Vodka", amount: "2oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }, { name: "Ginger Beer", amount: "top" }]
  },
  {
    name: "Mint Julep", category: "Classics", glass: "Metal Tumbler", glassIcon: "🥂",
    image: "2026-cocktails/mint-julep-website.jpg",
    desc: "Kentucky's finest — premium bourbon poured over crushed ice with fresh mint and sugar. Elegant, aromatic, and perfectly Southern.",
    garnish: "Lime Wheel & Mint Leaf",
    method: "Add all ingredients. Shaken & Double Strain.",
    ice: "Crushed Ice",
    ingredients: [{ name: "Bourbon or Rye Whiskey", amount: "2oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }, { name: "Fresh mint", amount: "A pinch of" }]
  },
  {
    name: "Bramble", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/bramble-website.jpg",
    desc: "A refreshing gin cocktail made with fresh lemon and a sweet fresh blackberries. Fruity, tart, and well-balanced.",
    garnish: "Blackberries",
    method: "Add all ingredients besides the blackberries. Shaken, Double strain. (3 blackberries muddled at the bottom of the glass)",
    ice: "Crushed Ice",
    ingredients: [{ name: "Gin", amount: "2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }, { name: "Blackberries", amount: "3 (Muddle on the bottom of Glass)" }]
  },
  {
    name: "French 75", category: "Classics", glass: "Flute Glass", glassIcon: "🥂",
    image: "2026-cocktails/french75-website.jpg",
    desc: "The most elegant of the classics. Gin, lemon, sugar — topped with Prosecco for a sparkling finish that packs a punch.",
    garnish: "Lemon Twist",
    method: "Add all ingredients beside the Prosecco. Shaken, Double strain. Topped with Prosecco.",
    ice: "None",
    ingredients: [{ name: "Gin", amount: "1oz" }, { name: "Lemon Juice", amount: "1/2oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Prosecco", amount: "top" }]
  },
  {
    name: "Cuban Sazerac", category: "Classics", glass: "Rocks Glass (rinsed with Absinthe)", glassIcon: "🥃",
    image: "2026-cocktails/cuban-sazerac-website.jpg",
    desc: "New Orleans' oldest cocktail reimagined with aged rum and a hint of tropical warmth. Absinthe-rinsed, bitters-kissed, pure sophistication.",
    garnish: "Banana Chip",
    method: "Add all ingredients besides the Absinthe. Shaken, Double strain. (Glass rinsed with Absinthe)",
    ice: "Large Cube",
    ingredients: [{ name: "Añejo Rum", amount: "2oz" }, { name: "Banana du Brasil", amount: "1/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Peychaud's Bitters", amount: "2 dashes" }, { name: "Absinthe", amount: "to rinse glass" }]
  },
  {
    name: "Aviation", category: "Classics", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/aviation-website.jpg",
    desc: "A pre-Prohibition classic that disappeared and came back. Gin, lemon, maraschino liqueur and crème de violette create its legendary sky-blue hue.",
    garnish: "Maraschino Cherry & Lemon Twist",
    method: "Add all the ingredients, Shaken & Double Strain.",
    ice: "None",
    ingredients: [{ name: "Gin", amount: "2oz" }, { name: "Maraschino liqueur", amount: "1/2oz" }, { name: "Crème de Violette", amount: "1/4oz" }, { name: "Lemon Juice", amount: "3/4oz" }]
  },
  {
    name: "Last Word", category: "Classics", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/last-word-website.jpg",
    desc: "The Prohibition-era equal-parts classic. Gin, Genever, maraschino and lemon in perfect harmony — bold, herbal and unforgettable.",
    garnish: "Maraschino Cherry",
    method: "Add all ingredients. Shaken & double strain.",
    ice: "None",
    ingredients: [{ name: "Gin", amount: "1oz" }, { name: "Boomsma", amount: "1oz" }, { name: "Maraschino Liqueur", amount: "1oz" }, { name: "Lemon Juice", amount: "1oz" }]
  },
  {
    name: "Smoked Old Fashioned", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/smoked-old-fashioned-website.jpg",
    desc: "Our elevated take on the timeless Old Fashioned — table-smoked with cherry wood for an intoxicating aroma and deep, smoky complexity.",
    garnish: "Orange peel & cherry, served with smoke",
    method: "Prepare Old Fashioned in glass. Before serving, smoke with wood chips. Garnish with orange peel and cherry.",
    ice: "Large Cube",
    ingredients: [{ name: "Bourbon Whiskey", amount: "2oz" }, { name: "Angostura Bitters", amount: "3 dashes" }, { name: "Orange Bitters", amount: "2 dashes" }, { name: "Simple Syrup", amount: "1/2oz" }]
  },
  {
    name: "Vieux Carré", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/vieux-carre-website.jpg",
    desc: "The New Orleans cocktail from the Hotel Monteleone. Rye, Cognac, sweet vermouth, Bénédictine and bitters — complex, warming, magnificent.",
    garnish: "Lemon Peel",
    method: "Add all ingredients. Stir & Pour.",
    ice: "Large Cube",
    ingredients: [{ name: "Cognac", amount: "1oz" }, { name: "Rye Whiskey", amount: "1oz" }, { name: "Sweet Vermouth", amount: "3/4oz" }, { name: "Benedictine", amount: "1/4oz" }, { name: "Peychaud's Bitters", amount: "2 dashes" }, { name: "Angostura Bitters", amount: "2 dashes" }]
  },
  {
    name: "Negroni", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/negroni-website.jpg",
    desc: "The aperitivo icon. Equal parts gin, Campari and sweet vermouth — bitter, sweet and impossibly balanced. Stirred, never shaken.",
    garnish: "Orange Peel",
    method: "Add all ingredients. Stir & Pour.",
    ice: "Large Cube",
    ingredients: [{ name: "Gin", amount: "1oz" }, { name: "Campari", amount: "1oz" }, { name: "Sweet Vermouth", amount: "1oz" }]
  },
  {
    name: "Bellini Sunrise", category: "Classics", glass: "Flute Glass", glassIcon: "🥂",
    image: "2026-cocktails/bellini-website.jpg",
    desc: "Venice's legendary brunch cocktail elevated with a sunrise effect. Peach Wine topped with a Chambord float for a stunning, fruity gradient.",
    garnish: "Maraschino Cherry",
    method: "Fill glass with Peach Wine. Leave space at the top. Slowly Top with 3/4oz of Chambord on the edge of the glass.",
    ice: "None",
    ingredients: [{ name: "Peach Wine", amount: "fill" }, { name: "Chambord", amount: "3/4oz" }]
  },
  {
    name: "Peach 75", category: "Classics", glass: "Flute Glass", glassIcon: "🥂",
    image: "2026-cocktails/peach-75-website.jpg",
    desc: "A peachy riff on the legendary French 75. Peach Vodka and lemon with a touch of simple syrup, topped with Prosecco for a sparkling, fruity celebration.",
    garnish: "Lemon Twist & Maraschino Cherry",
    method: "Add all ingredients besides the Prosecco. Shaken & Double Strain. Top with Prosecco.",
    ice: "None",
    ingredients: [{ name: "Peach Vodka", amount: "1oz" }, { name: "Lemon Juice", amount: "1/2oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Prosecco", amount: "top" }]
  },
  {
    name: "Mojito", category: "Classics", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/mojito-website.jpg",
    desc: "Cuba's most beloved export. Fresh mint, lime, sugar and white rum — crisp, refreshing, and endlessly popular.",
    garnish: "Lime Wheel & Mint Leaf",
    method: "Add all ingredients. Shaken & Pour.",
    ice: "Regular Ice",
    ingredients: [{ name: "Rum", amount: "2oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }, { name: "Fresh mint", amount: "A pinch of" }]
  },
  {
    name: "Grapefruit Martini", category: "Classics", glass: "Martini Glass (Tajín Rim)", glassIcon: "🍸",
    image: "2026-cocktails/grapefruit-martini-website.jpg",
    desc: "Citrus-forward and elegantly sharp. Ruby Red Vodka, Aperol and fresh lemon — served ice-cold in a Tajín-rimmed martini glass.",
    garnish: "Lemon Twist",
    method: "Add all ingredients. Shaken & Double strain.",
    ice: "None",
    ingredients: [{ name: "Ruby Red Vodka", amount: "2oz" }, { name: "Aperol", amount: "1oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }]
  },
  {
    name: "Skinny Margarita", category: "Classics", glass: "Collins Glass (Salt Rim)", glassIcon: "🥤",
    image: "2026-cocktails/skinny-margarita-website.jpg",
    desc: "All the flavor, none of the guilt. Corazón Reposado Tequila, fresh citrus and agave nectar — clean, bright and perfectly balanced.",
    garnish: "Lime Wedge",
    method: "Add all ingredients. Shaken & double strain.",
    ice: "Regular Ice",
    ingredients: [{ name: "Corazón Reposado Tequila", amount: "2oz" }, { name: "Orange Juice", amount: "1/2oz" }, { name: "Agave", amount: "3/4oz" }, { name: "Lime Juice", amount: "3/4oz" }]
  },
  {
    name: "Sangria", category: "Classics", glass: "Wine Glass", glassIcon: "🍷",
    image: "2026-cocktails/sangrias-website.jpg",
    desc: "Our house sangria — Original Sangria Mix® poured over fresh fruit and ice, topped with Merlot (red) or Pinot Grigio (white). Spain's legendary house punch.",
    garnish: "Orange Slice",
    method: "Build glass with fruit at the bottom. Fill up the wine glass with ice. Add our Original Sangria Mix® until 3/4 of glass. Topped with Merlot (red) or Pinot Grigio (white) wine.",
    ice: "Regular Ice",
    ingredients: [{ name: "Fruits", amount: "Strawberries, Blueberries, Blackberries and Pineapple" }, { name: "Sangria Mix®", amount: "3/4 fill" }, { name: "Merlot or Pinot Grigio", amount: "top" }]
  },
  {
    name: "Espresso Martini", category: "Classics", glass: "Martini Glass", glassIcon: "🍸",
    image: "2026-cocktails/espresso-martini-website.jpg",
    desc: "The ultimate after-dinner pick-me-up. Vodka, Mr. Black Coffee Liqueur, Licor 43 and a fresh espresso shot shaken hard for that iconic crema foam.",
    garnish: "3 Coffee Beans",
    method: "Add all ingredients. Shaken, Double strain. (Use single espresso shot only — don't put a double shot)",
    ice: "None",
    ingredients: [{ name: "Vodka", amount: "1oz" }, { name: "Mr. Black Coffee Liqueur", amount: "1oz" }, { name: "Licor 43", amount: "1oz" }, { name: "Espresso (single shot)", amount: "1 shot" }]
  },
  {
    name: "Pink Lady", category: "Classics", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/pink-lady-website.jpg",
    desc: "A Prohibition-era gem making its comeback. Gin, Velvet Falernum, lemon, fresh raspberries and blackberry — silky, rosy and topped with Prosecco.",
    garnish: "Raspberry & Blackberry",
    method: "Add all ingredients besides the Prosecco. Shaken & Double strain. Top with Prosecco.",
    ice: "None",
    ingredients: [{ name: "Raspberries", amount: "2" }, { name: "Blackberry", amount: "1" }, { name: "Gin", amount: "1 1/2oz" }, { name: "Velvet Falernum", amount: "1/2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Prosecco", amount: "top" }]
  },
  {
    name: "Basil Up", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/basil-up-website.jpg",
    desc: "A fragrant, garden-fresh cocktail. Gin, floral St. Germain, fresh basil and cucumber — shaken and double strained over crushed ice.",
    garnish: "Basil Leaf & Cucumber",
    method: "Muddle Basil and Cucumbers. Add all other ingredients. Shaken & Double Strain.",
    ice: "Crushed Ice",
    ingredients: [{ name: "Cucumber Slices", amount: "2" }, { name: "Basil Leaves", amount: "1-2" }, { name: "Gin", amount: "2oz" }, { name: "St.Germain", amount: "3/4oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }]
  },
  {
    name: "Summer Love", category: "Classics", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/love-in-summer-website.jpg",
    desc: "A summer romance in a glass. Rum, Velvet Falernum and Orgeat with fresh lime — light, tropical and utterly refreshing.",
    garnish: "Lime Wheel & Maraschino Cherry",
    method: "Add all ingredients. Shaken & Double Strain.",
    ice: "Crushed Ice",
    ingredients: [{ name: "Rum", amount: "2oz" }, { name: "Velvet Falernum", amount: "1/2oz" }, { name: "Orgeat", amount: "1/2oz" }, { name: "Lime Juice", amount: "3/4oz" }]
  },
  {
    name: "Summer Mule", category: "Classics", glass: "Copper Mug", glassIcon: "🫖",
    image: "2026-cocktails/summer-mule-website.jpg",
    desc: "A seasonal twist on the classic Moscow Mule — brightened with fresh cucumber and mint, shaken and topped with ginger beer.",
    garnish: "Cucumber & Mint",
    method: "Muddle Cucumber. Add all other ingredients besides the ginger beer. Shaken & Double strain. Top with Ginger Beer.",
    ice: "Crushed Ice",
    ingredients: [{ name: "Cucumber Slices", amount: "2" }, { name: "Mint", amount: "Pinch of" }, { name: "Vodka", amount: "2oz" }, { name: "Lime Juice", amount: "1oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Ginger Beer", amount: "top" }]
  },
  {
    name: "Smoked Margarita", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/smoked-margarita-website.jpg",
    desc: "A perfectly smoked take on the classic margarita. Corazon Reposado and Mezcal with lime and orange bitters — served over a large cube.",
    garnish: "Orange Dust/Peel & Crushed Pepper",
    method: "Add all ingredients. Shaken & Double Strain.",
    ice: "Large Cube",
    ingredients: [{ name: "Corazon Reposado Tequila", amount: "1oz" }, { name: "Mezcal", amount: "1oz" }, { name: "Agave", amount: "3/4oz" }, { name: "Lime Juice", amount: "1oz" }, { name: "Orange Bitters", amount: "2 Dashes of" }]
  },
  {
    name: "Añejo Old Fashioned", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/anejo-old-fashioned-website.jpg",
    desc: "The Old Fashioned reconceived with premium Añejo tequila. Agave and aromatic bitters bring deep Mexican soul to this American icon.",
    garnish: "Orange Peel & Maraschino Cherry",
    method: "Add All The Ingredients. Stir & Pour.",
    ice: "Large Cube",
    ingredients: [{ name: "Añejo Tequila", amount: "2oz" }, { name: "Agave", amount: "1/4oz" }, { name: "Aromatic bitters", amount: "2 Dashes of" }, { name: "Orange bitters", amount: "2 Dashes of" }]
  },
  {
    name: "Pineapple Basil", category: "Classics", glass: "Martini Glass", glassIcon: "🍸",
    image: "2026-cocktails/pineapple-basil-website.jpg",
    desc: "A tropical herbaceous fusion — pineapple juice, Velvet Falernum and muddled basil with vodka create a cocktail that's bright, aromatic and irresistible.",
    garnish: "Basil Leaves",
    method: "Add all ingredients. Shaken & double strain.",
    ice: "None",
    ingredients: [{ name: "Vodka", amount: "1 1/2oz" }, { name: "Velvet Falernum", amount: "1/2oz" }, { name: "Pineapple Juice", amount: "1oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Basil Leaves", amount: "2" }]
  },
  {
    name: "Rum Punch", category: "Classics", glass: "Snifter", glassIcon: "🥃",
    image: "2026-cocktails/rum-punch-website.jpg",
    desc: "Caribbean vibes in every sip. Rum and Coconut Rum with lime, served with our house Original Sangría Mix® — festive, fruity and fun.",
    garnish: "1/2 Orange Wheel & Pineapple Leaf",
    method: "Add all ingredients. Fill glass with ice and fill the remaining space with our Original Sangria Mix®.",
    ice: "Regular Ice",
    ingredients: [{ name: "Rum", amount: "1oz" }, { name: "Coconut Rum", amount: "1oz" }, { name: "Lime Juice", amount: "1oz" }, { name: "Original Sangria Mix®", amount: "fill" }]
  },
  {
    name: "Raspberry Mojito", category: "Classics", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/raspberry-mojito-website.jpg",
    desc: "The beloved mojito elevated with fresh raspberries for a burst of berry sweetness alongside the classic mint and lime.",
    garnish: "Raspberry, Mint & Lime Peel",
    method: "Muddle the raspberries. Add all other ingredients. Shaken & Pour.",
    ice: "Regular Ice",
    ingredients: [{ name: "Raspberries", amount: "3" }, { name: "Mint", amount: "Pinch of" }, { name: "Rum", amount: "2oz" }, { name: "Lime Juice", amount: "1/2oz" }, { name: "Simple Syrup", amount: "3/4oz" }]
  },
  {
    name: "Peartini", category: "Classics", glass: "Martini Glass (Sugar Rim)", glassIcon: "🍸",
    image: "2026-cocktails/peartini-website.jpg",
    desc: "Autumn elegance in a martini glass. Pear Vodka, St. Germain and fresh lemon — shaken and double strained in a sugar-rimmed glass.",
    garnish: "Lemon Twist",
    method: "Add all ingredients. Shaken & Double strain.",
    ice: "None",
    ingredients: [{ name: "Pear Vodka", amount: "2oz" }, { name: "St. Germain", amount: "3/4oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }]
  },
  // ─── SIGNATURE ORIGINALS ─────────────────────────────────────────
  {
    name: "Mexican Candy", category: "Originals", glass: "Coupe Glass (Tajín Rim)", glassIcon: "🍷",
    image: "2026-cocktails/mexican-candy-website.jpg",
    desc: "Inspired by the beloved Mexican street candy. Pineapple Serrano Infused Cachaça® with Framboise and lime — playful, vibrant and spicy-sweet.",
    garnish: "Lime Wheel",
    method: "Add all ingredients. Shaken & Double Strain.",
    ice: "None",
    ingredients: [{ name: "Pineapple Serrano Infused Cachaça®", amount: "2oz" }, { name: "Framboise Liqueur", amount: "3/4oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }]
  },
  {
    name: "Red & Wild", category: "Originals", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/red-and-wild-website.jpg",
    desc: "Bold, wild berry flavors meet our house Strawberry Infused Vodka® in this striking crimson original. Dark, lush and untamed.",
    garnish: "Lemon Twist",
    method: "Add all ingredients. Shaken & Double Strain.",
    ice: "None",
    ingredients: [{ name: "Strawberry Infused Vodka®", amount: "2oz" }, { name: "St.Germain", amount: "1/2oz" }, { name: "Velvet Falernum", amount: "1/2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }]
  },
  {
    name: "Magenta Blossom", category: "Originals", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/magenta-blossom-website.jpg",
    desc: "A floral masterpiece in vivid magenta. Our house Blueberry Infused Rum®, St. Germain and lemon create a color-changing, aromatic showstopper.",
    garnish: "3 Blueberries",
    method: "Add all ingredients. Shaken & Double Strain.",
    ice: "None",
    ingredients: [{ name: "Blueberry Infused Rum®", amount: "2oz" }, { name: "St.Germain", amount: "1/2oz" }, { name: "Triple Sec", amount: "1/2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }]
  },
  {
    name: "Blue Rush", category: "Originals", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/blue-rush-website.jpg",
    desc: "A vivid blue wave of tropical flavors — our house Blueberry Infused Rum®, orgeat and lime create a stunning, refreshing signature cocktail.",
    garnish: "Lime Wheel, Mint & Blueberry",
    method: "Add all the ingredients. Shaken, Double Strained.",
    ice: "Crushed Ice",
    ingredients: [{ name: "Blueberry Infused Rum®", amount: "2oz" }, { name: "Orgeat", amount: "1/2oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Mint", amount: "A pinch of" }]
  },
  {
    name: "Kiwi Crush", category: "Originals", glass: "Rocks Glass (Muddled Raspberries on Bottom)", glassIcon: "🥃",
    image: "2026-cocktails/kiwi-crush-website.jpg",
    desc: "Fresh kiwi crushed with premium vodka, Velvet Falernum and lime — a vibrant green original served over crushed ice on a bed of muddled raspberries.",
    garnish: "Kiwi Wheel",
    method: "Muddle the Kiwi. Add all ingredients besides the raspberries. Shaken & double strain. (3 Raspberries muddled at bottom of glass)",
    ice: "Crushed Ice",
    ingredients: [{ name: "Kiwi", amount: "1/2" }, { name: "Vodka", amount: "2oz" }, { name: "Velvet Falernum", amount: "1/2oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Raspberries", amount: "3 (Muddle to the glass)" }]
  },
  {
    name: "Cucumber Martini", category: "Originals", glass: "Martini Glass (Tajín Rim)", glassIcon: "🍸",
    image: "2026-cocktails/cucumber-martini-website.jpg",
    desc: "Clean, crisp and cool. Premium vodka with our house Cucumber Mix® and lime — shaken and double strained in a Tajín-rimmed martini glass.",
    garnish: "Cucumber Slice",
    method: "Add all ingredients. Shaken, Double strain.",
    ice: "None",
    ingredients: [{ name: "Vodka", amount: "2oz" }, { name: "Cucumber Mix®", amount: "1 1/2oz" }, { name: "Lime Juice", amount: "1/2oz" }, { name: "Simple Syrup", amount: "1/2oz" }]
  },
  {
    name: "Raspberry Dreaming", category: "Originals", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/raspberry-dreaming-website.jpg",
    desc: "A dreamy, cloud-like creation with our house Raspberry Gin Infusion®, Chambord and egg white foam. Close your eyes and float away.",
    garnish: "Bitters Design & Raspberry",
    method: "Add all ingredients. Dry shaken, Shaken & Double Strain.",
    ice: "None",
    ingredients: [{ name: "Raspberry Gin Infusion®", amount: "1 1/2oz" }, { name: "Chambord", amount: "3/4oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Egg White", amount: "1" }]
  },
  {
    name: "Mexican Brazilian", category: "Originals", glass: "Coupe Glass (Tajín Rim)", glassIcon: "🍷",
    image: "2026-cocktails/mexican-brazilian-website.jpg",
    desc: "A fusion of two great cocktail cultures — our house Pineapple Serrano Infused Cachaça® and Mezcal unite with Ancho Reyes for a bold, smoky, tropical original.",
    garnish: "Lime Wheel",
    method: "Add all ingredients. Shaken & Double Strain.",
    ice: "None",
    ingredients: [{ name: "Pineapple Serrano Infused Cachaça®", amount: "1oz" }, { name: "Mezcal", amount: "1oz" }, { name: "Ancho Reyes", amount: "1/2oz" }, { name: "Agave", amount: "3/4oz" }, { name: "Lime Juice", amount: "3/4oz" }]
  },
  {
    name: "Floating in Space", category: "Originals", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/floating-in-space-website.jpg",
    desc: "A galaxy of flavor — our house Blueberry Infused Rum®, Crème de Cassis, lemon and egg white create an otherworldly drink that defies gravity.",
    garnish: "Bitters Design & a Blackberry",
    method: "Add all ingredients. Dry Shake, Shake, Double Strain.",
    ice: "None",
    ingredients: [{ name: "Blueberry Infused Rum®", amount: "1 1/2oz" }, { name: "Crème de Cassis", amount: "1/2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Egg White", amount: "1" }]
  },
  {
    name: "The Green Goblin", category: "Originals", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/green-goblin-website.jpg",
    desc: "Mischievously good. Vodka, St. Germain, fresh kiwi and mint create a vivid green cocktail that's as refreshing as it is beautiful.",
    garnish: "Kiwi Wheel",
    method: "Muddle Kiwi. Add all other ingredients. Shaken & Double strain.",
    ice: "None",
    ingredients: [{ name: "Kiwi", amount: "1/2" }, { name: "Mint Leaves", amount: "3" }, { name: "Vodka", amount: "2oz" }, { name: "St.Germain", amount: "1/2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }]
  },
  {
    name: "Spicy Pisco", category: "Originals", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/spicy-pisco-website.jpg",
    desc: "Peru meets heat. Pisco and our house Pineapple Serrano Infused Cachaça® with lemon and egg white — a bold, spicy South American sour.",
    garnish: "Bitters Design & Jalapeño Wheel",
    method: "Add all ingredients. Dry Shaken, Shaken & Double strain.",
    ice: "None",
    ingredients: [{ name: "Pisco", amount: "1oz" }, { name: "Pineapple Serrano Infused Cachaça®", amount: "1oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }, { name: "Egg White", amount: "1" }]
  },
  {
    name: "Carajillo", category: "Originals", glass: "Snifter", glassIcon: "🍹",
    image: "2026-cocktails/carajillo-website.jpg",
    desc: "Spain's beloved coffee cocktail — Licor 43 and hot espresso served over ice for a stunning hot-meets-cold experience.",
    garnish: "None",
    method: "Add a hot espresso shot, Licor 43 and shake with ice. Pour into snifter glass.",
    ice: "Regular Ice",
    ingredients: [{ name: "Licor 43", amount: "1 1/2oz" }, { name: "Fresh Hot Espresso", amount: "1oz" }]
  },
  {
    name: "Life Changer", category: "Originals", glass: "Snifter", glassIcon: "🥃",
    image: "2026-cocktails/life-changer-website.jpg",
    desc: "One sip and you'll understand the name. Licor 43, Rumchata and Mozart White Chocolate — flamed and poured over ice for an unforgettable experience.",
    garnish: "None",
    method: "Add Licor 43 and flamed. Add all other ingredients. Shaken & Pour.",
    ice: "Regular Ice",
    ingredients: [{ name: "Licor 43", amount: "1oz" }, { name: "Rumchata", amount: "1oz" }, { name: "Mozart White Chocolate", amount: "1oz" }]
  },
  {
    name: "Dominicana", category: "Originals", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/dominicana-website.jpg",
    desc: "A tribute to the Dominican Republic's finest — Flor de Caña Rum, Tia Maria, Rumchata and Dark Chocolate Liqueur with heavy whipped cream. Silky, indulgent and unforgettable.",
    garnish: "Maraschino Cherry & Cinnamon Powder",
    method: "Add all ingredients. Shaken, Double strain. (Heavy Whipped Cream in the tin before shaking)",
    ice: "None",
    ingredients: [{ name: "Flor de Caña Rum", amount: "3/4oz" }, { name: "Tia Maria liqueur", amount: "3/4oz" }, { name: "Rumchata", amount: "3/4oz" }, { name: "Dark Chocolate Liqueur", amount: "3/4oz" }, { name: "Heavy Whipped Cream", amount: "in tin" }]
  },
  {
    name: "Cocoa Cloud", category: "Originals", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/cocoa-cloud-website.jpg",
    desc: "A dessert cocktail as light as a cloud. 1921 Creme de Tequila, Amarula, Kahlúa and whipped cream — shaken and served up for deep cocoa indulgence.",
    garnish: "Maraschino Cherry & Grated Nutmeg",
    method: "Add all ingredients. Shaken, Double strain.",
    ice: "None",
    ingredients: [{ name: "1921 Creme de Tequila", amount: "1 1/2oz" }, { name: "Amarula liqueur", amount: "1oz" }, { name: "Kahlúa coffee liqueur", amount: "1oz" }, { name: "Whipped Cream", amount: "in tin" }]
  },
  {
    name: "Espress Ya'self", category: "Originals", glass: "Martini Glass", glassIcon: "🍸",
    image: "2026-cocktails/espress-yaself-website.jpg",
    desc: "Bold, confident, unapologetic. 1921 Crema de Tequila, Mr. Black Coffee Liqueur, Amarula and fresh espresso with whipped cream — one sip at a time.",
    garnish: "3 Coffee Beans & Grated Nutmeg",
    method: "Add all ingredients. Shaken, Double strain. (Whipped cream in the tin before shaking. Single Espresso shot — don't put a double shot)",
    ice: "None",
    ingredients: [{ name: "1921 Crema de Tequila", amount: "1oz" }, { name: "Mr. Black Coffee Liqueur", amount: "1oz" }, { name: "Amarula", amount: "1oz" }, { name: "Espresso (single shot)", amount: "1 shot" }, { name: "Whipped Cream", amount: "in tin" }]
  },
  {
    name: "Key Lime Pie Martini", category: "Originals", glass: "Martini Glass (Key Lime Syrup)", glassIcon: "🍸",
    image: "2026-cocktails/key-lime-pie-martini-website.jpg",
    desc: "Dessert in a glass. Licor 43, Half & Half and fresh lime — sweet, tangy and utterly decadent.",
    garnish: "Lime Twist & Lime Zest",
    method: "Add all ingredients. Shaken & Double Strain.",
    ice: "None",
    ingredients: [{ name: "Licor 43", amount: "2oz" }, { name: "Half & Half", amount: "2oz" }, { name: "Lime Juice", amount: "1/2oz" }, { name: "Simple Syrup", amount: "1/2oz" }]
  },
  {
    name: "Crème Brulee Martini", category: "Originals", glass: "Coupe Glass", glassIcon: "🍸",
    image: "2026-cocktails/creme-brulee-martini-website.jpg",
    desc: "Rich, velvety and indulgent — Licor 43 Crème Brulee, Vanilla Vodka, heavy cream and Mr. Black with burnt caramel syrup, topped with whipped cream for an unforgettable dessert cocktail.",
    garnish: "3 Blueberries",
    method: "Add all ingredients. Shaken, Double strain. (Whip Cream in tin before shaking)",
    ice: "None",
    ingredients: [{ name: "Licor 43 Crème Brulee", amount: "1 1/2oz" }, { name: "Vanilla Vodka", amount: "1oz" }, { name: "Heavy Cream", amount: "3/4oz" }, { name: "Mr. Black", amount: "1/4oz" }, { name: "Burnt Caramel Syrup", amount: "1/2oz" }, { name: "Whip Cream", amount: "in tin" }]
  },
  // ─── NEW ADDITIONS ──────────────────────────────────────────────
  {
    name: "Bloody Mary", category: "Classics", glass: "Collins Glass (Tajín Rim)", glassIcon: "🥤",
    image: "2026-cocktails/bloody-mary-website.jpg",
    desc: "Bold and savory — vodka, olive juice, lime, and our house Michelada Mix® poured over ice in a Tajín-rimmed glass. Brunch's most iconic wake-up call.",
    garnish: "Olives & Lime Wedge",
    method: "Pour all ingredients to the glass & top with Michelada Mix®.",
    ice: "Regular Ice",
    ingredients: [{ name: "Vodka", amount: "2oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Olive Juice", amount: "3/4oz" }, { name: "Michelada Mix®", amount: "top" }]
  },
  {
    name: "Boulevardier", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/bulevardier-website.jpg",
    desc: "The whisky lover's Negroni. Rye or Bourbon meets Campari and sweet vermouth — bitter, boozy and beautifully balanced over a large cube.",
    garnish: "Lemon Twist",
    method: "Add all the ingredients. Stir & Pour.",
    ice: "Large Cube",
    ingredients: [{ name: "Rye or Bourbon", amount: "1oz" }, { name: "Campari", amount: "1oz" }, { name: "Sweet Vermouth", amount: "1oz" }]
  },
  {
    name: "Caipicoco", category: "Signature", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/caipicoco-website.jpg",
    desc: "Brazil meets the tropics. Fresh lime muddled with sugar and coconut rum — smooth, citrusy and impossibly refreshing.",
    garnish: "Lime Twist",
    method: "Slice & Muddle the Lime. Add sugar & Coconut rum. Shaken & Pour.",
    ice: "Regular Ice",
    ingredients: [{ name: "Lime", amount: "1" }, { name: "Coconut Rum", amount: "2oz" }, { name: "Sugar", amount: "2 tbsp" }]
  },
  {
    name: "Cape Cod", category: "Classics", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/cape-cut-website.jpg",
    desc: "Simple and stunning — premium vodka topped with tart cranberry juice. A New England classic that never goes out of style.",
    garnish: "Lime Wedge",
    method: "Add vodka straight to the glass and top with Cranberry Juice.",
    ice: "Regular Ice",
    ingredients: [{ name: "Vodka", amount: "2oz" }, { name: "Cranberry Juice", amount: "top" }]
  },
  {
    name: "Chocolate Martini", category: "Originals", glass: "Martini Glass (Chocolate Syrup)", glassIcon: "🍸",
    image: "2026-cocktails/chocolate-martini-website.jpg",
    desc: "Pure indulgence in a glass. Licor 43, dark chocolate liqueur and Half & Half — rich, creamy and dangerously smooth.",
    garnish: "Chocolate Powder",
    method: "Add all ingredients. Shaken, Double strain.",
    ice: "None",
    ingredients: [{ name: "Licor 43", amount: "2oz" }, { name: "Dark Chocolate Liqueur", amount: "1oz" }, { name: "Half & Half", amount: "1oz" }]
  },
  {
    name: "Cosmopolitan", category: "Classics", glass: "Martini Glass", glassIcon: "🍸",
    image: "2026-cocktails/cosmo-website.jpg",
    desc: "The quintessential cocktail that defined an era. Citron vodka, Cointreau, cranberry and lime — perfectly balanced, impossibly chic.",
    garnish: "Orange Twist",
    method: "Add all ingredients. Shaken, Double strain.",
    ice: "None",
    ingredients: [{ name: "Citron Vodka", amount: "1 1/2oz" }, { name: "Cointreau", amount: "1oz" }, { name: "Lime Juice", amount: "1/2oz" }, { name: "Cranberry Juice", amount: "1oz" }]
  },
  {
    name: "Daiquiri", category: "Classics", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/daiquiry-website.jpg",
    desc: "Frozen and fruity — fresh strawberries blended with vodka, lime and simple syrup. A crowd-pleasing frozen classic that's impossible to resist.",
    garnish: "Whipped Cream & Strawberries",
    method: "Add all ingredients. Blend with Ice.",
    ice: "Frozen",
    ingredients: [{ name: "Strawberries", amount: "4" }, { name: "Vodka", amount: "2oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }]
  },
  {
    name: "Fitzgerald", category: "Classics", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/fitzgerald-website.jpg",
    desc: "A gin sour with a twist — honey and lemon with two dashes of Angostura create a beautifully balanced, aromatic classic.",
    garnish: "Dry Lemon Wheel",
    method: "Add all ingredients. Shaken, Double strain.",
    ice: "None",
    ingredients: [{ name: "Gin", amount: "2oz" }, { name: "Honey", amount: "3/4oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Angostura Bitters", amount: "2 dashes" }]
  },
  {
    name: "Fumblin Dublin", category: "Originals", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/fumblin-dublin-website.jpg",
    desc: "Irish whiskey gets tropical — Paddy's meets fresh pineapple juice and a splash of Blue Curaçao for a surprising, vibrant twist on a spirit-forward drink.",
    garnish: "Mint",
    method: "Add all ingredients. Shaken & double strain.",
    ice: "Large Cube",
    ingredients: [{ name: "Paddy's Irish Whiskey", amount: "2oz" }, { name: "Pineapple Juice", amount: "1 1/2oz" }, { name: "Blue Curacao", amount: "1/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }]
  },
  {
    name: "Gibson", category: "Classics", glass: "Martini Glass", glassIcon: "🍸",
    image: "2026-cocktails/gibson-website.jpg",
    desc: "The martini's distinguished cousin. Vodka and dry vermouth stirred to perfection, distinguished by its signature cocktail onion garnish.",
    garnish: "2 Cocktail Onions",
    method: "Add all ingredients. Stir & Strain.",
    ice: "None",
    ingredients: [{ name: "Vodka", amount: "2 1/2oz" }, { name: "Dry Vermouth", amount: "1/2oz" }]
  },
  {
    name: "Godfather", category: "Classics", glass: "Snifter", glassIcon: "🥃",
    image: "2026-cocktails/godfather-website.jpg",
    desc: "An offer you can't refuse. Scotch and Amaretto over a large cube — smoky, sweet and undeniably powerful.",
    garnish: "None",
    method: "Add all ingredients. Stir & Strain.",
    ice: "Large Cube",
    ingredients: [{ name: "Scotch", amount: "1 1/2oz" }, { name: "Amaretto", amount: "1 1/2oz" }]
  },
  {
    name: "Godmother", category: "Classics", glass: "Snifter", glassIcon: "🥃",
    image: "2026-cocktails/godmother-website.jpg",
    desc: "The Godfather's elegant counterpart. Vodka and Amaretto — clean, smooth and sweetly sophisticated over a large cube.",
    garnish: "Lemon Peel",
    method: "Add all ingredients. Stir & Strain.",
    ice: "Large Cube",
    ingredients: [{ name: "Vodka", amount: "1 1/2oz" }, { name: "Amaretto", amount: "1 1/2oz" }]
  },
  {
    name: "Highland Pear Martini", category: "Classics", glass: "Martini Glass", glassIcon: "🍸",
    image: "2026-cocktails/highland-pear-martini-website.jpg",
    desc: "Scotch gets poetic — aged single malt meets sweet pear liqueur and bright lemon in a sophisticated, unexpected martini.",
    garnish: "Lemon Twist",
    method: "Add all ingredients. Shaken & Double Strain.",
    ice: "None",
    ingredients: [{ name: "Scotch", amount: "1 1/2oz" }, { name: "Pear Liqueur", amount: "3/4oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }]
  },
  {
    name: "Lemon Drop Martini", category: "Classics", glass: "Martini Glass (Sugar Rim)", glassIcon: "🍸",
    image: "2026-cocktails/lemon-drop-martini-website.jpg",
    desc: "Bright, tart and perfectly sweet. Vodka and fresh lemon with a sugar rim — the classic crowd-pleaser that never disappoints.",
    garnish: "Lemon Wheel",
    method: "Add all ingredients. Shaken & Double Strain.",
    ice: "None",
    ingredients: [{ name: "Vodka", amount: "2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Triple Sec", amount: "1/2oz" }]
  },
  {
    name: "Long Island Iced Tea", category: "Classics", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/long-islnd-iced-tea-website.jpg",
    desc: "Five spirits, one legendary drink. Tequila, vodka, gin, rum and triple sec shaken with citrus and topped with Coke — deceptively smooth and dangerously easy to drink.",
    garnish: "Lemon Wedge",
    method: "Add all ingredients beside the Coke. Shaken & double strain. Top with Coke.",
    ice: "Regular Ice",
    ingredients: [{ name: "Tequila", amount: "1/2oz" }, { name: "Vodka", amount: "1/2oz" }, { name: "Gin", amount: "1/2oz" }, { name: "Rum", amount: "1/2oz" }, { name: "Triple Sec", amount: "1/2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Coke", amount: "top" }]
  },
  {
    name: "Love is in the Air", category: "Originals", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/love-is-in-the-air-website.jpg",
    desc: "Romance in a glass — fresh raspberries and mint meet our house Raspberry Infused Gin® with Velvet Falernum and citrus. Served over a large cube.",
    garnish: "Raspberry, Lemon Wheel & Mint Leaves",
    method: "Muddle Raspberries. Add all other ingredients. Shaken & double strain.",
    ice: "Large Cube",
    ingredients: [{ name: "Raspberries", amount: "3" }, { name: "Mint", amount: "Pinch of" }, { name: "Raspberry Infused Gin®", amount: "1 1/2oz" }, { name: "Velvet Falernum", amount: "1/2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }]
  },
  {
    name: "Manhattan", category: "Classics", glass: "Martini Glass", glassIcon: "🍸",
    image: "2026-cocktails/manhathan-website.jpg",
    desc: "New York's most iconic cocktail. Rye whisky and sweet vermouth with aromatic bitters — stirred, not shaken, as it should be.",
    garnish: "1 Maraschino Cherry",
    method: "Add all ingredients. Stir & Pour.",
    ice: "None",
    ingredients: [{ name: "Rye Whisky", amount: "2oz" }, { name: "Sweet Vermouth", amount: "1oz" }, { name: "Angostura Bitters", amount: "2 Dashes" }]
  },
  {
    name: "Margarita", category: "Classics", glass: "Rocks Glass (Salt Rim)", glassIcon: "🥃",
    image: "2026-cocktails/margarita-website.jpg",
    desc: "The world's most beloved cocktail. Tequila, lime and agave with a salted rim — crisp, balanced and timeless.",
    garnish: "Lime Wedge",
    method: "Add all ingredients. Shaken & Double strain.",
    ice: "Regular Ice",
    ingredients: [{ name: "Tequila", amount: "2oz" }, { name: "Triple Sec", amount: "1/2oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Agave", amount: "3/4oz" }]
  },
  {
    name: "Mexican Martini", category: "Originals", glass: "Martini Glass (Tajín Rim)", glassIcon: "🍸",
    image: "2026-cocktails/mexican-martini-website.jpg",
    desc: "Austin's legendary cocktail — tequila, Cointreau, orange and lime with a briny olive twist. Served up in a Tajín-rimmed glass.",
    garnish: "Lime Wheel",
    method: "Add all ingredients. Shaken & Double Strain.",
    ice: "None",
    ingredients: [{ name: "Tequila", amount: "2oz" }, { name: "Cointreau", amount: "1/2oz" }, { name: "Orange Juice", amount: "1/2oz" }, { name: "Olive Juice", amount: "1/2oz" }, { name: "Lime Juice", amount: "3/4oz" }]
  },
  {
    name: "Michelada", category: "Classics", glass: "Beer Glass (Salt & Tajín Rim)", glassIcon: "🥤",
    image: "2026-cocktails/michelada-website.jpg",
    desc: "Mexico's ultimate beer cocktail. Our house Michelada Mix® with olive juice and lime, topped with your favorite beer in a salt and Tajín-rimmed glass.",
    garnish: "Lime Wedge & Olives",
    method: "Fill the glass with ice & add all ingredients. Top with beer.",
    ice: "Regular Ice",
    ingredients: [{ name: "Michelada Mix®", amount: "4oz" }, { name: "Olive Juice", amount: "1/2oz" }, { name: "Lime Juice", amount: "1/2oz" }, { name: "Beer", amount: "top" }]
  },
  {
    name: "Mimosa", category: "Classics", glass: "Flute Glass", glassIcon: "🥂",
    image: "2026-cocktails/mimosa-website.jpg",
    desc: "Brunch's best friend. Equal parts fresh orange juice and Prosecco — light, effervescent and endlessly celebratory.",
    garnish: "Maraschino Cherry",
    method: "Add all ingredients to the glass.",
    ice: "None",
    ingredients: [{ name: "Orange Juice", amount: "1/2 Flute" }, { name: "Prosecco", amount: "1/2 Flute" }]
  },
  {
    name: "NY Sour", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/ny-sour-website.jpg",
    desc: "New York's take on the classic whisky sour — silky egg white foam with a dramatic Merlot float. Bold, smooth and visually stunning.",
    garnish: "Maraschino Cherry",
    method: "Add all ingredients. Dry Shaken, Shaken & double strain. Top with Merlot float.",
    ice: "Large Cube",
    ingredients: [{ name: "Whisky", amount: "2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }, { name: "Egg White", amount: "1" }, { name: "Merlot", amount: "float" }]
  },
  {
    name: "Piña Colada", category: "Classics", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/pina-colada-website.jpg",
    desc: "The ultimate tropical escape. Coconut rum, Flor de Caña and Coco Lopez blended smooth with pineapple juice and lime. Close your eyes and you're on the beach.",
    garnish: "Whipped Cream, Pineapple Leaf & Cherry",
    method: "Add all ingredients. Blend.",
    ice: "Frozen",
    ingredients: [{ name: "Don Q Coco", amount: "1oz" }, { name: "Flor de Caña", amount: "1oz" }, { name: "Pineapple Juice", amount: "1 1/2oz" }, { name: "Coco Lopez", amount: "2oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }, { name: "Ice", amount: "" }]
  },
  {
    name: "Pisco Sour", category: "Classics", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/pisco-sour-website.jpg",
    desc: "Peru's national treasure. Pisco, fresh lemon, simple syrup and egg white — silky, frothy and perfectly balanced with an Angostura bitters finish.",
    garnish: "Angostura Bitters",
    method: "Add all ingredients. Dry shaken, Shaken & Double strain.",
    ice: "None",
    ingredients: [{ name: "Pisco", amount: "2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }, { name: "Egg White", amount: "1" }]
  },
  {
    name: "Rusty Nail", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/rusty-nail-website.jpg",
    desc: "Scotland's classic two-ingredient cocktail. Scotch and Drambuie — smoky, honeyed and warming over a large cube.",
    garnish: "Lemon Peel",
    method: "Pour all ingredients.",
    ice: "Large Cube",
    ingredients: [{ name: "Scotch", amount: "1oz" }, { name: "Drambuie", amount: "1oz" }]
  },
  {
    name: "Salty Dog", category: "Classics", glass: "Collins Glass (Salt Rim)", glassIcon: "🥤",
    image: "2026-cocktails/salty-dog-website.jpg",
    desc: "The Greyhound's saltier cousin. Vodka topped with grapefruit juice in a salt-rimmed glass — tart, refreshing and effortlessly simple.",
    garnish: "Lemon Wedge",
    method: "Pour the Vodka & topped with Grapefruit Juice.",
    ice: "Regular Ice",
    ingredients: [{ name: "Vodka", amount: "2oz" }, { name: "Grapefruit Juice", amount: "top" }]
  },
  {
    name: "Sazerac", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/sazerac-website.jpg",
    desc: "New Orleans' oldest cocktail. Rye, sweet vermouth and aromatic bitters — stirred and poured over a large cube with a maraschino cherry and orange.",
    garnish: "Maraschino Cherry and Orange Dust/Peel",
    method: "Add all ingredients. Stir & Pour.",
    ice: "Large Cube",
    ingredients: [{ name: "Rye", amount: "2oz" }, { name: "Sweet Vermouth", amount: "1/2oz" }, { name: "Angostura Bitters", amount: "2 Dashes" }]
  },
  {
    name: "Tom Collins", category: "Classics", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/tom-collins-website.jpg",
    desc: "The original long drink. Gin, lemon, simple syrup topped with sparkling water — refreshing, balanced and timeless.",
    garnish: "Half Lemon Wheel and a Cherry",
    method: "Pour the gin, lemon & Simple. Fill the glass with Ice. Top with Sparkling Water.",
    ice: "Regular Ice",
    ingredients: [{ name: "Gin", amount: "2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Sparkling Water", amount: "top" }]
  },
  {
    name: "Vesper", category: "Classics", glass: "Martini Glass", glassIcon: "🍸",
    image: "2026-cocktails/vesper-website.jpg",
    desc: "James Bond's original creation from Casino Royale. Gin, vodka and Lillet Blanc — shaken, not stirred, and served with a lemon twist.",
    garnish: "Lemon Twist",
    method: "Add all ingredients. Shaken & double strain.",
    ice: "None",
    ingredients: [{ name: "Vodka", amount: "1oz" }, { name: "Gin", amount: "1 1/2oz" }, { name: "Lillet Blanc", amount: "1/2oz" }]
  },
  {
    name: "White Russian", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/white-russian-website.jpg",
    desc: "The Dude's drink of choice. Vodka and Kahlúa topped with a dry-shaken Half & Half float — creamy, coffee-kissed and deeply satisfying.",
    garnish: "None",
    method: "1st layer: Add Vodka and Kahlua. Shaken & double strain. 2nd layer: Dry shake the Half & Half & top the drink.",
    ice: "Regular Ice",
    ingredients: [{ name: "Vodka", amount: "1 1/2oz" }, { name: "Kahlua", amount: "1 1/2oz" }, { name: "Half & Half", amount: "top" }]
  },
  {
    name: "Original Sangria Mix®", category: "House Recipes", glass: "Batch", glassIcon: "🫙",
    image: "2026-cocktails/brasao-logo.png",
    desc: "Our house-made sangria base. Mix and refrigerate ahead of service.",
    garnish: "—",
    method: "Mix all ingredients together in a container. Refrigerate until service.",
    ice: "N/A",
    ingredients: [{ name: "Simple Syrup", amount: "2oz" }, { name: "Grenadine", amount: "2oz" }, { name: "Orange Juice", amount: "25oz" }, { name: "Cranberry Juice", amount: "25oz" }, { name: "Pineapple Juice", amount: "25oz" }, { name: "Peach Schnapps", amount: "16oz" }, { name: "House Brandy", amount: "16oz" }]
  },
  {
    name: "Pineapple Serrano – Cachaça Infusion®", category: "House Recipes", glass: "Batch", glassIcon: "🫙",
    image: "2026-cocktails/brasao-logo.png",
    desc: "Spicy-sweet cachaça infusion. Label every fresh batch with the date made.",
    garnish: "—",
    method: "Peel and cut pineapple into small cubes. Slice serranos into medium-thick slices (NO SEEDS). Combine with cachaça in container. Rest 1–2 weeks for best flavor. Label every batch with the date.",
    ice: "N/A",
    ingredients: [{ name: "Cachaça", amount: "7 bottles" }, { name: "Fresh Pineapple", amount: "1 whole" }, { name: "Serrano Peppers (no seeds)", amount: "7" }]
  },
  {
    name: "Raspberry – Gin Infusion®", category: "House Recipes", glass: "Batch", glassIcon: "🫙",
    image: "2026-cocktails/brasao-logo.png",
    desc: "Fruity house gin infusion. Label every fresh batch with the date made.",
    garnish: "—",
    method: "Wash and prepare raspberries. Add to container along with gin. Rest 1–2 weeks for best flavor. Label every batch with the date.",
    ice: "N/A",
    ingredients: [{ name: "House Gin", amount: "7 bottles" }, { name: "Fresh Raspberries", amount: "4 boxes" }]
  },
  {
    name: "Original Cucumber Mix®", category: "House Recipes", glass: "Batch", glassIcon: "🫙",
    image: "2026-cocktails/brasao-logo.png",
    desc: "House-made cucumber base used across several signature cocktails. Keep refrigerated.",
    garnish: "—",
    method: "Peel cucumbers and blend with water and sugar until smooth. Refrigerate until service.",
    ice: "N/A",
    ingredients: [{ name: "Fresh Cucumbers", amount: "12" }, { name: "Sugar", amount: "2 cups" }, { name: "Aqua Panna Water", amount: "2 bottles" }]
  },
  {
    name: "Strawberry – Vodka Infusion®", category: "House Recipes", glass: "Batch", glassIcon: "🫙",
    image: "2026-cocktails/brasao-logo.png",
    desc: "Sweet strawberry vodka infusion. Label every fresh batch with the date made.",
    garnish: "—",
    method: "Wash strawberries, remove the calyx (leafy green top), slice in half. Add to container with vodka. Rest 1–2 weeks for best flavor. Label every batch with the date.",
    ice: "N/A",
    ingredients: [{ name: "House Vodka", amount: "7 bottles" }, { name: "Fresh Strawberries", amount: "4 boxes" }]
  },
  {
    name: "Blueberry – Rum Infusion®", category: "House Recipes", glass: "Batch", glassIcon: "🫙",
    image: "2026-cocktails/brasao-logo.png",
    desc: "Rich blueberry rum infusion. Label every fresh batch with the date made.",
    garnish: "—",
    method: "Wash blueberries and slice in half. Add to container with rum. Rest 1–2 weeks for best flavor. Label every batch with the date.",
    ice: "N/A",
    ingredients: [{ name: "House Rum", amount: "7 bottles" }, { name: "Fresh Blueberries", amount: "4 boxes" }]
  },
  {
    name: "Michelada Mix", category: "House Recipes", glass: "Batch", glassIcon: "🫙",
    image: "2026-cocktails/brasao-logo.png",
    desc: "Our bold house-made michelada mix. Combine and keep refrigerated.",
    garnish: "—",
    method: "Mix all ingredients together. Refrigerate until service.",
    ice: "N/A",
    ingredients: [{ name: "Zing Zang", amount: "2 bottles" }, { name: "Worcestershire", amount: "1 cup" }, { name: "Horseradish", amount: "2oz" }, { name: "Tabasco", amount: "1oz" }, { name: "Black Pepper", amount: "1/2oz" }]
  }
];

// Sort alphabetically
cocktails.sort((a, b) => a.name.localeCompare(b.name));

const CATEGORIES = ['All', ...new Set(cocktails.map(c => c.category))];
let activeCategory = 'All';

// ── CATEGORY FILTER ──
function buildFilterBar() {
  const bar = document.getElementById('filterBar');
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === 'All' ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      activeCategory = cat;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('searchInput').value = '';
      document.querySelectorAll('.alpha-btn').forEach(b => b.classList.remove('active'));
      renderGrid('');
    });
    bar.appendChild(btn);
  });
}

// ── ALPHABET BAR ──
function buildAlphaBar() {
  const bar = document.getElementById('alphaBar');
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(letter => {
    const available = cocktails.some(c => c.name[0].toUpperCase() === letter);
    const btn = document.createElement('button');
    btn.className = 'alpha-btn' + (available ? '' : ' no-match');
    btn.textContent = letter;
    btn.dataset.letter = letter;
    btn.addEventListener('click', () => {
      const cur = document.getElementById('searchInput').value;
      if (cur.toUpperCase() === letter) {
        document.getElementById('searchInput').value = '';
        document.querySelectorAll('.alpha-btn').forEach(b => b.classList.remove('active'));
        renderGrid('');
      } else {
        document.getElementById('searchInput').value = letter;
        document.querySelectorAll('.alpha-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGrid(letter);
      }
    });
    bar.appendChild(btn);
  });
}

// ── RENDER GRID ──
function renderGrid(query) {
  const grid = document.getElementById('cocktailsGrid');
  const countEl = document.getElementById('resultCount');
  const q = query.trim().toUpperCase();

  let pool = activeCategory === 'All' ? cocktails : cocktails.filter(c => c.category === activeCategory);
  const filtered = q === '' ? pool : pool.filter(c => c.name.toUpperCase().startsWith(q));

  grid.innerHTML = '';
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🍸</div><h3>No Cocktails Found</h3><p>Try a different search or filter</p></div>`;
    countEl.textContent = '';
    return;
  }

  const total = activeCategory === 'All' ? cocktails.length : pool.length;
  countEl.textContent = filtered.length === total ? `${total} cocktails` : `${filtered.length} of ${total}`;

  filtered.forEach((c, i) => {
    const card = document.createElement('div');
    card.className = 'cocktail-card';
    card.style.animationDelay = `${i * 0.035}s`;
    card.innerHTML = `
      <div class="card-image-wrap">
        <img src="${c.image}" alt="${c.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=70'"/>
        <div class="card-image-overlay"></div>
        <span class="card-badge">${c.category}</span>
        <span class="card-glass-icon">${c.glassIcon}</span>
      </div>
      <div class="card-body">
        <div class="card-name">${c.name}</div>
        <div class="card-meta">
          <div class="card-meta-item">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>
            ${c.glass}
          </div>
        </div>
        <div class="card-divider"></div>
        <div class="card-recipe-label">Ingredients</div>
        <ul class="card-ingredients">
          ${c.ingredients.slice(0, 4).map(ing => `<li><span>${ing.name}</span><span class="ingredient-amount">${ing.amount}</span></li>`).join('')}
          ${c.ingredients.length > 4 ? `<li><span style="color:var(--text-muted);font-style:italic;font-family:'Cormorant Garamond',serif">+ ${c.ingredients.length - 4} more…</span></li>` : ''}
        </ul>
        <div class="card-garnish">
          <span class="card-garnish-label">Garnish</span>
          <span class="card-garnish-value">${c.garnish}</span>
        </div>
      </div>`;
    card.addEventListener('click', () => openModal(c));
    grid.appendChild(card);
  });
}

// ── MODAL ──
function openModal(c) {
  document.getElementById('modalImg').src = c.image;
  document.getElementById('modalImg').alt = c.name;
  document.getElementById('modalImg').onerror = function () { this.src = 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=700&q=80'; };
  document.getElementById('modalEyebrow').textContent = c.category + ' · ' + c.glass;
  document.getElementById('modalTitle').textContent = c.name;
  document.getElementById('modalDesc').textContent = c.desc;
  document.getElementById('modalMeta').innerHTML = `
    <div class="modal-meta-chip"><span class="modal-meta-chip-label">Glassware</span><span class="modal-meta-chip-value">${c.glassIcon} ${c.glass}</span></div>
    <div class="modal-meta-chip"><span class="modal-meta-chip-label">Category</span><span class="modal-meta-chip-value">${c.category}</span></div>
    <div class="modal-meta-chip"><span class="modal-meta-chip-label">Ice</span><span class="modal-meta-chip-value">🧊 ${c.ice || 'N/A'}</span></div>
    <div class="modal-meta-chip"><span class="modal-meta-chip-label">Ingredients</span><span class="modal-meta-chip-value">${c.ingredients.length} items</span></div>`;
  document.getElementById('modalIngredients').innerHTML = c.ingredients.map(ing =>
    `<li><span class="modal-ing-name">${ing.name}</span><span class="modal-ing-amt">${ing.amount}</span></li>`).join('');
  document.getElementById('modalMethod').textContent = c.method;
  document.getElementById('modalGarnish').innerHTML = `<span class="modal-garnish-icon">🌿</span><div><div class="modal-garnish-text-label">Garnish</div><div class="modal-garnish-text-value">${c.garnish}</div></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) { if (e.target === document.getElementById('modalBackdrop')) closeModalBtn(); }
function closeModalBtn() { document.getElementById('modalBackdrop').classList.remove('open'); document.body.style.overflow = ''; }
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalBtn(); });

// ── SEARCH ──
document.getElementById('searchInput').addEventListener('input', function () {
  const q = this.value.toUpperCase();
  document.querySelectorAll('.alpha-btn').forEach(btn => {
    btn.classList.remove('active');
    if (q.length === 1 && btn.dataset.letter === q) btn.classList.add('active');
  });
  renderGrid(this.value);
});

// ── INIT ──
buildFilterBar();
buildAlphaBar();
renderGrid('');
