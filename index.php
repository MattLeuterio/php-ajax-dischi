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
    <!-- FontAwesome -->
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css'/>
    <!-- Favicon -->
    <link rel="icon" href="assets/img/favicon-spotify.32x32.png" sizes="32x32 48x48">
</head>
<body>
    
    <?php // Header-Site
    include __DIR__ . '/partials/template/header.php';
    ?>

    <main class="main-ctn">
        <section class="main-ctn__albums-ctn">
            
            <?php
            foreach ($database as $song) { 
            $title = $song['title'];
            $author = $song['author'];
            $year = $song['year'];
            $img = $song['img_path'];
            ?>                   
            <div class="card">
                <div class="card__img-ctn">
                    <img src="<?php echo $img; ?>" alt=" <?php echo $title . ' cover'; ?>">
                </div>
                <div class="card__info-ctn">
                    <h2><?php echo $title; ?></h2>
                    <h3><?php echo $author; ?></h3>
                    <h4><?php echo $year; ?></h4>
                </div>
            </div>

            <?php } ?>

        </section>
    </main>

    <!-- script -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js'></script>
    <script src="assets/js/main.js"></script>
</body>
</html>