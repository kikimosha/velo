<p id="page-intro"><?php echo $sectionInfo->name; ?></p>

<div class="content-box column-left">
    <div class="content-box-header">
        <h3>Trips</h3>
    </div>
    <div class="content-box-content">
        <ul>
        <?php foreach($trips as $index => $trip) : ?>
            <li><?php echo $trip->title; ?></li>
        <?php endforeach ;?>
       </ul>
    </div>
</div>

<div class="clear"></div>
