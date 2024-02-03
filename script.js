

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.contacts').forEach(function(element){
        element.addEventListener('click', handleClick, false);
    });

    function handleClick() {
        alert('Sorry, the contact form is temporary unavailable.');
    }
});
