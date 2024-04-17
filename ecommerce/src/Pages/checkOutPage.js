import React, { useState } from 'react';

function CheckoutPage({ cartItems, total, placeOrder }) {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    email: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call placeOrder function with formData
    placeOrder(formData);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        {/* Add more form fields */}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
