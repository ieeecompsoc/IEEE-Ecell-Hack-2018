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

