
    const input = document.getElementById('q');
    const items = Array.from(document.querySelectorAll('details.faq'));

    function filter() {
      const term = input.value.trim().toLowerCase();
      items.forEach(d => {
        const text = (d.querySelector('summary')?.innerText + " " + d.querySelector('.answer')?.innerText)
          .toLowerCase();
        const hit = text.includes(term);
        d.style.display = hit ? '' : 'none';
        if (!hit) d.open = false;
      });
    }
		 input.addEventListener('input', filter);