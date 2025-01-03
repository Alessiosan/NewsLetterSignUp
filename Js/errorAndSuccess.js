document.addEventListener('DOMContentLoaded', () => {
   const form = document.getElementById('form-js');
   if (form) {
      form.addEventListener('submit', (e) => {
         const emailInput = document.getElementById('email');
         const emailErrorOutput = document.querySelector('.error-output');
         const pageContent = document.querySelector('.container');
         const successWindow = document.querySelector('.success-window');
         
         if (emailInput.validity.valid) {
            emailErrorOutput.style.display = 'none';
            emailInput.classList.remove('error');
            e.preventDefault();

            // FIXME: imposto il valore della mail nulla dopo l'invio...
            emailInput.value = '';

            pageContent.style.display = 'none';
            successWindow.style.display = 'flex';

            // quando il pulsante dismiss viene cliccato...
            const dismissButton = document.querySelector('.success-window-btn');

            dismissButton.addEventListener('click', () => {
               pageContent.style.display = 'grid';
               successWindow.style.display = 'none';
            });

         } else {
            emailErrorOutput.style.display = 'block';
            emailInput.classList.add('error');
            e.preventDefault();
         }
      });
   }
});