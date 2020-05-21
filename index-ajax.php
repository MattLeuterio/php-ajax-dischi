<?php // Include Database
 include __DIR__ . '/partials/data/database.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Main CSS -->
    <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
    
    <?php // Header-Site
    include __DIR__ . '/partials/template/header.php';
    ?>

    <main class="main-ctn">
        <section class="main-ctn__albums-ctn">
            
                    
            

           

        </section>
    </main>


    <!-- handlebars -->

    <script id="card-template" type="text/x-handlebars-template">
        <div class="card">
            <div class="card__img-ctn">
                <img src="{{ img_path }}" alt=" {{ title }} cover ?>">
            </div>
            <div class="card__info-ctn">
                <h2>{{ title }}</h2>
                <h3>{{ author }}</h3>
                <h4>{{ year }}</h4>
            </div>
        </div>        
    </script>

    <!-- script -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.min.js'></script>
    <script src="assets/js/main.js"></script>
</body>
</html>