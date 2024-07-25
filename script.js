function generateTable() {
    const number = document.getElementById('numberInput').value;
    const tableDiv = document.getElementById('multiplicationTable');
    tableDiv.innerHTML = '';

    if (number === '') {
        alert('Please enter a number');
        return;
    }

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create header row
    const headerRow = document.createElement('tr');
    const headerCell = document.createElement('th');
    headerCell.innerText = 'Multiplication Table';
    headerCell.colSpan = 2;
    headerRow.appendChild(headerCell);
    thead.appendChild(headerRow);

    // Create table body
    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');

        const cell1 = document.createElement('td');
        cell1.innerText = `${number} x ${i}`;

        const cell2 = document.createElement('td');
        cell2.innerText = number * i;

        row.appendChild(cell1);
        row.appendChild(cell2);
        tbody.appendChild(row);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    tableDiv.appendChild(table);
}
