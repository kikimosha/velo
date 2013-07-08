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
                'gii'=>'gii',
                'gii/<controller:\w+>'=>'gii/<controller>',
                'gii/<controller:\w+>/<action:\w+>'=>'gii/<controller>/<action>',

                'admin'=>'admin',
                'admin/<controller:\w+>'=>'admin/<controller>',
                'admin/<controller:\w+>/<action:\w+>'=>'admin/<controller>/<action>',

                '/page/<alias:\w+>' => 'site/page',
                '/api/page/<alias:\w+>' => 'site/page',

                'section/<id:\d+>' => 'site/index',
                'api/section/<id:\d+>' => 'site/section',

                'trip/<id:\d+>' => 'site/index',
                'api/trip/<id:\d+>' => 'site/trip',

                'api/calendar/events' => 'calendar/events',

                'admin/section/<id:\d+>' => 'admin/default/section',

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


    // modules
    'modules'=>array(
        'admin'=>array(
            'class'=> 'application.modules.admin.AdminModule',
            'password' => '123456'
        ),
        'gii'=>array(
            'class'=>'system.gii.GiiModule',
            'password'=>'dzeta',
            // 'ipFilters'=>array(…список IP…),
            // 'newFileMode'=>0666,
            // 'newDirMode'=>0777,
        ),
    ),
);