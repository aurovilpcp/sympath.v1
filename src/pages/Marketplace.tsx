import React, { useState } from 'react';
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart } from 'lucide-react';

const Marketplace: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All Categories',
    'Electronics',
    'Fashion',
    'Home & Garden',
    'Sports',
    'Books',
    'Automotive',
    'Health & Beauty',
  ];

  const products = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.8,
      reviews: 245,
      seller: 'TechStore Pro',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      category: 'Electronics',
      featured: true,
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 199.99,
      rating: 4.6,
      reviews: 189,
      seller: 'FitGear Co.',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      category: 'Electronics',
      featured: false,
    },
    {
      id: 3,
      name: 'Portable Bluetooth Speaker',
      price: 45.99,
      rating: 4.5,
      reviews: 167,
      seller: 'Audio Plus',
      image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      category: 'Electronics',
      featured: false,
    },
    {
      id: 4,
      name: 'Premium Coffee Maker',
      price: 159.99,
      rating: 4.7,
      reviews: 98,
      seller: 'Kitchen Pro',
      image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      category: 'Home & Garden',
      featured: true,
    },
    {
      id: 5,
      name: 'Ergonomic Office Chair',
      price: 279.99,
      rating: 4.9,
      reviews: 312,
      seller: 'Office Solutions',
      image: 'https://images.pexels.com/photos/586999/pexels-photo-586999.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      category: 'Home & Garden',
      featured: false,
    },
    {
      id: 6,
      name: 'Professional Camera Lens',
      price: 599.99,
      rating: 4.8,
      reviews: 78,
      seller: 'Photo Expert',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      category: 'Electronics',
      featured: true,
    },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const ProductCard: React.FC<{ product: typeof products[0] }> = ({ product }) => (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.featured && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </span>
        )}
        {product.originalPrice && (
          <span className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </span>
        )}
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-50 hover:text-red-600">
          <Heart className="w-4 h-4" />
        </button>
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {product.rating} ({product.reviews})
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-600">
            by {product.seller}
          </span>
        </div>
        
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );

  const ProductListItem: React.FC<{ product: typeof products[0] }> = ({ product }) => (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex items-center space-x-6">
      <div className="relative flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 object-cover rounded-lg"
        />
        {product.featured && (
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </span>
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="mb-1">
              <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">
                {product.category}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <span className="text-sm text-gray-600">
              Sold by {product.seller}
            </span>
          </div>
          
          <div className="text-right">
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-2xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Marketplace
          </h1>
          <p className="text-gray-600">
            Discover amazing products from verified sellers
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 4).map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode and Filter */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
              
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} products
          </p>
        </div>

        {/* Products Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredProducts.map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;