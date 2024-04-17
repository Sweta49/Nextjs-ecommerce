export const ProductService = {
    getAllProducts: () => {
      return fetch('https://fakestoreapi.com/products')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => data)
        .catch(error => {
          console.error('Error fetching products:', error);
          return [];
        });
    },
    getProductById: (id) => {
      return fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => data)
        .catch(error => {
          console.error('Error fetching product:', error);
          return null;
        });
    },
  };
  