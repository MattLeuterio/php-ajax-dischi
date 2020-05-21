$(document).ready(function () {
    
    // SETUP
    var container = $('.main-ctn__albums-ctn');
    var iconHome = $('.site-header__nav__logo img');
    var iconSearch = $('.icon-search');
    var inputSearch = $('#author-search');


    // Init Handlebars
    var source = $('#card-template').html();
    var templateSong = Handlebars.compile(source);

    // Home page population
    populateContainer(container, templateSong);

    // Repopulate page with click on home icon
    iconHome.on('click', function() {
        resetContainer(container);
        populateContainer(container, templateSong);
    });

    // Ajax Call for artist search when click on search icon
    iconSearch.on('click', function() {
        searchArtist(inputSearch, container, templateSong);    
    });

    // Ajax Call for artist search when press enter
    inputSearch.keypress(function(event) {
        if(event.which == 13) {
            searchArtist(inputSearch, container, templateSong);
        };
    });

    // filter song with keyup on input search field
    inputSearch.on('keyup', function() {
        filterSearch(inputSearch);      
    });

    
}); // <- End Doc Ready



/*******************
 * 
 *  FUNCTIONS
 * 
 *******************/

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
                    printTemplate(song, templateSong, container);           
                }; 

        },
            
        error: function() {
            console.log('Errore chiamata'); 
        }
    });
};

// Search by artist
function searchArtist(inputSearch, container, templateSong) {
    inputSearch.attr('placeholder', 'Search artist');
        var card = $('.card');

        var query = inputSearch.val().trim().toLowerCase();

        if (query != '') {
            resetContainer(container);

            $.ajax({
                url: 'http://localhost/esercizi-php/php-ajax-dischi/partials/data/database-json.php',
                method: 'GET',
                success: function(res) {
                    
                    // conservo i risultati in una variabile
                    var album = res;
                    
                        for (var i = 0; i < album.length; i++) {
         
                            var song  = album[i];
                            var author = song['author'].toLowerCase();
                            
                            if(author.includes(query)) {
                                printTemplate(song, templateSong, container); 
                            }
                                       
                        }
                },
                    
                error: function() {
                    console.log('Errore chiamata'); 
                }
            });


        } else {
            inputSearch.attr('placeholder', 'Please enter something');
        }
};

// Print Template Handlebars
function printTemplate(song, templateSong, container) {
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
};

// filter search
function filterSearch(inputSearch) {
    var card = $('.card');
    var query = inputSearch.val().trim().toLowerCase();
    
    card.filter(function() {         
        $(this).toggle($(this).find('.card__info-ctn h3').text().toLowerCase().includes(query));
    });
};

// Reset Container
function resetContainer(container)  {
    container.text('');
};