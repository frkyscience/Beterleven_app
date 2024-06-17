function search() {
    var text = document.getElementById('search_hero').value.toLowerCase();
    const tr = document.getElementsByTagName('tr');
    for (let i = 1; i < tr.length; i++) {
        const heroName = tr[i].getElementsByTagName('td')[1].textContent.toLowerCase();
        if (heroName.includes(text)) {
            tr[i].style.display = '';
        } else {
            tr[i].style.display = 'none';
        }
    }
}

document.getElementById('search_hero').addEventListener('input', search);

// up to date 
function updateDate() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();

    var formattedDate = day + '/' + month + '/' + year;

    document.getElementById('dynamicDate').innerText = formattedDate;
}

updateDate();

setInterval(updateDate, 1000);