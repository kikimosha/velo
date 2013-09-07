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
                "title" => "Велопоход Край пещерных городов",
                "start" => "7 Sep, 2013 07:00 AM",
                "end" => "8 Sep, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/6",
                "id" => 6,
                "bgcolor" => "yellow"
            ),
            array(
                "title" => "Велопоход по степному Крыму",
                "start" => "14 Sep, 2013 07:00 AM",
                "end" => "15 Sep, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/2",
                "id" => 2,
                "bgcolor" => "yellow"
            ),
            array(
                "title" => "Велопоход Край пещерных городов",
                "start" => "21 Sep, 2013 07:00 AM",
                "end" => "22 Sep, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/6",
                "id" => 6,
                "bgcolor" => "yellow"
            ),
            array(
                "title" => "Велопоход по степному Крыму",
                "start" => "28 Sep, 2013 07:00 AM",
                "end" => "29 Sep, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/2",
                "id" => 2,
                "bgcolor" => "yellow"
            ),
            array(
                "title" => "Велопоход Край пещерных городов",
                "start" => "5 Oct, 2013 07:00 AM",
                "end" => "6 Oct, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/6",
                "id" => 6,
                "bgcolor" => "yellow"
            ),
            array(
                "title" => "Велопоход по степному Крыму",
                "start" => "12 Oct, 2013 07:00 AM",
                "end" => "13 Oct, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/2",
                "id" => 2,
                "bgcolor" => "yellow"
            ),
            array(
                "title" => "Велопоход Край пещерных городов",
                "start" => "19 Oct, 2013 07:00 AM",
                "end" => "20 Oct, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/6",
                "id" => 6,
                "bgcolor" => "yellow"
            ),
            array(
                "title" => "Велопоход по степному Крыму",
                "start" => "26 Oct, 2013 07:00 AM",
                "end" => "27 Oct, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/2",
                "id" => 2,
                "bgcolor" => "yellow"
            ),
            array(
                "title" => "Морской каякинг на Фиоленте",
                "start" => "28 Sep, 2013 07:00 AM",
                "end" => "29 Sep, 2013 05:00 PM",
                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/11",
                "id" => 11,
                "bgcolor" => "#86A723"
            ),
//            array(
//                "title" => "Байдарки по Северскому Донцу",
//                "start" => "20 Jul, 2013 07:00 AM",
//                "end" => "21 Jul, 2013 05:00 PM",
//                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/9",
//                "id" => 9,
//                "bgcolor" => "#6F8EE8"
//            ),
//            array(
//                "title" => "Вэйки в Гадяче",
//                "start" => "27 Jul, 2013 07:00 AM",
//                "end" => "28 Jul, 2013 05:00 PM",
//                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/10",
//                "id" => 10,
//                "bgcolor" => "red"
//            ),
//            array(
//                "title" => "Выходные на лошади в Крыму",
//                "start" => "27 Jul, 2013 07:00 AM",
//                "end" => "28 Jul, 2013 05:00 PM",
//                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/4",
//                "id" => 4,
//                "bgcolor" => "grey"
//            ),
//            array(
//                "title" => "Байдарки по Северскому Донцу",
//                "start" => "27 Jul, 2013 07:00 AM",
//                "end" => "28 Jul, 2013 05:00 PM",
//                "url" => Yii::app()->request->getBaseUrl(true) . "/trip/9",
//                "id" => 9,
//                "bgcolor" => "#6F8EE8"
//            )
        );

        $this->layout=false;
        header('Content-type: application/json');
        echo CJSON::encode($data);
        Yii::app()->end();

    }

}