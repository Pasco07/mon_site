// Exemple de fonctionnalités avec Bootstrap
document.addEventListener('DOMContentLoaded', function() {
    // Validation du formulaire
    const forms = document.querySelectorAll('.needs-validation');
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                // Simulation d'envoi
                event.preventDefault();
                alert('Message envoyé avec succès!');
                form.reset();
                form.classList.remove('was-validated');
            }
            
            form.classList.add('was-validated');
        }, false);
    });

    // Animation du bouton démo
    const demoBtn = document.getElementById('boutonDemo');
    demoBtn.classList.add('btn-pulse');
    
    demoBtn.addEventListener('click', function() {
        const toastHTML = `
            <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
                <div id="liveToast" class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header bg-primary text-white">
                        <strong class="me-auto"><i class="fas fa-magic me-1"></i>Démonstration</strong>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        Merci d'avoir testé cette démonstration!
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', toastHTML);
        
        // Fermer le toast après 3 secondes
        setTimeout(() => {
            const toast = document.querySelector('.toast');
            if (toast) {
                const bsToast = new bootstrap.Toast(toast);
                bsToast.hide();
                
                toast.addEventListener('hidden.bs.toast', () => {
                    toast.remove();
                });
            }
        }, 3000);
    });

    // Tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});