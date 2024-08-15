document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addItemBtn = document.getElementById('addItemBtn');
    const shoppingList = document.getElementById('shoppingList');

    const loadItems = () => {
        const items = JSON.parse(localStorage.getItem('shoppingList')) || [];
        shoppingList.innerHTML = '';
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', () => {
                removeItem(index);
            });
            li.appendChild(removeBtn);
            shoppingList.appendChild(li);
        });
    };

    const addItem = () => {
        const item = itemInput.value.trim();
        if (item !== '') {
            const items = JSON.parse(localStorage.getItem('shoppingList')) || [];
            items.push(item);
            localStorage.setItem('shoppingList', JSON.stringify(items));
            itemInput.value = '';
            loadItems();
        }
    };

    const removeItem = (index) => {
        const items = JSON.parse(localStorage.getItem('shoppingList')) || [];
        items.splice(index, 1);
        localStorage.setItem('shoppingList', JSON.stringify(items));
        loadItems();
    };

    addItemBtn.addEventListener('click', addItem);
    itemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    });

    loadItems();
});
