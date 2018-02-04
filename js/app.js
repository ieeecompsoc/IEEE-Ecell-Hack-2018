/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});
$('.about-parallax-window').parallax({
	imageSrc: 'images/AboutUS.jpg',
	speed: 0.2,
});
// $('.faq-parallax-window').parallax({
// 	imageSrc: 'images/FAQs.jpg',
// 	speed: 0.2,
// });


activateTimer = function(date) {
	const endDate = new Date("Feb 17, 2018 09:00:00").getTime(),
	$timer = document.getElementById("js-timer");

	let days, hours, minutes;

	const intervalId = setInterval(() => {
		const currentTime = new Date().getTime(),
			distance = endDate - currentTime;

		days = Math.floor(distance / (1000 * 60 * 60 * 24));
		hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

		const timeLeft = `${days} days : ${hours} hours : ${minutes} minutes`;

		if (timeLeft !== $timer.innerHTML) {
			$timer.innerHTML = timeLeft;
		}

		if (distance < 0) {
			clearInterval(intervalId);

			$timer.innerHTML = "0 days : 0 hours : 0 minutes";
		}
	}, 1000);
}

window.onload = function() {
	activateTimer();
}