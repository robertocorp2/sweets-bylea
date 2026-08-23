// Central content + media for Leanna Corporan's Bakehouse.
// All photography is served from Unsplash's CDN (images.unsplash.com).

export const site = {
  name: "Leanna Corporan's Bakehouse",
  shortName: 'Leanna Corporan',
  tagline: 'Handcrafted with love. Baked by Leanna.',
  metaTitle: "Leanna Corporan's Bakehouse | Custom Cakes, Cookies & Cupcakes",
  metaDescription:
    'Leanna Corporan creates exquisite custom cakes, cookies, cake pops, and cupcakes for weddings, birthdays, and events. Order your bespoke dessert today.',
  email: 'hello@leannacorporan.com',
  phone: '(555) 012-3456',
  instagram: 'https://instagram.com/leannacorporan',
  instagramHandle: '@leannacorporan',
  leadTime: '48-72 hours',
  city: 'Your Town',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu/' },
  { label: 'About', href: '/about/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Contact', href: '/contact/' },
];

// Build an Unsplash CDN URL at a given width.
export const unsplash = (id, w = 900) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const media = {
  hero: unsplash('photo-1576618148400-f54bed99fcfd', 1800),
  heroAlt: 'A tray of freshly frosted cupcakes with swirled buttercream',
  story: unsplash('photo-1556910103-1c02745aae4d', 1000),
  storyAlt: 'Leanna working dough in her sunlit kitchen',
  aboutHero: unsplash('photo-1517248135467-4c7edcad34c4', 1600),
  aboutHeroAlt: 'Warm, inviting bakery counter filled with fresh pastries',
  ingredients: unsplash('photo-1517433670267-08bbd4be890f', 1000),
  ingredientsAlt: 'Freshly baked artisan loaves',
};

export const bestSellers = [
  {
    name: 'Signature Vanilla Bean Cupcake',
    description: 'Madagascar vanilla sponge with silky vanilla bean buttercream.',
    price: '$4.50',
    image: unsplash('photo-1486427944299-d1955d23e34d', 800),
    alt: 'A vanilla bean cupcake with swirled buttercream',
  },
  {
    name: 'Brown Butter Chocolate Chip Cookie',
    description: 'Nutty brown butter, pools of dark chocolate, flaky sea salt.',
    price: '$3.75',
    image: unsplash('photo-1499636136210-6f4ee915583e', 800),
    alt: 'Stacked chocolate chip cookies with melted chocolate',
  },
  {
    name: 'Classic Red Velvet Cake Pop',
    description: 'Cream cheese center dipped in white chocolate.',
    price: '$4.25',
    image: unsplash('photo-1587314168485-3236d6710814', 800),
    alt: 'Chocolate cake pops finished with a glossy shell',
  },
  {
    name: 'Custom Celebration Cake',
    description: 'Your flavors, your story. Bespoke tiers from 6 to 10 inches.',
    price: 'From $85',
    image: unsplash('photo-1542124948-dc391252a940', 800),
    alt: 'An elegant custom celebration cake',
  },
];

export const products = [
  // Cupcakes
  {
    id: 'vanilla-bean-cupcake',
    name: 'Signature Vanilla Bean Cupcake',
    category: 'cupcakes',
    description:
      'Madagascar vanilla sponge, silky vanilla bean buttercream, and a whisper of sea salt.',
    price: '$4.50',
    priceNote: 'per cupcake',
    image: unsplash('photo-1486427944299-d1955d23e34d', 800),
    alt: 'A vanilla bean cupcake with swirled buttercream',
  },
  {
    id: 'double-chocolate-cupcake',
    name: 'Double Chocolate Fudge Cupcake',
    category: 'cupcakes',
    description:
      'Dutch cocoa sponge with a molten bittersweet fudge center and glossy ganache.',
    price: '$4.75',
    priceNote: 'per cupcake',
    image: unsplash('photo-1563729784474-d77dbb933a9e', 800),
    alt: 'A chocolate cupcake topped with fudge',
  },
  {
    id: 'red-velvet-cupcake',
    name: 'Red Velvet Cream Cheese',
    category: 'cupcakes',
    description: 'Classic red velvet sponge crowned with tangy cream cheese frosting.',
    price: '$4.75',
    priceNote: 'per cupcake',
    image: unsplash('photo-1550617931-e17a7b70dce2', 800),
    alt: 'A red velvet cupcake with cream cheese frosting',
  },
  {
    id: 'lemon-raspberry-cupcake',
    name: 'Lemon Raspberry',
    category: 'cupcakes',
    description: 'Zesty lemon sponge, raspberry buttercream, and candied lemon zest.',
    price: '$4.75',
    priceNote: 'per cupcake',
    image: unsplash('photo-1621303837174-89787a7d4729', 800),
    alt: 'Frosted cupcakes decorated with fresh fruit',
  },
  // Cookies
  {
    id: 'brown-butter-cookie',
    name: 'Brown Butter Chocolate Chip',
    category: 'cookies',
    description:
      'Nutty brown butter and pools of dark chocolate finished with flaky sea salt.',
    price: '$3.75',
    priceNote: 'each',
    image: unsplash('photo-1499636136210-6f4ee915583e', 800),
    alt: 'Stacked chocolate chip cookies',
  },
  {
    id: 'caramel-pretzel-cookie',
    name: 'Salted Caramel Pretzel',
    category: 'cookies',
    description: 'Chewy caramel, crushed pretzel, and a dark chocolate drizzle.',
    price: '$4.00',
    priceNote: 'each',
    image: unsplash('photo-1558961363-fa8fdf82db35', 800),
    alt: 'Cookies topped with caramel and chocolate',
  },
  {
    id: 'double-chocolate-cookie',
    name: 'Double Chocolate Chunk',
    category: 'cookies',
    description: 'Fudgy cocoa dough folded with milk and dark chocolate chunks.',
    price: '$4.00',
    priceNote: 'each',
    image: unsplash('photo-1481391319762-47dff72954d9', 800),
    alt: 'Freshly baked chocolate cookies',
  },
  // Cake pops
  {
    id: 'red-velvet-pop',
    name: 'Classic Red Velvet Pop',
    category: 'cake-pops',
    description: 'Cream cheese center dipped in a white chocolate shell.',
    price: '$4.25',
    priceNote: 'each',
    image: unsplash('photo-1587314168485-3236d6710814', 800),
    alt: 'Chocolate cake pops on a serving tray',
  },
  {
    id: 'vanilla-sprinkle-pop',
    name: 'Vanilla Sprinkle Pop',
    category: 'cake-pops',
    description: 'Vanilla bean cake pop with a pastel sprinkle shell.',
    price: '$4.00',
    priceNote: 'each',
    image: unsplash('photo-1590080874088-eec64895b423', 800),
    alt: 'Round baked treats dusted with sugar',
  },
  // Custom cakes
  {
    id: 'celebration-cake',
    name: 'Signature Celebration Cake',
    category: 'cakes',
    description: 'Your flavors, your story. Custom tiers from 6 to 10 inches.',
    price: 'From $85',
    priceNote: 'per cake',
    image: unsplash('photo-1542124948-dc391252a940', 800),
    alt: 'An elegant layered celebration cake',
  },
  {
    id: 'naked-drip-cake',
    name: 'Naked Drip Cake',
    category: 'cakes',
    description: 'Exposed layers, a glossy chocolate drip, and fresh seasonal berries.',
    price: 'From $95',
    priceNote: 'per cake',
    image: unsplash('photo-1587668178277-295251f900ce', 800),
    alt: 'A naked cake with chocolate drip and berries',
  },
  {
    id: 'wedding-cake',
    name: 'Tiered Wedding Cake',
    category: 'cakes',
    description: 'Elegant stacked tiers designed around your big day.',
    price: 'From $240',
    priceNote: 'per cake',
    image: unsplash('photo-1519869325930-281384150729', 800),
    alt: 'A tiered wedding cake',
  },
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'cupcakes', label: 'Cupcakes' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'cake-pops', label: 'Cake Pops' },
  { id: 'cakes', label: 'Custom Cakes' },
];

export const testimonials = [
  {
    quote:
      'Leanna made our wedding cake and it was the most beautiful, delicious thing at the reception. Guests are still talking about it.',
    name: 'Rachel M.',
    context: 'Wedding, June 2024',
  },
  {
    quote:
      'The red velvet cupcakes were gone in minutes. Fluffy, rich, and the cream cheese frosting is unreal.',
    name: 'Danielle P.',
    context: 'Birthday order',
  },
  {
    quote:
      'Ordered custom cookies for our baby shower and they looked too pretty to eat. Then we ate every single one.',
    name: 'Maya R.',
    context: 'Cookie order',
  },
];

export const galleryItems = [
  { image: unsplash('photo-1519869325930-281384150729', 800), category: 'weddings', alt: 'Elegant tiered wedding cake' },
  { image: unsplash('photo-1464349095431-e9a21285b5f3', 800), category: 'birthdays', alt: 'Birthday cake with lit candles' },
  { image: unsplash('photo-1535141192574-5d4897c12636', 800), category: 'holiday', alt: 'Festive holiday cake' },
  { image: unsplash('photo-1542124948-dc391252a940', 800), category: 'weddings', alt: 'Refined wedding celebration cake' },
  { image: unsplash('photo-1562440499-64c9a111f713', 800), category: 'birthdays', alt: 'Colorful birthday cake' },
  { image: unsplash('photo-1587668178277-295251f900ce', 800), category: 'holiday', alt: 'Chocolate drip cake for the holidays' },
  { image: unsplash('photo-1571115177098-24ec42ed204d', 800), category: 'weddings', alt: 'Detailed wedding cake decoration' },
  { image: unsplash('photo-1576618148400-f54bed99fcfd', 800), category: 'birthdays', alt: 'Cupcakes for a birthday party' },
  { image: unsplash('photo-1578985545062-69928b1d9587', 800), category: 'holiday', alt: 'Rich chocolate layer cake' },
  { image: unsplash('photo-1612203985729-70726954388c', 800), category: 'weddings', alt: 'Minimalist wedding cake' },
  { image: unsplash('photo-1558929996-da64ba858215', 800), category: 'birthdays', alt: 'Celebration cake with frosting' },
  { image: unsplash('photo-1509440159596-0249088772ff', 800), category: 'holiday', alt: 'Rustic baked goods for a holiday table' },
];

export const processSteps = [
  {
    title: 'Mix',
    description: 'Real butter, organic eggs, and Belgian chocolate creamed to order.',
    image: unsplash('photo-1595475207225-428b62bda831', 800),
    alt: 'Mixing batter by hand',
  },
  {
    title: 'Bake',
    description: 'Small batches baked slowly for a tender, even crumb.',
    image: unsplash('photo-1509440159596-0249088772ff', 800),
    alt: 'Golden loaves and bakes fresh from the oven',
  },
  {
    title: 'Frost',
    description: 'Silky buttercream whipped and piped by hand.',
    image: unsplash('photo-1608198093002-ad4e005484ec', 800),
    alt: 'Piping buttercream onto a cake',
  },
  {
    title: 'Decorate',
    description: 'Finishing touches that turn a cake into a centerpiece.',
    image: unsplash('photo-1550617931-e17a7b70dce2', 800),
    alt: 'Decorating a frosted cupcake',
  },
];

export const ingredients = [
  {
    title: 'Organic Eggs',
    description: 'Farm-fresh and cage-free, for a rich, tender crumb in every bake.',
  },
  {
    title: 'Real Butter',
    description: 'Slow-churned and full fat. Never shortening, never a mix.',
  },
  {
    title: 'Belgian Chocolate',
    description: 'Single-origin couverture melted into cakes, cookies, and glazes.',
  },
];
