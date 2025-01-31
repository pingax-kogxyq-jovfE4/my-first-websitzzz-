// Simple script for the "Add to Cart" button (this is just for interaction, not a full shopping cart)
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      alert('Product added to cart!');
    });
  });
  