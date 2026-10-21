function ProductCard({ product, showActions, onEdit, onDelete }) {
  return (
    <article className="group overflow-hidden rounded-xl bg-[#1b2838] border border-[#2a475e] shadow-md transition duration-200 hover:-translate-y-1 hover:border-[#385873]">
      <div className="relative aspect-4/3 overflow-hidden bg-[#101822]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-[#101822]/90 border border-[#2a475e] px-3 py-1 text-xs font-bold text-[#66c0f4]">
          ₱{Number(product.price).toLocaleString()}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-base font-semibold text-white truncate">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-[#8f98a0] line-clamp-3">
          {product.description}
        </p>

        {showActions && (
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => onEdit(product)}
              className="flex-1 rounded-lg bg-[#2a475e] py-2 text-xs font-medium text-[#c7d5e0] hover:bg-[#385873] hover:text-white transition"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(product._id)}
              className="flex-1 rounded-lg bg-[#c23838] py-2 text-xs font-medium text-white hover:bg-[#d94141] transition"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
