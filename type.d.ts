interface Slug {
    current: string;
}

interface Reference {
    _ref: string;
}

interface Image {
    asset: Reference;
}

interface ImageField {
    alt: string;
    caption: string;
}

interface MainImage extends Image {
    alt: string;
    caption: string;
}

interface VariantImage extends Image {
    alt: string;
    caption: string;
}

interface ProductSize {
    size: 'XS' | 'S' | 'M' | 'L' | 'XL';
    quantity: number;
}

interface Product {
    _id: string;
    title: string;
    slug: Slug;
    type: string;
    category: Reference;
    sku: string;
    mainImage: MainImage;
    sizes: ProductSize[];
    price: number;
    productDetails: string;
    productCare: string[];
    variantImages: VariantImage[];
}

export default Product;
