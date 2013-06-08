<?php
/**
 * Created by JetBrains PhpStorm.
 * User: dzeta
 * Date: 06.06.13
 * Time: 22:46
 * To change this template use File | Settings | File Templates.
 */

return array(
    'title'=>'Please provide your login credential',

    'elements'=>array(
        'username'=>array(
            'type'=>'text',
            'maxlength'=>32,
        ),
        'password'=>array(
            'type'=>'password',
            'maxlength'=>32,
        ),
        'rememberMe'=>array(
            'type'=>'checkbox',
        )
    ),

    'buttons'=>array(
        'login'=>array(
            'type'=>'submit',
            'label'=>'Login',
        ),
    ),
);