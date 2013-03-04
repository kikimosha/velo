<?php
/**
 * Created by JetBrains PhpStorm.
 * User: dzeta
 * Date: 02.03.13
 * Time: 7:13
 * To change this template use File | Settings | File Templates.
 */

class Sections extends CActiveRecord
{
    /**
     * The followings are the available columns in table 'sections':
     * @var integer $id
     * @var string $name
     * @var string $description
     * @var string $position
     */

    /**
     * Returns the static model of the specified AR class.
     * @return CActiveRecord the static model class
     */
    public static function model($className=__CLASS__)
    {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName()
    {
        return '{{sections}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules()
    {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('name', 'required'),
            array('name', 'length', 'max'=>128),
        );
    }
}
