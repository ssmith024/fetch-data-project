function fetchData() {
    console.log('Fetch data...')
    fetch('college_degrees.json')
    .then(response => {
        if(!response.ok) {
            throw new Error ('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Fetched Data:', data);
        displayData(data);

    })
    .catch(error=> {
        console.error('Fetch Error:', error);
    });
}
