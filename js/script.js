// Fetch places data and populate the places list
document.addEventListener('DOMContentLoaded', function() {
    fetch('data/places.json')
        .then(response => response.json())
        .then(places => {
            const placesList = document.getElementById('places-list');
            placesList.innerHTML = ''; // Clear loading text
            
            places.forEach(place => {
                const placeCard = document.createElement('div');
                placeCard.className = 'place-card';
                
                // Use first image or placeholder
                const imageUrl = place.images && place.images[0] ? place.images[0] : 'https://via.placeholder.com/300x200?text=No+Image';
                
                placeCard.innerHTML = `
                    <img src="${imageUrl}" alt="${place.name}">
                    <div class="info">
                        <h3>${place.name}</h3>
                        <p>${place.description}</p>
                        <div class="details">
                            <span><strong>Location:</strong> ${place.location}</span>
                            <span><strong>Hours:</strong> ${place.opening_hours}</span>
                            <span><strong>Fee:</strong> ${place.entry_fee}</span>
                        </div>
                    </div>
                `;
                
                placesList.appendChild(placeCard);
            });
        })
        .catch(error => {
            console.error('Error loading places data:', error);
            document.getElementById('places-list').innerHTML = '<p>Error loading places data. Please try again later.</p>';
        });
});