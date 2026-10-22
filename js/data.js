// Curated menu items and initial state for Velvet & Leaf Cafe
const CAFE_CATEGORIES = [
    { id: 'all', title: 'All Items', icon: 'sparkles' },
    { id: 'coffee', title: 'Coffee', icon: 'coffee' },
    { id: 'tea', title: 'Special Tea', icon: 'leaf' },
    { id: 'bakery', title: 'Bakery & Snacks', icon: 'croissant' }
];

const CAFE_MENU_ITEMS = [
    {
        id: 'c1',
        name: 'Velvet Spanish Latte',
        category: 'Coffee',
        description: 'Rich double espresso layered with sweet condensed milk, cinnamon dust, and silky microfoam.',
        price: 5.75,
        rating: 4.9,
        reviews: 142,
        icon: 'coffee',
        badge: 'Bestseller',
        isFavorite: true
    },
    {
        id: 'c2',
        name: 'Caramel Cloud Macchiato',
        category: 'Coffee',
        description: 'Madagascar vanilla syrup, steamed oat milk, freshly pulled espresso, and amber caramel drizzle.',
        price: 5.25,
        rating: 4.8,
        reviews: 98,
        icon: 'coffee',
        badge: 'Popular',
        isFavorite: false
    },
    {
        id: 'c3',
        name: 'Kyoto Slow Drip Cold Brew',
        category: 'Coffee',
        description: 'Slow-dripped drop-by-drop for 16 hours over single-origin beans, presenting silky dark cherry and cacao notes.',
        price: 4.95,
        rating: 4.9,
        reviews: 210,
        icon: 'coffee',
        badge: 'Craft Brew',
        isFavorite: true
    },
    {
        id: 't1',
        name: 'Ceremonial Uji Matcha Latte',
        category: 'Special Tea',
        description: 'First-harvest stone-ground Kyoto Uji matcha whisked with oat milk and a touch of wild mountain honey.',
        price: 6.25,
        rating: 5.0,
        reviews: 185,
        icon: 'leaf',
        badge: 'Signature',
        isFavorite: true
    },
    {
        id: 't2',
        name: 'Jasmine Dragon Pearls',
        category: 'Special Tea',
        description: 'Hand-rolled silver needle tea leaves infused six times with nocturnal organic jasmine blossoms.',
        price: 4.80,
        rating: 4.7,
        reviews: 74,
        icon: 'leaf',
        badge: 'Organic',
        isFavorite: false
    },
    {
        id: 't3',
        name: 'Royal Masala Chai Latte',
        category: 'Special Tea',
        description: 'Single-estate Assam black tea slow-simmered with crushed green cardamom, cinnamon quill, and fresh ginger.',
        price: 5.10,
        rating: 4.8,
        reviews: 112,
        icon: 'leaf',
        badge: 'Spiced',
        isFavorite: false
    },
    {
        id: 'b1',
        name: 'Artisan Almond Croissant',
        category: 'Bakery & Snacks',
        description: 'Golden, flaky 27-layer butter pastry filled with rich almond frangipane cream and toasted sliced almonds.',
        price: 4.50,
        rating: 4.9,
        reviews: 89,
        icon: 'croissant',
        badge: 'Fresh Baked',
        isFavorite: true
    },
    {
        id: 'b2',
        name: 'Meyer Lemon & Blueberry Scone',
        category: 'Bakery & Snacks',
        description: 'Baked fresh every morning with wild mountain blueberries and finished with a zesty citrus sugar glaze.',
        price: 4.20,
        rating: 4.6,
        reviews: 63,
        icon: 'croissant',
        badge: 'Morning Treat',
        isFavorite: false
    }
];

const DEFAULT_USER = {
    name: 'Sophia Miller',
    email: 'sophia.miller@velvetleaf.cafe',
    phone: '+1 (555) 019-2834',
    loyaltyPoints: 350,
    activeOrdersCount: 1,
    tier: 'Gold Bean Tier'
};
