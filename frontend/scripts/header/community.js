document.addEventListener("DOMContentLoaded", () => {
    const commentsList = document.getElementById('comments-list');
    const commentInput = document.getElementById('comment-input');
    const submitCommentButton = document.getElementById('submit-comment');

    // Function to add a comment
    const addComment = () => {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const commentElement = document.createElement('div');
            commentElement.textContent = commentText;
            commentsList.appendChild(commentElement);
            commentInput.value = ''; // Clear the input after submission
        } else {
            alert('Please enter a comment before submitting.');
        }
    };

    // Add event listener to the submit button
    submitCommentButton.addEventListener('click', addComment);
});
