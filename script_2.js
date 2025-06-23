// Function to handle opening and closing popups
document.addEventListener('click', function(event) {
    const targetId = event.target.id;

    // Check if the clicked element is an open button
    if (targetId.startsWith('open-popup-')) {
        const popupId = targetId.replace('open-', '');
        document.getElementById(popupId).showModal();
    }

    // Check if the clicked element is a close button
    if (targetId.startsWith('close-popup-')) {
        const popupId = targetId.replace('close-', '');
        document.getElementById(popupId).close();
    }
});