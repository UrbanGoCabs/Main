// Google Maps Initialization
function initMap() {
  const location = { lat: 28.6139, lng: 77.2090 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: location,
  });
  new google.maps.Marker({ position: location, map: map });
}

// Swiper Carousel
new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  autoplay: { delay: 3000 },
});

// Blog Posts (Dynamic Insertion)
const blogPosts = [
  {
    title: "Top 5 Road Trips from Delhi",
    image: "urbangoimages/blog1.jpg",
    content: "Explore the best weekend road trips from Delhi including Agra, Jaipur and more...",
    link: "blog.html?id=road-trips-delhi"
  },
  {
    title: "Why Choose Urbango for Daily Commute?",
    image: "urbangoimages/blog2.jpg",
    content: "Affordable rates, real-time tracking, and professional drivers make Urbango a top pick.",
    link: "blog.html?id=daily-commute"
  }
];
const blogContainer = document.getElementById("blog-container");
if (blogContainer) {
  blogPosts.forEach(post => {
    const div = document.createElement("div");
    div.className = "bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition";
    div.innerHTML = `
      <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-2">${post.title}</h3>
        <p class="text-gray-600 text-sm mb-3">${post.content}</p>
        <a href="${post.link}" class="text-green-600 font-semibold text-sm hover:underline">Read more →</a>
      </div>`;
    blogContainer.appendChild(div);
  });
}

// Tawk.to Live Chat
(function () {
  var tawk = document.createElement("script");
  tawk.async = true;
  tawk.src = 'https://embed.tawk.to/YOUR_TAWKTO_ID/default';
  tawk.charset = 'UTF-8';
  tawk.setAttribute('crossorigin', '*');
  document.body.appendChild(tawk);
})();
