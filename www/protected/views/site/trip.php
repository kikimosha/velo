<div class="page-content page-trip">
    <a class="page-close" href="/section/<?php echo $tripInfo['section_id']; ?>">Close</a>

    <div id="trip-wrapper">
        <div class="iScroll-wrap">

            <div class="trip-cost fl_r">
                <header>Расчет стоимости:</header>
                <table id="trip-services" class="fuelux">
                    <?php foreach ($tripServices as $service): ?>
                    <tr>
                        <td><label class="checkbox checkbox-custom"><input type="checkbox" rel="<?php echo $service['cost']; ?>" <?php if ($service['is_constant']) {echo 'checked="checked" disabled="disabled"';} ?>><i class="checkbox <?php if ($service['is_constant']) {echo 'checked disabled';} ?>"></i><?php echo $service['name']; ?></label>

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
                        </td>
                        <td><?php echo $service['cost']; ?> грн.</td>
                    </tr>
                    <?php endforeach; ?>
                    <?php if (!empty($tripInfo['additional_info'])) : ?>
                    <tr class="addInfoCost"><td colspan="2">
                        <div><strong>Дополнительная информация (цены ориентировочно):</strong></div>
                       <div><?php echo $tripInfo['additional_info']; ?></div>
                    </td></tr>
                    <?php endif; ?>
                </table>
                <div>
                    <!--                    <div class="fl_r"><a id="orderTrip" href="javascript:void(0);" class="grayBtn">Заказать</a></div>-->
                    <div class="grayBtn">Стоимость: <span id="trip-cost">0</span> грн</div>
                </div>
            </div>

            <div class="trip-description">
                <header><?php echo $tripInfo['title']; ?></header>
                <div><?php echo $tripInfo['full_description']; ?></div>
            </div>
        </div>
    </div>
</div>
