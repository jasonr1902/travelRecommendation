function showTravelRecommendation() {
    const query = document.getElementById('search-bar').value;
    fetch(`./travel_recommendation_api.json`)
    .then(response => response.json())
    .then(data => {
        const recommendations = data.countries;
        const recTemples = data.temples;
        const recBeaches = data.beaches;
        const resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = ''; // Clear previous results

        recommendations.forEach(rec => {
            const citiesElement = rec.cities;
            citiesElement.forEach(city => {
                if (city.name.toLowerCase().includes(query.toLowerCase())) {
                    const recElement = document.createElement('div');
                    recElement.className = 'city';
                    recElement.innerHTML = `<img class="city-image" src="${city.imageUrl}"><h3 class="city-name" >${city.name}</h3><p class="city-description" >${city.description}</p>`;
                    resultsContainer.appendChild(recElement);
                }
                
            });
        });

        recTemples.forEach(temple => {
            if (temple.name.toLowerCase().includes(query.toLowerCase())) {
                const recElement = document.createElement('div');
                recElement.className = 'temple';
                recElement.innerHTML = `<img class="city-image" src="${temple.imageUrl}"><h3 class="city-name">${temple.name}</h3><p class="city-description">${temple.description}</p>`;
                resultsContainer.appendChild(recElement);
            }
        });

        recBeaches.forEach(beach => {
            if (beach.name.toLowerCase().includes(query.toLowerCase())) {
                const recElement = document.createElement('div');
                recElement.className = 'beach';
                recElement.innerHTML = `<img class="city-image" src="${beach.imageUrl}"><h3 class="city-name">${beach.name}</h3><p class="city-description">${beach.description}</p>`;
                resultsContainer.appendChild(recElement);
            }
        });
        if (query.toLowerCase() === 'country') {
            recommendations.forEach(rec => {
                const citiesElement = rec.cities;
            citiesElement.forEach(city => {
                
                const recElement = document.createElement('div');
                recElement.className = 'city';
                recElement.innerHTML = `<img class="city-image" src="${city.imageUrl}"><h3 class="city-name" >${city.name}</h3><p class="city-description" >${city.description}</p>`;
                resultsContainer.appendChild(recElement);
            
                
            });
        });
        }
        if (query.toLowerCase() === 'temple') {
            recTemples.forEach(temple => {
                const recElement = document.createElement('div');
                recElement.className = 'temple';
                recElement.innerHTML = `<img class="city-image" src="${temple.imageUrl}"><h3 class="city-name">${temple.name}</h3><p class="city-description">${temple.description}</p>`;
                resultsContainer.appendChild(recElement);
            });
        }

        if (query.toLowerCase() === 'beach') {
            recBeaches.forEach(beach => {
                const recElement = document.createElement('div');
                recElement.className = 'beach';
                recElement.innerHTML = `<img class="city-image" src="${beach.imageUrl}"><h3 class="city-name">${beach.name}</h3><p class="city-description">${beach.description}</p>`;
                resultsContainer.appendChild(recElement);
            });
        }
                

        if (resultsContainer.children.length === 0) {
        const recElement = document.createElement('div');
        recElement.innerHTML = `<p>No matching cities found for "${query}".</p>`;
        resultsContainer.appendChild(recElement);

    }
    })
    
}

const button = document.getElementById("search-button");

button.addEventListener("click", function() {
    showTravelRecommendation();
    console.log("Search button clicked");
});

function clear() {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results
    document.getElementById('search-bar').value = ''; // Clear search input
}

document.getElementById('reset').addEventListener('click', clear);