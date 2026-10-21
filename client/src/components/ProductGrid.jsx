import ProductCard from "./ProductCard";

function ProductGrid({ products, showActions = false, onEdit, onDelete }) {
  if (products.length === 0) {
    return (
      <div className="rounded-xl border-2 border-dashed border-[#2a475e] bg-[#171d25] py-20 text-center text-[#8f98a0]">
        No products yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-6">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          showActions={showActions}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
