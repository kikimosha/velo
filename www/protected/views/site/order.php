<div class="mejs-container" id="mep_0" style="width: 768px; height: 432px;">
    <div class="mejs-inner">
        <div class="mejs-mediaelement">
            <?php $model = new OrderForm();
                $form = new CForm('application.views.site.orderForm', $model);
                echo $form;
            ?>
        </div>
        <div class="mejs-clear"></div>
    </div>
</div>