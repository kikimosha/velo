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
                            <input type="checkbox" rel="<?php echo $service['cost']; ?>" <?php if ($service['is_constant']) {echo 'checked="checked" disabled="disabled"';} ?>>
                            <?php echo $service['name']; ?> (<?php echo $service['cost']; ?> грн.)
                            <?php
                            if (strlen($service['sub_services']) > 1) :
                                $subServices = explode("|", $service['sub_services']);
                                if (count($subServices)) : ?>
                                    <ul class="sub_services">
                                    <?php foreach($subServices as $ss): ?>
                                        <li><?php echo $ss; ?></li>
                                    <?php endforeach; ?>
                                    </ul>
                                <?php endif; ?>
                            <?php endif; ?>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div>
                    <div class="fl_r"><a id="orderTrip" href="javascript:void(0);" class="grayBtn">Заказать</a></div>
                    <div class="grayBtn">Стоимость: <span id="trip-cost">0</span> грн</div>
                </div>
            </div>
        </div>
    </div>
</div>