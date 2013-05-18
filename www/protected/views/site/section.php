<div class="section-content">
    <div id="section-cords">
        <span class="name"><?php echo $sectionInfo->name; ?></span>
    </div>

    <?php if (!empty($nextId)): ?><a class="section-nav" id="next" href="<?php echo Yii::app()->request->baseUrl; ?>/section/<?php echo $nextId; ?>"><b>Next</b></a><?php endif; ?>

    <?php if (!empty($prevId)): ?><a class="section-nav" id="prev" href="<?php echo Yii::app()->request->baseUrl; ?>/section/<?php echo $prevId; ?>"><b>Previous</b></a><?php endif; ?>

    <div class="quicklinks">
        <a href="#scene-1" title="Top" class="to-top">Top</a>
        <a href="/" title="Home" class="to-coverflow">Home</a>
    </div>

    <div id="indicator-line"></div>

    <div id="scene-wrapper">
        <div class="scene" id="scene-1">
            <img class="scale" src="/resources/default/img/sections/<?php echo $sectionInfo->alias; ?>/section_1.jpg" />

            <div data-align="bottom" data-offset="0" class="figcaption caption-1">
                <p><?php echo $sectionInfo->description; ?></p>
            </div>
        </div>

        <?php $dataAlign = 'bottom';
        foreach($trips as $index => $trip):
            $sceneNum = $index+2; // first index = 0
            $dataAlign = ($dataAlign == 'bottom')? 'top' : 'bottom';
        ?>
        <div class="scene" id="scene-<?php echo $sceneNum; ?>">
            <img class="scale" src="/resources/default/img/sections/<?php echo $sectionInfo->alias; ?>/section_<?php echo $sceneNum; ?>.jpg" />

            <div data-align="<?php echo 'bottom';//$dataAlign; ?>" data-offset="0" class="figcaption caption-<?php echo $sceneNum; ?>">
                <p class="preamble">№ <?php echo $sceneNum - 1; ?></p>
                <h4><?php echo $trip->title; ?></h4>
                <div><?php echo $trip->description; ?></div>
                <div class="costTrip"><a href="<?php echo Yii::app()->request->baseUrl . '/trip/' . $trip->id ?>" class="grayBtn">Стоимость »</a></div>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</div>