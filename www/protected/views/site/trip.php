<div class="page-content page-trip">
    <a class="page-close" href="/section/<?php echo $tripInfo['section_id']; ?>">Close</a>

    <div id="trip-wrapper">
        <div class="iScroll-wrap">
            <div class="trip-description">
                <header><?php echo $tripInfo['title']; ?></header>
                <div><?php echo $tripInfo['full_description']; ?></div>
            </div>

            <div class="trip-cost">
                <header>Расчет стоимости:</header>
                <div id="trip-services">
                    <?php foreach ($tripServices as $service): ?>
                        <div>
                            <input type="checkbox" rel="<?php echo $service['cost']; ?>">
                            <?php echo $service['name']; ?> (<?php echo $service['cost']; ?> грн.)
                            <?php
                            if (strlen($service['sub_services']) > 1) :
                                $subServices = explode("|", $service['sub_services']);
                                if (count($subServices)) : ?>
                                    <ul>
                                    <?php foreach($subServices as $ss): ?>
                                        <li><?php echo $ss; ?></li>
                                    <?php endforeach; ?>
                                    </ul>
                                <?php endif; ?>
                            <?php endif; ?>
                        </div>
                    <?php endforeach; ?>
                </div>
                <strong>Итого:</strong> <span id="trip-cost">0</span> грн.
            </div>
        </div>
    </div>
</div>