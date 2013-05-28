<?php

/**
 * This is the model class for table "trips".
 *
 * The followings are the available columns in table 'trips':
 * @property string $id
 * @property integer $position
 * @property integer $section_id
 * @property string $title
 * @property string $description
 */
class Trips extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return Trips the static model class
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
		return 'trips';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('position, section_id, title', 'required'),
			array('position, section_id', 'numerical', 'integerOnly'=>true),
			array('title', 'length', 'max'=>255),
			array('description', 'safe'),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, position, section_id, title, description', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'position' => 'Position',
			'section_id' => 'Section',
			'title' => 'Title',
			'description' => 'Description',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
	 */
	public function search()
	{
		// Warning: Please modify the following code to remove attributes that
		// should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id,true);
		$criteria->compare('position',$this->position);
		$criteria->compare('section_id',$this->section_id);
		$criteria->compare('title',$this->title,true);
		$criteria->compare('description',$this->description,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

    public function getTripInfo($id)
    {
        $row = Yii::app()->db->createCommand()
            ->select('t.title, t.description, t.section_id')
            ->from('trips t')
            ->join('sections sec', 'sec.id=t.section_id')
            ->where('t.id=:id', array(':id'=>$id))
            ->queryRow();

        return $row;
    }

    public function getTripServices($id)
    {
        $rows = Yii::app()->db->createCommand()
            ->select('serv.*')
            ->from('services serv')
            ->join('trips t', 't.id=serv.trip_id')
            ->where('t.id=:id', array(':id'=>$id))
            ->queryAll();

        return $rows;
    }
}
