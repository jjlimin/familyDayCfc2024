const webcamVideo = document.getElementById("webcamVideo");

navigator.mediaDevices.getUserMedia( { video: true } ).then((stream) => {
    webcamVideo.srcObject = stream;
}).catch((error) => {
    console.error(error);
})

// snapButton.addEventListener('click', () => {
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     const ctx = canvas.getContext('2d');
    
//     // Draw the video frame on the canvas
//     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
//     // Draw the overlay frame
//     ctx.drawImage(overlay, 0, 0, canvas.width, canvas.height);
    
//     // Show the canvas (snapshot)
//     canvas.style.display = 'block';
// });
