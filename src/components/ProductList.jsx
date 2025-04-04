function ProductList({ items }) {
    return (
        <div>
            <h2>Product List 📦</h2>
            <ul>
                {items.map((product) => (
                    <li key={product.id}>
                        <strong>{product.name}</strong> - ₹{product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
