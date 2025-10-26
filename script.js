document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const modal = document.getElementById('popupModal');
    const popupMessage = document.getElementById('popupMessage');
    const closeBtn = document.querySelector('.close');
    const closeModalBtn = document.getElementById('closeModal');
    
    // Function to show modal
    function showModal(message) {
        popupMessage.textContent = message;
        modal.style.display = 'block';
    }
    
    // Function to hide modal
    function hideModal() {
        modal.style.display = 'none';
    }
    
    // Close modal when clicking X or close button
    closeBtn.onclick = hideModal;
    closeModalBtn.onclick = hideModal;
    
    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            hideModal();
        }
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const namaDepan = document.getElementById('namaDepan').value.trim();
        const namaBelakang = document.getElementById('namaBelakang').value.trim();
        
        if (namaDepan && namaBelakang) {
            const namaLengkap = namaDepan + ' ' + namaBelakang;
            const message = 'Nama Lengkap : ' + namaLengkap;
            
            // Show in console log
            console.log(message);
            
            // Show in popup
            showModal(message);
        } else {
            const errorMessage = 'Mohon isi kedua field nama depan dan nama belakang!';
            console.log(errorMessage);
            showModal(errorMessage);
        }
    });
});