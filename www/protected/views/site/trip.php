<div class="page-content page-trip">
    <a class="page-close" href="/section/<?php echo $tripInfo['section_id']; ?>">Close</a>

    <div id="trip-wrapper">
        <div class="iScroll-wrap">
            <div class="trip-description">
                <h4><?php echo $tripInfo['title']; ?></h4>
                <div><?php echo $tripInfo['description']; ?></div>
            </div>

            <div class="trip-cost">
                <h4>Расчет стоимости:</h4>
                <ul id="trip-services">
                    <?php foreach ($tripServices as $service): ?>
                    <li><input type="checkbox"><?php echo $service['name']; ?></li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    </div>
</div>