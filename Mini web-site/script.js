function fetchData() {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            const dataContainer = document.getElementById('dataContainer');
            dataContainer.innerHTML = ''; // Clear previous data
            dataContainer.innerHTML = `<p>${data.message}</p>`;
        })
        .catch(error => console.error('Error fetching data:', error));
}
