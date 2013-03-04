<?php

/**
 * SiteController is the default controller to handle user requests.
 */
class IndexController extends CController
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
        $this->render('section');
    }

    /**
     * Adventure action
     */
    public function actionAdventure()
    {
        $this->render('adventure');
    }

}