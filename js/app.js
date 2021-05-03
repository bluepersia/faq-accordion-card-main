let selected;


document.getElementById('faq__accordion').addEventListener('click', e => {

    const { target } = e;

    if (target.matches('.faq__question')) {
        const qa = target.closest('.faq__qa');

        if (qa) {
            if (selected)
                selected.classList.remove('faq__qa--selected');

            if (qa == selected) {
                selected = null;
                return;
            }

            qa.classList.add('faq__qa--selected');
            selected = qa;
        }
    }

});