document.addEventListener('DOMContentLoaded', async function() {
    const buyerCounterElement = document.getElementById('buyercounter');
    const buyerIncrementButton = document.getElementById('buyerButton');

    const resellerCounterElement = document.getElementById('resellercounter');
    const resellerIncrementButton = document.getElementById('resellerButton');
    
<<<<<<< HEAD
    let buyerCounter = await getCounterValue('buyerCnt.txt'); // Load initial value from Gist
    let resellerCounter = await getCounterValue('resellerCnt.txt'); // Load initial value from Gist

    console.log('Adding listeners to buttons');
    if (buyerIncrementButton) {
        buyerIncrementButton.addEventListener('click', async function(event) {
            event.preventDefault(); // Prevent default form submission
            console.log('Buyer listener called');
            buyerCounter++;
            // buyerCounterElement.textContent = buyerCounter;
            await updateCounterValue('b', buyerCounter); // Update value in Gist
            window.location.href = 'buyers.html';
        });
    } else {
        console.error('No Buyer Button!!');
    }
    console.log('Buyer listern added');

    if (resellerIncrementButton) {
        resellerIncrementButton.addEventListener('click', async function(event) {
            event.preventDefault(); // Prevent default form submission
            console.log('Reseller listener called');
            resellerCounter++;
            // resellerCounterElement.textContent = resellerCounter;
            await updateCounterValue('r', resellerCounter); // Update value in Gist
            window.location.href = 're-sellers.html';
        });
    } else {
        console.error('No Reseller Button!!');
    }
    console.log('Reseller listern added');

    async function getCounterValue(file_name) {
        console.log('Getting counter value');
        try {
            const response = await fetch('https://api.github.com/gists/34b0932be525fa9e28bd897748fcd26c', {
                headers: {
                    'Authorization': 'Bearer ' + process.env.GH_PERSONAL_ACCESS_TOKEN,
                },
            });
            const data = await response.json();
            let val = data.files[file_name] ? parseInt(data.files[file_name].content) : 250;
            console.log('Getting counter value');
            return val;
        } catch (error) {
            console.error('Error getting counter value:', error);
            return -1000;
        }
    }

    async function updateCounterValue(b_or_s, newValue) {
        console.log('Updating counter value');
        try {
            if (b_or_s == 'b') {
                const response = await fetch(`https://api.github.com/gists/34b0932be525fa9e28bd897748fcd26c`, {
                    method: 'PATCH',
                    headers: {
                        'Authorization': 'Bearer ' + process.env.GH_PERSONAL_ACCESS_TOKEN,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        files: {
                            'buyerCnt.txt': {
                                content: newValue.toString()
                            }
                        }
                    })
                });
            } else {
                const response = await fetch(`https://api.github.com/gists/34b0932be525fa9e28bd897748fcd26c`, {
                    method: 'PATCH',
                    headers: {
                        'Authorization': 'Bearer ' + process.env.GH_PERSONAL_ACCESS_TOKEN,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        files: {
                            'resellerCnt.txt': {
                                content: newValue.toString()
                            }
                        }
                    })
                });
            }
=======
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
            return data.files['counter.txt'] ? parseInt(data.files['counter.txt'].content) : 250;
        } catch (error) {
            console.error('Error getting counter value:', error);
            return -99;
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

>>>>>>> 131910bbc7e1257389621e11781c5c8fd994de9b
            if (!response.ok) {
                console.error('Error updating counter value.');
            }
        } catch (error) {
            console.error('Error updating counter value:', error);
        }
    }
});
