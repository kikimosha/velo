<?php

return array(
	'name'=>'Main Page',
	'defaultController'=>'index',
	'components'=>array(
		'urlManager'=>array(
			'urlFormat'=>'path',
			'rules'=>array(
				'/adventure/<g:\w>'=>'index/tour',
			),
		),
	),
);