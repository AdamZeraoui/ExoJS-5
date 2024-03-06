
const superQuote = document.querySelector(".superQuote");


const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];  // Vérifier si des favoris sont déjà sauvegardés dans le localStorage

quotes.forEach(function(quote) {
    const miniQuote = document.createElement('div'); //Crée une div
    miniQuote.classList.add('miniQuote'); //Ajoute la class à la div
    const newQuote = miniQuote.cloneNode(); //Clone la avec la class

    newQuote.innerHTML = "<p class='ref'>" + quote.ref + "</p><i class='fa-regular fa-heart'></i><p>" + quote.autor + "</p>"; //Ajoute du html dans la div en appelant les citations et les auteurs.

    
    if (savedFavorites.includes(quote.ref)) { // Vérifier si la citation actuelle est déjà un favori
        newQuote.querySelector('i').classList.replace('fa-regular', 'fa-solid'); //Selectionne l'icone et replace sa class si la vértié et vérifier.
    }

    newQuote.addEventListener('click', function() {
        const icon = this.querySelector('i'); // Selectionne l'icone
        const ref = this.querySelector('.ref').innerText;// Inject du text

        if (icon.classList.contains('fa-regular')) {
            icon.classList.replace('fa-regular', 'fa-solid');

            savedFavorites.push(ref); // Ajouter la référence de la citation aux favoris sauvegardés
        } else {
            icon.classList.replace('fa-solid', 'fa-regular');

            const index = savedFavorites.indexOf(ref); // Retirer la référence de la citation des favoris sauvegardés
            if (index > -1) {
                savedFavorites.splice(index, 1);
            }
        }

        localStorage.setItem('favorites', JSON.stringify(savedFavorites));         // Sauvegarder les favoris dans le localStorage
    });

    superQuote.appendChild(newQuote); // Permet d'insiquer où cloner mes Nodes.
});
