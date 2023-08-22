document.addEventListener('DOMContentLoaded', async function() {
    const buyerCounterElement = document.getElementById('buyercounter');
    const buyerIncrementButton = document.getElementById('buyerButton');

    const resellerCounterElement = document.getElementById('resellercounter');
    const resellerIncrementButton = document.getElementById('resellerButton');
    
    let buyerCounter = 0;//await getCounterValue('buyerCnt.txt'); // Load initial value from Gist
    let resellerCounter = 0;//await getCounterValue('resellerCnt.txt'); // Load initial value from Gist

    console.log('Adding listeners to buttons');
    if (buyerIncrementButton) {
        buyerIncrementButton.addEventListener('click', async function(event) {
            event.preventDefault(); // Prevent default form submission
            console.log('Buyer listener called');
            buyerCounter++;
            buyerCounterElement.textContent = buyerCounter;
            await updateCounterValue('bb', buyerCounter); // Update value in Gist
            // window.location.href = 'buyers.html';
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
            resellerCounterElement.textContent = resellerCounter;
            await updateCounterValue('rr', resellerCounter); // Update value in Gist
            // window.location.href = 're-sellers.html';
        });
    } else {
        console.error('No Reseller Button!!');
    }
    console.log('Reseller listern added');

    // async function getCounterValue(file_name) {
    //     console.log('Getting counter value');
    //     try {
    //         const response = await fetch('https://api.github.com/gists/34b0932be525fa9e28bd897748fcd26c', {
    //             headers: {
    //                 'Authorization': 'Bearer ' + process.env.GH_PERSONAL_ACCESS_TOKEN,
    //             },
    //         });
    //         const data = await response.json();
    //         let val = data.files[file_name] ? parseInt(data.files[file_name].content) : 250;
    //         console.log('Getting counter value');
    //         return val;
    //     } catch (error) {
    //         console.error('Error getting counter value:', error);
    //         return -1000;
    //     }
    // }

    async function updateCounterValue(b_or_r, newValue) {
        console.log('Updating counter value');
        try {
            // if (b_or_s == 'b') {
            //     const response = await fetch(`https://api.github.com/gists/34b0932be525fa9e28bd897748fcd26c`, {
            //         method: 'PATCH',
            //         headers: {
            //             'Authorization': 'Bearer ' + process.env.GH_PERSONAL_ACCESS_TOKEN,
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify({
            //             files: {
            //                 'buyerCnt.txt': {
            //                     content: newValue.toString()
            //                 }
            //             }
            //         })
            //     });
            // } else {
            //     const response = await fetch(`https://api.github.com/gists/34b0932be525fa9e28bd897748fcd26c`, {
            //         method: 'PATCH',
            //         headers: {
            //             'Authorization': 'Bearer ' + process.env.GH_PERSONAL_ACCESS_TOKEN,
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify({
            //             files: {
            //                 'resellerCnt.txt': {
            //                     content: newValue.toString()
            //                 }
            //             }
            //         })
            //     });
            // }
            // if (!response.ok) {
            //     console.error('Error updating counter value.');
            // }
            const response = await fetch(`https://2b1tp0z2gi.execute-api.us-east-2.amazonaws.com/`, {
                mode: "no-cors",
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: b_or_r
            });
        } catch (error) {
            console.error('Error updating counter value:', error);
        }
    }
});
