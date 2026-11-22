import "./ProductCard.css";

export default function ProductCard({
  id,
  name,
  category,
  price,
  oldPrice,
  rating,
  reviews,
  image,
  badge,
  discount,
  addToCart,
  quantity = 0,
  onIncrease,
  onDecrease,
  isWishlisted,
  onToggleWishlist,
}) {
  return (
    <article className="product-card">
      <div className="product-image">
        {badge && <span className="product-badge">{badge}</span>}

        {discount && <span className="discount-badge">{discount}</span>}

        <button
          type="button"
          className={`wishlisted ${isWishlisted ? "active" : ""}`}
          onClick={onToggleWishlist}
          aria-label={
            isWishlisted
              ? `Remove ${name} from wishlist`
              : `Add ${name} to wishlist`
          }
          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          {isWishlisted ? "💜" : "🤍"}
        </button>

        <img src={image} alt={name} loading="lazy" />
      </div>

      <div className="product-details">
        <p className="product-category">{category}</p>

        <h3>{name}</h3>

        <div className="product-rating">
          ⭐ {rating}
          <span>({reviews} reviews)</span>
        </div>

        <div className="product-price">
          <h3>₹{price.toLocaleString("en-IN")}</h3>

          {oldPrice && <span>₹{oldPrice.toLocaleString("en-IN")}</span>}
        </div>

        {quantity > 0 ? (
          <div
            className="card-quantity-controls"
            aria-label={`Quantity for ${name}`}
          >
            <button
              type="button"
              onClick={onDecrease}
              aria-label={`Decrease ${name} quantity`}
            >
              −
            </button>

            <span>{quantity}</span>

            <button
              type="button"
              onClick={onIncrease}
              aria-label={`Increase ${name} quantity`}
            >
              +
            </button>
          </div>
        ) : (
          <button type="button" className="add-cart" onClick={addToCart}>
            + Add to Cart
          </button>
        )}
      </div>
    </article>
  );
}
