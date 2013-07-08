<?php

class AdminModule extends CWebModule
{
   public $password;

    public $ipFilters=array('127.0.0.1','::1');

	public function init()
	{
		// this method is called when the module is being created
		// you may place code here to customize the module or the application

		// import the module-level models and components
		$this->setImport(array(
			'application.models.*',
			'application.components.*',
		));

        Yii::app()->setComponents(array(
            'errorHandler'=>array(
                'class'=>'CErrorHandler',
                'errorAction'=>$this->getId().'/default/error',
            ),
            'user'=>array(
                'class'=>'CWebUser',
                'stateKeyPrefix'=>'admin',
                'loginUrl'=>Yii::app()->createUrl($this->getId().'/default/login'),
            ),
            'widgetFactory' => array(
                'class'=>'CWidgetFactory',
                'widgets' => array()
            )
        ), false);

	}

    public function beforeControllerAction($controller, $action)
    {
        if(parent::beforeControllerAction($controller, $action))
        {
            $route=$controller->id.'/'.$action->id;
            if(!$this->allowIp(Yii::app()->request->userHostAddress) && $route!=='default/error')
                throw new CHttpException(403,"You are not allowed to access this page.");

            $publicPages=array(
                'default/login',
                'default/error',
            );
            if($this->password!==false && Yii::app()->user->isGuest && !in_array($route,$publicPages))
                Yii::app()->user->loginRequired();
            else
                return true;
        }
        return false;
	}

    protected function allowIp($ip)
    {
        if(empty($this->ipFilters))
            return true;
        foreach($this->ipFilters as $filter)
        {
            if($filter==='*' || $filter===$ip || (($pos=strpos($filter,'*'))!==false && !strncmp($ip,$filter,$pos)))
                return true;
        }
        return false;
    }
}
