export const generateProducts = () => {
    const categories = ['necklaces', 'rings', 'bracelets', 'earrings'];
    const productTypes = {
        necklaces: [
            'Gold Necklace', 'Diamond Chain', 'Pearl Pendant', 'Gemstone Necklace',
            'Luxury Choker', 'Gold Link Chain', 'Crystal Necklace', 'Vintage Chain'
        ],
        rings: [
            'Diamond Ring', 'Gold Ring', 'Sapphire Ring', 'Engagement Ring',
            'Signet Ring', 'Cocktail Ring', 'Wedding Band', 'Birthstone Ring'
        ],
        bracelets: [
            'Gold Bracelet', 'Diamond Bracelet', 'Bangle Bracelet', 'Tennis Bracelet',
            'Charm Bracelet', 'Cuff Bracelet', 'Link Bracelet', 'Crystal Bracelet'
        ],
        earrings: [
            'Diamond Earrings', 'Gold Earrings', 'Pearl Earrings', 'Drop Earrings',
            'Stud Earrings', 'Hoop Earrings', 'Chandelier Earrings', 'Gemstone Earrings'
        ]
    };

    const descriptions = [
        'Premium handcrafted luxury jewelry featuring finest materials and exceptional craftsmanship.',
        'Elegant design with timeless appeal, perfect for any occasion or as a special gift.',
        'Exquisitely detailed piece combining modern style with classic sophistication.',
        'Masterfully crafted with attention to every detail for a truly luxurious look.',
        'Stunning jewelry featuring premium gemstones and precious metals.',
        'Sophisticated design showcasing exceptional quality and elegant aesthetics.',
        'Luxurious piece perfect for adding a touch of elegance to any wardrobe.',
        'Beautifully crafted jewelry with impeccable attention to detail and style.'
    ];

    const imageIds = [
        '1599643478518-a784e5dc4c8f', '1599643478619-9a5f4b2e9c8b', '1599643478720-7a3c2f1d9e4a',
        '1599643478821-5f2c1e8b9d7c', '1599643478922-3d8c4b5a6e9f', '1599643479023-8a9b7c6d5e4f',
        '1599643479124-6e7d8f9a0b1c', '1599643479225-4c5d6e7f8a9b', '1599643479326-2f3d4e5f6a7b',
        '1599643479427-9a8b7c6d5e4f', '1599643479528-7f8e9a0b1c2d', '1599643479629-5e6f7a8b9c0d'
    ];

    const products = [];
    let id = 1;

    for (let i = 0; i < 600; i++) {
        const categoryIndex = i % categories.length;
        const category = categories[categoryIndex];
        const typeIndex = i % productTypes[category].length;
        const baseName = productTypes[category][typeIndex];
        const variant = Math.floor(i / categories.length / productTypes[category].length) + 1;
        
        const name = variant > 1 ? `${baseName} - Style ${variant}` : baseName;
        const minPrice = 50 + (i % 100) * 10;
        const maxPrice = minPrice + 500 + (i % 200) * 5;

        products.push({
            id: id++,
            name,
            category,
            price: minPrice + (maxPrice - minPrice) / 2,
            minPrice: Math.round(minPrice),
            maxPrice: Math.round(maxPrice),
            image: `https://images.unsplash.com/photo-${imageIds[i % imageIds.length]}?w=400&h=400&fit=crop`,
            description: descriptions[i % descriptions.length],
            sku: `LG-${category.toUpperCase()}-${String(id).padStart(6, '0')}`
        });
    }

    return products;
};
