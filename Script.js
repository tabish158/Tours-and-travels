function openPaymentPage(tourName, price) {
    localStorage.setItem('selectedTour', tourName);
    localStorage.setItem('tourPrice', price);
    window.location.href = "payment.html";
}
