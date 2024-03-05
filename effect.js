

const superQuote = document.querySelector(".superQuote")
quotes.forEach(function(quote){

    const miniQuote = document.createElement('div');
    miniQuote.classList.add('miniQuote');
    const newQuote = miniQuote.cloneNode()
  

    newQuote.innerHTML = "<p class='ref'>"+ quote.ref+"</p><i class='fa-regular fa-heart'></i><p>"+ quote.autor+"</p>"

    newQuote.addEventListener('click', function() {
  
        const icon = this.querySelector('i');

        if (icon.classList.contains('fa-regular')) {

            icon.classList.replace('fa-regular', 'fa-solid');

        } else {

            icon.classList.replace('fa-solid', 'fa-regular');

        }
    });

    superQuote.appendChild(newQuote);
})

