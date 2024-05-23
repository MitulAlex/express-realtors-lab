const houses = [
    { id: 1, numberOfBedrooms: 3, numberOfBathrooms: 2, hasPorch: true, address: "789 Pine St" },
    { id: 2, numberOfBedrooms: 4, numberOfBathrooms: 3, hasPorch: false, address: "101 Maple St" },
    // Add more houses as needed
  ];
  
  const getAll = () => houses;
  
  const getOne = (id) => houses.find(house => house.id === id);
  
  module.exports = { getAll, getOne };
  