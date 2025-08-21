export type Product = { slug:string; name:string; category:string; heat:'Mild'|'Medium'|'Hot'; ready:string; diet?:'Vegetarian'|'Vegan'|''; image?:string; description?:string; tags?:string[]; alt?:string };
export const catalog: Product[] = [
  {
    "name": "Butter Masala Curry Kit",
    "category": "Curry Kits",
    "heat": "Mild",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/butter-curry.jpg",
    "tags": [
      "classic"
    ],
    "description": "Smooth, buttery tomato masala that pairs well with chicken, paneer or veg. This curry kits is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "butter-masala-curry-kit",
    "alt": "Butter Masala Curry Kit"
  },
  {
    "name": "Delicate Korma Curry Kit",
    "category": "Curry Kits",
    "heat": "Mild",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/korma.jpg",
    "tags": [
      "creamy"
    ],
    "description": "Mild coconut and cashew base with gentle spices for a rich, family\u2011friendly curry.",
    "slug": "delicate-korma-curry-kit",
    "alt": "Delicate Korma Curry Kit"
  },
  {
    "name": "Palak (Spinach) Curry Kit",
    "category": "Curry Kits",
    "heat": "Mild",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/palak.jpg",
    "tags": [
      "greens"
    ],
    "description": "Wholesome spinach blend balanced with aromatic spices; excellent with paneer. This curry kits is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "palak-spinach-curry-kit",
    "alt": "Palak (Spinach) Curry Kit"
  },
  {
    "name": "Rich Malai Curry Kit",
    "category": "Curry Kits",
    "heat": "Mild",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/malai.jpg",
    "tags": [
      "creamy"
    ],
    "description": "A decadent cream\u2011forward sauce that creates a silky malai curry in minutes. This curry kits is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "rich-malai-curry-kit",
    "alt": "Rich Malai Curry Kit"
  },
  {
    "name": "Keralan Coconut Curry Kit",
    "category": "Curry Kits",
    "heat": "Mild",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/coconut.jpg",
    "tags": [
      "kit"
    ],
    "description": "Fragrant coconut and curry leaf base inspired by Kerala coastal cooking. This curry kits is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "keralan-coconut-curry-kit",
    "alt": "Keralan Coconut Curry Kit"
  },
  {
    "name": "Rogan Josh Curry Kit",
    "category": "Curry Kits",
    "heat": "Medium",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/rogan.jpg",
    "tags": [
      "kit"
    ],
    "description": "Hearty Kashmiri\u2011style curry with warming spices and deep chilli notes. This curry kits is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "rogan-josh-curry-kit",
    "alt": "Rogan Josh Curry Kit"
  },
  {
    "name": "Bhuna Curry Kit",
    "category": "Curry Kits",
    "heat": "Medium",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/bhuna.jpg",
    "tags": [
      "kit"
    ],
    "description": "A bright, tomatoey curry base with aromatic spices for quick, bold dishes. This curry kits is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "bhuna-curry-kit",
    "alt": "Bhuna Curry Kit"
  },
  {
    "name": "Southern Madras Curry Kit",
    "category": "Curry Kits",
    "heat": "Hot",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/madras.jpg",
    "tags": [
      "hot",
      "kit"
    ],
    "description": "Fiery South Indian\u2011style curry with bold chilli, tamarind and roasted spices. This curry kits is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "southern-madras-curry-kit",
    "alt": "Southern Madras Curry Kit"
  },
  {
    "name": "Chettinad Curry Kit",
    "category": "Curry Kits",
    "heat": "Hot",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/chettinad.jpg",
    "tags": [
      "kit"
    ],
    "description": "Pepper\u2011forward Chettinad spices bring depth and warmth; great with chicken. This curry kits is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "chettinad-curry-kit",
    "alt": "Chettinad Curry Kit"
  },
  {
    "name": "Bengali Jalfrezi Curry Kit",
    "category": "Curry Kits",
    "heat": "Hot",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/jalfrezi.jpg",
    "tags": [
      "hot",
      "kit"
    ],
    "description": "Tangy, spicy curry with peppers and onions; a lively weeknight favourite. This curry kits is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "bengali-jalfrezi-curry-kit",
    "alt": "Bengali Jalfrezi Curry Kit"
  },
  {
    "name": "Goan Curry Kit",
    "category": "Curry Kits",
    "heat": "Hot",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/goan.jpg",
    "tags": [
      "paste",
      "hot"
    ],
    "description": "Spicy paste with vinegar brightness and chilli heat, inspired by coastal cuisine.",
    "slug": "goan-curry-kit",
    "alt": "Goan Curry Kit"
  },
  {
    "name": "Tikka Masala Curry Kit",
    "category": "Curry Kits",
    "heat": "Medium",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/tikkamasala.jpg",
    "tags": [
      "paste"
    ],
    "description": "Tomato\u2011led tikka masala paste for marinades or quick curries. This curry kits is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "tikka-masala-curry-kit",
    "alt": "Tikka Masala Curry Kit"
  },
  {
    "name": "Classic Daal Tarka",
    "category": "Daal",
    "heat": "Mild",
    "ready": "3 mins",
    "diet": "Vegan",
    "image": "https://thecurry.club/images/Dal-Tadka.jpg",
    "tags": [
      "daal",
      "veg"
    ],
    "description": "Comforting yellow lentils tempered with garlic, cumin and spices. This daal is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "classic-daal-tarka",
    "alt": "Classic Daal Tarka"
  },
  {
    "name": "Dal Makhani",
    "category": "Daal",
    "heat": "Mild",
    "ready": "3 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/Dal-Makhani.jpg",
    "tags": [
      "daal",
      "veg"
    ],
    "description": "Creamy black lentils simmered slowly for a hearty, luxurious dish. This daal is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "dal-makhani",
    "alt": "Dal Makhani"
  },
  {
    "name": "Chickpea Masala",
    "category": "Daal",
    "heat": "Medium",
    "ready": "5 mins",
    "diet": "Vegan",
    "image": "https://thecurry.club/images/Chickpea-Curry.jpg",
    "tags": [
      "daal",
      "veg"
    ],
    "description": "Protein\u2011rich chickpeas cooked in a spiced tomato masala. This daal is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "chickpea-masala",
    "alt": "Chickpea Masala"
  },
  {
    "name": "Delhi Biryani",
    "category": "Biryanis",
    "heat": "Medium",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "/images/products/delhi-biryani.webp",
    "tags": [
      "biryani"
    ],
    "description": "Aromatic basmati rice layered with spiced sauce for an effortless biryani. This biryanis is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "delhi-biryani",
    "alt": "Delhi Biryani"
  },
  {
    "name": "Thai Green Curry Kit",
    "category": "Asian\u2011Inspired",
    "heat": "Hot",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/green.jpg",
    "tags": [
      "thai"
    ],
    "description": "Fragrant green curry base with lemongrass, basil and chilli heat. This asian\u2011inspired is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "thai-green-curry-kit",
    "alt": "Thai Green Curry Kit"
  },
  {
    "name": "Thai Red Curry Kit",
    "category": "Asian\u2011Inspired",
    "heat": "Medium",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/red.jpg",
    "tags": [
      "thai"
    ],
    "description": "Balanced red curry with coconut cream and warming spice paste. This asian\u2011inspired is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "thai-red-curry-kit",
    "alt": "Thai Red Curry Kit"
  },
  {
    "name": "Thai Massaman Curry Kit",
    "category": "Asian\u2011Inspired",
    "heat": "Medium",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/massaman.jpg",
    "tags": [
      "thai"
    ],
    "description": "Rich Massaman sauce with gentle spices and subtle nuttiness. This asian\u2011inspired is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "thai-massaman-curry-kit",
    "alt": "Thai Massaman Curry Kit"
  },
  {
    "name": "Indonesian Rendang Kit",
    "category": "Asian\u2011Inspired",
    "heat": "Medium",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/rendang.jpg",
    "tags": [
      "indonesian"
    ],
    "description": "Slow\u2011style rendang base featuring coconut, chilli and aromatic spices. This asian\u2011inspired is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "indonesian-rendang-kit",
    "alt": "Indonesian Rendang Kit"
  },
  {
    "name": "Indonesian Peanut Satay Kit",
    "category": "Asian\u2011Inspired",
    "heat": "Mild",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/satay.jpg",
    "tags": [
      "indonesian"
    ],
    "description": "Sweet\u2011savory peanut satay base for skewers or stir\u2011fries. This asian\u2011inspired is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "indonesian-peanut-satay-kit",
    "alt": "Indonesian Peanut Satay Kit"
  },
  {
    "name": "Chinese Curry Sauce Kit",
    "category": "Chinese\u2011Style",
    "heat": "Medium",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/chinese.jpg",
    "tags": [
      "chinese"
    ],
    "description": "Smooth curry sauce with Chinese spice influences for a fast service. This chinese\u2011style is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "chinese-curry-sauce-kit",
    "alt": "Chinese Curry Sauce Kit"
  },
  {
    "name": "Sweet & Sour Sauce Kit",
    "category": "Chinese\u2011Style",
    "heat": "Mild",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/sweetsour.jpg",
    "tags": [
      "chinese"
    ],
    "description": "Tangy sweet\u2011and\u2011sour base perfect for quick wok cooking. This chinese\u2011style is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "sweet-and-sour-sauce-kit",
    "alt": "Sweet & Sour Sauce Kit"
  },
  {
    "name": "Kung Pao Stir\u2011fry Sauce",
    "category": "Chinese\u2011Style",
    "heat": "Hot",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/kungpao.jpg",
    "tags": [
      "chinese",
      "hot"
    ],
    "description": "Spicy, nutty stir\u2011fry sauce in the classic Kung Pao style. This chinese\u2011style is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "kung-pao-stir-fry-sauce",
    "alt": "Kung Pao Stir\u2011fry Sauce"
  },
  {
    "name": "Fiery Szechuan Sauce",
    "category": "Chinese\u2011Style",
    "heat": "Hot",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/szechuan.jpg",
    "tags": [
      "chinese",
      "hot"
    ],
    "description": "Bold sauce with chilli and tongue\u2011tingling peppercorn heat. This chinese\u2011style is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "fiery-szechuan-sauce",
    "alt": "Fiery Szechuan Sauce"
  },
  {
    "name": "Classic Fajita Kit",
    "category": "Mexican\u2011Style",
    "heat": "Mild",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/fajita.jpg",
    "tags": [
      "mexican"
    ],
    "description": "Seasoned fajita mix with mild spices for easy wraps. This mexican\u2011style is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "classic-fajita-kit",
    "alt": "Classic Fajita Kit"
  },
  {
    "name": "Original Taco Kit",
    "category": "Mexican\u2011Style",
    "heat": "Medium",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/taco.jpg",
    "tags": [
      "mexican"
    ],
    "description": "Classic taco seasoning for flexible fillings and fast service. This mexican\u2011style is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "original-taco-kit",
    "alt": "Original Taco Kit"
  },
  {
    "name": "Original Enchilada Kit",
    "category": "Mexican\u2011Style",
    "heat": "Mild",
    "ready": "5 mins",
    "diet": "Vegetarian",
    "image": "https://thecurry.club/images/enchilada.jpg",
    "tags": [
      "mexican"
    ],
    "description": "Mild, saucy enchilada kit ideal for oven\u2011baked family meals. This mexican\u2011style is crafted for venues to deliver authentic taste in minutes, with consistent portions and easy prep.",
    "slug": "original-enchilada-kit",
    "alt": "Original Enchilada Kit"
  },
  {
    "name": "Hyderabadi Biryani",
    "category": "Biryanis",
    "heat": "Hot",
    "ready": "5 mins",
    "diet": "",
    "image": "https://thecurry.club/images/hyd-biryani.jpg",
    "tags": [
      "aromatic",
      "layered"
    ],
    "description": "Fragrant, layered biryani with whole spices and saffron notes; serve with raita.",
    "slug": "hyderabadi-biryani",
    "alt": "Hyderabadi Biryani"
  },
  {
    "name": "Simply South Sambar",
    "category": "Daal",
    "heat": "Medium",
    "ready": "5 mins",
    "diet": "Vegan",
    "image": "https://thecurry.club/images/sambar.jpg",
    "tags": [
      "South Indian",
      "tamarind",
      "lentil"
    ],
    "description": "Tangy South Indian lentil stew made with toor dal, tamarind and a roasted sambar spice blend. Great with idli, dosa or rice.",
    "slug": "simply-south-sambar",
    "alt": "Simply South Sambar"
  }
];
