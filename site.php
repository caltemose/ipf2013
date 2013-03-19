<?php
/*
determine GET vars: page (String)
require proper file
*/
if (isset($_GET['p'])) $p = $_GET['p'];
else $p = 'home';
require('inc/' . $p . '_vars.php');

function fix_link($page){
    $local = true;
    
    switch($page) {
        case "home": 
            if ($local) $page = 'site.php';
            else $page = 'index.html';
            break;
        default:
            if ($local) $page = 'site.php?p=' . $page;
    }
    return $page;
}

?><!DOCTYPE html>
<!--[if IEMobile 7 ]>    <html class="no-js iem7"> <![endif]-->
<!--[if (gt IEMobile 7)|!(IEMobile)]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <title>Inman Park Festival 2013 Mobile Site<?php echo $page_title;?></title>
    <meta name="description" content="<?php echo $page_meta_desc;?>">
    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="cleartype" content="on">
    <!--
    @TODO determine how to handle icon
    -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="img/touch/apple-touch-icon-144x144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/touch/apple-touch-icon-114x114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/touch/apple-touch-icon-72x72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="img/touch/apple-touch-icon-57x57-precomposed.png">
    <link rel="shortcut icon" href="img/touch/apple-touch-icon.png">
    <!-- Tile icon for Win8 (144x144 + tile color) -->
    <meta name="msapplication-TileImage" content="img/touch/apple-touch-icon-144x144-precomposed.png">
    <meta name="msapplication-TileColor" content="#222222">

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/ipf.css">
    
    <script src="js/vendor/modernizr-2.6.2.min.js"></script>
</head>
<body>

<header>
    <a href="<?php echo fix_link('home');?>"><img src="img/ipf-logo.png" alt="Inman Park Festival" width="223" height="49" /></a>
</header>

<?php
require('inc/' . $p . '.php');
?>


<script src="js/vendor/zepto.min.js"></script>
<?php
if ($page_js_path != '')
    echo '<script src="js/' . $page_js_path . '"></script>';
?>

<script>/*
var _gaq=[["_setAccount","UA-XXXXX-X"],["_trackPageview"]];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
g.src=("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js";
s.parentNode.insertBefore(g,s)}(document,"script"));
*/</script>

</body>
</html>
