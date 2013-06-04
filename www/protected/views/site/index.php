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

<div id="popUp">
    <a>x</a>
    <div class="mejs-container" id="mep_0" style="width: 768px; height: 432px;">
        <div class="mejs-inner">
            <div class="mejs-mediaelement">
                <br/><br/>
                <p>&nbsp;[Форма заказа]</p>
            </div>
            <div class="mejs-clear"></div>
        </div>
    </div>
</div>

<div id="loader"></div>