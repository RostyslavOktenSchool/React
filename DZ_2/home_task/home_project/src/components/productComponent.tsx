// ProductCard.tsx
import React from "react";
import type { IProduct } from "../modules/IProducts";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><strong>Ціна:</strong> ${product.price}</p>
      <p><strong>Знижка:</strong> {product.discountPercentage}%</p>
      <p><strong>Рейтинг:</strong> {product.rating} ⭐</p>
      <p><strong>Бренд:</strong> {product.brand}</p>
      <p><strong>Категорія:</strong> {product.category}</p>
      <p><strong>Наявність:</strong> {product.availabilityStatus}</p>
      <p><strong>Мін. замовлення:</strong> {product.minimumOrderQuantity}</p>

      <h4>📦 Доставка</h4>
      <p>{product.shippingInformation}</p>

      <h4>📝 Відгуки</h4>
      <ul>
        {product.reviews.map((review, idx) => (
          <li key={idx}>
            <strong>{review.reviewerName}</strong>: {review.comment} ({review.rating}⭐)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;