<section id="cover-flow">
    <nav>
        <?php foreach($sections as $index => $section) {
        $cover_img = '';
        if ($section->alias != '') {
            $cover_img = '<img src="/resources/default/img/' . $section->alias . '/cover.jpg" alt="' . $section->name . '" />';
        }
        echo '<a href="/section/' . $section->id .
            '">' . $cover_img . '<figcaption><span>' . ($index+1) .
            '</span><i>' . $section->name . '</i></figcaption></a>';
    } ?>
    </nav>
</section>

<section id="page-wrapper"></section>

<section id="section-wrapper"></section>

<div id="loader"></div>