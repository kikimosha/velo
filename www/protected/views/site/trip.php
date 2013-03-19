<div class="section-content">
    <div id="section-cords">
        <span class="name"><?php echo $tripInfo->title; ?></span>
    </div>
<!---->
<!--    --><?php //if (!empty($nextId)): ?><!--<a class="section-nav" id="next" href="--><?php //echo Yii::app()->request->baseUrl; ?><!--/section/--><?php //echo $nextId; ?><!--"><b>Next</b></a>--><?php //endif; ?>
<!---->
<!--    --><?php //if (!empty($prevId)): ?><!--<a class="section-nav" id="prev" href="--><?php //echo Yii::app()->request->baseUrl; ?><!--/section/--><?php //echo $prevId; ?><!--"><b>Previous</b></a>--><?php //endif; ?>

    <div class="quicklinks">
        <a href="#scene-1" class="to-top">Top</a>
        <a href="/" class="to-coverflow">Home</a>
    </div>

    <div id="indicator-line"></div>

    <div id="scene-wrapper">
        <div class="scene" id="scene-1">
            <img class="scale" src="/resources/default/img/section_velo.jpg" />

            <div data-align="bottom" data-offset="0" class="figcaption caption-1">
                <p><?php echo $tripInfo->description; ?></p>
            </div>
        </div>
    </div>
</div>