$(document).ready(function () {
    
    // SETUP
    var container = $('.main-ctn__albums-ctn')

    // Init Handlebars
    var source = $('#card-template').html();
    var templateSong = Handlebars.compile(source);

    // Home page population
    populateContainer(container, templateSong);
    
});

// function

// Home page population when document ready

function populateContainer(container, templateSong) {
    $.ajax({
        url: 'http://localhost/esercizi-php/php-ajax-dischi/partials/data/database-json.php',
        method: 'GET',
        success: function(res) {
            
            // conservo i risultati in una variabile
            var album = res;
            
                for (var i = 0; i < album.length; i++) {
 
                    var song  = album[i];

                    // imposto dati template
                    var context = {
                        img_path: song.img_path,
                        title: song.title,
                        author: song.author,
                        year: song.year   
                    }                      
                    
                    //compilare e aggiungere template
                    var htmlSong = templateSong(context);
                    container.append(htmlSong);            
                } 

        },
            
        error: function() {
            console.log('Errore chiamata'); 
        }
    });
};