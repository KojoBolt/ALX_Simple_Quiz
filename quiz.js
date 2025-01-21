
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";
    
    // Retrieve the user's answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        
        // Provide feedback based on the answer
        const feedbackElement = document.getElementById('feedback');
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        // Prompt the user to select an answer if none is selected
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
