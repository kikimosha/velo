<?php

/**
 * CalendarController.
 */
class CalendarController extends Controller
{
	/**
	 * Events action
	 */
	public function actionEvents()
	{
        $data = array(
            array(
                "title" => "Вэйки в Гадяче",
                "start" => "6 Jul, 2013 07:00 AM",
                "end" => "7 Jul, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/10",
                "id" => 10,
                "bgcolor" => "red"
            ),
            array(
                "title" => "Выходные на лошади",
                "start" => "6 Jul, 2013 07:00 AM",
                "end" => "7 Jul, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/4",
                "id" => 4,
                "bgcolor" => "grey"
            ),
            array(
                "title" => "Вэйки в Гадяче",
                "start" => "13 Jul, 2013 07:00 AM",
                "end" => "14 Jul, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/10",
                "id" => 10,
                "bgcolor" => "red"
            ),
            array(
                "title" => "Выходные на лошади",
                "start" => "13 Jul, 2013 07:00 AM",
                "end" => "14 Jul, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/4",
                "id" => 4,
                "bgcolor" => "grey"
            ),
            array(
                "title" => "Морской каякинг на Фиоленте",
                "start" => "13 Jul, 2013 07:00 AM",
                "end" => "14 Jul, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/11",
                "id" => 11,
                "bgcolor" => "#86A723"
            ),
            array(
                "title" => "Байдарки по Северскому Донцу",
                "start" => "13 Jul, 2013 07:00 AM",
                "end" => "14 Jul, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/9",
                "id" => 9,
                "bgcolor" => "#6F8EE8"
            ),
            array(
                "title" => "Вэйки в Гадяче",
                "start" => "20 Jul, 2013 07:00 AM",
                "end" => "21 Jul, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/10",
                "id" => 10,
                "bgcolor" => "red"
            ),
            array(
                "title" => "Выходные на лошади",
                "start" => "20 Jul, 2013 07:00 AM",
                "end" => "21 Jul, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/4",
                "id" => 4,
                "bgcolor" => "grey"
            ),
            array(
                "title" => "Морской каякинг на Фиоленте",
                "start" => "20 Jul, 2013 07:00 AM",
                "end" => "21 Jul, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/11",
                "id" => 11,
                "bgcolor" => "#86A723"
            ),
            array(
                "title" => "Байдарки по Северскому Донцу",
                "start" => "20 Jul, 2013 07:00 AM",
                "end" => "21 Jul, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/9",
                "id" => 9,
                "bgcolor" => "#6F8EE8"
            ),
            array(
                "title" => "Вэйки в Гадяче",
                "start" => "27 Jul, 2013 07:00 AM",
                "end" => "28 Jul, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/10",
                "id" => 10,
                "bgcolor" => "red"
            ),
            array(
                "title" => "Выходные на лошади",
                "start" => "27 Jul, 2013 07:00 AM",
                "end" => "28 Jul, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/4",
                "id" => 4,
                "bgcolor" => "grey"
            ),
            array(
                "title" => "Байдарки по Северскому Донцу",
                "start" => "27 Jul, 2013 07:00 AM",
                "end" => "28 Jul, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/9",
                "id" => 9,
                "bgcolor" => "#6F8EE8"
            )
        );

        $this->layout=false;
        header('Content-type: application/json');
        echo CJSON::encode($data);
        Yii::app()->end();

    }

}