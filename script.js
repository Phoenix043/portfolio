console.clear();
const list = document.querySelectorAll('.list');
const nav = document.querySelector('.navigation');
list.forEach(item => item.addEventListener('click', function(e){
	list.forEach(li => li.classList.remove('active'));
	e.currentTarget.classList.add('active');
}));  

// const video = document.getElementById('myVideo');
// const spans = document.querySelectorAll('h1 span');

// // Function to restart the video and trigger text animation
// function restartVideoAndAnimateText() {
//     // Restart the video
//     video.currentTime = 0;
//     video.play();

//     // Trigger text animation after a slight delay (adjust as needed)
//     setTimeout(() => {
//         animateText();
//     }, 7000); // 500 milliseconds delay before text animation starts
// }

// // Function to animate text spans
// function animateText() {
//     spans.forEach((span, index) => {
//         span.style.animation = `fadeIn 1s forwards ${index * 1}s`; // Adjust the delay as needed
//     });
// }

// // Event listener for the end of the video
// video.addEventListener('ended', () => {
//     restartVideoAndAnimateText();
// });

// // Initial call to start the process
// restartVideoAndAnimateText();
