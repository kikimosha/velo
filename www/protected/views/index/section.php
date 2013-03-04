<!doctype html>
<!--[if lt IE 7 ]> <html class="no-js ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="no-js ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="no-js ie ie8" lang="en"> <![endif]-->
<!--[if IE 9 ]>    <html class="no-js ie ie9" lang="en"> <![endif]-->
<!--[if (gte IE 10)|!(IE)]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
    <meta charset="utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title>Travels</title>

    <meta property="og:title" content="Travels"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="http://..."/>
    <meta property="og:image" content="http://..."/>
    <meta property="og:site_name" content="Travels"/>
    <meta property="fb:admins" content="..."/>
    <meta property="og:description" content="Welcome to Travels"/>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="/css/style.css">

    <script src="/js/libs/modernizr-2.0.min.js"></script>

</head><body class="loading-coverflow  lang-uk">

<aside id="sidebar">

    <a href="/" rel="home" class="home">Home</a>

    <p>Welcome to <strong>Travels</strong>. Bla-bla-bla...</p>

    <div id="menu">

        <nav>
            <a href="/v40cc"></a>
            <a href="/" rel="home">Home</a>
        </nav>

    </div>

</aside>

<section id="cover-flow">

    <nav>
        <?php foreach($sections as $index => $section) {
            $cover_img = '';
            if ($section->cover_filename != '') {
                $cover_img = '<img src="/img/' . $section->cover_filename. '" alt="' . $section->name . '" />';
            }
            echo '<a href="/adventure/' . $section->id .
                '">' . $cover_img . '<figcaption><span>' . ($index+1) .
                '</span><i>' . $section->name . '</i></figcaption></a>';
        } ?>
    </nav>

</section>

<section id="page-wrapper"></section>

<section id="adventure-wrapper"></section>

<div id="videoplayer">
    <a>x</a>
    <video width="768" height="432" id="mediaelement">
        <source type="video/mp4" src="" />
        <source type="video/webm" src="" />
    </video>
</div>

<div id="loader"></div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="/js/libs/jquery-1.6.2.min.js"><\/script>')</script>
<script>if ( typeof window.JSON === 'undefined' ) { document.write('<script src="/js/libs/json2.js"><\/script>'); }</script>
<!--<script src="../assets/js/script.min.js"></script>-->
<script src="/js/script.js"></script>

</body>
</html>