<?php

class DefaultController extends CController
{
    public $layout='/layouts/main';

    public function getPageTitle()
    {
        if($this->action->id==='index')
            return 'Admin Panel - Main page';
        else
            return 'Admin Panel - '.ucfirst($this->action->id).' Actionr';
    }

    public function actionIndex()
    {
        $this->render('index');
    }

    public function actionError()
    {
        if($error=Yii::app()->errorHandler->error)
        {
            if(Yii::app()->request->isAjaxRequest)
                echo $error['message'];
            else
                $this->render('error', $error);
        }
    }

    /**
     * Displays the login page
     */
    public function actionLogin()
    {
        $model=Yii::createComponent('admin.models.LoginForm');

        // collect user input data
        if(isset($_POST['LoginForm']))
        {
            $model->attributes=$_POST['LoginForm'];
            // validate user input and redirect to the previous page if valid
            if($model->validate() && $model->login())
                $this->redirect(Yii::app()->createUrl('admin/default/index'));
        }
        // display the login form
        $this->render('login',array('model'=>$model));
    }

    /**
     * Logs out the current user and redirect to homepage.
     */
    public function actionLogout()
    {
        Yii::app()->user->logout(false);
        $this->redirect(Yii::app()->createUrl('admin/default/index'));
    }
}


//class DefaultController extends Controller
//{
//
//	public function actionIndex()
//	{
//		$this->render('index');
//	}
//
//    public function actionSection()
//    {
//        $model = new Sections();
//        if(isset($_GET['id'])) {
//
//            $id = (int)$_GET['id'];
//            $sectionInfo = $model->findByPk($id);
//            $trips = Trips::model()->findAll("section_id = ". $id);
//            $this->render('section', array('sectionInfo' => $sectionInfo, 'trips' => $trips));
//        }
//    }
//}



}