   // Set the video ID to the one you copied
    //    const videoId = "t7hADLWtFGc";
    // const player = document.getElementById('youtube-video');
    document.addEventListener('DOMContentLoaded', function() {
        const videoIds = [
            "ULAEzsuqpHo",
            "RniUi2eg_GE",
            "GYrQY14eYiA",
            "RD4JPW6mKaU",
            "HMGEnWazfTE",
            // Add more video IDs here as needed
        ];
        let currentVideoIndex = 0; // Start from 0 for array indexing

    


        // code for playing video for exact video id
        
        const player = document.getElementById('youtube-video');

        // Function to load the current video
        function loadCurrentVideo() {
            const videoId = videoIds[currentVideoIndex];
            player.src = `https://www.youtube.com/embed/${videoId}`;
           
        }

        // Initial video load
        loadCurrentVideo();



    




        // Function to show current video index
        function showCurrentVideoIndex() {
            if (currentVideoIndex >= videoIds.length) {
                currentVideoIndex = 0; // Wrap around to 0
            }
            console.log(`Current Video Index: ${currentVideoIndex + 1}`);
            console.log(`Current Video ID: ${videoIds[currentVideoIndex]}`);
            currentVideoIndex++;
        }

        // Show index and ID for each video
        for (let i = 0; i < videoIds.length; i++) {
            showCurrentVideoIndex();
        }
    






// Function to handle skip button click
function skipToNextVideo() {
    // Disable the skip button
    const skipButton = document.getElementById('skip-button');
    skipButton.disabled = true;

    
    // Set a timeout to enable the skip button after 14000 milliseconds (14 seconds)
    setTimeout(function() {
        skipButton.disabled = false; // Enable the skip button
    }, 14000);

    // Set a timeout to load the next video after 20000 milliseconds (20 seconds) if skip button is not clicked
    setTimeout(function() {
        if (!skipButton.disabled) {
           
        }
    });

    // Load the next video
    loadNextVideo();
}

// Function to load the next video
function loadNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoIds.length;
    const videoId = videoIds[currentVideoIndex];
    console.log(`Loading next video: ${videoId}`);
    document.getElementById('youtube-video').src = `https://www.youtube.com/embed/${videoId}`;
}

// Add event listener to skip button
const skipButton = document.getElementById('skip-button');
skipButton.addEventListener('click', skipToNextVideo);

// Initial loading of the first video
skipToNextVideo();


 });