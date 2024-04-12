document.getElementById('Form').addEventListener('submit', function(e) {
            // Empêche la soumission standard du formulaire
            e.preventDefault();

            // Récupère la valeur de l'âge du formulaire
            var rech = document.getElementById('rech').value;

            // URL du Webhook créé sur Make
            var webhookUrl = 'https://hook.eu1.make.com/i8upxp1qqntik8hjvf9qfu71l8wg46gy';

            // Envoie les données au Webhook via une requête POST
            fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({rech: rech})
            })
            .then(response => response.text())
            .then(data => {
                // Traitement en cas de succès
                console.log('Succès:', data);
            })
            .catch((error) => {
                // Traitement en cas d'erreur
                console.error('Erreur:', error);
            });
        });