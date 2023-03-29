(() => {
const videoBtn = document.querySelector('.how-btn');	
	videoBtn.addEventListener('click', playVideo);
	function playVideo() {
	let videoContainer = document.querySelector('.process-video');
	let iframe = document.createElement('iframe');
	iframe.setAttribute(
        'src',
        'https://www.youtube.com/embed/xPe1jMuX32s'
	);
	iframe.setAttribute('allowfullscreen', '');
	videoContainer.innerHTML = '';
	videoContainer.appendChild(iframe);
    }
     })();