document.addEventListener('DOMContentLoaded', async function() {
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementButton');
    
    let counter = await getCounterValue(); // Load initial value from Gist

    incrementButton.addEventListener('click', async function() {
        counter++;
        counterElement.textContent = counter;
        await updateCounterValue(counter); // Update value in Gist
    });

    async function getCounterValue() {
        try {
            const response = await fetch('https://api.github.com/gists/counter', {
                headers: {
                    'Authorization': 'Bearer ' + process.env.GH_PERSONAL_ACCESS_TOKEN,
                },
            });
            // ... Rest of the code
        } catch (error) {
            console.error('Error getting counter value:', error);
            return 0;
        }
    }

    async function updateCounterValue(newValue) {
        try {
            const response = await fetch(`https://api.github.com/gists/counter`, {
                method: 'PATCH',
                headers: {
                    'Authorization': 'Bearer ' + process.env.GH_PERSONAL_ACCESS_TOKEN,
                    'Content-Type': 'application/json'
                },
                // ... Rest of the code
            });

            if (!response.ok) {
                console.error('Error updating counter value.');
            }
        } catch (error) {
            console.error('Error updating counter value:', error);
        }
    }
});
