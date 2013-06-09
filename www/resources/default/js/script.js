//var GATracking = {
//
//
//    trackPageView: function (page) {
//        //_gaq.push(['_trackPageview', page + '/desktop']);
//    },
//
//
//    trackSection: function (lang, section, page) {
//
//        var pageName = 'start';
//
//        switch (page) {
//            case 0:
//                pageName = "start";
//                break;
//            case 1:
//                pageName = "film";
//                break;
//        }
//
//        GATracking.trackPageView('/tracking/' + lang + '/section/' + section + '/' + pageName);
//
//	},
//
//
//    trackCar: function (lang, car) {
//
//        GATracking.trackPageView('/tracking/' + lang + '/car/' + car);
//
//	},
//
//	trackV40: function (lang, car) {
//
//        GATracking.trackPageView('/tracking/' + lang + '/v40cc/' + car);
//
//	},
//
//    trackPage: function (lang, alias) {
//
//        GATracking.trackPageView('/tracking/' + lang + '/' + alias);
//
//	}
//};

var Scaling = {


    // Just storing window-height and window-width
    windowDimensions: {
        width: null,
        height: null
    },


    // Offset percentages for larger section-images.
    // Needed for matching larger section-images with cover-images
//    coverOffsets: [
//        0.1328125,
//        0.2515625,
//        0.2,
//        0.66875,
//        0.675,
//        0.1359375,
//        0.36015625,
//        0.175,
//        0.3796875,
//        0.240625,
//        0.18046875,
//        0.4703125,
//        0.4890625,
//        0.403125,
//        0.24453125,
//        0.12109375,
//        0.68828125,
//        0.23984375,
//        0.55625,
//        0.58046875,
//        0.0875,
//        0.3828125,
//        0.22421875,
//        0.459375,
//        0.6734375,
//        0.428125,
//        0.3734375,
//        0.471875,
//        0.30625,
//        0.37734375,
//        0.46640625,
//        0.496875,
//        0.6296875,
//        0.515625,
//        0.33671875,
//        0.15625,
//        0.2578125,
//        0.4296875,
//        0.6875,
//        0.58125,
//        0.703125,
//        0.16171875,
//        0.5609375,
//        0.06796875,
//        0.3625,
//        0.425,
//        0.5859375,
//        0.44296875,
//        0.62578125,
//        0.52890625
//    ],
//
//
//    // Offset percentages for larger car-images.
//    // Needed for matching larger car-images with car-cover-images
//    carCoverOffsets: [
//        0.0, /* First cover not supposed to open */
//        0.5421875,
//        0.4359375,
//        0.5859375,
//        0.3671875,
//        0.3132812,
//        0.5546875,
//        0.7898437,
//        0.5554687,
//        0.3601562,
//        0.5164062
//    ],
//
//    v40CoverOffsets: [
//        0.0, /* First cover not supposed to open */
//        0.50390625,
//		0.35546875,
//		0.58203125,
//		0.34765625,
//		0.47265625,
//		0.49609375
//    ],
//
    // Return correct percentage for scaling
    constrainPercent: function (originalWidth, originalHeight, stageWidth) {

        var stageHeight = Scaling.windowDimensions.height,
            percentW = stageWidth / originalWidth,
            percentH = stageHeight / originalHeight,
            rectWidth = originalWidth * percentH;

        return (rectWidth >= stageWidth)? percentH : percentW;

    },


    // Return the correct percentage for scaling cover-images and section-images
    scalingPercentage: function() {

        var coverDimensions = { width: 180, height: 800 },
            imageDimensions = { width: 1280, height: 800 },
            coverPercent = Scaling.constrainPercent(coverDimensions.width, coverDimensions.height, coverDimensions.width),
            imagePercent = Scaling.constrainPercent(imageDimensions.width, imageDimensions.height, Scaling.windowDimensions.width);

        return (imageDimensions.width * coverPercent < Scaling.windowDimensions.width)? imagePercent : coverPercent;

    },


    // Return the correct percentage for scaling cover-images and section-images
    scalingPercentageCars: function() {

        var coverDimensions = { width: 180, height: 800 },
            imageDimensions = { width: 1010, height: 800 },
            coverPercent = Scaling.constrainPercent(coverDimensions.width, coverDimensions.height, coverDimensions.width),
            imagePercent = Scaling.constrainPercent(imageDimensions.width, imageDimensions.height, (Scaling.windowDimensions.width - 270));

        return (imageDimensions.width * coverPercent < (Scaling.windowDimensions.width - 270))? imagePercent : coverPercent;

    },


    // Runs on each window-resize
    resizeCoverFlow: function() {

        var percent = Scaling.scalingPercentage();

        CoverFlow.settings.element.find('img').css({
            width: percent * 180,
            height: percent * 800
        })
        .end().find('.expand').css({
            width: Scaling.windowDimensions.width
        });

        if (GoTrip.settings.element) {

            GoTrip.settings.element.find('img').css({
                width: percent * 180,
                height: percent * 800
            })
            .end().find('.expand').css({
                width: Scaling.windowDimensions.width
            });

        }

    },


    // Runs on each window-resize
    resizeSection: function() {

        var percent = Scaling.scalingPercentage(),
            scaleLeft = (Scaling.windowDimensions.width - 1280)/2;

        Section.settings.element.find('img.scale').css({
            width: percent * 1280 + 'px',
            height: percent * 800 + 'px',
            left: scaleLeft + 'px'
            //top: scaleTop + 'px'
        })
        .end().find('.section-content').css({
            width: Scaling.windowDimensions.width,
            height: Scaling.windowDimensions.height
        });

        if ($('#current-cover').length) {

            $('#current-cover').find('img').css({
                width: percent * 1280,
                height: percent * 800
            })
            .end().find('.car-content').css({
                width: Scaling.windowDimensions.width,
                height: Scaling.windowDimensions.height
            });

            GoTrip.moveDescription(false);

        }

        Section.moveCaptions();
        Section.moveBadge();
        Section.setIndicatorLine();

    },


    // Runs on slideInSection
    resizeNextSection: function() {

        var percent = Scaling.scalingPercentage();

        Section.settings.element.find('.section-content:last').css({
            width: Scaling.windowDimensions.width,
            height: Scaling.windowDimensions.height
        })
        .find('img.scale').css({
            width: percent * 1280,
            height: percent * 800,
            left: (Scaling.windowDimensions.width - 1280)/2
        });

        if ($('#current-cover').length) {

            $('#current-cover').find('.car-content:last').css({
                width: Scaling.windowDimensions.width,
                height: Scaling.windowDimensions.height
            })
            .find('img').css({
                width: percent * 1280,
                height: percent * 800
            });

        }

    },


    // Runs on each window-resize and on SectionMap init
    resizePage: function() {

        var percent = Scaling.scalingPercentage(),
            percent2 = Scaling.constrainPercent(1185, 1024, Scaling.windowDimensions.width - 270),
            percent3 = Scaling.constrainPercent(1100, 800, Scaling.windowDimensions.width - 270),
            w = Scaling.windowDimensions.width,
            h = Scaling.windowDimensions.height;

        $('#page-wrapper').css({
            width: w,
            height: h
        });

        $('.page-offer .scene img').css({
        	minWidth:1100,
        	minHeight:800,
            width: percent3*1100,
            height:  percent3*800
        });

         $('.page-offer .scene ').css({
            height:  h
        });

        $('#imagemap').css({
            width: percent2 * 1185,
            height: percent2 * 1024
        });

        $('#map-wrapper').find('a').each(function() {

            var cords = $(this).data('cords').split(':');

            $(this).css({
                left: (parseInt(cords[0], 10) * percent2) - 22,
                top: (parseInt(cords[1], 10) * percent2) - 45
            });

        });
    },


    // Runs on each window-resize
    resizeOverlay: function() {

        $('#overlay').css({
            width: Scaling.windowDimensions.width+270,
            height: Scaling.windowDimensions.height
        });

    },


    // Runs on each window-resize, and also when clicking on lang-select
    adjustSidebar: function() {

        var sidebarElement = $('#sidebar').find('p'),
            menuElement = $('#menu'),
            textHeight = sidebarElement.outerHeight() + parseInt(sidebarElement.css('marginTop'), 10),
            menuHeight = menuElement.outerHeight() + parseInt(menuElement.css('bottom'), 10);

        // #todo - Optimize
        if ((textHeight + menuHeight) > Scaling.windowDimensions.height) {
            sidebarElement.fadeOut();
        }
        else {
            sidebarElement.fadeIn();
        }

    },


    windowResize: function() {

        Scaling.windowDimensions.width = $(window).width() - 270;
        Scaling.windowDimensions.height = $(window).height();

        Scaling.resizeCoverFlow();
        Scaling.resizeSection();
        Scaling.resizePage();
        Scaling.adjustSidebar();
        Scaling.resizeOverlay();

        CoverFlow.setCenterLine();
        CoverFlow.adjustNavSpeed();

        GoTrip.setCenterLine();
        GoTrip.adjustNavSpeed();

    }


};

var GoTripXCHelpers = {


    userAgentString: navigator.userAgent.toLowerCase(),
    prevHistoryState: null,
    PNGLoaderTimeout: null,
    lang: null,


    transEndEventNames: {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd',
        msTransition: 'msTransitionEnd',
        transition: 'transitionend'
    },


    /* From here: https://github.com/kswedberg/jquery-smooth-scroll/blob/master/jquery.smooth-scroll.js */
    getScrollable: function(opts) {

        var scrollable = [],
            scrolled = false,
            dir = opts.dir && opts.dir === 'left' ? 'scrollLeft' : 'scrollTop';

        this.each(function() {

            if (this === document || this === window) { return; }

            var el = $(this);

            if (el[dir]() > 0) {
                scrollable.push(this);
                return;
            }

            el[dir](1);
            scrolled = el[dir]() > 0;
            el[dir](0);

            if (scrolled) {
                scrollable.push(this);
                return;
            }

        });

        if (opts.el === 'first' && scrollable.length) {
            scrollable = [scrollable.shift()];
        }

        return scrollable;

    },


    addOverlay: function(options) {
        var overlay = $('#overlay').length? $('#overlay') : $('<div id="overlay" />').appendTo('body');

        if (options) {

            if ($.isFunction(options.click)) {
                setTimeout(function() {
                    overlay.unbind('click').bind('click', options.click);
                }, 200); // Use a small timeout before binding click. To prevent movie from closing on double-click
            }

            if ($.isFunction(options.mousemove)) {
                setTimeout(function() {
                    overlay.unbind('mousemove').bind('mousemove', options.mousemove);
                }, 500);
            }

            if (options.classname) {
                overlay.addClass(options.classname);
            }

        }

        overlay.css({
            width: Scaling.windowDimensions.width + 270,
            height: Scaling.windowDimensions.height,
            left: 0,
            display: 'block'
        });

    },


    unbindOverlay: function() {
        $('#overlay').unbind();
    },


    removeOverlay: function() {
        $('#overlay').unbind().removeClass().hide();
    },

    cssAnimation: function(object, cssProperties, duration, callback, bodyClass) {

        var transEndEventName = GoTripXCHelpers.transEndEventNames[Modernizr.prefixed('transition')];

        duration = duration || 500;
        bodyClass = bodyClass || false;

        if (Modernizr.csstransitions) {
            if (bodyClass) {
                $('body').addClass(bodyClass);
            }

            object.css(cssProperties);

            if ($.isFunction(callback)) {

                object.bind(transEndEventName, function() {
                    object.unbind(transEndEventName);
                    if (bodyClass) {
                        $('body').removeClass(bodyClass);
                    }
                    callback();
                });
            }

        }

        else {
            if ($.isFunction(callback)) {
                object.stop().animate(cssProperties, duration, 'easeOutQuad', callback);
            }
            else {
                object.stop().animate(cssProperties, duration, 'easeOutQuad');
            }
        }

    },


    showPNGLoader: function(element, options) {

        var loader = $('#png-loader').length? $('#png-loader') : $('<div id="png-loader" />'),
            left = 0,
            defaults = {
                size: 32,
                loop: true,
                reset: 351,
                interval: 100
            },
            settings = $.extend({}, defaults, options);

        loader.data(settings).detach().appendTo(element).css('backgroundPosition', '0 0').show();

        (function animateLoader() {

            GoTripXCHelpers.PNGLoaderTimeout = setTimeout(function() {
                if (left < -settings.reset) {
                    if (settings.loop) {
                        loader.css('backgroundPosition', '0 0');
                    }
                    else {
                        clearTimeout(GoTripXCHelpers.PNGLoaderTimeout);
                        return;
                    }
                }
                else {
                    loader.css('backgroundPosition', (left -= settings.size) + 'px 0');
                }
                animateLoader();
            }, settings.interval);

        })();

    },


    hidePNGLoader: function(cb) {

        var loader = $('#png-loader'),
            settings = loader.data(),
            left;

        function hideLoader() {
            loader.removeData().hide();
            if ($.isFunction(cb)) {
                cb();
            }
        }

        clearTimeout(GoTripXCHelpers.PNGLoaderTimeout);

        if (loader.css('backgroundPosition')) {
            left = parseInt(loader.css('backgroundPosition').split(' ')[0], 10);
        }
        else {
            left = 0;
        }

        if (settings.loop) {
            hideLoader();
            return;
        }

        // If it's an animation that is not allowed to loop: Finish the animation, then hide
        (function animateLoader() {
            GoTripXCHelpers.PNGLoaderTimeout = setTimeout(function() {
                if (left < -settings.reset) {
                    clearTimeout(GoTripXCHelpers.PNGLoaderTimeout);
                    setTimeout(hideLoader, 200);
                    return;
                }
                else {
                    loader.css('backgroundPosition', (left -= settings.size) + 'px 0');
                }
                animateLoader();
            }, 1);
        })();

    },

    setVisibleCovers: function() {

        var scrollLeft = CoverFlow.settings.element[0].scrollLeft,
            coversOnScreen = Math.ceil((Scaling.windowDimensions.width - 270) / CoverFlow.settings.coverWidth),
            offset = 4,
            firstIndex = Math.floor(scrollLeft / 180),
            lastIndex = firstIndex + coversOnScreen;

        // Use some offset, just to be safe
        firstIndex = (firstIndex - offset > 0)? firstIndex - offset : firstIndex;
        lastIndex = (lastIndex + offset < 50)? lastIndex + offset : lastIndex;

        $('#cover-flow a').removeClass('visible').slice(firstIndex, lastIndex).addClass('visible');

    },


    getNextScrollPosition: function(e) {

        log('getNextScrollPosition');
        var scrollPos = $(window).scrollTop(),
            nextScrollPos;

        if (scrollPos % Scaling.windowDimensions.height === 0) {
            nextScrollPos = Scaling.windowDimensions.height;
        }
        else {
            if (e.which === 38) {
                nextScrollPos = scrollPos % Scaling.windowDimensions.height;
            }
            else {
                nextScrollPos = Scaling.windowDimensions.height - (scrollPos % Scaling.windowDimensions.height);
            }
        }

        return nextScrollPos;

    },


    getPageTitle: function(type, id) {

        var prefix = 'Go-Trip',
            separator = ' - ',
            title = prefix;

        switch (type) {
            case 'close-page':
                break;
            case 'open-page':
                title += separator + $('#menu nav').find('a:nth-child(' + id + ')').text();
                break;
            case 'close-section':
                break;
            case 'open-section':
                title += separator + ' ' + $('#cover-flow').find('a:nth-child(' + id + ') i').text();
                break;
            case 'slide-section':
                title += separator + ' ' + $('#cover-flow').find('a:nth-child(' + id + ') i').text();
                break;
            case 'map-to-section':
                title += separator + ' ' + $('#cover-flow').find('a:nth-child(' + id + ') i').text();
                break;
        }
        return title;
    }
};

var GoTripKeyNav = {


    coverFlowKeyCounter: 0,

	coverFlowKeyNav: function(settings) {

        $(document).unbind('keydown keyup')
        .bind('keydown', function(e) {

            if (e.which === 27 || e.which === 13 || (e.which >= 37 && e.which <= 40)) {
                if (!$('#overlay').is(':visible')) {
                    GoTripXCHelpers.addOverlay({ mousemove: GoTripXCHelpers.removeOverlay });
                    console.log(16);
                }
                e.preventDefault();
            }

        })
        .bind('keyup', function(e) {

            var coverFlow = CoverFlow.settings.element,
                activeCover = coverFlow.find('.active'),
                scrollPos = coverFlow.scrollLeft(),
                scrollPosMax = 180 * settings.covers - Scaling.windowDimensions.width + 270,
                coversOnScreen = Math.floor((Scaling.windowDimensions.width - 270) / CoverFlow.settings.coverWidth),
                startIndex = Math.ceil(scrollPos / 180),
                index;

            if (coverFlow.is(':animated')) {
                return;
            }

            switch (e.which) {
                case 13:
                    //Enter
                    if (activeCover.length) {
                        index = activeCover.removeClass('active').index();
                        History.pushState({ type: 'open-section', id: (index + 1), index: index }, GoTripXCHelpers.getPageTitle('open-section', index + 1), '/section/' + (index + 1));
                    }
                    break;
                case 37:
                    //Left
                    if (activeCover.length) {
                        if (activeCover.index() === 0) {
                            GoTripKeyNav.coverFlowKeyCounter = 0;
                        }
                        else {
                            activeCover.removeClass('active').prev().addClass('active');
                            GoTripKeyNav.coverFlowKeyCounter -= 1;
                        }
                    }
                    else {
                        coverFlow.find('a').eq(startIndex).addClass('active');
                    }
                    break;
                case 39:
                    //Right
                    if (activeCover.length) {
                        if (activeCover.index() === (settings.covers - 1)) {
                            GoTripKeyNav.coverFlowKeyCounter = coversOnScreen - 1;
                        }
                        else {
                            activeCover.removeClass('active').next().addClass('active');
                            GoTripKeyNav.coverFlowKeyCounter += 1;
                        }
                    }
                    else {
                        coverFlow.find('a').eq(startIndex).addClass('active');
                    }
                    break;
            }

            log('Before: ' + GoTripKeyNav.coverFlowKeyCounter);
            if (GoTripKeyNav.coverFlowKeyCounter < 0) {
                GoTripXCHelpers.unbindOverlay();
                coverFlow.animate({ scrollLeft: scrollPos - (coversOnScreen * 180) }, {
                    duration: 500,
                    easing: 'easeOutQuad',
                    queue: false,
                    complete: function() {
                        GoTripXCHelpers.addOverlay({ mousemove: GoTripXCHelpers.removeOverlay });
                        console.log(17);
                        scrollPos = coverFlow.scrollLeft();
                        if (scrollPos === 0) {
                            GoTripKeyNav.coverFlowKeyCounter = activeCover.index();
                        }
                    }
                });
                GoTripKeyNav.coverFlowKeyCounter = coversOnScreen - 1;
            } else if (GoTripKeyNav.coverFlowKeyCounter >= coversOnScreen) {
                GoTripXCHelpers.unbindOverlay();
                coverFlow.animate({ scrollLeft: scrollPos + (coversOnScreen * 180) }, {
                    duration: 500,
                    easing: 'easeOutQuad',
                    queue: false,
                    complete: function() {
                        GoTripXCHelpers.addOverlay({ mousemove: GoTripXCHelpers.removeOverlay });
                        console.log(18);
                        scrollPos = coverFlow.scrollLeft();
                        if (scrollPos === scrollPosMax) {
                            GoTripKeyNav.coverFlowKeyCounter = coversOnScreen - 1 - ((settings.covers - 1) - activeCover.index());
                        }
                    }
                });
                GoTripKeyNav.coverFlowKeyCounter = 0;
            }
            log('After: ' + GoTripKeyNav.coverFlowKeyCounter);
        });
	},

    sectionKeyNav: function(settings) {

        $(document).unbind('keydown keyup')
        .bind('keydown', function(e) {
            if (e.which === 27 || (e.which >= 37 && e.which <= 40)) { e.preventDefault(); }
        })
        .bind('keyup', function(e) {

            var state = History.getState(),
                id = parseInt(state.cleanUrl.split('/section/').pop(), 10),
                scrollPos = $(window).scrollTop(),
                nextScrollPos = GoTripXCHelpers.getNextScrollPosition(e),
                duration = nextScrollPos * 1.618;

            // Disable section-key-nav in these occasions
            if ($('#overlay').is(':visible') || $('body').is('.loading-next-section, .slide-in-next-section')) {
                return;
            }

            switch (e.which) {
                case 27:
                    History.pushState({ type: 'close-section' }, GoTripXCHelpers.getPageTitle('close-section'), '/');
                    break;
                case 37:
                    if (id > 1) {
                        History.pushState({ type: 'slide-section', url: '/section/' + (id - 1), direction: 'prev' }, GoTripXCHelpers.getPageTitle('slide-section', id - 1), '/section/' + (id - 1));
                    }
                    break;
                case 38:
                    if (settings.type === 'section' && scrollPos !== 0) { /* This check is needed on mac/safari */
                        $('html, body').firstScrollable().stop().animate({ scrollTop: scrollPos - nextScrollPos }, {
                            duration: duration,
                            easing: 'easeInOutQuad',
                            queue: false
                        });
                    }
                    break;
                case 39:
                    if ($('a#next').length) {
                        History.pushState({ type: 'slide-section', url: '/section/' + (id + 1), direction: 'next' }, GoTripXCHelpers.getPageTitle('slide-section', id + 1), '/section/' + (id + 1));
                    }
                    break;
                case 40:
                    if (settings.type === 'section') {
                        $('html, body').firstScrollable().stop().animate({ scrollTop: scrollPos + nextScrollPos }, {
                            duration: duration,
                            easing: 'easeInOutQuad',
                            queue: false
                        });
                    }
                    break;
                case 84:
                    if (settings.type === 'section' && scrollPos !== 0) { /* This check is needed on mac/safari */
                        Section.scrollToTop();
                    }
                    break;
            }

        });

    }


};

var GoTripCompability = {


    fixGeneratedContent: function() {
        /* Appy an extra element to some elements to compensate for lack of generated-content support */
        if (!Modernizr.generatedcontent) {
            Section.settings.element.find('.quicklinks a, .links a').add('#menu a').append('<span />');
        }
    }


};

var Page = {


    settings: {
        element: $('#page-wrapper'),
        visible: false,
        pageName: ''
    },

    open: function(page, cb) {

        //GATracking.trackPage(GoTripXCHelpers.lang, page);

        $('body').addClass('loading-page');
        GoTripXCHelpers.showPNGLoader($('body'));
        GoTripXCHelpers.addOverlay();

		var req = $.ajax('/api/page/' + page, {
		dataType : 'html',
		type : 'GET',
		cache: false,
		  error: function (xhr, ajaxOptions, thrownError) {
			$('body').removeClass('loading-page');
			GoTripXCHelpers.hidePNGLoader();
			GoTripXCHelpers.removeOverlay();
		  }
		});

        req.success(function(resp) {
        	    //Page.settings.element.css({'transform': 'translateX('+ (270 - (Scaling.windowDimensions.width - 270)) + ')'}).html(resp);
            var width, left;

            switch (page) {
                case 'about':
                    width = 240;
                    left = 270 - (240);
                    break;
                case 'cars':
                    width = Scaling.windowDimensions.width;
                    left =  270 - (Scaling.windowDimensions.width);
                    break;
               case 'v40cc':
                    width = Scaling.windowDimensions.width;
                    left =  270 - (Scaling.windowDimensions.width);
                    break;
                default:
                    width = Scaling.windowDimensions.width - 270;
                    left = 270 - (Scaling.windowDimensions.width - 270);
                    break;
            }

            Page.settings.element.css({
                width: width,
                left: left
            }).html(resp);

            if (page === 'trip') {
                Trip.init();
            }
            else if (page === 'cars') {
                GoTrip.init('cars');
            }
            else if (page === 'v40cc') {
                GoTrip.init('v40cc');
            }
            else if (page === 'offer') {
                OrderTrip.init();
            }

            $.preload('.page-content img', {
                onFinish: function() {
                    $('body').removeClass('loading-page');
                    GoTripXCHelpers.hidePNGLoader();
                    Page.playIntro(page, cb);
                }
            });

        });

    },


    playIntro: function(pageName, cb) {
        var leftValue = 270;

        Page.settings.element.show();
        Page.settings.visible = true;
        Page.settings.pageName = pageName;

        if (Page.settings.pageName === 'cars' || Page.settings.pageName === 'v40cc') {
            leftValue = 0;

            $('#car-covers').find('ul').css({
                left: 270
            });
        }
        //set the size of the background image in .page-offer
        percent3 = Scaling.constrainPercent(1100, 800, Scaling.windowDimensions.width - 270),
        h = Scaling.windowDimensions.height;

        $('.page-offer .scene img').css({
        	 minWidth:1100,
        	minHeight:800,
            width: percent3*1100,
            height:  percent3*800
        });

         $('.page-offer .scene ').css({
            height:  h
        });
        // #HACK Make animations non-instant
        $(window).scrollTop(0);

        // Reset scrollLeft position if we load the map page
        $('#map-wrapper').scrollLeft((Scaling.scalingPercentage() * 1185) / 2);
        $('#trip-wrapper').scrollLeft((Scaling.scalingPercentage() * 1185) / 2);

        //GoTripXCHelpers.cssAnimation(Page.settings.element, {'transform': 'translateX(270px)'}, 450, function(){Page.introCallback();}, 'play-page-intro');
        GoTripXCHelpers.cssAnimation(Page.settings.element, { left: leftValue }, 450, function() {
            GoTripXCHelpers.removeOverlay();

            if ($.isFunction(cb)) {
                cb();
            }

            Page.settings.element.find('.page-close').bind('click', function(e) {
                History.pushState({ type: 'close-page' }, GoTripXCHelpers.getPageTitle('close-page'), '/');
                e.preventDefault();
            });
        }, 'play-page-intro');

    },


    playOutro: function(cb) {

        var scrollLeft,
            firstIndex,
            leftValue = 270;

        if (Page.settings.element.is(':visible')) {
            Page.settings.visible = false;

            if (Page.settings.pageName === 'cars' || Page.settings.pageName === 'v40cc') {
                leftValue = 0;
            }
            if (Page.settings.pageName === 'offer') {
                OrderTrip.out();
            }

            //GoTripXCHelpers.cssAnimation(Page.settings.element, {'transform': 'translateX('+(270 -(Scaling.windowDimensions.width - 270))+')'}, 450, function(){
            GoTripXCHelpers.cssAnimation(Page.settings.element, { left: 270 - (Scaling.windowDimensions.width - leftValue) }, 450, function() {
                Page.settings.element.empty().hide();

                // CoverFlow-key nav, disable on IE until mouseover-bug is fixed
                if (parseInt(GoTripXCHelpers.userAgentString.indexOf('msie'), 10) === -1) {

                    scrollLeft = CoverFlow.settings.element.scrollLeft();
                    firstIndex = Math.floor(scrollLeft / 180);

                    if (CoverFlow.settings.element.find('.active').length) {
                        GoTripKeyNav.coverFlowKeyCounter = CoverFlow.settings.element.find('.active').index() - firstIndex - 1;
                    }

                    GoTripKeyNav.coverFlowKeyNav({type: 'section', covers: 6});

                }

                GoTripXCHelpers.removeOverlay();

                if ($.isFunction(cb)) {
                    cb();
                }

            }, 'play-page-outro');
        }

    }


};

var Trip = {


    settings: {
        element: $('#page-wrapper'),
        visible: false
    },

    bindEvents: function() {
        recalculate();

        $("input[type=checkbox]").change(function(){
            if ($(this).is(':checked')) {
                $(this).parent().find('i').addClass('checked');
            } else {
                $(this).parent().find('i').removeClass('checked');
            }
            recalculate();
        });

        function recalculate(){
            var sum = 0;
            $("input[type=checkbox]:checked").each(function(){
                sum += parseInt($(this).attr("rel"));
            });
            $('#trip-cost').text(sum);
        }

        $('#orderTrip').click(Trip.order);
    },

    order: function() {

        GoTripXCHelpers.addOverlay({
            classname: 'transparent',
            click: OrderTrip.close
        });

        $('#popUp').addClass('active').css({
            left: ((Scaling.windowDimensions.width + 270) / 2) - (768 / 2),
            top: (Scaling.windowDimensions.height / 2) - (432 / 2) + $(window).scrollTop()
        });

        $('#popUp a.closePopup').click(OrderTrip.close);

    },

    open: function(id, cb) {

        //GATracking.trackPage(GoTripXCHelpers.lang, page);

        $('body').addClass('loading-page');
        GoTripXCHelpers.showPNGLoader($('body'));
        GoTripXCHelpers.addOverlay();

        var req = $.ajax('/api/trip/' + id, {
            dataType : 'html',
            type : 'GET',
            cache: false,
            error: function (xhr, ajaxOptions, thrownError) {
                $('body').removeClass('loading-page');
                GoTripXCHelpers.hidePNGLoader();
                GoTripXCHelpers.removeOverlay();
            }
        });

        req.success(function(resp) {
            //Trip.settings.element.css({'transform': 'translateX('+ (270 - (Scaling.windowDimensions.width - 270)) + ')'}).html(resp);
            var width = Scaling.windowDimensions.width - 270,
                left = 270 - (Scaling.windowDimensions.width - 270);

            Trip.settings.element.css({
                width: width,
                left: left
            }).html(resp);

            SectionTrip.init();

            Trip.bindEvents();

            $.preload('.page-content img', {
                onFinish: function() {
                    $('body').removeClass('loading-page');
                    GoTripXCHelpers.hidePNGLoader();
                    Trip.playIntro(id, cb);
                }
            });

        });

    },


    playIntro: function(id, cb) {
        var leftValue = 270;

        Trip.settings.element.show();
        Trip.settings.visible = true;
        //set the size of the background image in .page-offer
        var percent3 = Scaling.constrainPercent(1100, 800, Scaling.windowDimensions.width - 270),
            h = Scaling.windowDimensions.height;

        $('.page-offer .scene img').css({
            minWidth:1100,
            minHeight:800,
            width: percent3*1100,
            height:  percent3*800
        });

        $('.page-offer .scene ').css({
            height:  h
        });
        // #HACK Make animations non-instant
        $(window).scrollTop(0);

        // Reset scrollLeft position if we load the map page
        $('#map-wrapper').scrollLeft((Scaling.scalingPercentage() * 1185) / 2);
        $('#trip-wrapper').scrollLeft((Scaling.scalingPercentage() * 1185) / 2);

        //GoTripXCHelpers.cssAnimation(Trip.settings.element, {'transform': 'translateX(270px)'}, 450, function(){Trip.introCallback();}, 'play-page-intro');
        GoTripXCHelpers.cssAnimation(Trip.settings.element, { left: leftValue }, 450, function() {
            GoTripXCHelpers.removeOverlay();

            if ($.isFunction(cb)) {
                cb();
            }

            Trip.settings.element.find('.page-close').bind('click', function(e) {
                History.pushState({ type: 'close-trip', url: this.href }, GoTripXCHelpers.getPageTitle('close-trip'), this.href);
                e.preventDefault();
            });

        }, 'play-page-intro');

    },


    playOutro: function(cb) {

        var scrollLeft,
            firstIndex,
            leftValue = 270;

        if (Trip.settings.element.is(':visible')) {
            Trip.settings.visible = false;

            //GoTripXCHelpers.cssAnimation(Trip.settings.element, {'transform': 'translateX('+(270 -(Scaling.windowDimensions.width - 270))+')'}, 450, function(){
            GoTripXCHelpers.cssAnimation(Trip.settings.element, { left: 270 - (Scaling.windowDimensions.width - leftValue) }, 450, function() {
                Trip.settings.element.empty().hide();

                // CoverFlow-key nav, disable on IE until mouseover-bug is fixed
                if (parseInt(GoTripXCHelpers.userAgentString.indexOf('msie'), 10) === -1) {

                    scrollLeft = CoverFlow.settings.element.scrollLeft();
                    firstIndex = Math.floor(scrollLeft / 180);

                    if (CoverFlow.settings.element.find('.active').length) {
                        GoTripKeyNav.coverFlowKeyCounter = CoverFlow.settings.element.find('.active').index() - firstIndex - 1;
                    }

                    GoTripKeyNav.coverFlowKeyNav({type: 'section', covers: 6});

                }

                GoTripXCHelpers.removeOverlay();

                if ($.isFunction(cb)) {
                    cb();
                }

            }, 'play-page-outro');
        }

    }
};

var GoTrip = {


    settings: {
    	pagetype: "cars",
    	offsets: Scaling.carCoverOffsets,
        element: null,
        coverWrapper: null,
        coverArray: null,
        coverWidth: null,
        coverCount: null,
        currentCover: 1,
        navSpeed: 5,
        centerLine: 0,
        timer: null
    },


    setWrapperWidth: function() {
        this.settings.coverWrapper.width(GoTrip.settings.coverCount * GoTrip.settings.coverWidth);
    },


    setCenterLine: function() {
        GoTrip.settings.centerLine = (Scaling.windowDimensions.width - 270) / 2;
    },


    adjustNavSpeed: function() {

        var stageWidth, maxScroll;

        if (GoTrip.settings.coverWrapper) {

            stageWidth = Scaling.windowDimensions.width - 270;
            maxScroll = GoTrip.settings.coverWrapper.width() - stageWidth;

            GoTrip.settings.adjustedNavSpeed = GoTrip.settings.navSpeed * (1 + stageWidth / maxScroll);

        }

    },


    moveCoverFlow: function(mousePos) {

        var delta = Math.abs(1 - mousePos / GoTrip.settings.centerLine);

        (function moveCovers() {
            GoTrip.settings.timer = setTimeout(function() {
                if (mousePos > GoTrip.settings.centerLine) {
                    GoTrip.settings.element[0].scrollLeft += (GoTrip.settings.adjustedNavSpeed * delta);
                }
                else {
                    GoTrip.settings.element[0].scrollLeft -= (GoTrip.settings.adjustedNavSpeed * delta);
                }
                moveCovers();
            }, 11);
        })();
    },


    bindEvents: function() {

        this.settings.element.bind('mousemove', $.throttle(100, true, function(e) {
            clearTimeout(GoTrip.settings.timer);
            GoTrip.moveCoverFlow(e.pageX - 270);
        }))
        .bind('mouseenter mouseleave mousedown', function() {
            clearTimeout(GoTrip.settings.timer);
            $('.car-covers').find('.active').removeClass('active');
            GoTripKeyNav.coverFlowKeyCounter = 0;
        })
        .bind('mousewheel', function(e, delta){
            e.preventDefault();
            clearTimeout(GoTrip.settings.timer);
            delta = (delta < 0)? -1 : 1;
            this.scrollLeft -= (delta * 20);
        })
        .bind('click', function(e) {
            var cover = $(e.target).closest('.item'),
            id = cover.attr('href').split('/').pop(),
            index = cover.closest('li').index();

            clearTimeout(GoTrip.settings.timer);

            if (index === 0) {
                return;
            }
            else {
                History.pushState({ type: 'open-car', id: id, index: index }, GoTripXCHelpers.getPageTitle('open-car', parseInt(index, 10) + 1), '/' + GoTrip.settings.pagetype + '/' + id);
            }

            e.preventDefault();
        });

        // CoverFlow-key nav, disable on IE until mouseover-bug is fixed
        if (parseInt(GoTripXCHelpers.userAgentString.indexOf('msie'), 10) === -1) {
            GoTripKeyNav.coverFlowKeyCounter = 0;

            	GoTripKeyNav.coverFlowKeyNav({type: GoTrip.settings.pagetype, covers: 11});
        }

    },


    moveDescription: function(fontResizing) {

        var description = $('#current-cover').find('.description'),
            scaleRatio = Scaling.scalingPercentage(),
            cssObj = {},
            offsets,
            aligning,
            startwidth;

        if (!description.length) {
            return;
        }

        offsets = description.data('offsets').split(':');
        aligning = description.data('aligning').split(':');
        startwidth = parseInt(description.data('startwidth'), 10);

        cssObj[aligning[0]] = scaleRatio * offsets[0];
        cssObj[aligning[1]] = scaleRatio * offsets[1];

        if (fontResizing) {

            cssObj['width'] = Math.floor(startwidth * scaleRatio);

            description.find('h2').css({
                fontSize: Math.floor(51 * scaleRatio)
            })
            .end().find('p').css({
                fontSize: Math.floor(12 * scaleRatio)
            });

        }

        description.css(cssObj);

    },


    open: function(car) {
        var id = car.id,
            index = car.index,
            cover = GoTrip.settings.element.find('li').eq(index),
            req = $.ajax('/api/' + GoTrip.settings.pagepath + '/' + id, { dataType : 'html', type : 'GET', cache: false }),
            percent = Scaling.scalingPercentage(),
            leftValue;



        GoTrip.settings.scrollLeft = GoTrip.settings.element.scrollLeft();
        leftValue = ((180 * index) + 270 - GoTrip.settings.scrollLeft) - ((percent * 1280) * GoTrip.settings.offsets[index]);

        // Prevent mousemove from hiding the overlay (webkit)
        GoTripXCHelpers.unbindOverlay();

        // If we open with click-event, the overlay has not been added yet.
        GoTripXCHelpers.addOverlay();
        console.log(2);

        CoverFlow.settings.loader.detach().appendTo(cover).show().animate({ width: 180 }, { duration: 5000, queue: false, easing: 'easeInOutQuad' });

        req.success(function(resp) {

            $('body').addClass('loading-section');

            $('#current-cover').html(resp).find('img').css({
                width: percent * 1280,
                height: percent * 800,
                left: leftValue
            });

            GoTripCompability.fixGeneratedContent();

            //$.preload('.section-content img', {
            $('.car-content img').preload({
                onFinish: function() {
                    CoverFlow.settings.loader.stop().animate({ width: 180 }, {
                        duration: 500,
                        queue: false,
                        easing: 'easeInOutQuad',
                        complete: function() {
                            $('body').removeClass('loading-section');
                            CoverFlow.settings.loader.hide().width(0);
                            GoTrip.playIntro(cover, index);
                        }
                    });
                }
            });

        });

    },


    playIntro: function(cover, index) {

        var duration = 0.8 * 1000,
            leftValue = (-180 * index) + GoTrip.settings.scrollLeft,
            expandWidth = GoTrip.settings.coverWrapper.width() + Scaling.windowDimensions.width;

        $('#current-cover').show();
        cover.addClass('expand').find('img').hide();

        // #HACK Make animations non-instant
        //$(window).scrollTop(0);

        GoTripXCHelpers.cssAnimation(GoTrip.settings.coverWrapper, { left: leftValue, width: expandWidth }, duration);
        GoTripXCHelpers.cssAnimation(cover, { width: Scaling.windowDimensions.width }, duration);
        GoTripXCHelpers.cssAnimation($('#current-cover').find('.scene img'), { left: 0 }, duration, GoTrip.introCallback, 'play-car-intro');
        GoTripXCHelpers.cssAnimation($('#sidebar'), { left: -270 }, duration);

    },


    playOutro: function() {

        var duration = 0.8 * 1000,
            cover = GoTrip.settings.element.find('.expand'),
            index = cover.index(),
            leftValue = ((180 * index) + 270 - GoTrip.settings.scrollLeft) - ((Scaling.scalingPercentage() * 1280) * GoTrip.settings.offsets[index]),
            maxScroll = (GoTrip.settings.coverCount * 180) - (Scaling.windowDimensions.width - 270), /* (Scaling.windowDimensions.width - 270) */
            coverWrapperWidth = GoTrip.settings.coverCount * GoTrip.settings.coverWidth;

        GoTripXCHelpers.addOverlay();
        console.log(3);

        // Fix for when user slides "prev" and the cover-wrapper has not scrolled past the first cover-item
        if (GoTrip.settings.scrollLeft < 0 && GoTripXCHelpers.prevHistoryState.data.direction === 'prev') {
            leftValue += GoTrip.settings.scrollLeft;
        }

        // Fix for when user slides "next" and the cover-wrapper has not scrolled past the last cover-item
        if (GoTrip.settings.scrollLeft > maxScroll && GoTripXCHelpers.prevHistoryState.data.direction === 'next') {
            leftValue += GoTrip.settings.scrollLeft - maxScroll;
        }

        //Added to support playOutro after navigating sideways
        $('#current-cover').find('.car-content').css('zIndex', 3332);

        GoTrip.settings.element.show().scrollLeft(GoTrip.settings.scrollLeft);
        $('.car-content .description').hide();

        GoTripXCHelpers.cssAnimation(GoTrip.settings.coverWrapper, { left: 270, width: coverWrapperWidth }, duration);
        GoTripXCHelpers.cssAnimation(cover, { width: 180 }, duration);
        GoTripXCHelpers.cssAnimation($('#current-cover').find('.scene img'), { left: leftValue }, duration, GoTrip.outroCallback, 'play-car-outro');
        GoTripXCHelpers.cssAnimation($('#sidebar'), { left: 0 }, duration);

    },


    introCallback: function() {

        var percent = Scaling.scalingPercentage();

        $('body').addClass('car-view');

        // #note changed from Scaling.windowResize(); These should be the only elements in need of resize.
        $('#current-cover img').css({
            width: percent * 1280,
            height: percent * 800
        })
        .end().find('.car-content').css({
            width: Scaling.windowDimensions.width,
            height: Scaling.windowDimensions.height
        });

        GoTrip.settings.element.hide();
        GoTripXCHelpers.removeOverlay();
        GoTrip.initNav();

    },


    outroCallback: function() {

        var scrollLeft = GoTrip.settings.element.scrollLeft(),
            firstIndex = Math.floor(scrollLeft / 180);

        $('body').removeClass('car-view');
        $('#current-cover').empty().hide();
        GoTrip.settings.element.find('.expand img').show().end().find('.expand').removeClass('expand').addClass('active').removeAttr('style');

        // CoverFlow-key nav, disable on IE until mouseover-bug is fixed
        if (parseInt(GoTripXCHelpers.userAgentString.indexOf('msie'), 10) === -1) {
            GoTripKeyNav.coverFlowKeyCounter = GoTrip.settings.element.find('.active').index() - firstIndex - 1;
            GoTripKeyNav.coverFlowKeyNav({type: GoTrip.settings.pagetype, covers: 11});
        }

        //setTimeout(GoTripXCHelpers.removeOverlay, 500);
        GoTrip.settings.element[0].scrollLeft += 1; // Fix for older browsers
        GoTripXCHelpers.addOverlay({ mousemove: GoTripXCHelpers.removeOverlay });
        console.log(4);

    },


    slideInCar: function(url, direction) {

        var sectionWrapper = $('#current-cover'),
            id = parseInt(url.split('/').pop(), 10),
            index = id,
            delta = (direction === 'next')? -1 : 1,
            leftValue = (delta === -1)? Scaling.windowDimensions.width : 0,
            req = $.ajax('/api/' + GoTrip.settings.pagepath + '/' + id, { dataType: 'html', type: 'GET', cache: false });

        // Disable the page while loading...
        GoTripXCHelpers.addOverlay();
        console.log(5);

        req.success(function(resp) {

            $('body').addClass('loading-next-section');
            $('#' + direction).addClass('loading');

            sectionWrapper.append(resp);

            GoTripCompability.fixGeneratedContent();

            //Added to support playOutro after navigating sideways
            GoTrip.settings.scrollLeft = GoTrip.settings.scrollLeft -(delta * 180);
            GoTrip.settings.coverWrapper.css('left', (-180 * index) + GoTrip.settings.scrollLeft);
            GoTrip.settings.element.find('.expand img').show()
            .end().find('.expand').removeClass('expand').removeAttr('style')
            .end().find('li').eq(index).addClass('expand').width(Scaling.windowDimensions.width).find('img').hide();
            // END

            sectionWrapper.find('.car-content:last').css({
                zIndex: 1, /* Dont set to zero, will break in ie7 */
                left: leftValue - ((Scaling.scalingPercentage() * 1280) * GoTrip.settings.offsets[index])
            }).end()
            .find('.car-content:first').css('zIndex', 3332);

            Scaling.resizeNextSection();

            GoTripXCHelpers.showPNGLoader($('#' + direction), {
                size: 41,
                reset: 4058,
                loop: false,
                interval: 50
            });

            $('.car-content:nth-child(2) img').preload({
                onFinish: function() {
                    GoTripXCHelpers.hidePNGLoader(function() {
                        $('body').removeClass('loading-next-section');
                        sectionWrapper.find('.car-content').removeClass('active');

                        GoTripXCHelpers.cssAnimation(sectionWrapper.find('.car-content:last'), { left: 0 }, 1000);
                        GoTripXCHelpers.cssAnimation(sectionWrapper.find('.car-content:first'), { left: delta * Scaling.windowDimensions.width }, 1000, function() {
                            sectionWrapper.find('.car-content:first').remove().end()
                            .find('.car-content img').css({
                                left: 0 //Added to support playOutro after navigating sideways
                            });
                            GoTrip.initNav();
                        }, 'slide-in-next-car');
                    });
                }
            });

        });

    },


    initNav: function() {

        var sectionWrapper = $('#current-cover');

		sectionWrapper.find('.car-content:last').addClass('active');

        GoTrip.moveDescription(false);

        $('.car-content .description').fadeIn(200);

        GoTripXCHelpers.removeOverlay();

        // Bind navigation events
        sectionWrapper.find('.section-nav').unbind('click').bind('click', function(e) {
            var id = this.href.split('/').pop();

            sectionWrapper.find('.section-nav').unbind('click');
            History.pushState({ type: 'slide-section', url: this.href, direction: this.id }, GoTripXCHelpers.getPageTitle('slide-section', parseInt(id, 10) + 1), '/' + GoTrip.settings.pagetype + '/' + id);
            e.preventDefault();
        }).end()
        .find('.to-coverflow').bind('click', function(e) {
            History.pushState({ type: 'close-section' }, GoTripXCHelpers.getPageTitle('close-section'), '/' + GoTrip.settings.pagetype);
            e.preventDefault();
        });

        GoTripKeyNav.sectionKeyNav({type: GoTrip.settings.pagetype});

    },


    init: function(pagetype) {

    	if(pagetype === 'v40cc') {
    		GoTrip.settings.pagepath = 'v40HTML';
    		GoTrip.settings.offsets = Scaling.v40CoverOffsets;
        }
        else {
			GoTrip.settings.pagepath = 'carHTML';
			GoTrip.settings.offsets = Scaling.carCoverOffsets;
        }

    	GoTrip.settings.pagetype = pagetype;
        GoTrip.settings.element = $('.car-covers');
        GoTrip.settings.coverWrapper = GoTrip.settings.element.find('ul');
        GoTrip.settings.coverArray = GoTrip.settings.element.find('li');
        GoTrip.settings.coverWidth = GoTrip.settings.coverArray.width();
        GoTrip.settings.coverCount = GoTrip.settings.coverArray.length;

        Scaling.windowResize();
        this.setWrapperWidth();
        this.setCenterLine();
        this.adjustNavSpeed();
        this.bindEvents();

    }


};

var OrderTrip = {
	init: function(){
		$("#video").css("opacity", "0").show().delay(300).animate({
			opacity:1
		}, 400 )
		$(".page-offer .page-close").css("opacity", "0").show().delay(300).animate({
			opacity:1
		}, 400 )
		$("#youtube").hide();
		$("#video").bind("click", function(){

        var videoSrc = $("#youtube");

        GoTripXCHelpers.addOverlay({ classname: 'transparent', click: OrderTrip.close });
            console.log(6);

        $('#popUp').addClass('active').css({
            left: (Scaling.windowDimensions.width / 2) - (768 / 2),
            top: (Scaling.windowDimensions.height / 2) - (500 / 2)
        });

        $("#youtube").show();
		$("#popUp").html( videoSrc)

    	})
	},
	out: function(){
		$("#video").animate({
			opacity:0
		}, 100 )
		$(".page-offer .page-close").animate({
			opacity:0
		}, 100 )
	},
  	close: function() {
  		$("#youtube").detach().appendTo("#video");
        $('#popUp').removeClass('active');
        GoTripXCHelpers.removeOverlay();
		$("#youtube").hide();
    }
};

var SectionMap = {

    timeout: null,
    mapWrapper: null,


    scrollMap: function(mouse) {

        var scrollSpeed = 4 * Scaling.scalingPercentage(),
            xMiddle = (Scaling.windowDimensions.width - 270) / 2,
            yMiddle = Scaling.windowDimensions.height / 2,
            deltaX = Math.abs(1 - mouse.x / xMiddle),
            deltaY = Math.abs(1 - mouse.y / yMiddle);

        clearTimeout(SectionMap.timeout);

        (function moveCovers() {
            SectionMap.timeout = setTimeout(function() {
                (mouse.x > xMiddle)? SectionMap.mapWrapper.scrollLeft += (scrollSpeed * deltaX) : SectionMap.mapWrapper.scrollLeft -= (scrollSpeed * deltaX);
                (mouse.y > yMiddle)? SectionMap.mapWrapper.scrollTop += (scrollSpeed * deltaY) : SectionMap.mapWrapper.scrollTop -= (scrollSpeed * deltaY);
            moveCovers();
            }, 11);
        })();

    },


    showTooltip: function(item) {

        var tooltip = ($('#ttip').length)? $('#ttip') : $('<div id="ttip" />').appendTo('#map-wrapper').hide(),
            text = item.title,
            cords = {
                x: parseInt(item.style.left, 10) + 22,
                y: parseInt(item.style.top, 10) + 47
            };

        item.title = '';

        tooltip.text(text).css({
            left: cords.x,
            top: cords.y,
            display: 'block'
        });

        // Prevent tooltip from showing outside map container
        if (cords.x + tooltip.width() > Scaling.windowDimensions.width - 270 + $('#map-wrapper').scrollLeft()) {
            tooltip.css({
                left: cords.x - tooltip.width()
            });
        }

    },


    hideTooltip: function(item) {
        var ttip = $('#ttip').hide();
        item.title = ttip.text();
    },


    init: function() {

        SectionMap.mapWrapper = document.getElementById('map-wrapper');
        Scaling.resizePage();

        $(SectionMap.mapWrapper).bind('mousemove', $.throttle(100, true, function(e) {
            var mouse = { x: e.pageX - 270, y: e.pageY };
            SectionMap.scrollMap(mouse);
        }))
        .bind('mouseleave mousedown', function() {
            clearTimeout(SectionMap.timeout);
        })
        .bind('click', function(e) {
            if ($(e.target).is('a')) {
                var id = parseInt($(e.target).text(), 10);
                History.pushState({type: 'map-to-section', id: id, index: id-1 }, GoTripXCHelpers.getPageTitle('map-to-section', id), '/section/' + id);
                e.preventDefault();
            }
        });

        $(SectionMap.mapWrapper).find('a')
        .bind('mouseenter', function() { SectionMap.showTooltip(this); })
        .bind('mouseleave', function() { SectionMap.hideTooltip(this); });

    }


};

var SectionTrip = {

    timeout: null,
    tripWrapper: null,


    scrollMap: function(mouse) {

        var scrollSpeed = 4 * Scaling.scalingPercentage(),
            xMiddle = (Scaling.windowDimensions.width - 270) / 2,
            yMiddle = Scaling.windowDimensions.height / 2,
            deltaX = Math.abs(1 - mouse.x / xMiddle),
            deltaY = Math.abs(1 - mouse.y / yMiddle);

        clearTimeout(SectionTrip.timeout);

        (function moveCovers() {
            SectionTrip.timeout = setTimeout(function() {
                (mouse.x > xMiddle)? SectionTrip.tripWrapper.scrollLeft += (scrollSpeed * deltaX) : SectionTrip.tripWrapper.scrollLeft -= (scrollSpeed * deltaX);
                (mouse.y > yMiddle)? SectionTrip.tripWrapper.scrollTop += (scrollSpeed * deltaY) : SectionTrip.tripWrapper.scrollTop -= (scrollSpeed * deltaY);
                moveCovers();
            }, 11);
        })();

    },


    showTooltip: function(item) {

        var tooltip = ($('#ttip').length)? $('#ttip') : $('<div id="ttip" />').appendTo('#trip-wrapper').hide(),
            text = item.title,
            cords = {
                x: parseInt(item.style.left, 10) + 22,
                y: parseInt(item.style.top, 10) + 47
            };

        item.title = '';

        tooltip.text(text).css({
            left: cords.x,
            top: cords.y,
            display: 'block'
        });

        // Prevent tooltip from showing outside map container
        if (cords.x + tooltip.width() > Scaling.windowDimensions.width - 270 + $('#trip-wrapper').scrollLeft()) {
            tooltip.css({
                left: cords.x - tooltip.width()
            });
        }

    },


    hideTooltip: function(item) {
        var ttip = $('#ttip').hide();
        item.title = ttip.text();
    },


    init: function() {

        SectionTrip.tripWrapper = document.getElementById('trip-wrapper');
        Scaling.resizePage();

        $(SectionTrip.tripWrapper).find('a')
            .bind('mouseenter', function() { SectionTrip.showTooltip(this); })
            .bind('mouseleave', function() { SectionTrip.hideTooltip(this); });

    }


};

var Section = {


    settings: {
        element: $('#section-wrapper'),
        sceneCount: null,
        queuedScroll: 0,
        hasShownTip: false
    },

    // my block
    bindEvents: function() {
        $('#section-wrapper').delegate('.costTrip a', 'click', function(e) {
            var page = this.href,
                id = page.split('/').pop();

            History.pushState({ type: 'open-trip', id: id }, GoTripXCHelpers.getPageTitle('open-trip', parseInt(id, 10)), '/trip/' + id);

            e.preventDefault();
        });
    },

    scrollToTop: function() {
        $('html, body').firstScrollable().stop().animate({'scrollTop': 0}, $(window).scrollTop(), 'easeOutQuad');
    },


    positionCaptions: function(scene, from, to) {

        var sceneHeight = Scaling.windowDimensions.height,
            percent = ($(window).scrollTop() - (scene * sceneHeight)) / sceneHeight;

        Section.settings.element.find('.caption-' + (scene + 1)).css('top', to - ((from - to) * percent));

    },


    moveCaptions: function() {

        var sectionWrapper = Section.settings.element,
            scrollPos = $(window).scrollTop(),
            toTop = Section.settings.element.find('.to-top'),
            caption,
            from,
            to,
            i;

        if (!Section.settings.sceneCount) {
            return;
        }

        //positionCaptions(scene, from, to)
        for (i = 1; i <= Section.settings.sceneCount; i++) {
            caption = sectionWrapper.find('.caption-' + (i));

            if (caption.length) {
                switch (caption.data('align')) {
                    case 'top':
                        to = caption.data('offset');
                        break;
                    case 'bottom':
                        to = (Scaling.windowDimensions.height - parseInt(caption.outerHeight(), 10)) - caption.data('offset');
                        break;
                    case 'center':
                        to = ((Scaling.windowDimensions.height - parseInt(caption.outerHeight(), 10)) / 2) + caption.data('offset');
                        break;
                }

                // Distance to move (4 > 10) :P
                from = to + (Scaling.windowDimensions.height / 4);

                Section.positionCaptions((i - 1), from, to);
            }
        }

        // Show and hide top-link #todo - optimize
        if (scrollPos === 0) {
            toTop.stop().animate({ opacity: 0 }, { duration: 200, queue: false });
        }
        else if (toTop.css('opacity') !== '1' && !toTop.is(':animated')) {
            toTop.stop().animate({ opacity:1 }, { duration: 200, queue: false });
        }

        sectionWrapper.find('#section-cords').css('top', -(scrollPos) + 75).end()
        .find('.section-nav').css('top', -(scrollPos * 3) + (Scaling.windowDimensions.height/2));

        // Move indicator line relative to first scene figcaption
        if ($('#indicator-line').length && sectionWrapper.find('.figcaption').length) {
            $('#indicator-line').css('top', parseInt(sectionWrapper.find('.figcaption')[0].style.top, 10) + 100);
        }

    },


    setIndicatorLine: function() {

        var sceneWrapper = $('#scene-wrapper'),
            totalFigcaptions,
            firstFigcaption,
            lastFigcaption,
            firstSceneSpan,
            lastSceneSpan,
            offsetTop;

        if (!Section.settings.sceneCount || !sceneWrapper.find('.figcaption').length) {
            return;
        }

        totalFigcaptions = sceneWrapper.find('.figcaption').length;

        firstFigcaption = sceneWrapper.find('.figcaption')[0];
        firstSceneSpan = $(firstFigcaption).parent('.scene').index();

        lastFigcaption = sceneWrapper.find('.figcaption')[totalFigcaptions-1];
        lastSceneSpan = $(lastFigcaption).parent('.scene').index();

        offsetTop = (Scaling.windowDimensions.height * firstSceneSpan) + parseInt(firstFigcaption.style.top, 10) + 10;

        $('#indicator-line').css({
            top: offsetTop,
            height: Scaling.windowDimensions.height * lastSceneSpan + (parseInt(lastFigcaption.style.top, 10) + $(lastFigcaption).outerHeight()) - offsetTop
        });

    },


    moveBadge: function() {

        var percent = Scaling.scalingPercentage(),
            mapWidth = percent * 1280,
            mapHeight = percent * 800;

        $('.badge').css({
            left: mapWidth / 2 - 99,
            top: mapHeight / 2 - 179,
            margin: 0
        });

    },


    open: function(section) {

        var id = section.id,
            index = section.index,
            cover = CoverFlow.settings.element.find('a').eq(index),
            req = $.ajax('/api/section/' + id, { dataType : 'html', type : 'GET', cache: false }),
            percent = Scaling.scalingPercentage(),
            leftValue;

        CoverFlow.settings.scrollLeft = CoverFlow.settings.element.scrollLeft();
//        leftValue = ((180 * index) + 270 - CoverFlow.settings.scrollLeft) - ((percent * 1280) * Scaling.coverOffsets[index]);
          leftValue = ((180 * index) + 270 - CoverFlow.settings.scrollLeft) - ((percent * 1280) * 0.5);

        // Prevent mousemove from hiding the overlay (webkit)
        GoTripXCHelpers.unbindOverlay();

        // If we open with click-event, the overlay has not been added yet.
        GoTripXCHelpers.addOverlay();
        console.log(7);

        CoverFlow.settings.loader.detach().appendTo(cover).show().animate({ width: 180 }, { duration: 5000, queue: false, easing: 'easeInOutQuad' });

        req.success(function(resp) {

            $('body').addClass('loading-section');

            Section.bindEvents();

            Section.settings.element.html(resp).find('#scene-1 img.scale').css({
                width: percent * 1280,
                height: percent * 800,
                left: leftValue
            });


            GoTripCompability.fixGeneratedContent();

            //$.preload('.section-content img', {
            $('.section-content #scene-1 img').preload({
                onFinish: function() {
                    CoverFlow.settings.loader.stop().animate({ width: 180 }, {
                        duration: 500,
                        queue: false,
                        easing: 'easeInOutQuad',
                        complete: function() {
                            $('body').removeClass('loading-section');
                            CoverFlow.settings.loader.hide().width(0);
                            Section.playIntro(cover, index);
                        }
                    });
                }
            });

        });

    },


    playIntro: function(cover, index) {

        var duration = 0.8 * 1000,
            leftValue = (-180 * index) + CoverFlow.settings.scrollLeft,
            expandWidth = CoverFlow.settings.coverWrapper.width() + Scaling.windowDimensions.width,
            scaleLeft = (Scaling.windowDimensions.width - 1280)/2;

        Section.settings.element.show();
        cover.addClass('expand').find('img').hide();

        // #HACK Make animations non-instant
        $(window).scrollTop(0);

        GoTripXCHelpers.cssAnimation(CoverFlow.settings.coverWrapper, { left: leftValue, width: expandWidth }, duration);
        GoTripXCHelpers.cssAnimation(cover, { width: Scaling.windowDimensions.width }, duration);
        GoTripXCHelpers.cssAnimation($('#scene-1').find('img.scale'), { left: scaleLeft }, duration, Section.introCallback, 'play-section-intro');
        GoTripXCHelpers.cssAnimation($('#sidebar'), { left: 0 }, duration);

    },


    playOutro: function() {

        var duration = 0.8 * 1000,
            cover = CoverFlow.settings.element.find('.expand'),
            index = cover.index(),
//            leftValue = ((180 * index) + 270 - CoverFlow.settings.scrollLeft) - ((Scaling.scalingPercentage() * 1280) * Scaling.coverOffsets[index]),
            leftValue = ((180 * index) + 270 - CoverFlow.settings.scrollLeft) - ((Scaling.scalingPercentage() * 1280) * 0.5),
            maxScroll = (CoverFlow.settings.coverCount * 180) - (Scaling.windowDimensions.width - 270), /* (Scaling.windowDimensions.width - 270) */
            coverWrapperWidth = CoverFlow.settings.coverCount * CoverFlow.settings.coverWidth;

        GoTripXCHelpers.addOverlay();
        console.log(8);

        // Fix for when user slides "prev" and the cover-wrapper has not scrolled past the first cover-item
        if (CoverFlow.settings.scrollLeft < 0 && GoTripXCHelpers.prevHistoryState.data.direction === 'prev') {
            leftValue += CoverFlow.settings.scrollLeft;
        }

        // Fix for when user slides "next" and the cover-wrapper has not scrolled past the last cover-item
        if (CoverFlow.settings.scrollLeft > maxScroll && GoTripXCHelpers.prevHistoryState.data.direction === 'next') {
            leftValue += CoverFlow.settings.scrollLeft - maxScroll;
        }

        //Added to support playOutro after navigating sideways
        Section.settings.element.find('.section-content').css('zIndex', 3332);

        CoverFlow.settings.element.show().scrollLeft(CoverFlow.settings.scrollLeft);
        $('#scene-1').find('.figcaption').add('#indicator-line, #section-cords').hide();

        GoTripXCHelpers.cssAnimation(CoverFlow.settings.coverWrapper, { left: 270, width: coverWrapperWidth }, duration);
        GoTripXCHelpers.cssAnimation(cover, { width: 180 }, duration);
        GoTripXCHelpers.cssAnimation($('#scene-1 img'), { left: leftValue }, duration, Section.outroCallback, 'play-section-outro');
        GoTripXCHelpers.cssAnimation($('#sidebar'), { left: 0 }, duration);

    },


    introCallback: function() {

        var percent = Scaling.scalingPercentage(),
            langText = '',
            tip;

        switch(GoTripXCHelpers.lang) {
            case 'ru':
                langText = 'Навигация с помощью<br /> клавиш со стрелками';
                break;
            default:
                langText = 'Navigate with<br /> the arrow keys.';
                break;
        }

        tip = $('<div class="tip">' + langText + '</div>');

        function toggleTip() {

            var delay = 1000;

            $(document).unbind('keydown keyup').bind('keydown.tip', function(e) {

                delay = 0;

                if (e.which === 27 || (e.which >= 37 && e.which <= 40)) {
                e.preventDefault();
                }

            })
            .bind('keyup.tip mousemove.tip', function(e) {

                var queueKey = e.which;

                $(document).unbind('keydown.tip keyup.tip mousemove.tip');

                setTimeout(function() {
                    tip.fadeOut(200, function() {
                        tip.remove();
                        Section.settings.hasShownTip = true;
                        Section.initNav(queueKey);
                    });
                }, delay);

            });

        }

        $('body').addClass('section-view');

        // #note changed from Scaling.windowResize(); These should be the only elements in need of resize.
        Section.settings.element.find('img.scale').css({
            width: percent * 1280,
            height: percent * 800,
            left: (Scaling.windowDimensions.width - 1280)/2
        }).end()
        .find('.section-content').css({
            width: Scaling.windowDimensions.width,
            height: Scaling.windowDimensions.height
        });

        CoverFlow.settings.element.hide();
        //GoTripXCHelpers.removeOverlay();

        // Show key-nav indicator until mousemove or keypress
        if (Section.settings.hasShownTip) {
            Section.initNav();
        }
        else {
            Section.settings.element.find('.section-content').append(tip);
            tip.hide().fadeIn(200);
            toggleTip();
        }

	},


    outroCallback: function() {

        var scrollLeft = CoverFlow.settings.element.scrollLeft(),
            firstIndex = Math.floor(scrollLeft / 180);

        Section.settings.sceneCount = null;
        $('body').removeClass('section-view');
        Section.settings.element.empty().hide();
        CoverFlow.settings.element.find('.expand img').show().end().find('.expand').removeClass('expand').addClass('active').removeAttr('style');

        // CoverFlow-key nav, disable on IE until mouseover-bug is fixed
        if (parseInt(GoTripXCHelpers.userAgentString.indexOf('msie'), 10) === -1) {
            GoTripKeyNav.coverFlowKeyCounter = CoverFlow.settings.element.find('.active').index() - firstIndex - 1;
            GoTripKeyNav.coverFlowKeyNav({type: 'section', covers: 50});
        }

        //setTimeout(GoTripXCHelpers.removeOverlay, 500);
        CoverFlow.settings.element[0].scrollLeft += 1; // Fix for older browsers
        GoTripXCHelpers.addOverlay({ mousemove: GoTripXCHelpers.removeOverlay });
        console.log(9);

    },

    slideInSection: function(url, direction) {

        var sectionWrapper = Section.settings.element,
            id = parseInt(url.split('/').pop(), 10),
            index = id - 1,
            delta = (direction === 'next')? -1 : 1,
            leftValue = (delta === -1)? Scaling.windowDimensions.width : 0;

        // Disable the page while loading...
        GoTripXCHelpers.addOverlay();
        console.log(10);


        $.ajax('/api/section/' + id, {
            dataType: 'html',
            type: 'GET', cache: false,

            success: function(resp) {

                $('body').addClass('loading-next-section');
                $('#' + direction).addClass('loading');

                sectionWrapper.append(resp);

                GoTripCompability.fixGeneratedContent();

                //Added to support playOutro after navigating sideways
                CoverFlow.settings.scrollLeft = CoverFlow.settings.scrollLeft -(delta * 180);
                CoverFlow.settings.coverWrapper.css('left', (-180 * index) + CoverFlow.settings.scrollLeft);
                CoverFlow.settings.element.find('.expand img').show().end()
                .find('.expand').removeClass('expand').removeAttr('style').end()
                .find('a').eq(index).addClass('expand').width(Scaling.windowDimensions.width).find('img').hide();
                // END

                sectionWrapper.find('.section-content:last').css({
                    zIndex: 1, /* Dont set to zero, will break in ie7 */
//                    left: leftValue - ((Scaling.scalingPercentage() * 1280) * Scaling.coverOffsets[index])
                    left: leftValue - ((Scaling.scalingPercentage() * 1280) * 0.5)
                }).end()
                .find('.section-content:first').css('zIndex', 3332);

                var afterScrollTop = function() {

                    Scaling.resizeNextSection();

                    GoTripXCHelpers.showPNGLoader($('#' + direction), {
                        size: 41,
                        reset: 4058,
                        loop: false,
                        interval: 50
                    });

                    $('.section-content:nth-child(2) #scene-1 .scale').preload({
                        onFinish: function() {
                            GoTripXCHelpers.hidePNGLoader(function() {
                                $('body').removeClass('loading-next-section');
                                sectionWrapper.find('.section-content').removeClass('active');

                                GoTripXCHelpers.cssAnimation(sectionWrapper.find('.section-content:last'), { left: 0 }, 1000);
                                GoTripXCHelpers.cssAnimation(sectionWrapper.find('.section-content:first'), { left: delta * Scaling.windowDimensions.width }, 1000, function() {
                                    sectionWrapper.find('.section-content:first').remove().end()
                                        .find('#scene-1 img').css({
                                            //left: 0 //Added to support playOutro after navigating sideways
                                            left: (Scaling.windowDimensions.width - 1280)/2
                                        });
                                    Section.initNav();
                                }, 'slide-in-next-section');
                            });
                        }
                    });
                };

                if($(window).scrollTop() != 0 ){
                    $('html, body').firstScrollable().animate({ scrollTop: 0 }, $(window).scrollTop(), 'easeOutQuad', afterScrollTop);
                } else {
                    afterScrollTop();
                }
            }
        });
    },


    initNav: function(queuedAction) {

        var sectionWrapper = Section.settings.element,
            nextScrollPos, duration;

        // #GATracking (lang, section-id, scene-id)
        //GATracking.trackSection(GoTripXCHelpers.lang, CoverFlow.settings.element.find('.expand').index() + 1, 0);

        sectionWrapper.find('.section-content:last').addClass('active');

        Section.settings.sceneCount = $('#scene-wrapper').find('.scene').length;

        Section.moveCaptions();
        Section.moveBadge();
        Section.setIndicatorLine();

        $('#section-cords, #indicator-line, .caption-1').fadeIn(200, function() {
            $('.figcaption').show(); // Show other captions later
        });

        GoTripXCHelpers.removeOverlay();

        // Bind navigation events
        sectionWrapper.find('.section-nav').unbind('click').bind('click', function(e) {

            var id = this.href.split('/').pop();

            sectionWrapper.find('.section-nav').unbind('click');
            History.pushState({ type: 'slide-section', url: this.href, direction: this.id }, GoTripXCHelpers.getPageTitle('slide-section', parseInt(id, 10)), '/section/' + id);
            e.preventDefault();

        }).end()
        .find('.to-coverflow').bind('click', function(e) {
            History.pushState({ type: 'close-section' }, GoTripXCHelpers.getPageTitle('close-section'), '/');
            sectionWrapper.find('.to-top').unbind('click');
            e.preventDefault();
        }).end()
        .find('.to-top').bind('click', function(e) {
            Section.scrollToTop();
            e.preventDefault();
        }).end()
        .find('.figcaption a').bind('click', function(e) {
            var link = this.href, id = null, lang = null;
        });

        GoTripKeyNav.sectionKeyNav({type: 'section'});

        switch (queuedAction) {
            case 37:
                sectionWrapper.find('#prev').trigger('click');
                break;
            case 39:
                sectionWrapper.find('#next').trigger('click');
                break;
            case 40:
                nextScrollPos = GoTripXCHelpers.getNextScrollPosition(40),
                duration = nextScrollPos * 1.618;
                $('html, body').firstScrollable().stop().animate({ scrollTop: $(window).scrollTop() + nextScrollPos }, {
                    duration: duration,
                    easing: 'easeInOutQuad',
                    queue: false
                });
                break;
            default:
                break;
        }

    },


    mouseWheelScroll: function(delta) {

        // Using helper function to move scene-wrapper when user scrolls
        var scrollPos = $(window).scrollTop(),
            scrollSteps = 17,
            speed = Scaling.windowDimensions.height / scrollSteps,
            duration;

        // Prevent scrolling when a new section is loading
        if ($('body').hasClass('loading-next-section') || $('body').hasClass('slide-in-next-section'))       {
            return;
        }

        delta = (delta < 0)? -1 : 1;

        // Direction-change
        if ( delta !== Section.settings.prevDelta) {
            Section.settings.queuedScroll = (-delta * speed);
        }

        Section.settings.prevDelta = delta;

        // Scroll Down
        if (delta < 0) {
            if (Section.settings.queuedScroll < (speed * 10)) {
                Section.settings.queuedScroll += speed;
            }
        }

        // Scroll Up
        else {
            if (Section.settings.queuedScroll > (-speed * 10)) {
                Section.settings.queuedScroll -= speed;
            }
        }

        duration = 500 + (-delta * Section.settings.queuedScroll * 3);

        // Scroll page
        $('html, body').firstScrollable().stop().animate({ scrollTop: '+=' + Section.settings.queuedScroll }, {
            duration: duration,
            easing: 'easeOutCubic',
            queue: false,
            complete: function() {
                Section.settings.queuedScroll = 0;
            }
        });

    }


};

var CoverFlow = {


    settings: {
        element: null,
        sidebar: null,
        loader: null,
        coverWrapper: null,
        coverArray: null,
        coverWidth: null,
        coverCount: null,
        currentCover: 4,
        scrollLeft: 0,
        navSpeed: 7,
        centerLine: 0,
        timer: null
    },


    setWrapperWidth: function() {
        this.settings.coverWrapper.width(CoverFlow.settings.coverCount * CoverFlow.settings.coverWidth);
    },


    setCenterLine: function() {
        CoverFlow.settings.centerLine = (Scaling.windowDimensions.width - 270) / 2;
    },


    adjustNavSpeed: function() {
        var stageWidth = Scaling.windowDimensions.width - 270,
        maxScroll = CoverFlow.settings.coverWrapper.width() - stageWidth;

        CoverFlow.settings.adjustedNavSpeed = CoverFlow.settings.navSpeed * (1 + stageWidth / maxScroll);
    },


    moveCoverFlow: function(mousePos) {
        var delta = Math.abs(1 - mousePos / CoverFlow.settings.centerLine);

        // use requestAnimationFrame:
        (function moveCovers() {
            //GoTripXCHelpers.setVisibleCovers();
            CoverFlow.settings.timer = setTimeout(function() {
                if (mousePos > CoverFlow.settings.centerLine) {
                    CoverFlow.settings.element[0].scrollLeft += (CoverFlow.settings.adjustedNavSpeed * delta);
                }
                else {
                    CoverFlow.settings.element[0].scrollLeft -= (CoverFlow.settings.adjustedNavSpeed * delta);
                }
                moveCovers();
            }, 11); // Set to 16 to be safe... Browser timer resolutions: http://www.nczonline.net/blog/2011/05/03/better-javascript-animations-with-requestanimationframe/
        })();
    },


    bindEvents: function() {

        this.settings.element.bind('mousemove', $.throttle(100, true, function(e) {
            clearTimeout(CoverFlow.settings.timer);
            CoverFlow.moveCoverFlow(e.pageX - 270);
        }))
        .bind('mouseenter mouseleave mousedown', function() {
            clearTimeout(CoverFlow.settings.timer);
            $('#cover-flow').find('.active').removeClass('active');
            GoTripKeyNav.coverFlowKeyCounter = 0;
        })
            .bind('mousewheel', function(e, delta){
            e.preventDefault();
            clearTimeout(CoverFlow.settings.timer);
            delta = (delta < 0)? -1 : 1;
            this.scrollLeft -= (delta * 20);
        })
        .bind('click', function(e) {
            var cover = $(e.target).closest('a'),
                id = cover.attr('href').split('/').pop(),
                index = cover.index();

            clearTimeout(CoverFlow.settings.timer);
            History.pushState({ type: 'open-section', id: id, index: index }, GoTripXCHelpers.getPageTitle('open-section', parseInt(id, 10)), '/section/' + id);
            e.preventDefault();
        });

        $('#langselect > a').bind('click', function(e) {
            var accordian = $('#langselect').find('ul');
            e.preventDefault();
            if (accordian.is(':animated')) {
                return;
            }
            accordian.animate({ height: 'toggle' }, 350, 'easeOutQuad', Scaling.adjustSidebar);
        });

        $('#menu nav a').bind('click', function(e) {
            var page = this.href,
                cleanName = page.split('/').pop();

            if (this.rel === 'home') {
                History.pushState({ type: 'close-page' }, GoTripXCHelpers.getPageTitle('close-page'), '/');
            }
            else {
                History.pushState({ type: 'open-page', page: cleanName }, GoTripXCHelpers.getPageTitle('open-page', $(this).index() + 1), page);
            }
            e.preventDefault();
        });

        $('#popUp').find('a').bind('click', GoTripXCHelpers.closeMovie);

        $(window).bind('resize', $.throttle(100, Scaling.windowResize));

        // CoverFlow-key nav, disable on IE until mouseover-bug is fixed
        if (parseInt(GoTripXCHelpers.userAgentString.indexOf('msie'), 10) === -1) {
            GoTripKeyNav.coverFlowKeyNav({type: 'section', covers: 6});
        }

    },


    playIntro: function() {
console.log('after 12');
        var windowLocationString = window.location.pathname.toLowerCase(),
            coverArray = CoverFlow.settings.coverArray,
            currentCover = CoverFlow.settings.currentCover,
            index = currentCover - 1,
            coversOnScreen = Math.ceil((Scaling.windowDimensions.width - 270) / CoverFlow.settings.coverWidth),
            timer;

        function applyRemainingCovers() {

            var id, page;

            $('body').removeClass('play-coverflow-intro');
            GoTripXCHelpers.removeOverlay();

            if (windowLocationString.indexOf('/section/') > -1) {
                id = parseInt(windowLocationString.split('/section/').pop(), 10);
                Section.open({ id: id, index: id - 1 });
            }
            else if (windowLocationString.indexOf('/trip/') > -1) {
                id = parseInt(windowLocationString.split('/trip/').pop(), 10);
                Trip.open(id);
            }
            else if (/\/(about|app|offer)/.test(windowLocationString)) {
                page = windowLocationString.split('/').pop();
                Page.open(page);
            }
        }

        $('body').removeClass('loading-coverflow').addClass('play-coverflow-intro summer');

        // The sidebar is hidden until the class loading-coverflow is removed.
        // Have to run adjustSidebar when the sidebar has become visible. (using outerHeight calculations)
        Scaling.adjustSidebar();

        if (windowLocationString.indexOf('/section/') > -1) {
            // Reset curernt cover and index
            currentCover = parseInt(windowLocationString.split('/section/').pop(), 10);
            index = currentCover - 1;
            GoTripXCHelpers.addOverlay();
        }

        CoverFlow.settings.element.scrollLeft(180 * (index));

        CoverFlow.settings.sidebar.animate({ left: 0 }, 500, 'easeOutQuad', function() {

            if (index + coversOnScreen > 50) {
                index = 50 - coversOnScreen;
            }

            (function animateCover() {

                if (index >= coversOnScreen + (currentCover - 1)) {
                    clearTimeout(timer);
                    applyRemainingCovers();
                    return;
                }

                timer = setTimeout(function() {
                    coverArray.eq(index).animate({ opacity: 1 }, 200, 'easeInOutQuad');
                    index++;
                    animateCover();
                }, 100);

            })();
        });

    },


    init: function() {

        var firstPreloadIndex = CoverFlow.settings.currentCover - 1, //25
            lastPreloadIndex,
            offsetIndex = 4,
            coversOnScreen;

        CoverFlow.settings.element = $('#cover-flow');
        CoverFlow.settings.sidebar = $('#sidebar');
        CoverFlow.settings.coverWrapper = CoverFlow.settings.element.find('nav');
        CoverFlow.settings.coverArray = CoverFlow.settings.element.find('a');
        CoverFlow.settings.coverWidth = CoverFlow.settings.coverArray.width();
        CoverFlow.settings.coverCount = CoverFlow.settings.coverArray.length;

        coversOnScreen = Math.ceil(($(window).width() - 270) / CoverFlow.settings.coverWidth);
        lastPreloadIndex = firstPreloadIndex + coversOnScreen + offsetIndex;
        firstPreloadIndex = firstPreloadIndex - offsetIndex;

        // Determine lang, used in #GATracking
        GoTripXCHelpers.lang = $('body').attr('class').split('lang-').pop();

        // Append coverflow-loader
        CoverFlow.settings.loader = $('#coverflow-loader').length? $('#coverflow-loader') : $('<div id="coverflow-loader" />').appendTo('body');

        GoTripCompability.fixGeneratedContent();

        Scaling.windowResize();
        this.setWrapperWidth();
        this.setCenterLine();
        this.adjustNavSpeed();
        this.bindEvents();

        // Add an overlay so the user dont scroll away before we load the right covers
        GoTripXCHelpers.addOverlay();
        console.log(12);

        $('#cover-flow img').slice(firstPreloadIndex, lastPreloadIndex).preload({ onFinish: CoverFlow.playIntro });
        //$.preload('#cover-flow img', { onFinish: CoverFlow.playIntro });

    }


};


/* HISTORY.JS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
(function(window, undefined) {

    var History = window.History;
    if (!History.enabled) {
        return false;
    }

    // Bind to StateChange Event
    History.Adapter.bind(window, 'statechange', function() {
        console.log('statechange');
        var State = History.getState(),
            windowLocationString = window.location.pathname.toLowerCase(),
            prevId = 0,
            currId = 0,
            id, index, urlId, urlPage, delta, coversOnScreen;

        function get_dir(filter) {

            if (State.cleanUrl) {
                currId = parseInt(State.cleanUrl.split('/' + filter + '/').pop(), 10);
            }

            if (GoTripXCHelpers.prevHistoryState && GoTripXCHelpers.prevHistoryState.data.url) {
                prevId = parseInt(GoTripXCHelpers.prevHistoryState.data.url.split('/' + filter + '/').pop(), 10);
            }

            log('Curr: ' + currId + ' Prev: ' + prevId);

            return (currId > prevId)? 'next' : 'prev';
        }

        function scrollToCenter(type, index, cb) {

            var obj = (type === 'cars' || type === 'v40cc')? GoTrip : CoverFlow,
                currentScrollLeft = obj.settings.element.scrollLeft(),
                coversOnScreen = Math.ceil((Scaling.windowDimensions.width - 270) / 180),
                minVisible = Math.round(currentScrollLeft / 180),
                maxVisible = minVisible + coversOnScreen - 1;

            log('min: ' + minVisible + ' max: ' + maxVisible);
            log('Duration: ' + (currentScrollLeft - (180 * (index + 1 - coversOnScreen))));

            if (index >= minVisible && index <= maxVisible) {

                if ($.isFunction(cb)) {
                    cb();
                }
            }

            else {
                if ($.isFunction(cb)) {
                    GoTripXCHelpers.addOverlay();
                    console.log(13);
                    obj.settings.element.stop().animate({ scrollLeft: (180 * (index - Math.ceil(coversOnScreen/2))) + 180 }, {
                        duration: 500,
                        easing: 'easeOutQuad',
                        queue: false,
                        complete: cb
                    });
                }
            }

        }

        /*
        log('State: ' + State.data.type);
        if (GoTripXCHelpers.prevHistoryState) log('Prev: ' + GoTripXCHelpers.prevHistoryState.data.type);
        */
        if (State.data.type === 'open-section') {

            if (GoTripXCHelpers.prevHistoryState && GoTripXCHelpers.prevHistoryState.data.type === 'slide-section') {
                Section.slideInSection('/section/' + State.data.id, get_dir('section'));
            } else if (GoTripXCHelpers.prevHistoryState && GoTripXCHelpers.prevHistoryState.data.type === 'open-trip') {
                Trip.playOutro(function(){ Section.open(State.data); });
            } else {
                if (Page.settings.visible) {
                    Page.playOutro(GoTripXCHelpers.addOverlay);
                }
                scrollToCenter('sections', State.data.index, function(){ Section.open(State.data); });
            }

        }
        else if (State.data.type === 'close-section') {

            if ($(window).scrollTop() !== 0) {
                $('html, body').firstScrollable().stop().animate({'scrollTop': 0}, $(window).scrollTop(), 'easeOutQuad', Section.playOutro);
            }
            else {
                Section.playOutro();
            }
            if (Page.settings.visible) {
                Page.playOutro();
            }

        }
        else if (State.data.type === 'slide-section') {

            if (GoTripXCHelpers.prevHistoryState && GoTripXCHelpers.prevHistoryState.data.type === 'slide-section') {
                Section.slideInSection(State.data.url, get_dir('section'));
            } else if (GoTripXCHelpers.prevHistoryState && GoTripXCHelpers.prevHistoryState.data.type === 'open-trip') {
                Trip.playOutro(function() {
                    urlId = parseInt(State.data.url.split('/section/').pop(), 10);
                    Section.open({ id: urlId, index: urlId - 1, type: 'open-section' });
                });
            }
            else if (GoTripXCHelpers.prevHistoryState && GoTripXCHelpers.prevHistoryState.data.type === 'close-section') {
                id = State.data.url.split('/section/').pop();
                index = (id - 1 < 0)? 0 : id - 1;
                scrollToCenter('sections', index, function(){ Section.open({ id: id, index: index, type: 'open-section' }); });
            }
            else {
                Section.slideInSection(State.data.url, State.data.direction);
            }

        }
        else if (State.data.type === 'open-page') {

            if(GoTripXCHelpers.prevHistoryState && (GoTripXCHelpers.prevHistoryState.data.type === 'map-to-section' || GoTripXCHelpers.prevHistoryState.data.type === 'open-section')) {
                Section.playOutro();
                Page.open(State.data.page);
            }
            else {
                if (Page.settings.visible) {
                    Page.playOutro(function() {
                        Page.open(State.data.page);
                    });
                }
                else {
                    Page.open(State.data.page);
                }
            }

        }

        else if (State.data.type === 'close-page') {

            if(GoTripXCHelpers.prevHistoryState && GoTripXCHelpers.prevHistoryState.data.type === 'open-section') {
                Section.playOutro();
            }
            else {
                Page.playOutro();
            }

        }

        else if (State.data.type === 'map-to-section') {

            if (GoTripXCHelpers.prevHistoryState && GoTripXCHelpers.prevHistoryState.data.type === 'slide-section') {
                delta = (get_dir('section') === 'next')? 1 : -1;
                State.data.url = '/' + (parseInt(GoTripXCHelpers.prevHistoryState.data.url.split('/section/').pop(), 10) + delta);
                Section.slideInSection(State.data.url, get_dir('section'));
            }
            else {
                coversOnScreen = Math.ceil((CoverFlow.settings.element.width() - CoverFlow.settings.sidebar.width()) / CoverFlow.settings.coverWidth);
                GoTripXCHelpers.addOverlay();
                console.log(15);
                CoverFlow.settings.element.scrollLeft(180 * (State.data.index - Math.ceil(coversOnScreen/2)));
                Page.playOutro(function() {
                    Section.open(State.data);
                });
            }

        }
        else if (State.data.type === 'open-trip') {

            if(GoTripXCHelpers.prevHistoryState && (GoTripXCHelpers.prevHistoryState.data.type === 'map-to-section' || GoTripXCHelpers.prevHistoryState.data.type === 'open-section')) {
                Section.playOutro();
                Trip.open(State.data.id);
            }
            else {
                if (Trip.settings.visible) {
                    Trip.playOutro(function() {
                        Trip.open(State.data.id);
                    });
                } else {
                    Section.playOutro();
                    Trip.open(State.data.id);
                }
            }
        }
        else if (State.data.type === 'close-trip') {
            Trip.playOutro(function() {
                urlId = parseInt(State.data.url.split('/section/').pop(), 10);
                Section.open({ id: urlId, index: urlId - 1, type: 'open-section' });
            });
        }

        else if (State.data.type === undefined) {

            if (GoTripXCHelpers.prevHistoryState && GoTripXCHelpers.prevHistoryState.data.type === 'close-section') {
                urlId = parseInt(windowLocationString.split('/section/').pop(), 10);
                scrollToCenter('sections', (urlId - 1), function(){ Section.open({ id: urlId, index: urlId - 1 }); });
            }
            if (GoTripXCHelpers.prevHistoryState && GoTripXCHelpers.prevHistoryState.data.type === 'open-section') {
                Section.playOutro(); /* Fix for html4 history */
            }
            else if (GoTripXCHelpers.prevHistoryState && GoTripXCHelpers.prevHistoryState.data.type === 'slide-section') {
                delta = (get_dir('section') === 'next')? 1 : -1;
                State.data.url = '/' + (parseInt(GoTripXCHelpers.prevHistoryState.data.url.split('/section/').pop(), 10) + delta);
                Section.slideInSection(State.data.url, get_dir('section'));
            }
            else if (GoTripXCHelpers.prevHistoryState && GoTripXCHelpers.prevHistoryState.data.type === 'close-page') {
                urlpage = windowLocationString.split('/').pop();
                Page.open(urlpage);
            }
            else if (GoTripXCHelpers.prevHistoryState && GoTripXCHelpers.prevHistoryState.data.type === 'open-page') {
                urlpage = windowLocationString.split('/').pop();
                if (urlpage.length) {
                    Page.playOutro(function(){
                        Page.open(urlpage);
                    });
                }
                else {
                    Page.playOutro();
                }
            }
        }
        GoTripXCHelpers.prevHistoryState = State;
    });

})(window);


/* ADD CLASSES FOR BROWSER SPECIFIC ENHANCEMENTS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* Using this to fix font-weight in ff-mac */
Modernizr.addTest('ff-mac', function () {   
	return (GoTripXCHelpers.userAgentString.indexOf('macintosh') > -1) && (GoTripXCHelpers.userAgentString.indexOf('firefox') > -1 );
});

/* Using this to tweak hw-acc */
Modernizr.addTest('safari', function () {   
	return (GoTripXCHelpers.userAgentString.indexOf('safari') > -1) && (GoTripXCHelpers.userAgentString.indexOf('chrome') === -1);
});

/* Chrome */
Modernizr.addTest('chrome', function () {   
	return (GoTripXCHelpers.userAgentString.indexOf('safari') > -1) && (GoTripXCHelpers.userAgentString.indexOf('chrome') > -1);
});


/* JQUERY EXTENSIONS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
$.fn.extend({
  firstScrollable: function(dir) {
    var scrl = GoTripXCHelpers.getScrollable.call(this, {el: 'first', dir: dir});
    return this.pushStack(scrl);
  }
});

$.extend(jQuery.easing, {
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	}
});


/* #DOM-READY
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
jQuery(function(){

	CoverFlow.init();
	
	$(document).bind('mousewheel', function(e, delta) {
		e.preventDefault();
		Section.mouseWheelScroll(delta);
	});

	$(window).bind('scroll', Section.moveCaptions);
	
});