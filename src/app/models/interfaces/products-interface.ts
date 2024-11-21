export interface ProductsListInterface {
  limit: number;
  skip: number;
  total: number;
  products: ProductsInterface[];
}
export interface ProductsInterface {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: DimensionsInterface;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ReviewsInterface[];
  returnPolicy: string;
  minimumOrderQuantity: 24;
  meta: MetaInterface[];
  images: string[];
  thumbnail: string;
}

export interface DimensionsInterface {
  width: number;
  height: number;
  depth: number;
}

export interface ReviewsInterface {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface MetaInterface {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}
