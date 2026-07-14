// Fetch places data and populate the places list
// Fetch news data and populate the news list
document.addEventListener('DOMContentLoaded', function() {
    // Fetch places data
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

    // Fetch news data
    fetch('data/news.json')
        .then(response => response.json())
        .then(newsItems => {
            const newsList = document.getElementById('news-list');
            newsList.innerHTML = ''; // Clear loading text
            
            newsItems.forEach(news => {
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                
                newsItem.innerHTML = `
                    <img src="${news.image}" alt="${news.title}">
                    <div class="news-content">
                        <h3>${news.title}</h3>
                        <p>${news.summary}</p>
                        <div class="news-meta">
                            <span>${news.date}</span>
                            <a href="${news.link}" target="_blank">Read more</a>
                        </div>
                    </div>
                `;
                
                newsList.appendChild(newsItem);
            });
        })
        .catch(error => {
            console.error('Error loading news data:', error);
            document.getElementById('news-list').innerHTML = '<p>Error loading news. Please try again later.</p>';
        });
});