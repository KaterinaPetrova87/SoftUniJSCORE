function addItem() {
    let text = document.getElementById('newItemText');
    let val = document.getElementById('newItemValue');
    let select = document.getElementById('menu');
    let option = document.createElement('option');

    option.textContent = text.value;
    option.value = val.value;

    select.appendChild(option);

    text.value = '';
    val.value = '';
}