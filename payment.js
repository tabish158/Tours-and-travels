document.addEventListener("DOMContentLoaded", function() {
    let tourName = localStorage.getItem('selectedTour');
    let tourPrice = localStorage.getItem('tourPrice');

    document.getElementById('tourName').textContent = "Tour: " + tourName;
    document.getElementById('tourPrice').textContent = "Price: £" + tourPrice + " per person";
});
