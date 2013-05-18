<?php

/**
 * SiteController is the default controller to handle user requests.
 */
class SiteController extends Controller
{
	/**
	 * Index action is the default action in a controller.
	 */
	public function actionIndex()
	{
        $model = new Sections();
        $sections = $model->findAll(array('order'=>"position ASC"));
        $this->render('index', array('sections' => $sections));
	}

    /**
     * Section action
     */
    public function actionSection()
    {
        $model = new Sections();
        if(isset($_GET['id'])) {

            $id = (int)$_GET['id'];
            $sectionInfo = $model->findByPk($id);
            $prevId = $model->getPrevId($id);
            $nextId = $model->getNextId($id);

            $trips = Trips::model()->findAll("section_id = ". $id);

            echo $this->renderPartial(
                'section',
                array(
                    'sectionInfo' => $sectionInfo,
                    'trips' => $trips,
                    'prevId' => $prevId,
                    'nextId' => $nextId
                )
            );
        }
    }

    public function actionTrip()
    {
        $model = new Trips();
        if(isset($_GET['id'])) {
            $id = (int)$_GET['id'];
            $tripInfo = $model->getTripInfo($id);
            //$this->render('trip', array('tripInfo' => $tripInfo));
            echo $this->renderPartial(
                'trip',
                array('tripInfo' => $tripInfo)
            );
        }
    }

    public function actionPage()
    {
        $model = new Pages();
        if(isset($_GET['alias'])) {
            $alias = mysql_real_escape_string($_GET['alias']);
            $pageInfo = $model->findAll("url_alias = '" . $alias . "'", array('limit'=>1));
            $this->render('page', array('pageInfo' => $pageInfo[0]));
        }
    }

    /**
     * This is the action to handle external exceptions.
     */
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

}