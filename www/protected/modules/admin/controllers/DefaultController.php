<?php

class DefaultController extends Controller
{

	public function actionIndex()
	{
		$this->render('index');
	}

    public function actionSection()
    {
        $model = new Sections();
        if(isset($_GET['id'])) {

            $id = (int)$_GET['id'];
            $sectionInfo = $model->findByPk($id);
            $trips = Trips::model()->findAll("section_id = ". $id);
            $this->render('section', array('sectionInfo' => $sectionInfo, 'trips' => $trips));
        }
    }
}