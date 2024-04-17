import React, { useState } from 'react';

function Checkout() {
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
    // Handle form submission
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
        />
        {/* Add more form fields */}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
