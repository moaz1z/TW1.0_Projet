document.addEventListener('DOMContentLoaded', function () {
    
    var formulaire = document.querySelector('form');

    
    var numInput = document.querySelector('input[name="num"]');

    
    numInput.addEventListener('input', function () {
       
        validerNumero();
    });

   
    formulaire.addEventListener('submit', function (event) {
        
        event.preventDefault();

       
        if (validerFormulaire()) {
            
            formulaire.submit();
        }
    });

    
    function validerNumero() {
        var numValue = numInput.value.trim();

        
        var numRegex = /^\d{1,8}$/;
        if (!numRegex.test(numValue)) {
            alert('Veuillez entrer un numéro valide de maximum 8 chiffres.');
            numInput.value = numValue.slice(0, 8); 
        }
    }

    
    function validerFormulaire() {
        var nom = document.querySelector('input[name="nom"]').value.trim();
        var prenom = document.querySelector('input[name="prenom"]').value.trim();
        var email = document.querySelector('input[name="email"]').value.trim();
        var num = numInput.value.trim();
        var message = document.querySelector('textarea[name="Message"]').value.trim();

        
        if (nom === '' || prenom === '' || email === '' || num === '' || message === '') {
            alert('Veuillez remplir tous les champs du formulaire.');
            return false;
        }

        
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Veuillez entrer une adresse e-mail valide.');
            return false;
        }

       
        return true;
    }
});
