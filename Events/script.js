let inputRows = document.getElementById('rows');
let inputColumns = document.getElementById('columns');
let submitBtn = document.getElementById('submit');
let clearTableBtn = document.getElementById('clear');
let tbody = document.getElementById('tbody');

submitBtn.addEventListener('click', function () {
    let rows = inputRows.value;
    let columns = inputColumns.value;

    console.log(rows)
    console.log(columns)

    let string;

    for (let r = 1; r <= rows; r++) {
        document.getElementById('table').border = '3px';
        string += `<tr>`;

        for (let c = 1; c <= columns; c++) {
            string += `<td>Row ${r}, Column ${c}</td>`;
        
    }
    tbody.innerHTML = string;
}
    inputRows.value = ' ';
    inputColumns.value = ' ';
});

clearTableBtn.addEventListener('click', function(){
    tbody.innerHTML = ' ';
    document.getElementById('table').border = 0;
})

