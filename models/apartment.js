const apartments = [
    { id: 1, sqFt: 850, price: 1200, address: "123 Main St", isPetFriendly: true, waterfrontView: false },
    { id: 2, sqFt: 950, price: 1500, address: "456 Oak St", isPetFriendly: false, waterfrontView: true },
  ];
  
  const getAll = () => apartments;
  
  const getOne = (id) => apartments.find(apartment => apartment.id === id);
  
  module.exports = { getAll, getOne };
  