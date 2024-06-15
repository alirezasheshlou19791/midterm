document.addEventListener('DOMContentLoaded', () => {
 const productImage = document.getElementById('productImage');
 const productTitle = document.getElementById('productTitle');
 const productDescription = document.getElementById('productDescription');
 const productPrice = document.getElementById('productPrice');
 const productRating = document.getElementById('productRating');
 const productBrand = document.getElementById('productBrand');
 const productStock = document.getElementById('productStock');
 const warrantyInformation = document.getElementById('warrantyInformation');

 fetch('https://dummyjson.com/products/1')
 .then(response => response.json())
 .then(data => {
 productImage.src = data.thumbnail;
productTitle.textContent = data.title;
 productDescription.textContent = data.description;
 productPrice.textContent = data.price;
 productRating.textContent = data.rating;
 productBrand.textContent = data.brand;
 productStock.textContent = data.stock;
 warrantyInformation.textContent = data.warrantyInformation;


  const reviews = data.reviews;
                    const container = document.getElementById('containerBox');
                    

                    reviews.forEach(review => {
                        const reviewElement = document.createElement('div');
                        reviewElement.innerHTML = `
                            <h3>Reviewer: ${review.reviewerName}</h3>
                            <p>Email: ${review.reviewerEmail}</p>
                            <p>Rating: ${review.rating}</p>
                            <p>Comment: ${review.comment}</p>
                            <p>Date: ${new Date(review.date).toLocaleDateString()}</p>
                            <hr>
                        `;
                        container.appendChild(reviewElement);
                    });

             

 })
 .catch(error => console.error('Error fetching data:', error));
});

