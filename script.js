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
            const response = await fetch('https://api.github.com/gists/34b0932be525fa9e28bd897748fcd26c', {
                headers: {
                    'Authorization': 'Bearer ' + process.env.GH_PERSONAL_ACCESS_TOKEN,
                },
            });
            const data = await response.json();
            return data.files['counter.txt'] ? parseInt(data.files['counter.txt'].content) : 0;
        } catch (error) {
            console.error('Error getting counter value:', error);
            return 0;
        }
    }

    async function updateCounterValue(newValue) {
        try {
            const response = await fetch(`https://api.github.com/gists/34b0932be525fa9e28bd897748fcd26c`, {
                method: 'PATCH',
                headers: {
                    'Authorization': 'Bearer ' + process.env.GH_PERSONAL_ACCESS_TOKEN,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    files: {
                        'counter.txt': {
                            content: newValue.toString()
                        }
                    }
                })
            });

            if (!response.ok) {
                console.error('Error updating counter value.');
            }
        } catch (error) {
            console.error('Error updating counter value:', error);
        }
    }
});
