<?php
/* @var $this DefaultController */

$this->breadcrumbs=array(
    $this->module->id,
);
?>
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
    <link rel="stylesheet" href="<?php echo Yii::app()->request->baseUrl; ?>/resources/admin/css/reset.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="<?php echo Yii::app()->request->baseUrl; ?>/resources/admin/css/style.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="<?php echo Yii::app()->request->baseUrl; ?>/resources/admin/css/invalid.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="<?php echo Yii::app()->request->baseUrl; ?>/resources/admin/css/thickbox.css" type="text/css" media="screen" />
    <!--[if lte IE 7]>
    <link rel="stylesheet" href="<?php echo Yii::app()->request->baseUrl; ?>/resources/admin/css/ie.css" type="text/css" media="screen" />
    <![endif]-->
    <script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/resources/admin/scripts/jquery.js"></script>
    <script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/resources/admin/scripts/thickbox.js"></script>
    <script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/resources/admin/scripts/custom.js"></script>
    <script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/resources/admin/scripts/jquery.wysiwyg.js"></script>
    <!--[if IE]><script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/resources/admin/scripts/jquery.bgiframe.js"></script><![endif]-->
    <!--[if IE 6]>
    <script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/resources/admin/scripts/DD_belatedPNG_0.0.7a.js"></script>
    <script type="text/javascript">
        DD_belatedPNG.fix('.png_bg, img, li');
    </script>
    <![endif]-->
</head>
<body>
<div id="body-wrapper">
    <div id="sidebar"><div id="sidebar-wrapper">
        <h1>Adminka</h1>
        <div id="profile-links">
            <a href="/">Go Site</a> | <a href="/">Logout</a>
        </div>

        <ul id="main-nav">
            <li>
                <a href="#" class="nav-top-item no-submenu current">Категории</a>
            </li>
            <li>
                <a href="#" class="nav-top-item">Sections</a>
                <ul>
                    <li><a href="#">подпункт 1</a></li>
                    <li><a href="#">подпункт 2</a></li>
                    <li><a href="/admin/section/3">Велы</a></li>
                </ul>
            </li>
        </ul>

    </div></div>

    <div id="main-content">

        <?php echo $content; ?>

        <div id="footer">
            <small>
                &copy; Copyright 2013 All Rights Reserved
            </small>
        </div>
    </div>
</div>
</body>
</html>