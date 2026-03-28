const BASE = 'https://brasaomenu.netlify.app';

const cocktails = [
  // ─── SEASONAL ───────────────────────────────────────────────────
  {
    name: "Cutie Gold Caipirinha", category: "Seasonal", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/cutie-gold-caipirinha-website.jpg",
    desc: "A sunny spin on Brazil's national cocktail. We use premium Gold Cachaça and fresh Cutie mandarins for a richer, sweeter citrus profile that's incredibly refreshing and bright.",
    garnish: "Orange Slice",
    method: "Muddle the mandarine. Add all other ingredients. Shaken, Pour over regular ice.",
    ingredients: [{ name: "Gold Cachaça", amount: "2oz" }, { name: "Cutie Mandarine", amount: "1 1/2oz" }, { name: "Sugar", amount: "2 tbsp" }]
  },
  {
    name: "Ube Horchata", category: "Seasonal", glass: "Licor 43 Glass", glassIcon: "🥃",
    image: "2026-cocktails/ube-horchata-website.jpg",
    desc: "Creamy, nutty, and visually stunning. This modern twist on traditional horchata features vibrant ube for an earthy sweetness, served over a sphere rock for a smooth, chilled finish.",
    garnish: "None",
    method: "Add sphere ice and 1 1/2oz Licor 43 Horchata to glass. Shake remaining 1 1/2oz Horchata with ube powder. Pour slowly into glass.",
    ingredients: [{ name: "Licor 43 Horchata", amount: "3oz" }, { name: "Ube Powder", amount: "1/2 tsp" }]
  },
  {
    name: "Cucumber Matcharita", category: "Seasonal", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/cucumber-matcharita-website.jpg",
    desc: "Crisp and energizing. This 'Macharita' pairs Corazon Tequila with fresh cucumber and a touch of matcha powder for an earthy, botanical edge that's perfect for springtime sipping.",
    garnish: "Cucumber Slice",
    method: "Muddle the cucumbers. Add all other ingredients. Shaken, Double Strain over regular ice.",
    ingredients: [{ name: "Tequila", amount: "2oz" }, { name: "Cointreau", amount: "1/2oz" }, { name: "Agave", amount: "3/4oz" }, { name: "Lime Juice", amount: "1/4oz" }, { name: "Triple Sec", amount: "1/2oz" }, { name: "Matcha Powder", amount: "1/2 tsp" }, { name: "Cucumber Slices", amount: "3" }]
  },
  {
    name: "Tiki 43", category: "Seasonal", glass: "Licor 43 Mug", glassIcon: "🍹",
    image: "2026-cocktails/tiki-43-website.jpg",
    desc: "A bold, tropical blend of Licor 43 and white rum with a surprising coffee kick. Brightened by fresh citrus and served in our signature 43 mug, it's a sophisticated take on a beachside classic.",
    garnish: "Dry Orange Wheel",
    method: "Add all ingredients. Shaken & Double Strain over regular ice.",
    ingredients: [{ name: "Licor 43", amount: "2oz" }, { name: "White Rum", amount: "1oz" }, { name: "Espresso", amount: "1/2oz" }, { name: "Orange Juice", amount: "1/2oz" }, { name: "Lime Juice", amount: "1/2oz" }]
  },
  {
    name: "Hibiscus Margarita 🌺 (Spicy)", category: "Seasonal", glass: "Rocks Glass (Tajín Rim)", glassIcon: "🥃",
    image: "2026-cocktails/hibiscus-margarita-(spicy)-website.jpg",
    desc: "A floral blend of hibiscus and fresh citrus, finished with a smooth, subtly spicy tequila note. Elegant, vibrant, unmistakably seasonal.",
    garnish: "Orange Twist & Edible Flower",
    method: "Add all ingredients. Shaken & double strain over regular ice.",
    ingredients: [{ name: "Ghost Tequila", amount: "2oz" }, { name: "Hibiscus Syrup", amount: "1/2oz" }, { name: "Agave", amount: "3/4oz" }, { name: "Triple Sec", amount: "3/4oz" }]
  },
  // ─── WINTER / LIMITED ────────────────────────────────────────────
  {
    name: "Dark 'N' Stormy", category: "Limited", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/dark-and-stormy-website.jpg",
    desc: "Bold Brugal 1888 rum, zesty lime, and ginger spice — deep, warming, and perfectly cozy for winter nights.",
    garnish: "Lime Wheel",
    method: "Add ice, lime juice, ginger beer. Top with the rum slowly.",
    ingredients: [{ name: "Brugal 1888", amount: "2oz" }, { name: "Ginger Beer", amount: "4oz" }, { name: "Lime Juice", amount: "3/4oz" }]
  },
  {
    name: "Coquito", category: "Limited", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/coquito-website.jpg",
    desc: "Creamy coconut and cinnamon blended with Brugal 1888 rum — rich, silky, and holiday-perfect.",
    garnish: "Cinnamon Stick & Cinnamon Powder",
    method: "Add all ingredients. Shaken, Double Strain over a large cube.",
    ingredients: [{ name: "Brugal 1888", amount: "1oz" }, { name: "Vanilla Vodka", amount: "1oz" }, { name: "Licor 43 Crème Brulee", amount: "1/2oz" }, { name: "Coco Lopez", amount: "1oz" }, { name: "Condensed Milk", amount: "1/2oz" }, { name: "Half & Half", amount: "3/4oz" }]
  },
  {
    name: "Cranberry Mojito", category: "Limited", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/cranberry-mojito-website.jpg",
    desc: "Fresh mint, tart cranberry, and bright citrus — elevated with Brugal 1888 rum for a smooth, warm finish.",
    garnish: "Lime Wheel, Mint & 3 Cranberries",
    method: "Add all ingredients besides the Cranberry Juice. Shaken & Pour. Top with Cranberry Juice slowly.",
    ingredients: [{ name: "Brugal 1888", amount: "2oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }, { name: "Cranberry Juice", amount: "1oz" }, { name: "Fresh Mint", amount: "pinch" }, { name: "Fresh Cranberries", amount: "6" }]
  },
  {
    name: "Autumn Pineapple", category: "Limited", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/autumn-pineapple-website.jpg",
    desc: "(Abacaxi de Outono) Grilled pineapple with cinnamon and sugar meets cachaça, citrus, honey, and a touch of bitters, served over ice with a smoky pineapple and cinnamon garnish.",
    garnish: "Cinnamon Stick & Piece of Grilled Pineapple",
    method: "Muddle 3 slices of Grilled Pineapple. Add all other ingredients. Shake and Double Strain. Serve over a large cube.",
    ingredients: [{ name: "Silver Cachaça", amount: "1 1/2oz" }, { name: "Lime Juice", amount: "1oz" }, { name: "Pineapple Juice", amount: "1/2oz" }, { name: "Honey Syrup", amount: "3/4oz" }, { name: "Dry Curacao", amount: "1/4oz" }, { name: "Angostura Bitters", amount: "2 dashes" }, { name: "Grilled Pineapple", amount: "3 slices" }]
  },
  // ─── BRASÃO SIGNATURES ──────────────────────────────────────────
  {
    name: "Caipirinha", category: "Signature", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/caipirinha-website.jpg",
    desc: "Flavors: Lime, Strawberry, Pineapple, Wild Berries or Coconut (Caipicoco). Blended with sugar and premium Cachaça rum, shaken to perfection and served on the rocks.",
    garnish: "Lime Wheel",
    method: "Muddle the fruit. Add sugar and Cachaça. Shaken & Pour over regular ice.",
    ingredients: [{ name: "Cachaça (Brazilian Rum)", amount: "2oz" }, { name: "Sugar", amount: "2 tbsp" }, { name: "Choice of Fruit", amount: "Lime/Strawberry/Pineapple/Tropical/Wild Berries" }]
  },
  {
    name: "Caipiroska", category: "Signature", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/caipiroska-website.jpg",
    desc: "Flavors: Lime, Strawberry, Pineapple or Wild Berries. Blended with sugar and premium Vodka, shaken to perfection and served on the rocks.",
    garnish: "Lime Wedge",
    method: "Muddle the fruit. Add sugar and Vodka. Shaken & Pour over regular ice.",
    ingredients: [{ name: "Vodka", amount: "2oz" }, { name: "Sugar", amount: "2 tbsp" }, { name: "Choice of Fruit", amount: "Lime/Strawberry/Pineapple/Tropical/Wild Berries" }]
  },
  {
    name: "Old Fashioned", category: "Signature", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/old-fashioned-website.jpg",
    desc: "Indulge in the bold flavors of premium Bourbon or Rye whiskey, balanced with aromatic bitters and a hint of orange, stirred to perfection and served over a single large rock.",
    garnish: "Orange Peel & Maraschino Cherry",
    method: "Add all ingredients. Stir & Pour over a large cube.",
    ingredients: [{ name: "Bourbon or Rye Whiskey", amount: "2oz" }, { name: "Angostura Bitters", amount: "3 dashes" }, { name: "Orange Bitters", amount: "2 dashes" }, { name: "Simple Syrup", amount: "1/2oz" }]
  },
  {
    name: "Watermelon Breeze", category: "Signature", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/watermelon-breeze-website.jpg",
    desc: "A refreshing blend of premium berry vodka, fresh watermelon, lemon and Velvet Falernum, served ice-cold for the perfect balance of bold and crisp flavors.",
    garnish: "Watermelon slice",
    method: "Add all ingredients. Shaken & double strain over regular ice.",
    ingredients: [{ name: "Grey Goose Berry Vodka", amount: "2oz" }, { name: "Velvet Falernum", amount: "1/2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Watermelon", amount: "4-5 pieces" }, { name: "Sugar", amount: "1/4 tsp" }]
  },
  {
    name: "Passion Fruit Margarita 🔥", category: "Signature", glass: "Rocks Glass (Sugar Rim)", glassIcon: "🥃",
    image: "2026-cocktails/passion-fruit-margarita-website.jpg",
    desc: "A bold mix of Ghost Tequila, passion fruit, and a kick of heat, perfectly balanced for a refreshing and fiery twist on a classic margarita.",
    garnish: "Lime Wheel",
    method: "Add all ingredients. Shaken & Double Strain over regular ice.",
    ingredients: [{ name: "Ghost Tequila", amount: "1 1/2oz" }, { name: "Triple Sec", amount: "1/2oz" }, { name: "Passion Fruit Pulp", amount: "1oz" }, { name: "Lime Juice", amount: "1/2oz" }, { name: "Agave", amount: "3/4oz" }]
  },
  {
    name: "Cucumber Ivy", category: "Signature", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/cucumber-ivy-website.jpg",
    desc: "Gin, floral St. Germain, lime juice, simple syrup, muddled cucumbers and a pinch of mint expertly blended, shaken, double strained, and served in a stylish coupe glass.",
    garnish: "Cucumber Slice & Mint Leaf",
    method: "Muddle cucumber slices. Add all other ingredients. Shaken, Double Strain. Serve up.",
    ingredients: [{ name: "Gin", amount: "2oz" }, { name: "St. Germain", amount: "1/2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Cucumber Slices", amount: "2" }, { name: "Fresh Mint", amount: "pinch" }]
  },
  {
    name: "Oaxaca Spice", category: "Signature", glass: "Rocks Glass (Tajín Rim)", glassIcon: "🥃",
    image: "2026-cocktails/oaxaca-spice-website.jpg",
    desc: "A perfectly blended mix of spicy tequila, agave nectar, crème de Cassis and lime juice. Shaken to perfection with bold Oaxacan character.",
    garnish: "Orange Peel with Tajín & Jalapeño Slice",
    method: "Add all ingredients. Shaken & Double Strain over crushed ice.",
    ingredients: [{ name: "Spicy Tequila", amount: "1 1/2oz" }, { name: "Crème de Cassis", amount: "1/2oz" }, { name: "Agave Nectar", amount: "3/4oz" }, { name: "Lime Juice", amount: "3/4oz" }]
  },
  // ─── CLASSICS ──────────────────────────────────────────────────
  {
    name: "Moscow Mule", category: "Classics", glass: "Copper Mug", glassIcon: "🫖",
    image: "2026-cocktails/moscow-mule-website.jpg",
    desc: "A timeless combination of premium vodka, spicy ginger beer and fresh lime, served ice-cold in our signature copper mug for the perfect chill.",
    garnish: "Lime Wheel",
    method: "Add all ingredients besides the ginger beer. Shaken & Double Strain. Top with Ginger Beer.",
    ingredients: [{ name: "Vodka", amount: "2oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }, { name: "Ginger Beer", amount: "top" }]
  },
  {
    name: "Mint Julep", category: "Classics", glass: "Metal Tumbler", glassIcon: "🥂",
    image: "2026-cocktails/mint-julep-website.jpg",
    desc: "Kentucky's finest — premium bourbon poured over crushed ice with fresh mint and sugar. Elegant, aromatic, and perfectly Southern.",
    garnish: "Lime Wheel & Mint Leaf",
    method: "Add all ingredients. Shaken & Double Strain over crushed ice.",
    ingredients: [{ name: "Bourbon or Rye Whiskey", amount: "2oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }, { name: "Fresh Mint", amount: "pinch" }]
  },
  {
    name: "Bramble", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/bramble-website.jpg",
    desc: "A British classic by Dick Bradsell. Gin and lemon brightened with blackberry liqueur — fruity, tart, and impossibly elegant.",
    garnish: "Blackberries",
    method: "Muddle 3 blackberries at the bottom of the glass. Add all other ingredients. Shaken, Double Strain over crushed ice.",
    ingredients: [{ name: "Gin", amount: "2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }, { name: "Blackberries", amount: "3 (muddled)" }]
  },
  {
    name: "French 75", category: "Classics", glass: "Champagne Flute", glassIcon: "🥂",
    image: "2026-cocktails/french75-website.jpg",
    desc: "The most elegant of the classics. Gin, lemon, sugar — topped with Prosecco for a sparkling finish that packs a punch.",
    garnish: "Lemon Twist",
    method: "Add all ingredients besides the Prosecco. Shaken, Double Strain. Top with Prosecco.",
    ingredients: [{ name: "Gin", amount: "1oz" }, { name: "Lemon Juice", amount: "1/2oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Prosecco", amount: "top" }]
  },
  {
    name: "Cuban Sazerac", category: "Classics", glass: "Rocks Glass (rinsed with Absinthe)", glassIcon: "🥃",
    image: "2026-cocktails/cuban-sazerac-website.jpg",
    desc: "New Orleans' oldest cocktail reimagined with aged rum and a hint of tropical warmth. Absinthe-rinsed, bitters-kissed, pure sophistication.",
    garnish: "Banana Chip",
    method: "Rinse rocks glass with absinthe. Add all other ingredients. Shaken, Double Strain over a large cube.",
    ingredients: [{ name: "Añejo Rum", amount: "2oz" }, { name: "Banana du Brasil", amount: "1/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Peychaud's Bitters", amount: "2 dashes" }, { name: "Absinthe", amount: "rinse" }]
  },
  {
    name: "Aviation", category: "Classics", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/aviation-website.jpg",
    desc: "A pre-Prohibition classic that disappeared and came back. Gin, lemon, maraschino liqueur and crème de violette create its legendary sky-blue hue.",
    garnish: "Maraschino Cherry & Lemon Twist",
    method: "Add all ingredients. Shaken & Double Strain. Serve up.",
    ingredients: [{ name: "Gin", amount: "2oz" }, { name: "Maraschino Liqueur", amount: "1/2oz" }, { name: "Crème de Violette", amount: "1/4oz" }, { name: "Lemon Juice", amount: "3/4oz" }]
  },
  {
    name: "Last Word", category: "Classics", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/last-word-website.jpg",
    desc: "The Prohibition-era equal-parts classic. Gin, Genever, maraschino and lemon in perfect harmony — bold, herbal and unforgettable.",
    garnish: "Maraschino Cherry",
    method: "Add all ingredients. Shaken & double strain. Serve up.",
    ingredients: [{ name: "Gin", amount: "1oz" }, { name: "Boomsma (Genever)", amount: "1oz" }, { name: "Maraschino Liqueur", amount: "1oz" }, { name: "Lemon Juice", amount: "1oz" }]
  },
  {
    name: "Smoked Old Fashioned", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/smoked-old-fashioned-website.jpg",
    desc: "Our elevated take on the timeless Old Fashioned — table-smoked with cherry wood for an intoxicating aroma and deep, smoky complexity.",
    garnish: "Orange peel & cherry, served under smoke cloche",
    method: "Prepare Old Fashioned in glass. Before serving, smoke with cherry wood chips under cloche. Unveil tableside for dramatic effect. Garnish with orange peel and cherry.",
    ingredients: [{ name: "Bourbon Whiskey", amount: "2 oz" }, { name: "Angostura Bitters", amount: "2 dashes" }, { name: "Orange Bitters", amount: "1 dash" }, { name: "Sugar Cube", amount: "1" }, { name: "Cherry Wood Smoke", amount: "Tableside" }]
  },
  {
    name: "Vieux Carré", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/vieux-carre-website.jpg",
    desc: "The New Orleans cocktail from the Hotel Monteleone. Rye, Cognac, sweet vermouth, Bénédictine and bitters — complex, warming, magnificent.",
    garnish: "Lemon Peel",
    method: "Add all ingredients. Stir & Pour over a large cube.",
    ingredients: [{ name: "Cognac", amount: "1oz" }, { name: "Rye Whiskey", amount: "1oz" }, { name: "Sweet Vermouth", amount: "3/4oz" }, { name: "Bénédictine", amount: "1/4oz" }, { name: "Peychaud's Bitters", amount: "2 dashes" }, { name: "Angostura Bitters", amount: "2 dashes" }]
  },
  {
    name: "Negroni", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/negroni-website.jpg",
    desc: "The aperitivo icon. Equal parts gin, Campari and sweet vermouth — bitter, sweet and impossibly balanced. Stirred, never shaken.",
    garnish: "Orange Peel",
    method: "Add all ingredients. Stir & Pour over a large cube.",
    ingredients: [{ name: "Gin", amount: "1oz" }, { name: "Campari", amount: "1oz" }, { name: "Sweet Vermouth", amount: "1oz" }]
  },
  {
    name: "Bellini Sunrise", category: "Classics", glass: "Champagne Flute", glassIcon: "🥂",
    image: "2026-cocktails/bellini-website.jpg",
    desc: "Venice's legendary brunch cocktail elevated with a sunrise effect. Peach Wine topped with a Chambord float for a stunning, fruity gradient.",
    garnish: "Maraschino Cherry",
    method: "Fill glass with Peach Wine. Leave space at the top. Slowly top with Chambord on the edge of the glass.",
    ingredients: [{ name: "Peach Wine", amount: "fill" }, { name: "Chambord", amount: "3/4oz" }]
  },
  {
    name: "Peach 75", category: "Classics", glass: "Champagne Flute", glassIcon: "🥂",
    image: "2026-cocktails/peach-75-website.jpg",
    desc: "A peachy riff on the legendary French 75. Peach Vodka and lemon with a touch of simple syrup, topped with Prosecco for a sparkling, fruity celebration.",
    garnish: "Lemon Twist & Maraschino Cherry",
    method: "Add all ingredients besides the Prosecco. Shaken & Double Strain. Top with Prosecco.",
    ingredients: [{ name: "Peach Vodka", amount: "1oz" }, { name: "Lemon Juice", amount: "1/2oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Prosecco", amount: "top" }]
  },
  {
    name: "Mojito", category: "Classics", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/mojito-website.jpg",
    desc: "Cuba's most beloved export. Fresh mint, lime, sugar and white rum — crisp, refreshing, and endlessly popular.",
    garnish: "Lime Wheel & Mint Leaf",
    method: "Add all ingredients. Shaken & Pour over regular ice.",
    ingredients: [{ name: "Rum", amount: "2oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }, { name: "Fresh Mint", amount: "pinch" }]
  },
  {
    name: "Grapefruit Martini", category: "Classics", glass: "Martini Glass (Tajín Rim)", glassIcon: "🍸",
    image: "2026-cocktails/grapefruit-martini-website.jpg",
    desc: "Citrus-forward and elegantly sharp. Ruby Red Vodka, Aperol and fresh lemon — served ice-cold in a Tajín-rimmed martini glass.",
    garnish: "Lemon Twist",
    method: "Add all ingredients. Shaken & Double Strain. Serve up.",
    ingredients: [{ name: "Ruby Red Vodka", amount: "2oz" }, { name: "Aperol", amount: "1oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }]
  },
  {
    name: "Skinny Margarita", category: "Classics", glass: "Collins Glass (Salt Rim)", glassIcon: "🥤",
    image: "2026-cocktails/skinny-margarita-website.jpg",
    desc: "All the flavor, none of the guilt. Corazón Reposado Tequila, fresh citrus and agave nectar — clean, bright and perfectly balanced.",
    garnish: "Lime Wedge",
    method: "Add all ingredients. Shaken & double strain over regular ice.",
    ingredients: [{ name: "Corazón Reposado Tequila", amount: "2oz" }, { name: "Orange Juice", amount: "1/2oz" }, { name: "Agave", amount: "3/4oz" }, { name: "Lime Juice", amount: "3/4oz" }]
  },
  {
    name: "Sangria", category: "Classics", glass: "Wine Glass", glassIcon: "🍷",
    image: "2026-cocktails/sangrias-website.jpg",
    desc: "Our house sangria — Original Sangria Mix® poured over fresh fruit and ice, topped with Merlot (red) or Pinot Grigio (white). Spain's legendary house punch.",
    garnish: "Orange Slice",
    method: "Build glass with fruit at the bottom. Fill with ice. Add Original Sangria Mix® until 3/4 full. Top with Merlot (red) or Pinot Grigio (white).",
    ingredients: [{ name: "Sangria Mix®", amount: "3/4 fill" }, { name: "Merlot or Pinot Grigio", amount: "top" }, { name: "Strawberries", amount: "" }, { name: "Blueberries", amount: "" }, { name: "Blackberries", amount: "" }, { name: "Pineapple", amount: "" }]
  },
  {
    name: "Espresso Martini", category: "Classics", glass: "Martini Glass", glassIcon: "🍸",
    image: "2026-cocktails/espresso-martini-website.jpg",
    desc: "The ultimate after-dinner pick-me-up. Vodka, Mr. Black Coffee Liqueur, Licor 43 and a fresh espresso shot shaken hard for that iconic crema foam.",
    garnish: "3 Coffee Beans",
    method: "Add all ingredients. Shaken, Double Strain. Serve up. (Use single espresso shot only)",
    ingredients: [{ name: "Vodka", amount: "1oz" }, { name: "Mr. Black Coffee Liqueur", amount: "1oz" }, { name: "Licor 43", amount: "1oz" }, { name: "Fresh Espresso (single shot)", amount: "1oz" }]
  },
  {
    name: "Pink Lady", category: "Classics", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/pink-lady-website.jpg",
    desc: "A Prohibition-era gem making its comeback. Gin, Velvet Falernum, lemon, fresh raspberries and blackberry — silky, rosy and topped with Prosecco.",
    garnish: "Raspberry & Blackberry",
    method: "Add all ingredients besides the Prosecco. Shaken & Double Strain. Top with Prosecco.",
    ingredients: [{ name: "Gin", amount: "1 1/2oz" }, { name: "Velvet Falernum", amount: "1/2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Raspberries", amount: "2" }, { name: "Blackberry", amount: "1" }, { name: "Prosecco", amount: "top" }]
  },
  {
    name: "Basil Up", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/basil-up-website.jpg",
    desc: "A fragrant, garden-fresh cocktail. Gin, floral St. Germain, fresh basil and cucumber — shaken and double strained over crushed ice.",
    garnish: "Basil Leaf & Cucumber",
    method: "Muddle Basil and Cucumbers. Add all other ingredients. Shaken & Double Strain over crushed ice.",
    ingredients: [{ name: "Gin", amount: "2oz" }, { name: "St. Germain", amount: "3/4oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Cucumber Slices", amount: "2" }, { name: "Basil Leaves", amount: "1-2" }]
  },
  {
    name: "Love in Summer", category: "Classics", glass: "Highball", glassIcon: "🥤",
    image: "2026-cocktails/love-in-summer-website.jpg",
    desc: "A summer romance in a glass. Vodka, St. Germain, fresh strawberry, lemon and prosecco — light, floral and utterly romantic.",
    garnish: "Strawberry fan & edible flower",
    method: "Muddle fresh strawberry with simple syrup. Add vodka, St. Germain and lemon juice in shaker with ice. Shake well. Strain into ice-filled highball. Top with Prosecco.",
    ingredients: [{ name: "Vodka", amount: "1 1/2oz" }, { name: "St. Germain Elderflower", amount: "¾ oz" }, { name: "Fresh Strawberry", amount: "2 berries" }, { name: "Fresh Lemon Juice", amount: "½ oz" }, { name: "Prosecco (top)", amount: "2 oz" }]
  },
  {
    name: "Summer Mule", category: "Classics", glass: "Copper Mug", glassIcon: "🫖",
    image: "2026-cocktails/summer-mule-website.jpg",
    desc: "A seasonal twist on the classic Moscow Mule — brightened with fresh cucumber and mint, shaken and topped with ginger beer.",
    garnish: "Cucumber & Mint",
    method: "Muddle cucumber. Add all other ingredients besides the ginger beer. Shaken & Double Strain. Top with Ginger Beer.",
    ingredients: [{ name: "Vodka", amount: "2oz" }, { name: "Lime Juice", amount: "1oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Ginger Beer", amount: "top" }, { name: "Cucumber", amount: "2 slices" }, { name: "Fresh Mint", amount: "pinch" }]
  },
  {
    name: "Smoked Margarita", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/smoked-margarita-website.jpg",
    desc: "A perfectly smoked take on the classic margarita. Corazon Reposado and Mezcal with lime and orange bitters — served over a large cube.",
    garnish: "Orange Dust/Peel & Crushed Pepper",
    method: "Add all ingredients. Shaken & Double Strain over a large cube.",
    ingredients: [{ name: "Corazon Reposado Tequila", amount: "1oz" }, { name: "Mezcal", amount: "1oz" }, { name: "Agave", amount: "3/4oz" }, { name: "Lime Juice", amount: "1oz" }, { name: "Orange Bitters", amount: "2 dashes" }]
  },
  {
    name: "Añejo Old Fashioned", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/anejo-old-fashioned-website.jpg",
    desc: "The Old Fashioned reconceived with premium Añejo tequila. Agave and aromatic bitters bring deep Mexican soul to this American icon.",
    garnish: "Orange Peel & Maraschino Cherry",
    method: "Add all ingredients. Stir & Pour over a large cube.",
    ingredients: [{ name: "Añejo Tequila", amount: "2oz" }, { name: "Agave", amount: "1/4oz" }, { name: "Aromatic Bitters", amount: "2 dashes" }, { name: "Orange Bitters", amount: "2 dashes" }]
  },
  {
    name: "Pineapple Basil", category: "Classics", glass: "Martini Glass", glassIcon: "🍸",
    image: "2026-cocktails/pineapple-basil-website.jpg",
    desc: "A tropical herbaceous fusion — pineapple juice, Velvet Falernum and muddled basil with vodka create a cocktail that's bright, aromatic and irresistible.",
    garnish: "Basil Leaves",
    method: "Add all ingredients. Shaken & double strain. Serve up.",
    ingredients: [{ name: "Vodka", amount: "1 1/2oz" }, { name: "Velvet Falernum", amount: "1/2oz" }, { name: "Pineapple Juice", amount: "1oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Basil Leaves", amount: "2" }]
  },
  {
    name: "Rum Punch", category: "Classics", glass: "Snifter", glassIcon: "🥃",
    image: "2026-cocktails/rum-punch-website.jpg",
    desc: "Caribbean vibes in every sip. Rum and Coconut Rum with lime, served with our house Original Sangría Mix® — festive, fruity and fun.",
    garnish: "½ Orange Wheel & Pineapple Leaf",
    method: "Add all ingredients. Fill glass with ice. Fill remaining space with Original Sangría Mix®.",
    ingredients: [{ name: "Rum", amount: "1oz" }, { name: "Coconut Rum", amount: "1oz" }, { name: "Lime Juice", amount: "1oz" }, { name: "Original Sangría Mix®", amount: "fill" }]
  },
  {
    name: "Raspberry Mojito", category: "Classics", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/raspberry-mojito-website.jpg",
    desc: "The beloved mojito elevated with fresh raspberries for a burst of berry sweetness alongside the classic mint and lime.",
    garnish: "Raspberry, Mint & Lime Peel",
    method: "Muddle the raspberries. Add all other ingredients. Shaken & Pour over regular ice.",
    ingredients: [{ name: "Rum", amount: "2oz" }, { name: "Lime Juice", amount: "1/2oz" }, { name: "Simple Syrup", amount: "3/4oz" }, { name: "Fresh Mint", amount: "pinch" }, { name: "Raspberries", amount: "3" }]
  },
  {
    name: "Peartini", category: "Classics", glass: "Martini Glass (Sugar Rim)", glassIcon: "🍸",
    image: "2026-cocktails/peartini-website.jpg",
    desc: "Autumn elegance in a martini glass. Pear Vodka, St. Germain and fresh lemon — shaken and double strained in a sugar-rimmed glass.",
    garnish: "Lemon Twist",
    method: "Add all ingredients. Shaken & Double Strain. Serve up.",
    ingredients: [{ name: "Pear Vodka", amount: "2oz" }, { name: "St. Germain", amount: "3/4oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }]
  },
  // ─── SIGNATURE ORIGINALS ─────────────────────────────────────────
  {
    name: "Mexican Candy", category: "Originals", glass: "Coupe Glass (Tajín Rim)", glassIcon: "🍷",
    image: "2026-cocktails/mexican-candy-website.jpg",
    desc: "Inspired by the beloved Mexican street candy. Pineapple Serrano Infused Cachaça® with Framboise and lime — playful, vibrant and spicy-sweet.",
    garnish: "Lime Wheel",
    method: "Add all ingredients. Shaken & Double Strain. Serve up.",
    ingredients: [{ name: "Pineapple Serrano Infused Cachaça®", amount: "2oz" }, { name: "Framboise Liqueur", amount: "3/4oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }]
  },
  {
    name: "Red & Wild", category: "Originals", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/red-and-wild-website.jpg",
    desc: "Bold, wild berry flavors meet our house Strawberry Infused Vodka® in this striking crimson original. Dark, lush and untamed.",
    garnish: "Lemon Twist",
    method: "Add all ingredients. Shaken & Double Strain. Serve up.",
    ingredients: [{ name: "Strawberry Infused Vodka®", amount: "2oz" }, { name: "St. Germain", amount: "1/2oz" }, { name: "Velvet Falernum", amount: "1/2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }]
  },
  {
    name: "Magenta Blossom", category: "Originals", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/magenta-blossom-website.jpg",
    desc: "A floral masterpiece in vivid magenta. Our house Blueberry Infused Rum®, St. Germain and lemon create a color-changing, aromatic showstopper.",
    garnish: "3 Blueberries",
    method: "Add all ingredients. Shaken & Double Strain. Serve up.",
    ingredients: [{ name: "Blueberry Infused Rum®", amount: "2oz" }, { name: "St. Germain", amount: "1/2oz" }, { name: "Triple Sec", amount: "1/2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }]
  },
  {
    name: "Blue Rush", category: "Originals", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/blue-rush-website.jpg",
    desc: "A vivid blue wave of tropical flavors — our house Blueberry Infused Rum®, orgeat and lime create a stunning, refreshing signature cocktail.",
    garnish: "Lime Wheel, Mint & Blueberry",
    method: "Add all ingredients. Shaken, Double Strained over crushed ice.",
    ingredients: [{ name: "Blueberry Infused Rum®", amount: "2oz" }, { name: "Orgeat", amount: "1/2oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Fresh Mint", amount: "pinch" }]
  },
  {
    name: "Kiwi Crush", category: "Originals", glass: "Rocks Glass (Muddled Raspberries on Bottom)", glassIcon: "🥃",
    image: "2026-cocktails/kiwi-crush-website.jpg",
    desc: "Fresh kiwi crushed with premium vodka, Velvet Falernum and lime — a vibrant green original served over crushed ice on a bed of muddled raspberries.",
    garnish: "Kiwi Wheel",
    method: "Muddle the kiwi. Add all ingredients besides the raspberries. Shaken & double strain over crushed ice onto muddled raspberries.",
    ingredients: [{ name: "Vodka", amount: "2oz" }, { name: "Velvet Falernum", amount: "1/2oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Kiwi", amount: "0.5" }, { name: "Raspberries", amount: "3 (muddled in glass)" }]
  },
  {
    name: "Cucumber Martini", category: "Originals", glass: "Martini Glass (Tajín Rim)", glassIcon: "🍸",
    image: "2026-cocktails/cucumber-martini-website.jpg",
    desc: "Clean, crisp and cool. Premium vodka with our house Cucumber Mix® and lime — shaken and double strained in a Tajín-rimmed martini glass.",
    garnish: "Cucumber Slice",
    method: "Add all ingredients. Shaken, Double Strain. Serve up.",
    ingredients: [{ name: "Vodka", amount: "2oz" }, { name: "Cucumber Mix®", amount: "1 1/2oz" }, { name: "Lime Juice", amount: "1/2oz" }, { name: "Simple Syrup", amount: "1/2oz" }]
  },
  {
    name: "Raspberry Dreaming", category: "Originals", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/raspberry-dreaming-website.jpg",
    desc: "A dreamy, cloud-like creation with our house Raspberry Gin Infusion®, Chambord and egg white foam. Close your eyes and float away.",
    garnish: "Bitters Design & Raspberry",
    method: "Add all ingredients. Dry shaken, Shaken & Double Strain. Serve up.",
    ingredients: [{ name: "Raspberry Gin Infusion®", amount: "1 1/2oz" }, { name: "Chambord", amount: "3/4oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Egg White", amount: "1" }]
  },
  {
    name: "Mexican Brazilian", category: "Originals", glass: "Coupe Glass (Tajín Rim)", glassIcon: "🍷",
    image: "2026-cocktails/mexican-brazilian-website.jpg",
    desc: "A fusion of two great cocktail cultures — our house Pineapple Serrano Infused Cachaça® and Mezcal unite with Ancho Reyes for a bold, smoky, tropical original.",
    garnish: "Lime Wheel",
    method: "Add all ingredients. Shaken & Double Strain. Serve up.",
    ingredients: [{ name: "Pineapple Serrano Infused Cachaça®", amount: "1oz" }, { name: "Mezcal", amount: "1oz" }, { name: "Ancho Reyes", amount: "1/2oz" }, { name: "Agave", amount: "3/4oz" }, { name: "Lime Juice", amount: "3/4oz" }]
  },
  {
    name: "Floating in Space", category: "Originals", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/floating-in-space-website.jpg",
    desc: "A galaxy of flavor — our house Blueberry Infused Rum®, Crème de Cassis, lemon and egg white create an otherworldly drink that defies gravity.",
    garnish: "Bitters Design & a Blackberry",
    method: "Add all ingredients. Dry Shake, Shake, Double Strain. Serve up.",
    ingredients: [{ name: "Blueberry Infused Rum®", amount: "1 1/2oz" }, { name: "Crème de Cassis", amount: "1/2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Egg White", amount: "1" }]
  },
  {
    name: "The Green Goblin", category: "Originals", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/green-goblin-website.jpg",
    desc: "Mischievously good. Vodka, St. Germain, fresh kiwi and mint create a vivid green cocktail that's as refreshing as it is beautiful.",
    garnish: "Kiwi Wheel",
    method: "Muddle kiwi. Add all other ingredients. Shaken & Double Strain. Serve up.",
    ingredients: [{ name: "Vodka", amount: "2oz" }, { name: "St. Germain", amount: "1/2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Kiwi", amount: "0.5" }, { name: "Mint Leaves", amount: "3" }]
  },
  {
    name: "Spicy Pisco", category: "Originals", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/pisco-sour-website.jpg",
    desc: "Peru meets heat. Pisco and our house Pineapple Serrano Infused Cachaça® with lemon and egg white — a bold, spicy South American sour.",
    garnish: "Bitters Design & Jalapeño Wheel",
    method: "Add all ingredients. Dry Shaken, Shaken & Double Strain. Serve up.",
    ingredients: [{ name: "Pisco", amount: "1oz" }, { name: "Pineapple Serrano Infused Cachaça®", amount: "1oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }, { name: "Egg White", amount: "1" }]
  },
  {
    name: "Carajillo", category: "Originals", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/carajillo-website.jpg",
    desc: "Spain's beloved coffee cocktail — Licor 43 and hot espresso served over a large ice sphere for a stunning hot-meets-cold experience.",
    garnish: "3 coffee beans & orange zest",
    method: "Pull a fresh hot espresso shot. Pour Licor 43 into rocks glass over large sphere ice. Slowly pour hot espresso down the side of the glass to create layered effect. Garnish.",
    ingredients: [{ name: "Licor 43", amount: "1 1/2oz" }, { name: "Fresh Hot Espresso", amount: "1 oz" }, { name: "Large Ice Sphere", amount: "1" }]
  },
  {
    name: "Life Changer", category: "Originals", glass: "Snifter", glassIcon: "🥃",
    image: "2026-cocktails/life-changer-website.jpg",
    desc: "One sip and you'll understand the name. Licor 43, Rumchata and Mozart White Chocolate — flamed and poured over ice for an unforgettable experience.",
    garnish: "None",
    method: "Add Licor 43 and flame it. Add all other ingredients. Shaken & Pour over regular ice.",
    ingredients: [{ name: "Licor 43", amount: "1oz" }, { name: "Rumchata", amount: "1oz" }, { name: "Mozart White Chocolate", amount: "1oz" }]
  },
  {
    name: "Dominicana", category: "Originals", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/dominicana-website.jpg",
    desc: "A tribute to the Dominican Republic's finest — Flor de Caña Rum, Tia Maria, Rumchata and Dark Chocolate Liqueur with heavy whipped cream. Silky, indulgent and unforgettable.",
    garnish: "Maraschino Cherry & Cinnamon Powder",
    method: "Add all ingredients (heavy whipped cream in tin before shaking). Shaken, Double Strain. Serve up.",
    ingredients: [{ name: "Flor de Caña Rum", amount: "3/4oz" }, { name: "Tia Maria Liqueur", amount: "3/4oz" }, { name: "Rumchata", amount: "3/4oz" }, { name: "Dark Chocolate Liqueur", amount: "3/4oz" }, { name: "Heavy Whipped Cream", amount: "in tin" }]
  },
  {
    name: "Cocoa Cloud", category: "Originals", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/cocoa-cloud-website.jpg",
    desc: "A dessert cocktail as light as a cloud. 1921 Creme de Tequila, Amarula, Kahlúa and whipped cream — shaken and served up for deep cocoa indulgence.",
    garnish: "Maraschino Cherry & Grated Nutmeg",
    method: "Add all ingredients. Shaken, Double Strain. Serve up.",
    ingredients: [{ name: "1921 Creme de Tequila", amount: "1oz" }, { name: "Amarula Liqueur", amount: "1oz" }, { name: "Kahlúa Coffee Liqueur", amount: "1oz" }, { name: "Whipped Cream", amount: "in tin" }]
  },
  {
    name: "Espress Ya'self", category: "Originals", glass: "Martini Glass", glassIcon: "🍸",
    image: "2026-cocktails/espress-yaself-website.jpg",
    desc: "Bold, confident, unapologetic. 1921 Crema de Tequila, Mr. Black Coffee Liqueur, Amarula and fresh espresso with whipped cream — one sip at a time.",
    garnish: "3 Coffee Beans & Grated Nutmeg",
    method: "Add all ingredients (whipped cream in tin before shaking). Shaken, Double Strain. Serve up.",
    ingredients: [{ name: "1921 Crema de Tequila", amount: "1oz" }, { name: "Mr. Black Coffee Liqueur", amount: "1oz" }, { name: "Amarula", amount: "1oz" }, { name: "Fresh Espresso (single shot)", amount: "1oz" }, { name: "Whipped Cream", amount: "in tin" }]
  },
  {
    name: "Key Lime Pie Martini", category: "Originals", glass: "Martini Glass (Key Lime Syrup)", glassIcon: "🍸",
    image: "2026-cocktails/key-lime-pie-martini-website.jpg",
    desc: "Dessert in a glass. Licor 43, Half & Half and fresh lime — sweet, tangy and utterly decadent.",
    garnish: "Lime Twist & Lime Zest",
    method: "Add all ingredients. Shaken & Double Strain. Serve up.",
    ingredients: [{ name: "Licor 43", amount: "2oz" }, { name: "Half & Half", amount: "2oz" }, { name: "Lime Juice", amount: "1/2oz" }, { name: "Simple Syrup", amount: "1/2oz" }]
  },
  // ─── NEW ADDITIONS ──────────────────────────────────────────────
  {
    name: "Bloody Mary", category: "Classics", glass: "Collins Glass (Tajín Rim)", glassIcon: "🥤",
    image: "2026-cocktails/bloody-mary-website.jpg",
    desc: "Bold and savory — vodka, olive juice, lime, and our house Michelada Mix® poured over ice in a Tajín-rimmed glass. Brunch's most iconic wake-up call.",
    garnish: "Olives & Lime Wedge",
    method: "Pour all ingredients to the glass. Top with Michelada Mix®.",
    ingredients: [{ name: "Vodka", amount: "2oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Olive Juice", amount: "3/4oz" }, { name: "Michelada Mix®", amount: "top" }]
  },
  {
    name: "Boulevardier", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/bulevardier-website.jpg",
    desc: "The whisky lover's Negroni. Rye or Bourbon meets Campari and sweet vermouth — bitter, boozy and beautifully balanced over a large cube.",
    garnish: "Lemon Twist",
    method: "Add all ingredients. Stir & Pour over a large cube.",
    ingredients: [{ name: "Rye or Bourbon", amount: "1oz" }, { name: "Campari", amount: "1oz" }, { name: "Sweet Vermouth", amount: "1oz" }]
  },
  {
    name: "Caipicoco", category: "Signature", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/caipicoco-website.jpg",
    desc: "Brazil meets the tropics. Fresh lime muddled with sugar and coconut rum — smooth, citrusy and impossibly refreshing.",
    garnish: "Lime Twist",
    method: "Slice & muddle the lime. Add sugar & Coconut Rum. Shaken & Pour over regular ice.",
    ingredients: [{ name: "Coconut Rum", amount: "2oz" }, { name: "Lime", amount: "1 whole" }, { name: "Sugar", amount: "2 tbsp" }]
  },
  {
    name: "Cape Cod", category: "Classics", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/cape-cut-website.jpg",
    desc: "Simple and stunning — premium vodka topped with tart cranberry juice. A New England classic that never goes out of style.",
    garnish: "Lime Wedge",
    method: "Add vodka to the glass and top with Cranberry Juice.",
    ingredients: [{ name: "Vodka", amount: "2oz" }, { name: "Cranberry Juice", amount: "top" }]
  },
  {
    name: "Chocolate Martini", category: "Originals", glass: "Martini Glass (Chocolate Syrup)", glassIcon: "🍸",
    image: "2026-cocktails/chocolate-martini-website.jpg",
    desc: "Pure indulgence in a glass. Licor 43, dark chocolate liqueur and Half & Half — rich, creamy and dangerously smooth.",
    garnish: "Chocolate Powder",
    method: "Add all ingredients. Shaken, Double Strain. Serve up.",
    ingredients: [{ name: "Licor 43", amount: "2oz" }, { name: "Dark Chocolate Liqueur", amount: "1oz" }, { name: "Half & Half", amount: "1oz" }]
  },
  {
    name: "Cosmopolitan", category: "Classics", glass: "Martini Glass", glassIcon: "🍸",
    image: "2026-cocktails/cosmo-website.jpg",
    desc: "The quintessential cocktail that defined an era. Citron vodka, Cointreau, cranberry and lime — perfectly balanced, impossibly chic.",
    garnish: "Orange Twist",
    method: "Add all ingredients. Shaken, Double Strain. Serve up.",
    ingredients: [{ name: "Citron Vodka", amount: "1 1/2oz" }, { name: "Cointreau", amount: "1oz" }, { name: "Lime Juice", amount: "1/2oz" }, { name: "Cranberry Juice", amount: "1oz" }]
  },
  {
    name: "Daiquiri", category: "Classics", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/daiquiry-website.jpg",
    desc: "Frozen and fruity — fresh strawberries blended with vodka, lime and simple syrup. A crowd-pleasing frozen classic that's impossible to resist.",
    garnish: "Whipped Cream & Strawberries",
    method: "Add all ingredients. Blend with ice until smooth.",
    ingredients: [{ name: "Vodka", amount: "2oz" }, { name: "Strawberries", amount: "4" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }]
  },
  {
    name: "Fitzgerald", category: "Classics", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/fitzgerald-website.jpg",
    desc: "A gin sour with a twist — honey and lemon with two dashes of Angostura create a beautifully balanced, aromatic classic.",
    garnish: "Dry Lemon Wheel",
    method: "Add all ingredients. Shaken, Double Strain. Serve up.",
    ingredients: [{ name: "Gin", amount: "2oz" }, { name: "Honey Syrup", amount: "3/4oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Angostura Bitters", amount: "2 dashes" }]
  },
  {
    name: "Fumblin Dublin", category: "Originals", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/fumblin-dublin-website.jpg",
    desc: "Irish whiskey gets tropical — Paddy's meets fresh pineapple juice and a splash of Blue Curaçao for a surprising, vibrant twist on a spirit-forward drink.",
    garnish: "Fresh Mint",
    method: "Add all ingredients. Shaken & double strain over a large cube.",
    ingredients: [{ name: "Paddy's Irish Whiskey", amount: "2oz" }, { name: "Pineapple Juice", amount: "1 1/2oz" }, { name: "Blue Curaçao", amount: "1/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }]
  },
  {
    name: "Gibson", category: "Classics", glass: "Martini Glass", glassIcon: "🍸",
    image: "2026-cocktails/gibson-website.jpg",
    desc: "The martini's distinguished cousin. Vodka and dry vermouth stirred to perfection, distinguished by its signature cocktail onion garnish.",
    garnish: "2 Cocktail Onions",
    method: "Add all ingredients. Stir & Strain. Serve up.",
    ingredients: [{ name: "Vodka", amount: "2 1/2oz" }, { name: "Dry Vermouth", amount: "1/2oz" }]
  },
  {
    name: "Godfather", category: "Classics", glass: "Snifter", glassIcon: "🥃",
    image: "2026-cocktails/godfather-website.jpg",
    desc: "An offer you can't refuse. Scotch and Amaretto over a large cube — smoky, sweet and undeniably powerful.",
    garnish: "None",
    method: "Add all ingredients. Stir & Strain over a large cube.",
    ingredients: [{ name: "Scotch", amount: "1 1/2oz" }, { name: "Amaretto", amount: "1 1/2oz" }]
  },
  {
    name: "Godmother", category: "Classics", glass: "Snifter", glassIcon: "🥃",
    image: "2026-cocktails/godmother-website.jpg",
    desc: "The Godfather's elegant counterpart. Vodka and Amaretto — clean, smooth and sweetly sophisticated over a large cube.",
    garnish: "Lemon Peel",
    method: "Add all ingredients. Stir & Strain over a large cube.",
    ingredients: [{ name: "Vodka", amount: "1 1/2oz" }, { name: "Amaretto", amount: "1 1/2oz" }]
  },
  {
    name: "Highland Pear Martini", category: "Classics", glass: "Martini Glass", glassIcon: "🍸",
    image: "2026-cocktails/highland-pear-martini-website.jpg",
    desc: "Scotch gets poetic — aged single malt meets sweet pear liqueur and bright lemon in a sophisticated, unexpected martini.",
    garnish: "Lemon Twist",
    method: "Add all ingredients. Shaken & Double Strain. Serve up.",
    ingredients: [{ name: "Scotch", amount: "1 1/2oz" }, { name: "Pear Liqueur", amount: "3/4oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }]
  },
  {
    name: "Lemon Drop Martini", category: "Classics", glass: "Martini Glass (Sugar Rim)", glassIcon: "🍸",
    image: "2026-cocktails/lemon-drop-martini-website.jpg",
    desc: "Bright, tart and perfectly sweet. Vodka and fresh lemon with a sugar rim — the classic crowd-pleaser that never disappoints.",
    garnish: "Lemon Wheel",
    method: "Add all ingredients. Shaken & Double Strain. Serve up.",
    ingredients: [{ name: "Vodka", amount: "2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Triple Sec", amount: "1/2oz" }]
  },
  {
    name: "Long Island Iced Tea", category: "Classics", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/long-islnd-iced-tea-website.jpg",
    desc: "Five spirits, one legendary drink. Tequila, vodka, gin, rum and triple sec shaken with citrus and topped with Coke — deceptively smooth and dangerously easy to drink.",
    garnish: "Lemon Wedge",
    method: "Add all ingredients besides the Coke. Shaken & double strain over regular ice. Top with Coke.",
    ingredients: [{ name: "Tequila", amount: "1/2oz" }, { name: "Vodka", amount: "1/2oz" }, { name: "Gin", amount: "1/2oz" }, { name: "Rum", amount: "1/2oz" }, { name: "Triple Sec", amount: "1/2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Coke", amount: "top" }]
  },
  {
    name: "Love is in the Air", category: "Originals", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/love-is-in-the-air-website.jpg",
    desc: "Romance in a glass — fresh raspberries and mint meet our house Raspberry Infused Gin® with Velvet Falernum and citrus. Served over a large cube.",
    garnish: "Raspberry, Lemon Wheel & Mint Leaves",
    method: "Muddle raspberries. Add all other ingredients. Shaken & double strain over a large cube.",
    ingredients: [{ name: "Raspberry Infused Gin®", amount: "1 1/2oz" }, { name: "Velvet Falernum", amount: "1/2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }, { name: "Raspberries", amount: "3" }, { name: "Fresh Mint", amount: "pinch" }]
  },
  {
    name: "Manhattan", category: "Classics", glass: "Martini Glass", glassIcon: "🍸",
    image: "2026-cocktails/manhathan-website.jpg",
    desc: "New York's most iconic cocktail. Rye whisky and sweet vermouth with aromatic bitters — stirred, not shaken, as it should be.",
    garnish: "Maraschino Cherry",
    method: "Add all ingredients. Stir & Pour. Serve up.",
    ingredients: [{ name: "Rye Whisky", amount: "2oz" }, { name: "Sweet Vermouth", amount: "1oz" }, { name: "Angostura Bitters", amount: "2 dashes" }]
  },
  {
    name: "Margarita", category: "Classics", glass: "Rocks Glass (Salt Rim)", glassIcon: "🥃",
    image: "2026-cocktails/margarita-website.jpg",
    desc: "The world's most beloved cocktail. Tequila, lime and agave with a salted rim — crisp, balanced and timeless.",
    garnish: "Lime Wedge",
    method: "Add all ingredients. Shaken & Double Strain over regular ice.",
    ingredients: [{ name: "Tequila", amount: "2oz" }, { name: "Triple Sec", amount: "1/2oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Agave", amount: "3/4oz" }]
  },
  {
    name: "Mexican Martini", category: "Originals", glass: "Martini Glass (Tajín Rim)", glassIcon: "🍸",
    image: "2026-cocktails/mexican-martini-website.jpg",
    desc: "Austin's legendary cocktail — tequila, Cointreau, orange and lime with a briny olive twist. Served up in a Tajín-rimmed glass.",
    garnish: "Lime Wheel",
    method: "Add all ingredients. Shaken & Double Strain. Serve up.",
    ingredients: [{ name: "Tequila", amount: "2oz" }, { name: "Cointreau", amount: "1/2oz" }, { name: "Orange Juice", amount: "1/2oz" }, { name: "Olive Juice", amount: "1/2oz" }, { name: "Lime Juice", amount: "3/4oz" }]
  },
  {
    name: "Michelada", category: "Classics", glass: "Beer Glass (Salt & Tajín Rim)", glassIcon: "🥤",
    image: "2026-cocktails/michelada-website.jpg",
    desc: "Mexico's ultimate beer cocktail. Our house Michelada Mix® with olive juice and lime, topped with your favorite beer in a salt and Tajín-rimmed glass.",
    garnish: "Lime Wedge & Olives",
    method: "Fill the glass with ice. Add all ingredients. Top with beer.",
    ingredients: [{ name: "Michelada Mix®", amount: "4oz" }, { name: "Olive Juice", amount: "1/2oz" }, { name: "Lime Juice", amount: "1/2oz" }, { name: "Beer", amount: "top" }]
  },
  {
    name: "Mimosa", category: "Classics", glass: "Champagne Flute", glassIcon: "🥂",
    image: "2026-cocktails/mimosa-website.jpg",
    desc: "Brunch's best friend. Equal parts fresh orange juice and Prosecco — light, effervescent and endlessly celebratory.",
    garnish: "Maraschino Cherry",
    method: "Add all ingredients to the glass. No ice.",
    ingredients: [{ name: "Orange Juice", amount: "half flute" }, { name: "Prosecco", amount: "half flute" }]
  },
  {
    name: "NY Sour", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/ny-sour-website.jpg",
    desc: "New York's take on the classic whisky sour — silky egg white foam with a dramatic Merlot float. Bold, smooth and visually stunning.",
    garnish: "Maraschino Cherry",
    method: "Add all ingredients (except Merlot). Dry Shaken, Shaken & double strain over a large cube. Top with a Merlot float. Add 2 dashes Angostura.",
    ingredients: [{ name: "Whisky", amount: "2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }, { name: "Egg White", amount: "1" }, { name: "Merlot", amount: "float" }, { name: "Angostura Bitters", amount: "2 dashes" }]
  },
  {
    name: "Piña Colada", category: "Classics", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/pina-colada-website.jpg",
    desc: "The ultimate tropical escape. Coconut rum, Flor de Caña and Coco Lopez blended smooth with pineapple juice and lime. Close your eyes and you're on the beach.",
    garnish: "Whipped Cream, Pineapple Leaf & Cherry",
    method: "Add all ingredients. Blend until smooth.",
    ingredients: [{ name: "Don Q Coco", amount: "1oz" }, { name: "Flor de Caña Rum", amount: "1oz" }, { name: "Pineapple Juice", amount: "1 1/2oz" }, { name: "Coco Lopez", amount: "2oz" }, { name: "Lime Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }]
  },
  {
    name: "Pisco Sour", category: "Classics", glass: "Coupe Glass", glassIcon: "🍷",
    image: "2026-cocktails/pisco-sour-website.jpg",
    desc: "Peru's national treasure. Pisco, fresh lemon, simple syrup and egg white — silky, frothy and perfectly balanced with an Angostura bitters finish.",
    garnish: "Angostura Bitters design",
    method: "Add all ingredients. Dry shaken, Shaken & Double Strain. Serve up.",
    ingredients: [{ name: "Pisco", amount: "2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "3/4oz" }, { name: "Egg White", amount: "1" }]
  },
  {
    name: "Rusty Nail", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/rusty-nail-website.jpg",
    desc: "Scotland's classic two-ingredient cocktail. Scotch and Drambuie — smoky, honeyed and warming over a large cube.",
    garnish: "Lemon Peel",
    method: "Pour all ingredients over a large cube.",
    ingredients: [{ name: "Scotch", amount: "1oz" }, { name: "Drambuie", amount: "1oz" }]
  },
  {
    name: "Salty Dog", category: "Classics", glass: "Collins Glass (Salt Rim)", glassIcon: "🥤",
    image: "2026-cocktails/salty-dog-website.jpg",
    desc: "The Greyhound's saltier cousin. Vodka topped with grapefruit juice in a salt-rimmed glass — tart, refreshing and effortlessly simple.",
    garnish: "Lemon Wedge",
    method: "Pour the Vodka. Top with Grapefruit Juice over regular ice.",
    ingredients: [{ name: "Vodka", amount: "2oz" }, { name: "Grapefruit Juice", amount: "top" }]
  },
  {
    name: "Sazerac", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/sazerac-website.jpg",
    desc: "New Orleans' oldest cocktail. Rye, sweet vermouth and aromatic bitters — stirred and poured over a large cube with a maraschino cherry and orange.",
    garnish: "Maraschino Cherry & Orange Dust/Peel",
    method: "Add all ingredients. Stir & Pour over a large cube.",
    ingredients: [{ name: "Rye Whisky", amount: "2oz" }, { name: "Sweet Vermouth", amount: "1/2oz" }, { name: "Angostura Bitters", amount: "2 dashes" }]
  },
  {
    name: "Tom Collins", category: "Classics", glass: "Collins Glass", glassIcon: "🥤",
    image: "2026-cocktails/tom-collins-website.jpg",
    desc: "The original long drink. Gin, lemon, simple syrup topped with sparkling water — refreshing, balanced and timeless.",
    garnish: "Half Lemon Wheel & Cherry",
    method: "Pour the gin, lemon & simple syrup into glass. Fill with ice. Top with sparkling water.",
    ingredients: [{ name: "Gin", amount: "2oz" }, { name: "Lemon Juice", amount: "3/4oz" }, { name: "Simple Syrup", amount: "1/2oz" }, { name: "Sparkling Water", amount: "top" }]
  },
  {
    name: "Vesper", category: "Classics", glass: "Martini Glass", glassIcon: "🍸",
    image: "2026-cocktails/vesper-website.jpg",
    desc: "James Bond's original creation from Casino Royale. Gin, vodka and Lillet Blanc — shaken, not stirred, and served with a lemon twist.",
    garnish: "Lemon Twist",
    method: "Add all ingredients. Shaken & double strain. Serve up.",
    ingredients: [{ name: "Gin", amount: "1 1/2oz" }, { name: "Vodka", amount: "1oz" }, { name: "Lillet Blanc", amount: "1/2oz" }]
  },
  {
    name: "White Russian", category: "Classics", glass: "Rocks Glass", glassIcon: "🥃",
    image: "2026-cocktails/white-russian-website.jpg",
    desc: "The Dude's drink of choice. Vodka and Kahlúa topped with a dry-shaken Half & Half float — creamy, coffee-kissed and deeply satisfying.",
    garnish: "None",
    method: "Shake vodka and Kahlúa, double strain over regular ice. Dry shake Half & Half separately and float on top.",
    ingredients: [{ name: "Vodka", amount: "1 1/2oz" }, { name: "Kahlúa", amount: "1 1/2oz" }, { name: "Half & Half", amount: "float" }]
  },
  {
    name: "Original Sangria Mix®", category: "House Recipes", glass: "Batch", glassIcon: "🫙",
    image: "2026-cocktails/brasao-logo.png",
    desc: "Our house-made sangria base. Mix and refrigerate ahead of service.",
    garnish: "—",
    method: "Mix all ingredients together in a container. Refrigerate until service.",
    ingredients: [{ name: "Simple Syrup", amount: "2oz" }, { name: "Grenadine", amount: "2oz" }, { name: "Orange Juice", amount: "25oz" }, { name: "Cranberry Juice", amount: "25oz" }, { name: "Pineapple Juice", amount: "25oz" }, { name: "Peach Schnapps", amount: "16oz" }, { name: "House Brandy", amount: "16oz" }]
  },
  {
    name: "Pineapple Serrano – Cachaça Infusion®", category: "House Recipes", glass: "Batch", glassIcon: "🫙",
    image: "2026-cocktails/brasao-logo.png",
    desc: "Spicy-sweet cachaça infusion. Label every fresh batch with the date made.",
    garnish: "—",
    method: "Peel and cut pineapple into small cubes. Slice serranos into medium-thick slices (NO SEEDS). Combine with cachaça in container. Rest 1–2 weeks for best flavor. Label every batch with the date.",
    ingredients: [{ name: "Cachaça", amount: "7 bottles" }, { name: "Fresh Pineapple", amount: "1 whole" }, { name: "Serrano Peppers (no seeds)", amount: "7" }]
  },
  {
    name: "Raspberry – Gin Infusion®", category: "House Recipes", glass: "Batch", glassIcon: "🫙",
    image: "2026-cocktails/brasao-logo.png",
    desc: "Fruity house gin infusion. Label every fresh batch with the date made.",
    garnish: "—",
    method: "Wash and prepare raspberries. Add to container along with gin. Rest 1–2 weeks for best flavor. Label every batch with the date.",
    ingredients: [{ name: "House Gin", amount: "7 bottles" }, { name: "Fresh Raspberries", amount: "4 boxes" }]
  },
  {
    name: "Original Cucumber Mix®", category: "House Recipes", glass: "Batch", glassIcon: "🫙",
    image: "2026-cocktails/brasao-logo.png",
    desc: "House-made cucumber base used across several signature cocktails. Keep refrigerated.",
    garnish: "—",
    method: "Peel cucumbers and blend with water and sugar until smooth. Refrigerate until service.",
    ingredients: [{ name: "Fresh Cucumbers", amount: "12" }, { name: "Sugar", amount: "2 cups" }, { name: "Aqua Panna Water", amount: "2 bottles" }]
  },
  {
    name: "Strawberry – Vodka Infusion®", category: "House Recipes", glass: "Batch", glassIcon: "🫙",
    image: "2026-cocktails/brasao-logo.png",
    desc: "Sweet strawberry vodka infusion. Label every fresh batch with the date made.",
    garnish: "—",
    method: "Wash strawberries, remove the calyx (leafy green top), slice in half. Add to container with vodka. Rest 1–2 weeks for best flavor. Label every batch with the date.",
    ingredients: [{ name: "House Vodka", amount: "7 bottles" }, { name: "Fresh Strawberries", amount: "4 boxes" }]
  },
  {
    name: "Blueberry – Rum Infusion®", category: "House Recipes", glass: "Batch", glassIcon: "🫙",
    image: "2026-cocktails/brasao-logo.png",
    desc: "Rich blueberry rum infusion. Label every fresh batch with the date made.",
    garnish: "—",
    method: "Wash blueberries and slice in half. Add to container with rum. Rest 1–2 weeks for best flavor. Label every batch with the date.",
    ingredients: [{ name: "House Rum", amount: "7 bottles" }, { name: "Fresh Blueberries", amount: "4 boxes" }]
  },
  {
    name: "Michelada Mix", category: "House Recipes", glass: "Batch", glassIcon: "🫙",
    image: "2026-cocktails/brasao-logo.png",
    desc: "Our bold house-made michelada mix. Combine and keep refrigerated.",
    garnish: "—",
    method: "Mix all ingredients together. Refrigerate until service.",
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
