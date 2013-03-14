<?php

return array(
	'name'=>'Go Trip',

	'defaultController'=>'site',

    'basePath'=>dirname(__FILE__).DIRECTORY_SEPARATOR.'..',

    // preloading 'log' component
    'preload'=>array('log'),

    // autoloading model classes
    'import'=>array(
        'application.models.*',
        'application.components.*',
    ),

	'components'=>array(
        'errorHandler'=>array(
            // use 'site/error' action to display errors
            'errorAction'=>'site/error',
        ),
		'urlManager'=>array(
			'urlFormat'=>'path',
			'rules'=>array(
                '/section/<id:\d+>' => 'site/index',
                '/api/section/<id:\d+>' => 'site/section',
                '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
			),
		),

        'db'=>array(
            'connectionString' => 'mysql:host=localhost;dbname=gotrip',
            'emulatePrepare' => true,
            'username' => 'root',
            'password' => '',
            'charset' => 'utf8',
            'tablePrefix' => '',
        ),
	),

    // application-level parameters that can be accessed
    // using Yii::app()->params['paramName']
    'params'=>require(dirname(__FILE__).'/params.php'),
);