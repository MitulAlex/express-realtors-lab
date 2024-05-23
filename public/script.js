document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/apartments')
      .then(response => response.json())
      .then(data => {
        const apartmentList = document.getElementById('apartment-list');
        data.forEach(apartment => {
          const div = document.createElement('div');
          div.textContent = `Address: ${apartment.address}, Price: ${apartment.price}, SqFt: ${apartment.sqFt}`;
          apartmentList.appendChild(div);
        });
      });
  
    fetch('http://localhost:3000/houses')
      .then(response => response.json())
      .then(data => {
        const houseList = document.getElementById('house-list');
        data.forEach(house => {
          const div = document.createElement('div');
          div.textContent = `Address: ${house.address}, Bedrooms: ${house.numberOfBedrooms}, Bathrooms: ${house.numberOfBathrooms}`;
          houseList.appendChild(div);
        });
      });
  });
  