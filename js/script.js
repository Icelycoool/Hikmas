const reviewsData = [
	{
		name: "Emma Johnson",
		image: "img/profiles/emma.jpg",
		comment: "Hikmas Wallet has simplified my international transactions like never before. With its multi-currency convenience, managing finances across borders!",
	},
	{
		name: "Daniel Chen",
		image: "img/profiles/daniel.jpg",
		comment: "I've been using Hikmas Wallet's Gold package for a while now, and I'm impressed with its features. It strikes the perfect balance between luxury and practicality.",
	},
	{
		name: "Sophia Rodriguez",
		image: "img/profiles/sophia.jpg",
		comment: "As a frequent traveler, I rely on Hikmas Wallet's Diamond package for hassle-free global transactions. It's a game-changer for international business executives!",
	},
	{
		name: "David Smith",
		image: "img/profiles/davidsmith.jpg",
		comment: "Hikmas Wallet's Silver package is my go-to choice for managing finances. It offers versatility and reliability, making it perfect for my various financial needs.",
	},
	{
		name: "David Nguyen",
		image: "img/profiles/david.jpg",
		comment: "I started with Hikmas Wallet's Bronze package, and it exceeded my expectations. It's a great option for anyone new to global currency management.",
	},
	{
		name: "Aiden Patel",
		image: "img/profiles/aiden.jpg",
		comment: "Managing multiple currencies has never been easier thanks to Hikmas Wallet. The security features give me peace of mind, and the global acceptance is a huge plus.",
	},
]

function populateReviews() {
	const reviewsContent = document.querySelector(".reviews-content")

	reviewsData.forEach((review) => {
		const reviewElement = document.createElement("div")
		reviewElement.classList.add("review")

		reviewElement.innerHTML = `
            <img src="${review.image}" alt="" class="review-img" />
            <p class="review-text">${review.comment}</p>
            <hr />
            <p class="review-name">${review.name}</p>
        `
		reviewsContent.appendChild(reviewElement)
	})
}

populateReviews()
