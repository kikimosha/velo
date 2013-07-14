<!doctype html>
<!--[if lt IE 7 ]> <html class="no-js ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="no-js ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="no-js ie ie8" lang="en"> <![endif]-->
<!--[if IE 9 ]>    <html class="no-js ie ie9" lang="en"> <![endif]-->
<!--[if (gte IE 10)|!(IE)]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
    <meta charset="utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title><?php echo CHtml::encode($this->pageTitle); ?></title>

    <meta property="og:title" content="Go-Trip"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="http://go-trip.com.ua"/>
    <meta property="og:image" content="http://go-trip.com.ua"/>
    <meta property="og:site_name" content="Go-Trip"/>
    <meta property="fb:admins" content="Go-Trip"/>
    <meta property="og:description" content="Welcome to Go-Trip"/>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="<?php echo Yii::app()->request->getBaseUrl(true); ?>/resources/default/css/style.css">
    <link rel="stylesheet" href="<?php echo Yii::app()->request->getBaseUrl(true); ?>/resources/vendor/fuelux/css/fuelux.css">
    <link rel="stylesheet" href="<?php echo Yii::app()->request->getBaseUrl(true); ?>/resources/vendor/calendar/calendar.css">

    <script src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/resources/default/js/libs/modernizr-2.0.min.js"></script>

    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="<?php echo Yii::app()->request->getBaseUrl(true);?>/favicon.ico" type="image/x-icon">

</head>

<body class="loading-coverflow  lang-ru">

<aside id="sidebar">

    <a href="/" rel="home" class="home">Home</a>

    <div class="about">
        <p>Нам часто хочется вырваться за рамки обыденности, и тогда возникают два вопроса: <strong>КУДА?</strong> и <strong>С КЕМ?</strong></p>
        <p>Мы предлагаем Вам познать не только окружающий мир, но и себя. Все наши предложения являются активно – познавательными. Вы не только более детально узнаете историю и достопримечательности нашей страны, увидите собственными глазами её природные и культурные богатства, но и откроете для себя новые увлечения.</p>
        <p>Туры от <strong>Go-Trip</strong> – Ваша возможность расширить свои горизонты.</p>
    </div>

    <div class="contacts">
        <div>Телефоны:<br />
            +38 (066) 147 33 11<br />
            +38 (097) 632 17 84<br />
            +38 (063) 584 24 74
        </div><br />
        <div>Skype: gotrip.com.ua<br />
        E-mail: info@gotrip.com.ua</div>
        <br /><div>
            <a target="_blank" href="http://www.facebook.com/gotrip.com.ua" class="button facebook_button" title="мы на Facebook"></a>
            <a target="_blank" href="http://vk.com/go_trip" class="button vkontacte_button" title="мы Вконтакте"></a>
        </div>
    </div>

</aside>

<?php echo $content; ?>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/resources/default/js/libs/jquery-1.6.2.min.js"><\/script>')</script>
<script>if ( typeof window.JSON === 'undefined' ) { document.write('<script src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/resources/default/js/libs/json2.js"><\/script>'); }</script>
<!--<script src="../assets/js/script.min.js"></script>-->
<script src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/resources/vendor/calendar/calendar.js"></script>
<script src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/resources/default/js/libs/history.js"></script>
<script src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/resources/default/js/libs/libs.js"></script>
<script src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/resources/default/js/script.js"></script>
<script>
    var _gaq=[['_setAccount','UA-41603226-1'],['_trackPageview'],['_trackPageLoadTime']];
    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
        g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
        s.parentNode.insertBefore(g,s)}(document,'script'));
</script>
</body>
</html>
