<?php

return array(
	'name'=>'Main Page',
	'defaultController'=>'index',

    'basePath'=>dirname(__FILE__).DIRECTORY_SEPARATOR.'..',

    // preloading 'log' component
    'preload'=>array('log'),

    // autoloading model classes
    'import'=>array(
        'application.models.*'
    ),

	'components'=>array(
		'urlManager'=>array(
			'urlFormat'=>'path',
			'rules'=>array(
				'/adventure/<g:\w>'=>'index/adventure',
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
);