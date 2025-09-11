    // Відкрити/закрити всі
    document.getElementById('openAll').addEventListener('click', () => items.forEach(d => d.open = true));
    document.getElementById('closeAll').addEventListener('click', () => items.forEach(d => d.open = false));
    