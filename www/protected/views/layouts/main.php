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

    <meta property="og:title" content="Travels"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="http://..."/>
    <meta property="og:image" content="http://..."/>
    <meta property="og:site_name" content="Travels"/>
    <meta property="fb:admins" content="..."/>
    <meta property="og:description" content="Welcome to Travels"/>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="<?php echo Yii::app()->request->baseUrl; ?>/resources/default/css/style.css">
    <link rel="stylesheet" href="<?php echo Yii::app()->request->baseUrl; ?>/resources/vendor/fuelux/css/fuelux.css">

    <script src="<?php echo Yii::app()->request->baseUrl; ?>/resources/default/js/libs/modernizr-2.0.min.js"></script>

</head><body class="loading-coverflow  lang-ru">

<aside id="sidebar">

    <a href="/" rel="home" class="home">Home</a>

    <div class="about">
        <p>Нам часто хочется вырваться за рамки обыденности, и тогда возникают два вопросы: <strong>КУДА?</strong> и <strong>С КЕМ?</strong></p>
        <p>Мы предлагаем Вам познать не только окружающий мир, но и себя. Все наши предложения являются активно – познавательными. Вы не только более детально узнаете историю и достопримечательности нашей страны, увидите собственными глазами её природные и культурные богатства, но и откроете для себя новые увлечения.</p>
        <p>Туры от Go-Trip – Ваша возможность расширить свои горизонты.</p>
    </div>

    <div id="menu">

        <nav>
            <a href="/" rel="home">Главная</a>
            <a href="/" rel="contacts">Контакты</a>
        </nav>

    </div>

</aside>

<?php echo $content; ?>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="<?php echo Yii::app()->request->baseUrl; ?>/resources/default/js/libs/jquery-1.6.2.min.js"><\/script>')</script>
<script>if ( typeof window.JSON === 'undefined' ) { document.write('<script src="<?php echo Yii::app()->request->baseUrl; ?>/resources/default/js/libs/json2.js"><\/script>'); }</script>
<!--<script src="../assets/js/script.min.js"></script>-->
<script src="<?php echo Yii::app()->request->baseUrl; ?>/resources/default/js/libs/history.js"></script>
<script src="<?php echo Yii::app()->request->baseUrl; ?>/resources/default/js/libs/libs.js"></script>
<script src="<?php echo Yii::app()->request->baseUrl; ?>/resources/default/js/script.js"></script>
</body>
</html>
