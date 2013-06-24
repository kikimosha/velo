<section id="cover-flow">
    <nav>
        <?php foreach($sections as $index => $section) {
        $cover_img = '';
        if ($section->alias != '') {
            $cover_img = '<img src="/resources/default/img/sections/' . $section->alias . '/cover.jpg" alt="' . $section->name . '" />';
        }
        echo '<a href="/section/' . $section->id .
            '">' . $cover_img . '<figcaption><span>' . ($index+1) .
            '</span><i>' . $section->name . '</i></figcaption></a>';
    } ?>
    </nav>
</section>

<section id="page-wrapper"></section>

<section id="section-wrapper"></section>

<div id="popUpOrder">
    <a class="closePopup" href="javascript:void(0);">x</a>
    <div class="innerPopup">
        <?php // echo $this->renderPartial('order'); ?>
    </div>
</div>

<div id="popUpCalendar">
    <a class="closePopup" href="javascript:void(0);">x</a>
    <div class="innerPopup">
        <?php echo $this->renderPartial('calendar'); ?>
    </div>
</div>

<div id="loader"></div>