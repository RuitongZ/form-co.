export const formatCurrency = (value) => {
  return (
    'C' +
    new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      // minimumIntegerDigits: 2,
    }).format(value)
  );
};

export const calculateSubtotal = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const calculateEstimatedTax = (subtotal, taxRate = 0.13) => {
  return subtotal * taxRate;
};

export const calculateTotalPrice = (subtotal, tax) => {
  return subtotal + tax;
};
