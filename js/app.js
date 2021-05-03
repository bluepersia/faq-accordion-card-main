let selected;


document.getElementById('faq__accordion').addEventListener('click', e => {

    const qa = e.target.closest('.faq__qa');

    if (qa) {
        if (selected)
            selected.classList.remove('faq__qa--selected');

        if (selected != qa)
            qa.classList.add('faq__qa--selected');
        else {
            selected = null;
            return;
        }

        selected = qa;
    }

});