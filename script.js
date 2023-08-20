document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementButton');

    let counter = 0;

    incrementButton.addEventListener('click', async function() {
        counter++;
        counterElement.textContent = counter;
        
        // Update the counter value using an API call
        try {
            const response = await fetch('https://api.example.com/update-counter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ counter }),
            });

            if (!response.ok) {
                console.error('Failed to update counter on the server.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
