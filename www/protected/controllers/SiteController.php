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
        $sections = $model->findAll();
        $this->render('index', array('sections' => $sections));
	}

    /**
     * Section action
     */
    public function actionSection()
    {
        $model = new Sections();
        if(isset($_GET['id'])) {

            $id = $_GET['id'];
            $sectionInfo = $model->findByPk($id);
            $prevId = $model->getPrevId($id);
            $nextId = $model->getNextId($id);

            echo $this->renderPartial(
                'section',
                array(
                    'sectionInfo' => $sectionInfo,
                    'prevId' => $prevId,
                    'nextId' => $nextId
                )
            );
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