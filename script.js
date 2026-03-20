const BASE = 'https://brasaomenu.netlify.app';

const cocktails = [
  // ─── SEASONAL ───────────────────────────────────────────────────
  {
    name:"Cutie Gold Caipirinha", category:"Seasonal", glass:"Highball", glassIcon:"🥃",
    image:BASE+"/new_cocktails/mandarin-caipirinha-compressed.jpg",
    desc:"A sunny spin on Brazil's national cocktail. We use premium Gold Cachaça and fresh Cutie mandarins for a richer, sweeter citrus profile that's incredibly refreshing and bright.",
    garnish:"Mandarin wheel & cane sugar rim",
    method:"Muddle mandarin wedges and sugar in glass. Fill with crushed ice. Pour Gold Cachaça over the top, stir gently and garnish with mandarin wheel.",
    ingredients:[{name:"Gold Cachaça",amount:"2 oz"},{name:"Cutie Mandarin (muddled)",amount:"½ fruit"},{name:"Cane Sugar",amount:"2 tsp"},{name:"Crushed Ice",amount:"Full glass"}]
  },
  {
    name:"Ube Horchata", category:"Seasonal", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/new_cocktails/ube-horchata-compressed.jpg",
    desc:"Creamy, nutty, and visually stunning. This modern twist on traditional horchata features vibrant ube for an earthy sweetness, served over a sphere rock for a smooth, chilled finish.",
    garnish:"Cinnamon dust & ube powder",
    method:"Combine ube liqueur, horchata, vanilla vodka and cream over ice. Shake vigorously. Strain over a large sphere ice rock. Dust with cinnamon.",
    ingredients:[{name:"Vanilla Vodka",amount:"1.5 oz"},{name:"Ube Liqueur",amount:"1 oz"},{name:"House Horchata",amount:"2 oz"},{name:"Heavy Cream",amount:"½ oz"}]
  },
  {
    name:"Cucumber Matcharita", category:"Seasonal", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/new_cocktails/cucumber-matcharita-compressed.jpg",
    desc:"Crisp and energizing. This 'Macharita' pairs Corazon Tequila with fresh cucumber and a touch of matcha powder for an earthy, botanical edge that's perfect for springtime sipping.",
    garnish:"Cucumber ribbon & matcha salt rim",
    method:"Muddle cucumber in shaker. Add tequila, lime juice, agave and matcha. Shake vigorously with ice. Strain over rocks into salt-rimmed glass. Garnish with cucumber ribbon.",
    ingredients:[{name:"Corazon Tequila",amount:"2 oz"},{name:"Fresh Cucumber",amount:"3 slices"},{name:"Fresh Lime Juice",amount:"¾ oz"},{name:"Agave Nectar",amount:"½ oz"},{name:"Matcha Powder",amount:"½ tsp"}]
  },
  {
    name:"Tiki 43", category:"Seasonal", glass:"Tiki Mug", glassIcon:"🍹",
    image:BASE+"/new_cocktails/tiki-43-compressed.jpg",
    desc:"A bold, tropical blend of Licor 43 and white rum with a surprising coffee kick. Brightened by fresh citrus and served in our signature 43 mug, it's a sophisticated take on a beachside classic.",
    garnish:"Dehydrated orange wheel & cocktail umbrella",
    method:"Combine Licor 43, rum, espresso, pineapple juice and lime in shaker with ice. Shake well. Pour into signature Tiki mug over crushed ice. Garnish elaborately.",
    ingredients:[{name:"Licor 43",amount:"1.5 oz"},{name:"White Rum",amount:"1 oz"},{name:"Fresh Espresso",amount:"1 oz"},{name:"Pineapple Juice",amount:"1.5 oz"},{name:"Fresh Lime Juice",amount:"½ oz"}]
  },
  {
    name:"Hibiscus Margarita", category:"Seasonal", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/new_cocktails/hibiscus-margarita.jpg",
    desc:"A floral blend of hibiscus and fresh citrus, finished with a smooth, subtly spicy tequila note. Elegant, vibrant, unmistakably seasonal.",
    garnish:"Dried hibiscus flower & Tajín rim",
    method:"Rim glass with Tajín. Combine tequila, hibiscus syrup, lime juice and triple sec in shaker with ice. Shake and strain over large ice cube. Float hibiscus flower garnish.",
    ingredients:[{name:"Blanco Tequila",amount:"2 oz"},{name:"Hibiscus Syrup",amount:"¾ oz"},{name:"Fresh Lime Juice",amount:"¾ oz"},{name:"Triple Sec",amount:"½ oz"},{name:"Tajín (rim)",amount:"As needed"}]
  },
  // ─── WINTER / LIMITED ────────────────────────────────────────────
  {
    name:"Dark 'N' Stormy", category:"Limited", glass:"Highball", glassIcon:"🥤",
    image:BASE+"/new_cocktails/dark-n-stormy.jpg",
    desc:"Bold Brugal 1888 rum, zesty lime, and ginger spice — deep, warming, and perfectly cozy for winter nights.",
    garnish:"Lime wedge & candied ginger",
    method:"Fill highball with ice. Pour ginger beer until ¾ full. Float Brugal 1888 rum over back of spoon. Add lime juice. Do not stir — preserve the dark cloud effect.",
    ingredients:[{name:"Brugal 1888 Rum",amount:"2 oz"},{name:"Ginger Beer",amount:"4 oz"},{name:"Fresh Lime Juice",amount:"½ oz"},{name:"Angostura Bitters",amount:"1 dash"}]
  },
  {
    name:"Coquito", category:"Limited", glass:"Coupe", glassIcon:"🍷",
    image:BASE+"/new_cocktails/cocquito-website.jpg",
    desc:"Creamy coconut and cinnamon blended with Brugal 1888 rum — rich, silky, and holiday-perfect.",
    garnish:"Cinnamon stick & toasted coconut flakes",
    method:"Blend rum, coconut cream, condensed milk, cinnamon and vanilla until silky smooth. Serve over a large sphere ice in chilled coupe. Garnish with cinnamon and toasted coconut.",
    ingredients:[{name:"Brugal 1888 Rum",amount:"2 oz"},{name:"Coconut Cream",amount:"2 oz"},{name:"Sweetened Condensed Milk",amount:"1 oz"},{name:"Cinnamon",amount:"Pinch"},{name:"Vanilla Extract",amount:"¼ tsp"}]
  },
  {
    name:"Cranberry Mojito", category:"Limited", glass:"Highball", glassIcon:"🥤",
    image:BASE+"/new_cocktails/cranberry-mojito-website.jpg",
    desc:"Fresh mint, tart cranberry, and bright citrus — elevated with Brugal 1888 rum for a smooth, warm finish.",
    garnish:"Mint bouquet & fresh cranberries",
    method:"Gently muddle mint with sugar in glass. Add cranberry juice and lime juice. Fill with crushed ice. Pour Brugal 1888 rum. Top with soda water. Stir gently from bottom.",
    ingredients:[{name:"Brugal 1888 Rum",amount:"2 oz"},{name:"Cranberry Juice",amount:"1.5 oz"},{name:"Fresh Lime Juice",amount:"¾ oz"},{name:"Simple Syrup",amount:"½ oz"},{name:"Fresh Mint",amount:"8 leaves"},{name:"Soda Water",amount:"Top"}]
  },
  {
    name:"Autumn Pineapple", category:"Limited", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/new_cocktails/Autumn-pineapple-website.jpg",
    desc:"(Abacaxi de Outono) Grilled pineapple with cinnamon and sugar meets cachaça, citrus, honey, and a touch of bitters, served over ice with a smoky pineapple and cinnamon garnish.",
    garnish:"Grilled pineapple wedge dusted with cinnamon",
    method:"Grill pineapple wedge until caramelized. Muddle with brown sugar in glass. Add cachaça, honey syrup, lime juice and bitters over ice. Stir and garnish with grilled pineapple.",
    ingredients:[{name:"Cachaça",amount:"2 oz"},{name:"Grilled Pineapple",amount:"1 wedge"},{name:"Honey Syrup",amount:"½ oz"},{name:"Fresh Lime Juice",amount:"½ oz"},{name:"Cinnamon Stick",amount:"1"},{name:"Angostura Bitters",amount:"2 dashes"}]
  },
  // ─── BRASÃO SIGNATURES ──────────────────────────────────────────
  {
    name:"Caipirinha", category:"Signature", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/new_cocktails/caipirinha-website.jpg",
    desc:"Flavors: Lime, Strawberry, Pineapple, Wild Berries or Coconut (Caipicoco). Blended with sugar and premium Cachaça rum, shaken to perfection and served on the rocks.",
    garnish:"Fresh fruit matching chosen flavor",
    method:"Choose flavor. Muddle fruit and cane sugar in glass. Add premium Cachaça and crushed ice. Shake or stir vigorously. Garnish with chosen fruit.",
    ingredients:[{name:"Premium Cachaça Rum",amount:"2 oz"},{name:"Choice of Fruit (lime/strawberry/pineapple/berries/coconut)",amount:"½ cup"},{name:"Cane Sugar",amount:"2 tsp"},{name:"Crushed Ice",amount:"Full glass"}]
  },
  {
    name:"Caipiroska", category:"Signature", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/new_cocktails/caipiroska-website.jpg",
    desc:"Flavors: Lime, Strawberry, Pineapple or Wild Berries. Blended with sugar and premium Vodka, shaken to perfection and served on the rocks.",
    garnish:"Fresh fruit matching chosen flavor",
    method:"Choose flavor. Muddle fruit and cane sugar in glass. Add premium vodka and crushed ice. Shake or stir vigorously. Garnish with chosen fruit.",
    ingredients:[{name:"Premium Vodka",amount:"2 oz"},{name:"Choice of Fruit (lime/strawberry/pineapple/berries)",amount:"½ cup"},{name:"Cane Sugar",amount:"2 tsp"},{name:"Crushed Ice",amount:"Full glass"}]
  },
  {
    name:"Old Fashioned", category:"Signature", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/new_cocktails/old-fashioned-website.jpg",
    desc:"Indulge in the bold flavors of premium Bourbon or Rye whiskey, balanced with aromatic bitters and a hint of orange, stirred to perfection and served over a single large rock.",
    garnish:"Orange peel curl & brandied cherry",
    method:"Place sugar cube in glass. Saturate with bitters and a splash of water. Muddle until dissolved. Add large ice cube. Pour whiskey. Stir 30 seconds. Express orange peel over glass.",
    ingredients:[{name:"Bourbon or Rye Whiskey",amount:"2 oz"},{name:"Angostura Bitters",amount:"2 dashes"},{name:"Orange Bitters",amount:"1 dash"},{name:"Sugar Cube",amount:"1"},{name:"Water",amount:"Splash"}]
  },
  {
    name:"Watermelon Breeze", category:"Signature", glass:"Highball", glassIcon:"🥤",
    image:BASE+"/new_cocktails/watermelon-web-napkin.jpg",
    desc:"A refreshing blend of Veev Acai Liqueur, fresh watermelon, lime, and a hint of simple syrup, served ice-cold for the perfect balance of bold and crisp flavors.",
    garnish:"Watermelon wedge & mint sprig",
    method:"Blend fresh watermelon into juice. Combine Veev Acai, watermelon juice, lime and simple syrup in shaker with ice. Shake vigorously. Strain into ice-filled highball. Garnish.",
    ingredients:[{name:"Veev Acai Liqueur",amount:"1.5 oz"},{name:"Fresh Watermelon Juice",amount:"2.5 oz"},{name:"Fresh Lime Juice",amount:"¾ oz"},{name:"Simple Syrup",amount:"¼ oz"}]
  },
  {
    name:"Passion Fruit Margarita 🔥", category:"Signature", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/new_cocktails/passion-fruit-web-napkin.jpg",
    desc:"A bold mix of Ghost Tequila, passion fruit, and a kick of heat, perfectly balanced for a refreshing and fiery twist on a classic margarita.",
    garnish:"Tajín-chili rim & passion fruit half",
    method:"Rim glass with Tajín-chili blend. Combine Ghost Tequila, passion fruit purée, lime juice and agave in shaker with ice. Shake hard. Strain over rocks. Garnish with passion fruit.",
    ingredients:[{name:"Ghost Tequila (spicy)",amount:"2 oz"},{name:"Passion Fruit Purée",amount:"1.5 oz"},{name:"Fresh Lime Juice",amount:"¾ oz"},{name:"Agave Nectar",amount:"¼ oz"},{name:"Tajín-Chili (rim)",amount:"As needed"}]
  },
  {
    name:"Cucumber Ivy", category:"Signature", glass:"Coupe", glassIcon:"🍷",
    image:BASE+"/new_cocktails/cucumberivy-EMPTY-2.jpg",
    desc:"Gin, floral St. Germain, lime juice, simple syrup, muddled cucumbers and a pinch of mint expertly blended, shaken, double strained, and served in a stylish coupe glass.",
    garnish:"Thin cucumber ribbon curled inside glass",
    method:"Muddle cucumber slices and mint in shaker. Add gin, St. Germain, lime and simple syrup. Shake vigorously with ice. Double strain into chilled coupe. Curl cucumber ribbon inside.",
    ingredients:[{name:"London Dry Gin",amount:"1.5 oz"},{name:"St. Germain Elderflower",amount:"¾ oz"},{name:"Fresh Lime Juice",amount:"¾ oz"},{name:"Simple Syrup",amount:"¼ oz"},{name:"Cucumber (muddled)",amount:"3 slices"},{name:"Fresh Mint",amount:"3 leaves"}]
  },
  {
    name:"Oaxaca Spice", category:"Signature", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/new_cocktails/oaxacaspice-EMPTY-2.jpg",
    desc:"A perfectly blended mix of spicy tequila, agave nectar, crème de Cassis and lime juice. Shaken to perfection with bold Oaxacan character.",
    garnish:"Smoked salt rim & dried chili garnish",
    method:"Rim glass with smoked salt. Combine mezcal, tequila, crème de Cassis, agave and lime in shaker with ice. Shake vigorously. Strain over large ice cube. Garnish.",
    ingredients:[{name:"Mezcal",amount:"1 oz"},{name:"Spicy Tequila",amount:"1 oz"},{name:"Crème de Cassis",amount:"½ oz"},{name:"Agave Nectar",amount:"½ oz"},{name:"Fresh Lime Juice",amount:"¾ oz"}]
  },
  // ─── CLASSICS ──────────────────────────────────────────────────
  {
    name:"Moscow Mule", category:"Classics", glass:"Copper Mug", glassIcon:"🫖",
    image:BASE+"/new_cocktails/moscow-mule-EMPTY-2.jpg",
    desc:"A timeless combination of premium vodka, spicy ginger beer and fresh lime, served ice-cold in our signature copper mug for the perfect chill.",
    garnish:"Lime wheel & fresh mint bouquet",
    method:"Build in copper mug over crushed ice. Add vodka and lime juice. Top with ginger beer. Stir gently. Add mint bouquet and lime wheel garnish.",
    ingredients:[{name:"Vodka",amount:"2 oz"},{name:"Ginger Beer",amount:"4 oz"},{name:"Fresh Lime Juice",amount:"¾ oz"},{name:"Angostura Bitters",amount:"1 dash"}]
  },
  {
    name:"Mint Julep", category:"Classics", glass:"Julep Cup", glassIcon:"🥂",
    image:BASE+"/new_cocktails/mint-julep-EMPTY-2.jpg",
    desc:"Kentucky's finest — premium bourbon poured over crushed ice with fresh mint and sugar. Elegant, aromatic, and perfectly Southern.",
    garnish:"Large fresh mint bouquet",
    method:"Gently press mint leaves (do not muddle) with simple syrup in julep cup. Pack tightly with crushed ice. Pour bourbon slowly over ice. Add more crushed ice to crown. Garnish with large mint sprig.",
    ingredients:[{name:"Bourbon Whiskey",amount:"2.5 oz"},{name:"Simple Syrup",amount:"¾ oz"},{name:"Fresh Mint",amount:"10 leaves"}]
  },
  {
    name:"Bramble", category:"Classics", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/new_cocktails/bramble-website.jpg",
    desc:"A British classic by Dick Bradsell. Gin and lemon brightened with blackberry liqueur — fruity, tart, and impossibly elegant.",
    garnish:"Fresh blackberries & lemon slice",
    method:"Combine gin, lemon juice and simple syrup in shaker with ice. Shake well. Strain into ice-filled rocks glass. Drizzle crème de mûre over back of spoon. Garnish with blackberries.",
    ingredients:[{name:"London Dry Gin",amount:"2 oz"},{name:"Fresh Lemon Juice",amount:"¾ oz"},{name:"Simple Syrup",amount:"½ oz"},{name:"Crème de Mûre",amount:"½ oz"}]
  },
  {
    name:"French 75", category:"Classics", glass:"Champagne Flute", glassIcon:"🥂",
    image:BASE+"/new_cocktails/french-75-EMPTY-2.jpg",
    desc:"The most elegant of the classics. Gin, lemon, sugar — topped with Champagne for a sparkling finish that packs a punch.",
    garnish:"Lemon twist, elegantly coiled",
    method:"Combine gin, lemon juice and simple syrup in shaker with ice. Shake well. Strain into chilled flute. Top with cold Champagne. Garnish with lemon twist.",
    ingredients:[{name:"London Dry Gin",amount:"1.5 oz"},{name:"Fresh Lemon Juice",amount:"½ oz"},{name:"Simple Syrup",amount:"½ oz"},{name:"Champagne (top)",amount:"3 oz"}]
  },
  {
    name:"Cuban Sazerac", category:"Classics", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/new_cocktails/cuban-sazerac-EMPTY-2.jpg",
    desc:"New Orleans' oldest cocktail reimagined with aged rum and a hint of tropical warmth. Absinthe-rinsed, bitters-kissed, pure sophistication.",
    garnish:"Lemon peel, expressed over glass",
    method:"Rinse chilled rocks glass with absinthe and discard. Stir aged rum, sugar, Peychaud's and Angostura bitters with ice. Strain into prepared glass. Express lemon peel over glass.",
    ingredients:[{name:"Aged Cuban-Style Rum",amount:"2 oz"},{name:"Peychaud's Bitters",amount:"3 dashes"},{name:"Angostura Bitters",amount:"1 dash"},{name:"Simple Syrup",amount:"¼ oz"},{name:"Absinthe (rinse)",amount:"¼ oz"}]
  },
  {
    name:"Aviation", category:"Classics", glass:"Coupe", glassIcon:"🍷",
    image:BASE+"/new_cocktails/aviation-website.jpg",
    desc:"A pre-Prohibition classic that disappeared and came back. Gin, lemon, maraschino liqueur and crème de violette create its legendary sky-blue hue.",
    garnish:"Luxardo cherry on a pick",
    method:"Combine all ingredients in shaker with ice. Shake vigorously. Double strain into chilled coupe. Add Luxardo cherry pick.",
    ingredients:[{name:"London Dry Gin",amount:"1.5 oz"},{name:"Fresh Lemon Juice",amount:"¾ oz"},{name:"Maraschino Liqueur",amount:"½ oz"},{name:"Crème de Violette",amount:"¼ oz"}]
  },
  {
    name:"Last Word", category:"Classics", glass:"Coupe", glassIcon:"🍷",
    image:BASE+"/new_cocktails/last-word-EMPTY-2.jpg",
    desc:"The Prohibition-era equal-parts classic. Gin, Green Chartreuse, maraschino and lime in perfect harmony — bold, herbal and unforgettable.",
    garnish:"Lime wheel on the rim",
    method:"Combine all ingredients in equal parts in shaker with ice. Shake vigorously. Double strain into chilled coupe. Garnish with lime wheel.",
    ingredients:[{name:"London Dry Gin",amount:"¾ oz"},{name:"Green Chartreuse",amount:"¾ oz"},{name:"Maraschino Liqueur",amount:"¾ oz"},{name:"Fresh Lime Juice",amount:"¾ oz"}]
  },
  {
    name:"Smoked Old Fashioned", category:"Classics", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/new_cocktails/smokedoldfashioned-EMPTY-2.jpg",
    desc:"Our elevated take on the timeless Old Fashioned — table-smoked with cherry wood for an intoxicating aroma and deep, smoky complexity.",
    garnish:"Orange peel & cherry, served under smoke cloche",
    method:"Prepare Old Fashioned in glass. Before serving, smoke with cherry wood chips under cloche. Unveil tableside for dramatic effect. Garnish with orange peel and cherry.",
    ingredients:[{name:"Bourbon Whiskey",amount:"2 oz"},{name:"Angostura Bitters",amount:"2 dashes"},{name:"Orange Bitters",amount:"1 dash"},{name:"Sugar Cube",amount:"1"},{name:"Cherry Wood Smoke",amount:"Tableside"}]
  },
  {
    name:"Vieux Carré", category:"Classics", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/new_cocktails/vieuxcarre-EMPTY-2.jpg",
    desc:"The New Orleans cocktail from the Hotel Monteleone. Rye, Cognac, sweet vermouth, Bénédictine and bitters — complex, warming, magnificent.",
    garnish:"Lemon peel & cherry",
    method:"Combine all ingredients in mixing glass with ice. Stir 40 seconds until well chilled. Strain over large ice cube. Express lemon peel and add cherry.",
    ingredients:[{name:"Rye Whiskey",amount:"¾ oz"},{name:"Cognac",amount:"¾ oz"},{name:"Sweet Vermouth",amount:"¾ oz"},{name:"Bénédictine",amount:"1 tsp"},{name:"Peychaud's Bitters",amount:"1 dash"},{name:"Angostura Bitters",amount:"1 dash"}]
  },
  {
    name:"Negroni", category:"Classics", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/new_cocktails/negroni-EMPTY-2.jpg",
    desc:"The aperitivo icon. Equal parts gin, Campari and sweet vermouth — bitter, sweet and impossibly balanced. Stirred, never shaken.",
    garnish:"Orange peel, expressed and placed",
    method:"Combine all ingredients in mixing glass with ice. Stir 30 seconds. Strain over large ice cube in rocks glass. Express orange peel over the drink.",
    ingredients:[{name:"Gin",amount:"1 oz"},{name:"Campari",amount:"1 oz"},{name:"Sweet Vermouth",amount:"1 oz"}]
  },
  {
    name:"Bellini Sunrise", category:"Classics", glass:"Champagne Flute", glassIcon:"🥂",
    image:BASE+"/new_cocktails/bellini-website.jpg",
    desc:"Venice's legendary brunch cocktail elevated with a sunrise effect. Fresh peach purée and Prosecco with a grenadine sunrise gradient.",
    garnish:"Fresh peach slice on rim",
    method:"Pour grenadine into flute. Add fresh white peach purée. Top gently with cold Prosecco. Do not stir — allow sunrise gradient to form naturally. Garnish with peach slice.",
    ingredients:[{name:"Fresh White Peach Purée",amount:"1.5 oz"},{name:"Prosecco",amount:"3.5 oz"},{name:"Grenadine",amount:"¼ oz (sunrise)"}]
  },
  {
    name:"Peach 75", category:"Classics", glass:"Champagne Flute", glassIcon:"🥂",
    image:BASE+"/new_cocktails/peach75-EMPTY-2.jpg",
    desc:"A peachy riff on the legendary French 75. Gin and fresh peach with a touch of lemon and Champagne for a sparkling, fruity celebration.",
    garnish:"Peach slice & lemon twist",
    method:"Combine gin, peach schnapps, lemon juice and simple syrup in shaker with ice. Shake well. Strain into chilled flute. Top with Champagne. Garnish elegantly.",
    ingredients:[{name:"London Dry Gin",amount:"1 oz"},{name:"Peach Schnapps",amount:"½ oz"},{name:"Fresh Lemon Juice",amount:"½ oz"},{name:"Simple Syrup",amount:"¼ oz"},{name:"Champagne (top)",amount:"3 oz"}]
  },
  {
    name:"Mojito", category:"Classics", glass:"Highball", glassIcon:"🥤",
    image:BASE+"/new_cocktails/mojito-EMPTY-2.jpg",
    desc:"Cuba's most beloved export. Fresh mint, lime, sugar, white rum and soda — crisp, refreshing, and endlessly refreshing.",
    garnish:"Large fresh mint bouquet & lime wheel",
    method:"Gently muddle mint with sugar — do not tear. Add lime juice. Fill with crushed ice. Pour white rum. Top with soda water. Stir gently from bottom to blend.",
    ingredients:[{name:"White Rum",amount:"2 oz"},{name:"Fresh Lime Juice",amount:"¾ oz"},{name:"Simple Syrup",amount:"½ oz"},{name:"Fresh Mint",amount:"10 leaves"},{name:"Soda Water",amount:"Top"},{name:"Crushed Ice",amount:"Full glass"}]
  },
  {
    name:"Grapefruit Martini", category:"Classics", glass:"Martini Glass", glassIcon:"🍸",
    image:BASE+"/new_cocktails/grapefruit-martini-EMPTY-2.jpg",
    desc:"Citrus-forward and elegantly sharp. Premium vodka, fresh ruby grapefruit and a touch of honey — served ice-cold in a martini glass.",
    garnish:"Grapefruit twist & sugar rim",
    method:"Combine vodka, fresh grapefruit juice, honey syrup and triple sec in shaker with ice. Shake vigorously. Double strain into chilled martini glass. Garnish with grapefruit twist.",
    ingredients:[{name:"Vodka",amount:"2 oz"},{name:"Fresh Ruby Grapefruit Juice",amount:"1.5 oz"},{name:"Honey Syrup",amount:"½ oz"},{name:"Triple Sec",amount:"½ oz"}]
  },
  {
    name:"Skinny Margarita", category:"Classics", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/new_cocktails/skinny-margarita-EMPTY-2.jpg",
    desc:"All the flavor, none of the guilt. Premium tequila, fresh citrus and agave nectar — clean, bright and perfectly balanced.",
    garnish:"Salt or Tajín rim & lime wedge",
    method:"Rim glass with salt or Tajín. Combine tequila, fresh lime juice, fresh orange juice and agave in shaker with ice. Shake vigorously. Strain over fresh ice. Garnish with lime.",
    ingredients:[{name:"Blanco Tequila",amount:"2 oz"},{name:"Fresh Lime Juice",amount:"1 oz"},{name:"Fresh Orange Juice",amount:"½ oz"},{name:"Agave Nectar",amount:"½ oz"}]
  },
  {
    name:"Sangria", category:"Classics", glass:"Wine Glass", glassIcon:"🍷",
    image:BASE+"/new_cocktails/red-sangria-EMPTY-2.jpg",
    desc:"Spain's legendary house punch — red wine, brandy, fresh fruit and a touch of citrus. Served over ice with a generous fruit garnish.",
    garnish:"Seasonal fruit medley (orange, apple, berries)",
    method:"Combine red wine, brandy, triple sec, orange juice and simple syrup in pitcher. Add sliced fruit. Refrigerate minimum 2 hours. Serve over ice, spooning fruit into each glass.",
    ingredients:[{name:"Dry Red Wine",amount:"3 oz"},{name:"Brandy",amount:"1 oz"},{name:"Triple Sec",amount:"½ oz"},{name:"Fresh Orange Juice",amount:"1 oz"},{name:"Simple Syrup",amount:"¼ oz"},{name:"Seasonal Fruit",amount:"Generous"}]
  },
  {
    name:"Espresso Martini", category:"Classics", glass:"Martini Glass", glassIcon:"🍸",
    image:BASE+"/new_cocktails/Espresso-Martini-EMPTY-2.jpg",
    desc:"The ultimate after-dinner pick-me-up. Vodka, Kahlúa and a fresh espresso shot shaken hard for that iconic crema foam.",
    garnish:"3 espresso beans floated on foam",
    method:"Pull fresh espresso. Let cool briefly. Combine vodka, Kahlúa, espresso and simple syrup in shaker with ice. Shake extremely vigorously 15 seconds. Double strain into chilled martini glass to achieve foam.",
    ingredients:[{name:"Vodka",amount:"1.5 oz"},{name:"Kahlúa",amount:"1 oz"},{name:"Fresh Espresso Shot",amount:"1 oz"},{name:"Simple Syrup",amount:"¼ oz"}]
  },
  {
    name:"Pink Lady", category:"Classics", glass:"Coupe", glassIcon:"🍷",
    image:BASE+"/new_cocktails/pinklady-EMPTY-2.jpg",
    desc:"A Prohibition-era gem making its comeback. Gin, applejack, grenadine, lemon and egg white create a silky, rosy, delicate cocktail.",
    garnish:"Rose petal & dash of grenadine on foam",
    method:"Dry shake all ingredients 15 seconds. Add ice and shake again. Double strain into chilled coupe. Drops of grenadine on foam. Add rose petal.",
    ingredients:[{name:"Gin",amount:"1.5 oz"},{name:"Applejack Brandy",amount:"½ oz"},{name:"Fresh Lemon Juice",amount:"¾ oz"},{name:"Grenadine",amount:"¼ oz"},{name:"Egg White",amount:"1 white"}]
  },
  {
    name:"Basil Up", category:"Classics", glass:"Coupe", glassIcon:"🍷",
    image:BASE+"/new_cocktails/basil-up-website.jpg",
    desc:"A fragrant, garden-fresh take on the spirit-forward stirred cocktail. Gin, fresh basil and lemon build a beautifully herbal, aromatic drink.",
    garnish:"Fresh basil leaf & lemon twist",
    method:"Muddle fresh basil with simple syrup. Add gin and lemon juice over ice. Shake vigorously. Double strain into chilled coupe. Garnish with basil leaf and lemon twist.",
    ingredients:[{name:"London Dry Gin",amount:"2 oz"},{name:"Fresh Basil",amount:"6 leaves"},{name:"Fresh Lemon Juice",amount:"¾ oz"},{name:"Simple Syrup",amount:"½ oz"}]
  },
  {
    name:"Love in Summer", category:"Classics", glass:"Highball", glassIcon:"🥤",
    image:BASE+"/new_cocktails/loveinsummer-EMPTY-2.jpg",
    desc:"A summer romance in a glass. Vodka, St. Germain, fresh strawberry, lemon and prosecco — light, floral and utterly romantic.",
    garnish:"Strawberry fan & edible flower",
    method:"Muddle fresh strawberry with simple syrup. Add vodka, St. Germain and lemon juice in shaker with ice. Shake well. Strain into ice-filled highball. Top with Prosecco.",
    ingredients:[{name:"Vodka",amount:"1.5 oz"},{name:"St. Germain Elderflower",amount:"¾ oz"},{name:"Fresh Strawberry",amount:"2 berries"},{name:"Fresh Lemon Juice",amount:"½ oz"},{name:"Prosecco (top)",amount:"2 oz"}]
  },
  {
    name:"Summer Mule", category:"Classics", glass:"Copper Mug", glassIcon:"🫖",
    image:BASE+"/new_cocktails/summermule-EMPTY-2.jpg",
    desc:"A seasonal twist on the classic Moscow Mule — brightened with tropical fruit and fresh herbs for the perfect summer sip.",
    garnish:"Fresh mint, lime wheel & tropical fruit",
    method:"Build in copper mug over crushed ice. Combine vodka, mango juice and lime juice. Top with ginger beer. Stir briefly. Add lavish mint and fruit garnish.",
    ingredients:[{name:"Vodka",amount:"2 oz"},{name:"Mango Juice",amount:"1 oz"},{name:"Fresh Lime Juice",amount:"¾ oz"},{name:"Ginger Beer",amount:"3 oz"}]
  },
  {
    name:"Smoked Margarita", category:"Classics", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/new_cocktails/smokedmargarita-EMPTY-2.jpg",
    desc:"A smoked Tajín rim and a float of mezcal transform the classic margarita into something truly dramatic and delicious.",
    garnish:"Smoked Tajín rim & lime wheel",
    method:"Rim glass with smoked Tajín. Combine tequila, mezcal, lime juice and agave in shaker with ice. Shake well. Strain over rocks. Float small amount of mezcal on top. Garnish.",
    ingredients:[{name:"Blanco Tequila",amount:"1.5 oz"},{name:"Mezcal (float)",amount:"½ oz"},{name:"Fresh Lime Juice",amount:"1 oz"},{name:"Agave Nectar",amount:"½ oz"},{name:"Smoked Tajín (rim)",amount:"As needed"}]
  },
  {
    name:"Añejo Old Fashioned", category:"Classics", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/new_cocktails/anejooldfashioned-EMPTY-2.jpg",
    desc:"The Old Fashioned reconceived with premium Añejo tequila. Agave nectar and mole bitters bring deep Mexican soul to this American icon.",
    garnish:"Orange peel & cinnamon stick",
    method:"Combine Añejo tequila, agave nectar and mole bitters in mixing glass with ice. Stir 30 seconds. Strain over large ice cube. Express orange peel over glass. Add cinnamon stick.",
    ingredients:[{name:"Añejo Tequila",amount:"2 oz"},{name:"Agave Nectar",amount:"¼ oz"},{name:"Mole Bitters",amount:"2 dashes"},{name:"Orange Bitters",amount:"1 dash"}]
  },
  {
    name:"Pineapple Basil", category:"Classics", glass:"Highball", glassIcon:"🥤",
    image:BASE+"/new_cocktails/pineapplebasil-EMPTY-2.jpg",
    desc:"A tropical herbaceous fusion — fresh pineapple juice and muddled basil with white rum create a cocktail that's bright, aromatic and irresistible.",
    garnish:"Fresh basil bouquet & pineapple wedge",
    method:"Muddle basil leaves with simple syrup. Add rum, pineapple juice and lime juice in shaker with ice. Shake well. Strain over ice in highball. Top with soda. Garnish generously.",
    ingredients:[{name:"White Rum",amount:"2 oz"},{name:"Fresh Pineapple Juice",amount:"2 oz"},{name:"Fresh Basil",amount:"6 leaves"},{name:"Fresh Lime Juice",amount:"½ oz"},{name:"Simple Syrup",amount:"¼ oz"}]
  },
  {
    name:"Rum Punch", category:"Classics", glass:"Highball", glassIcon:"🥤",
    image:BASE+"/new_cocktails/rumpunch-EMPTY-2.jpg",
    desc:"Caribbean vibes in every sip. Dark and white rum with tropical juices, grenadine and a dash of bitters — festive, fruity and fun.",
    garnish:"Pineapple wedge, orange slice & cherry flag",
    method:"Combine rums, juices, grenadine and bitters in shaker with ice. Shake well. Pour over ice in highball. Garnish with tropical fruit flag.",
    ingredients:[{name:"Dark Rum",amount:"1 oz"},{name:"White Rum",amount:"1 oz"},{name:"Pineapple Juice",amount:"1.5 oz"},{name:"Orange Juice",amount:"1 oz"},{name:"Fresh Lime Juice",amount:"½ oz"},{name:"Grenadine",amount:"¼ oz"}]
  },
  {
    name:"Raspberry Mojito", category:"Classics", glass:"Highball", glassIcon:"🥤",
    image:BASE+"/new_cocktails/raspberrymojito-EMPTY-2.jpg",
    desc:"The beloved mojito elevated with fresh raspberries for a burst of berry sweetness alongside the classic mint and lime.",
    garnish:"Fresh raspberry skewer & mint bouquet",
    method:"Muddle raspberries and mint with sugar in glass. Add lime juice. Fill with crushed ice. Pour white rum. Top with soda. Stir gently from bottom. Garnish with berries and mint.",
    ingredients:[{name:"White Rum",amount:"2 oz"},{name:"Fresh Raspberries",amount:"6 berries"},{name:"Fresh Lime Juice",amount:"¾ oz"},{name:"Simple Syrup",amount:"½ oz"},{name:"Fresh Mint",amount:"8 leaves"},{name:"Soda Water",amount:"Top"}]
  },
  {
    name:"Peartini", category:"Classics", glass:"Martini Glass", glassIcon:"🍸",
    image:BASE+"/new_cocktails/peartini-EMPTY-2.jpg",
    desc:"Autumn elegance in a martini glass. Pear vodka, St. Germain, fresh lemon and ginger create a cocktail that's sophisticated and silky.",
    garnish:"Thin pear slice on the rim",
    method:"Combine pear vodka, St. Germain, pear juice, lemon juice and ginger syrup in shaker with ice. Shake vigorously. Double strain into chilled martini glass. Garnish.",
    ingredients:[{name:"Pear Vodka",amount:"1.5 oz"},{name:"St. Germain Elderflower",amount:"¾ oz"},{name:"Pear Juice",amount:"1 oz"},{name:"Fresh Lemon Juice",amount:"½ oz"},{name:"Ginger Syrup",amount:"¼ oz"}]
  },
  // ─── SIGNATURE ORIGINALS ─────────────────────────────────────────
  {
    name:"Mexican Candy", category:"Originals", glass:"Shot / Rocks", glassIcon:"🥃",
    image:BASE+"/img/COCKTAILS_EDITED/mexicancandy.jpg",
    desc:"Inspired by the beloved Mexican street candy. Watermelon, spice and everything nice — a playful, vibrant signature creation.",
    garnish:"Tajín-chili rim & watermelon candy",
    method:"Rim glass with Tajín. Combine watermelon vodka, chamoy, lime juice and hot sauce in shaker with ice. Shake hard. Strain over rocks. Add Tajín and candy garnish.",
    ingredients:[{name:"Watermelon Vodka",amount:"1.5 oz"},{name:"Chamoy Sauce",amount:"½ oz"},{name:"Fresh Lime Juice",amount:"¾ oz"},{name:"Hot Sauce",amount:"Dash"},{name:"Tajín (rim)",amount:"As needed"}]
  },
  {
    name:"Red & Wild", category:"Originals", glass:"Coupe", glassIcon:"🍷",
    image:BASE+"/img/COCKTAILS_EDITED/rednwild2.jpeg",
    desc:"Bold, wild berry flavors meet premium spirits in this striking crimson original. Dark, lush and untamed.",
    garnish:"Fresh wild berry skewer",
    method:"Muddle mixed wild berries with simple syrup. Add vodka, crème de mûre and lemon juice. Shake with ice. Double strain into chilled coupe. Garnish with berry skewer.",
    ingredients:[{name:"Vodka",amount:"1.5 oz"},{name:"Crème de Mûre",amount:"¾ oz"},{name:"Mixed Wild Berries",amount:"6 berries"},{name:"Fresh Lemon Juice",amount:"¾ oz"},{name:"Simple Syrup",amount:"¼ oz"}]
  },
  {
    name:"Magenta Blossom", category:"Originals", glass:"Coupe", glassIcon:"🍷",
    image:BASE+"/img/COCKTAILS_EDITED/magentablossom.jpg",
    desc:"A floral masterpiece in vivid magenta. Butterfly pea flower, hibiscus and floral spirits create a color-changing, aromatic showstopper.",
    garnish:"Edible flower & butterfly pea flower",
    method:"Steep butterfly pea flowers in hot water to create blue tea. Combine vodka, hibiscus syrup and lemon juice. Shake with ice. Strain into coupe. Pour pea flower tea — watch it turn magenta. Garnish.",
    ingredients:[{name:"Vodka",amount:"1.5 oz"},{name:"Hibiscus Syrup",amount:"¾ oz"},{name:"Fresh Lemon Juice",amount:"¾ oz"},{name:"Butterfly Pea Tea (color changer)",amount:"1 oz"}]
  },
  {
    name:"Blue Rush", category:"Originals", glass:"Highball", glassIcon:"🥤",
    image:BASE+"/new_cocktails/blue-rush-website.jpg",
    desc:"A vivid blue wave of tropical flavors — blue curaçao, coconut and pineapple create a stunning, refreshing signature cocktail.",
    garnish:"Pineapple wedge & cocktail umbrella",
    method:"Combine white rum, blue curaçao, coconut rum, pineapple juice and lime juice in shaker with ice. Shake well. Pour over ice in highball. Garnish tropically.",
    ingredients:[{name:"White Rum",amount:"1 oz"},{name:"Blue Curaçao",amount:"½ oz"},{name:"Coconut Rum",amount:"½ oz"},{name:"Pineapple Juice",amount:"2 oz"},{name:"Fresh Lime Juice",amount:"½ oz"}]
  },
  {
    name:"Kiwi Crush", category:"Originals", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/img/COCKTAILS_EDITED/kiwikrush.jpg",
    desc:"Fresh kiwi crushed with premium vodka, mint and lime — a vibrant green original that's as beautiful as it is refreshing.",
    garnish:"Kiwi slice & fresh mint",
    method:"Muddle kiwi slices with simple syrup. Add vodka, lime juice and mint. Shake vigorously with ice. Strain over crushed ice. Garnish with kiwi wheel and mint.",
    ingredients:[{name:"Vodka",amount:"2 oz"},{name:"Fresh Kiwi",amount:"2 slices"},{name:"Fresh Lime Juice",amount:"¾ oz"},{name:"Simple Syrup",amount:"½ oz"},{name:"Fresh Mint",amount:"5 leaves"}]
  },
  {
    name:"Cucumber Martini", category:"Originals", glass:"Martini Glass", glassIcon:"🍸",
    image:BASE+"/img/COCKTAILS_EDITED/cucumbermartini.jpg",
    desc:"Clean, crisp and cool. Premium vodka, fresh cucumber and a touch of elderflower create the most refreshing martini you'll ever have.",
    garnish:"Long cucumber ribbon inside glass",
    method:"Muddle cucumber with simple syrup. Add vodka, elderflower liqueur and lime juice. Shake vigorously with ice. Double strain into chilled martini glass. Curl cucumber inside.",
    ingredients:[{name:"Vodka",amount:"2 oz"},{name:"Fresh Cucumber",amount:"4 slices"},{name:"Elderflower Liqueur",amount:"½ oz"},{name:"Fresh Lime Juice",amount:"½ oz"},{name:"Simple Syrup",amount:"¼ oz"}]
  },
  {
    name:"Raspberry Dreaming", category:"Originals", glass:"Coupe", glassIcon:"🍷",
    image:BASE+"/img/COCKTAILS_EDITED/floatinginspace2.jpg",
    desc:"A dreamy, cloud-like creation with fresh raspberry, vanilla and champagne foam. Close your eyes and float away.",
    garnish:"Raspberry and edible silver dust",
    method:"Combine vodka, raspberry purée, vanilla syrup and lemon juice in shaker with ice. Shake well. Strain into coupe. Top with prosecco foam. Garnish with raspberry and silver dust.",
    ingredients:[{name:"Vodka",amount:"1.5 oz"},{name:"Fresh Raspberry Purée",amount:"1 oz"},{name:"Vanilla Syrup",amount:"½ oz"},{name:"Fresh Lemon Juice",amount:"½ oz"},{name:"Prosecco Foam",amount:"Top"}]
  },
  {
    name:"Mexican Brazilian", category:"Originals", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/img/COCKTAILS_EDITED/mexicanbrazilian2.jpg",
    desc:"A fusion of two great cocktail cultures — mezcal and cachaça unite with fresh citrus for a bold, smoky, tropical original.",
    garnish:"Lime wheel & smoked salt rim",
    method:"Rim glass with smoked salt. Combine mezcal, cachaça, lime juice, agave and orange juice in shaker with ice. Shake vigorously. Strain over rocks. Garnish.",
    ingredients:[{name:"Mezcal",amount:"1 oz"},{name:"Cachaça",amount:"1 oz"},{name:"Fresh Lime Juice",amount:"¾ oz"},{name:"Fresh Orange Juice",amount:"½ oz"},{name:"Agave Nectar",amount:"¼ oz"}]
  },
  {
    name:"Floating in Space", category:"Originals", glass:"Coupe", glassIcon:"🍷",
    image:BASE+"/img/COCKTAILS_EDITED/floatinginspace.jpg",
    desc:"A galaxy of flavor — butterfly pea vodka, lychee and coconut create an otherworldly drink that shifts color and defies gravity.",
    garnish:"Edible stars & lychee on pick",
    method:"Combine butterfly pea vodka, lychee juice, coconut water and lime juice in shaker with ice. Shake well. Strain into coupe. Add lime to shift color. Garnish with stars and lychee.",
    ingredients:[{name:"Butterfly Pea Vodka",amount:"1.5 oz"},{name:"Lychee Juice",amount:"1.5 oz"},{name:"Coconut Water",amount:"½ oz"},{name:"Fresh Lime Juice",amount:"½ oz"}]
  },
  {
    name:"The Green Goblin", category:"Originals", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/img/COCKTAILS_EDITED/greengoblin.jpg",
    desc:"Mischievously good. Midori, cucumber, jalapeño and lime create a vivid green cocktail with a sneaky kick that'll get you every time.",
    garnish:"Jalapeño slice & cucumber wheel",
    method:"Muddle cucumber and jalapeño with simple syrup. Add Midori, vodka and lime juice. Shake vigorously with ice. Strain over rocks. Garnish with jalapeño and cucumber.",
    ingredients:[{name:"Midori Melon Liqueur",amount:"1 oz"},{name:"Vodka",amount:"1 oz"},{name:"Fresh Cucumber",amount:"3 slices"},{name:"Jalapeño",amount:"2 slices"},{name:"Fresh Lime Juice",amount:"¾ oz"},{name:"Simple Syrup",amount:"¼ oz"}]
  },
  {
    name:"Spicy Pisco", category:"Originals", glass:"Coupe", glassIcon:"🍷",
    image:BASE+"/img/COCKTAILS_EDITED/spicypisco2.jpg",
    desc:"Peru meets heat. Premium pisco, fresh citrus, ginger and chili in a contemporary take that honors South American spirits with bold flair.",
    garnish:"Candied ginger & chili salt rim",
    method:"Rim coupe with chili salt. Combine pisco, lime juice, ginger syrup, egg white and chili tincture. Dry shake 15 seconds. Add ice and shake again. Double strain into coupe.",
    ingredients:[{name:"Pisco",amount:"2 oz"},{name:"Fresh Lime Juice",amount:"¾ oz"},{name:"Ginger Syrup",amount:"½ oz"},{name:"Egg White",amount:"1 white"},{name:"Chili Tincture",amount:"2 dashes"}]
  },
  {
    name:"Carajillo", category:"Originals", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/img/COCKTAILS_EDITED/carajillo7.jpg",
    desc:"Spain's beloved coffee cocktail — Licor 43 and hot espresso served over a large ice sphere for a stunning hot-meets-cold experience.",
    garnish:"3 coffee beans & orange zest",
    method:"Pull a fresh hot espresso shot. Pour Licor 43 into rocks glass over large sphere ice. Slowly pour hot espresso down the side of the glass to create layered effect. Garnish.",
    ingredients:[{name:"Licor 43",amount:"1.5 oz"},{name:"Fresh Hot Espresso",amount:"1 oz"},{name:"Large Ice Sphere",amount:"1"}]
  },
  {
    name:"Life Changer", category:"Originals", glass:"Highball", glassIcon:"🥤",
    image:BASE+"/img/COCKTAILS_EDITED/lifechanger2.jpg",
    desc:"One sip and you'll understand the name. A bold, layered original that blends tropical and smoky notes for an unforgettable experience.",
    garnish:"Dehydrated citrus & aromatic herbs",
    method:"Build over ice — mezcal, passion fruit, mango, lime and agave. Top with ginger beer. Stir gently. Garnish with dehydrated citrus and fresh herbs.",
    ingredients:[{name:"Mezcal",amount:"1.5 oz"},{name:"Passion Fruit Purée",amount:"1 oz"},{name:"Mango Juice",amount:"1 oz"},{name:"Fresh Lime Juice",amount:"½ oz"},{name:"Agave Nectar",amount:"¼ oz"},{name:"Ginger Beer (top)",amount:"2 oz"}]
  },
  {
    name:"Dominicana", category:"Originals", glass:"Rocks Glass", glassIcon:"🥃",
    image:BASE+"/new_cocktails/dominicana-website.jpg",
    desc:"A tribute to the Dominican Republic's finest — premium Brugal rum with tropical fruit, passion fruit and Caribbean spices.",
    garnish:"Dehydrated pineapple & cinnamon",
    method:"Combine Brugal rum, passion fruit, pineapple juice, lime juice and allspice dram in shaker with ice. Shake well. Strain over large ice cube. Dust with cinnamon. Garnish.",
    ingredients:[{name:"Brugal 1888 Rum",amount:"2 oz"},{name:"Passion Fruit Purée",amount:"¾ oz"},{name:"Pineapple Juice",amount:"1 oz"},{name:"Fresh Lime Juice",amount:"½ oz"},{name:"Allspice Dram",amount:"¼ oz"}]
  },
  {
    name:"Cocoa Cloud", category:"Originals", glass:"Coupe", glassIcon:"🍷",
    image:BASE+"/new_cocktails/cocoa-cloud-website.jpg",
    desc:"A dessert cocktail as light as a cloud. Dark chocolate vodka, cream and espresso mousse float above deep cocoa flavors.",
    garnish:"Cocoa powder dusting & chocolate curl",
    method:"Combine chocolate vodka, dark crème de cacao, cream and espresso in shaker with ice. Shake vigorously to create texture. Strain into coupe. Top with cream foam. Dust with cocoa.",
    ingredients:[{name:"Chocolate Vodka",amount:"1.5 oz"},{name:"Dark Crème de Cacao",amount:"¾ oz"},{name:"Heavy Cream",amount:"¾ oz"},{name:"Fresh Espresso",amount:"½ oz"}]
  },
  {
    name:"Espress Ya'self", category:"Originals", glass:"Martini Glass", glassIcon:"🍸",
    image:BASE+"/img/COCKTAILS_EDITED/express%20ya'self.jpeg",
    desc:"Bold, confident, unapologetic. This house espresso martini with a twist lets you express exactly who you are — one sip at a time.",
    garnish:"3 espresso beans & gold luster dust",
    method:"Pull fresh espresso. Combine vodka, Kahlúa, Baileys, espresso and vanilla in shaker with ice. Shake HARD for 20 seconds. Double strain into chilled martini glass for maximum foam. Garnish with gold.",
    ingredients:[{name:"Vodka",amount:"1.5 oz"},{name:"Kahlúa",amount:"½ oz"},{name:"Baileys Irish Cream",amount:"½ oz"},{name:"Fresh Espresso",amount:"1 oz"},{name:"Vanilla Syrup",amount:"¼ oz"}]
  },
  {
    name:"Key Lime Pie Martini", category:"Originals", glass:"Martini Glass", glassIcon:"🍸",
    image:BASE+"/img/COCKTAILS_EDITED/keylimepie.jpg",
    desc:"Dessert in a glass. Vanilla vodka, key lime juice and cream cheese wash — sweet, tangy and utterly decadent.",
    garnish:"Graham cracker crumb rim & lime zest",
    method:"Rim martini glass with graham cracker crumbs and sugar. Combine vanilla vodka, key lime juice, cream liqueur and simple syrup in shaker with ice. Shake vigorously. Double strain into prepared glass.",
    ingredients:[{name:"Vanilla Vodka",amount:"1.5 oz"},{name:"Key Lime Juice",amount:"¾ oz"},{name:"Cream Liqueur (Baileys)",amount:"¾ oz"},{name:"Simple Syrup",amount:"¼ oz"},{name:"Graham Cracker Crumbs (rim)",amount:"As needed"}]
  }
];

// Sort alphabetically
cocktails.sort((a,b) => a.name.localeCompare(b.name));

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
          ${c.ingredients.slice(0,4).map(ing => `<li><span>${ing.name}</span><span class="ingredient-amount">${ing.amount}</span></li>`).join('')}
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
  document.getElementById('modalImg').onerror = function(){ this.src='https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=700&q=80'; };
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
document.getElementById('searchInput').addEventListener('input', function() {
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
