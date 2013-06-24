<div class="mejs-container" style="width: 900px; height:620px;">
    <div class="mejs-inner">
        <div class="mejs-mediaelement">
            <section>
                <div id="wrap2" class="wrap2">
                    <div style="position: relative" class="fl">
                        <h2 class="section-title">Календарь<span class="fold-left"></span></h2>

                        <div class="clear"></div>
                        <div class="calendar-wrapper">
                            <div onclick="callprev();" class="cal-previous" id="divprev" style="display: none;"></div>
                            <div id="calendar" class="fc"></div>
                            <div onclick="callnext();" class="cal-next" style="display: none;"></div>
                        </div>
                        <div class="pt10 mt10 gray fl">
                            <div style="background-color:#FFB8C4" class="cassandraevent w50 fl mr5 mb10">
                                &nbsp;
                            </div>
                            <div class="fl mr5 mb10">Зимний отдых</div>
                            <div style="background-color:#6F8EE8" class="cassandraevent w50 fl mr5 mb10">&nbsp;</div>
                            <div class="fl mr5 mb10">Байдарки</div>
                            <div style="background-color:#E5E86F" class="cassandraevent w50 fl mr5 mb10">&nbsp;</div>
                            <div class="fl mr5 mb10">Вело</div>
                            <div style="background-color:Red" class="cassandraevent w50 fl mr5 mb10">&nbsp;</div>
                            <div class="fl mr5 mb10">Вэйки</div>
                            <div style="background-color:Gray" class="cassandraevent w50 fl mr5 mb10">&nbsp;</div>
                            <div class="fl mr5 mb10">Конные походы</div>
                            <div style="background-color:Green" class="cassandraevent w50 fl mr5 mb10">&nbsp;</div>
                            <div class="fl mr5 mb10">Пешие походы</div>
                            <div style="background-color:#86a723" class="cassandraevent w50 fl mr5 mb10">&nbsp;</div>
                            <div class="fl mr5 mb10">Каяки</div>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <div id="viewEvent" style="display: none;"></div>
                    <input id="actions-getcalendarevent" type="hidden" value="/api/calendar/events">
                    <input id="actions-viewcalendarevent" type="hidden" value="/сalendar/viewEvent">
                </div>
            </section>
        </div>
    </div>
    <div class="mejs-clear"></div>
</div>
