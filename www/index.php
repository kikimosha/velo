<?php

$yii=dirname(__FILE__).'/../yii/yii.php';
$config=dirname(__FILE__).'/protected/config/index.php';

require_once($yii);
Yii::createWebApplication($config)->run();