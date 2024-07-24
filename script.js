function submitQuiz() {
    var totalQuestions = 3; // Update this count based on the number of questions
    var score = 0;

    // Get all radio buttons
    var radios = document.querySelectorAll('input[type="radio"]:checked');

    // Check if all questions have been answered
    if (radios.length < totalQuestions) {
        alert("Please answer all questions.");
        return;
    }

    // Calculate the score
    radios.forEach(function(radio) {
        score += parseInt(radio.value);
    });

    // Display the result
    var result = document.getElementById('result');
    result.textContent = "You scored " + score + " out of " + totalQuestions;
}

// For debugging: Ensure the script file is being loaded correctly
console.log("script.js loaded");
