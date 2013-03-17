
/** Cross-browser console log */
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  arguments.callee = arguments.callee.caller;  
  if(this.console) console.log( Array.prototype.slice.call(arguments) );
};
// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});




/** Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.4
 *
 * Requires: 1.2.2+
 */
(function(c){var a=["DOMMouseScroll","mousewheel"];c.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var d=a.length;d;){this.addEventListener(a[--d],b,false)}}else{this.onmousewheel=b}},teardown:function(){if(this.removeEventListener){for(var d=a.length;d;){this.removeEventListener(a[--d],b,false)}}else{this.onmousewheel=null}}};c.fn.extend({mousewheel:function(d){return d?this.bind("mousewheel",d):this.trigger("mousewheel")},unmousewheel:function(d){return this.unbind("mousewheel",d)}});function b(i){var g=i||window.event,f=[].slice.call(arguments,1),j=0,h=true,e=0,d=0;i=c.event.fix(g);i.type="mousewheel";if(i.wheelDelta){j=i.wheelDelta/120}if(i.detail){j=-i.detail/3}d=j;if(g.axis!==undefined&&g.axis===g.HORIZONTAL_AXIS){d=0;e=-1*j}if(g.wheelDeltaY!==undefined){d=g.wheelDeltaY/120}if(g.wheelDeltaX!==undefined){e=-1*g.wheelDeltaX/120}f.unshift(i,j,e,d);return c.event.handle.apply(this,f)}})(jQuery);




/**
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);




/**
 * jQuery.Preload - Multifunctional preloader
 * Copyright (c) 2008 Ariel Flesler - aflesler(at)gmail(dot)com
 * Dual licensed under MIT and GPL.
 * Date: 3/25/2009
 * @author Ariel Flesler
 * @version 1.0.8
 */
;(function($){var h=$.preload=function(c,d){if(c.split)c=$(c);d=$.extend({},h.defaults,d);var f=$.map(c,function(a){if(!a)return;if(a.split)return d.base+a+d.ext;var b=a.src||a.href;if(typeof d.placeholder=='string'&&a.src)a.src=d.placeholder;if(b&&d.find)b=b.replace(d.find,d.replace);return b||null}),data={loaded:0,failed:0,next:0,done:0,total:f.length};if(!data.total)return finish();var g=$(Array(d.threshold+1).join('<img/>')).load(handler).error(handler).bind('abort',handler).each(fetch);function handler(e){data.element=this;data.found=e.type=='load';data.image=this.src;data.index=this.index;var a=data.original=c[this.index];data[data.found?'loaded':'failed']++;data.done++;if(d.enforceCache)h.cache.push($('<img/>').attr('src',data.image)[0]);if(d.placeholder&&a.src)a.src=data.found?data.image:d.notFound||a.src;if(d.onComplete)d.onComplete(data);if(data.done<data.total)fetch(0,this);else{if(g&&g.unbind)g.unbind('load').unbind('error').unbind('abort');g=null;finish()}};function fetch(i,a,b){if(a.attachEvent&&data.next&&data.next%h.gap==0&&!b){setTimeout(function(){fetch(i,a,1)},0);return!1}if(data.next==data.total)return!1;a.index=data.next;a.src=f[data.next++];if(d.onRequest){data.index=a.index;data.element=a;data.image=a.src;data.original=c[data.next-1];d.onRequest(data)}};function finish(){if(d.onFinish)d.onFinish(data)}};h.gap=14;h.cache=[];h.defaults={threshold:2,base:'',ext:'',replace:''};$.fn.preload=function(a){h(this,a);return this}})(jQuery);




//var GATracking = {
//
//
//    trackPageView: function (page) {
//        _gaq.push(['_trackPageview', page + '/desktop']);
//    },
//
//
//    trackAdventure: function (lang, adventure, page) {
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
//        GATracking.trackPageView('/tracking/' + lang + '/section/' + adventure + '/' + pageName);
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
//
//
//};

var Scaling = {


    // Just storing window-height and window-width
    windowDimensions: {
        width: null,
        height: null
    },
    
    
    // Offset percentages for larger adventure-images. 
    // Needed for matching larger adventure-images with cover-images
    coverOffsets: [
        0.1328125, 
        0.2515625, 
        0.2, 
        0.66875, 
        0.675, 
        0.1359375, 
        0.36015625, 
        0.175, 
        0.3796875,
        0.240625,
        0.18046875,
        0.4703125,
        0.4890625,
        0.403125,
        0.24453125,
        0.12109375,
        0.68828125,
        0.23984375,
        0.55625,
        0.58046875,
        0.0875,
        0.3828125,
        0.22421875,
        0.459375,
        0.6734375,
        0.428125,
        0.3734375,
        0.471875,
        0.30625,
        0.37734375,
        0.46640625,
        0.496875,
        0.6296875,
        0.515625,
        0.33671875,
        0.15625,
        0.2578125,
        0.4296875,
        0.6875,
        0.58125,
        0.703125,
        0.16171875,
        0.5609375,
        0.06796875,
        0.3625,
        0.425,
        0.5859375,
        0.44296875,
        0.62578125,
        0.52890625
    ],
    
    
    // Offset percentages for larger car-images. 
    // Needed for matching larger car-images with car-cover-images
    carCoverOffsets: [
        0.0, /* First cover not supposed to open */
        0.5421875,
        0.4359375, 
        0.5859375,
        0.3671875, 
        0.3132812, 
        0.5546875, 
        0.7898437, 
        0.5554687, 
        0.3601562,
        0.5164062
    ],

    v40CoverOffsets: [
        0.0, /* First cover not supposed to open */
        0.50390625,
		0.35546875,
		0.58203125,
		0.34765625,
		0.47265625,
		0.49609375,
    ],
    
    // Return correct percentage for scaling
    constrainPercent: function (originalWidth, originalHeight, stageWidth) {
    
        var stageHeight = Scaling.windowDimensions.height,
            percentW = stageWidth / originalWidth,
            percentH = stageHeight / originalHeight,
            rectWidth = originalWidth * percentH;

        return (rectWidth >= stageWidth)? percentH : percentW;
        
    },
    
	
    // Return the correct percentage for scaling cover-images and adventure-images
    scalingPercentage: function() {

        var coverDimensions = { width: 180, height: 800 },
            imageDimensions = { width: 1280, height: 800 },
            coverPercent = Scaling.constrainPercent(coverDimensions.width, coverDimensions.height, coverDimensions.width),
            imagePercent = Scaling.constrainPercent(imageDimensions.width, imageDimensions.height, Scaling.windowDimensions.width);

        return (imageDimensions.width * coverPercent < Scaling.windowDimensions.width)? imagePercent : coverPercent;

    },
    
	
    // Return the correct percentage for scaling cover-images and adventure-images
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

        if (Velo.settings.element) {

            Velo.settings.element.find('img').css({
                width: percent * 180,
                height: percent * 800
            })
            .end().find('.expand').css({
                width: Scaling.windowDimensions.width
            });

        }

    },
    

    // Runs on each window-resize
    resizeAdventure: function() {

        var percent = Scaling.scalingPercentage(),
            carDescriptionOffsets;

        Adventure.settings.element.find('img.scale').css({
            width: percent * 1280,
            height: percent * 800
        })
        .end().find('.adventure-content').css({
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

            Velo.moveDescription(false);

        }

        Adventure.moveCaptions();
        Adventure.moveBadge();
        Adventure.setIndicatorLine();

    },
    
	
    // Runs on slideInAdventure
    resizeNextAdventure: function() {

        var percent = Scaling.scalingPercentage();

        Adventure.settings.element.find('.adventure-content:last').css({
            width: Scaling.windowDimensions.width,
            height: Scaling.windowDimensions.height
        })
        .find('img.scale').css({
            width: percent * 1280,
            height: percent * 800
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
    

    // Runs on each window-resize and on AdventureMap init
    resizePage: function() {

        var percent = Scaling.scalingPercentage(),
            percent2 = Scaling.constrainPercent(1185, 1024, Scaling.windowDimensions.width - 270),
            percent3 = Scaling.constrainPercent(1100, 800, Scaling.windowDimensions.width - 270),
            w, h;

        if ($('.page-cars').length) {
            w = Scaling.windowDimensions.width;
            h = Scaling.windowDimensions.height;
        }

        else {
            w = Scaling.windowDimensions.width - 270;
            h = Scaling.windowDimensions.height;
        }
       
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
            width: Scaling.windowDimensions.width,
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
        Scaling.resizeAdventure();
        Scaling.resizePage();
        Scaling.adjustSidebar();
        Scaling.resizeOverlay();

        CoverFlow.setCenterLine();
        CoverFlow.adjustNavSpeed();

        Velo.setCenterLine();
        Velo.adjustNavSpeed();

    }

    
};


var VeloXCHelpers = {


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
            width: Scaling.windowDimensions.width,
            height: Scaling.windowDimensions.height,
            display: 'block'
        });

    },
    
	
    unbindOverlay: function() {
        $('#overlay').unbind();		
    },
    
	
    removeOverlay: function() {
        $('#overlay').unbind().removeClass().hide();
    },
    
	
    movieElement: null,
    
	
    playMovie: function(id, lang) {

        var videoSrc = '/assets/movies/' + id + '_' + lang;

        // #GATracking (lang, adventure-id, scene-id)
        GATracking.trackAdventure(VeloXCHelpers.lang, CoverFlow.settings.element.find('.expand').index() + 1, 1);

        VeloXCHelpers.addOverlay({ classname: 'transparent', click: VeloXCHelpers.closeMovie });

        $('#videoplayer').addClass('active').css({
            left: (Scaling.windowDimensions.width / 2) - (768 / 2),
            top: (Scaling.windowDimensions.height / 2) - (432 / 2) + $(window).scrollTop()
        });

        if (!VeloXCHelpers.movieElement) {
        
            VeloXCHelpers.movieElement = new MediaElementPlayer('#mediaelement', {
                success: function(video) {
                    video.setSrc([{ src: videoSrc + '.mp4', type: 'video/mp4' }, { src: videoSrc + '.webm', type: 'video/webm' }]);
                    video.load();
                    video.play();

                    // Chrome Fix... have to do this twice the first time
                    if (VeloXCHelpers.userAgentString.indexOf('chrome') > -1) {
                        setTimeout(function(){
                            VeloXCHelpers.movieElement.setSrc([{ src: videoSrc + '.mp4', type: 'video/mp4' }, { src: videoSrc + '.webm', type: 'video/webm' }]);
                            VeloXCHelpers.movieElement.load();
                            VeloXCHelpers.movieElement.play();
                        }, 1);	
                    }

                }
            });
        }
        
        else {
        
            VeloXCHelpers.movieElement.setSrc([{ src: videoSrc + '.mp4', type: 'video/mp4' }, { src: videoSrc + '.webm', type: 'video/webm' }]);
            VeloXCHelpers.movieElement.load();
            VeloXCHelpers.movieElement.play();
            
        }

    },
    
	
    closeMovie: function() {

        $('#videoplayer').removeClass('active');
        VeloXCHelpers.removeOverlay();

        if (VeloXCHelpers.movieElement) {
            VeloXCHelpers.movieElement.setCurrentTime(0);
            VeloXCHelpers.movieElement.pause();
        }

    },
    
	
    cssAnimation: function(object, cssProperties, duration, callback, bodyClass) {
    	//console.log(Modernizr.prefixed('transition'));
        var transEndEventName = VeloXCHelpers.transEndEventNames[Modernizr.prefixed('transition')];

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

            VeloXCHelpers.PNGLoaderTimeout = setTimeout(function() {
                if (left < -settings.reset) {
                    if (settings.loop) {
                        loader.css('backgroundPosition', '0 0');
                    }
                    else {
                        clearTimeout(VeloXCHelpers.PNGLoaderTimeout);
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

        clearTimeout(VeloXCHelpers.PNGLoaderTimeout);

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
            VeloXCHelpers.PNGLoaderTimeout = setTimeout(function() {
                if (left < -settings.reset) {
                    clearTimeout(VeloXCHelpers.PNGLoaderTimeout);
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
    
	
    setSeason: function() {

        var scrollLeft = CoverFlow.settings.element[0].scrollLeft;

        if ($('body').is('.summer') && scrollLeft < 180 * 25) {
            $('body').removeClass('summer').addClass('winter');
        }
        else if ($('body').is('.winter') && scrollLeft > 180 * 25) {
            $('body').removeClass('winter').addClass('summer');
        }

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
		
        var prefix = 'Velo Travels',
            separator = ' - ',
            title = prefix;

        switch (type) {
            case 'close-page':
                break;
            case 'open-page':
                title += separator + $('#menu nav').find('a:nth-child(' + id + ')').text();
                break;
            case 'close-car':
                title += separator + $('#menu').find('a:nth-child(2)').text();
                break;
            case 'open-car':
                title += separator + $('#car-covers').find('li:nth-child(' + id + ') i').text();
                break;
            case 'close-adventure':
                break;
            case 'open-adventure':
                title += separator + 'No ' + id + ' ' + $('#cover-flow').find('a:nth-child(' + id + ') i:first').text() + ', ' + $('#cover-flow').find('a:nth-child(' + id + ') i:last').text();
                break;
            case 'slide-car':
                title += separator + $('#car-covers').find('li:nth-child(' + (id) + ') i').text();
                break;
            case 'slide-adventure':
                title += separator + 'No ' + id + ' ' + $('#cover-flow').find('a:nth-child(' + id + ') i:first').text() + ', ' + $('#cover-flow').find('a:nth-child(' + id + ') i:last').text();
                break;
            case 'map-to-adventure':
                title += separator + 'No ' + id + ' ' + $('#cover-flow').find('a:nth-child(' + id + ') i:first').text() + ', ' + $('#cover-flow').find('a:nth-child(' + id + ') i:last').text();
                break;
        }

        return title;

    }
    
	
};

var VeloKeyNav = {


    coverFlowKeyCounter: 0,

	coverFlowKeyNav: function(settings) {

        $(document).unbind('keydown keyup')
        .bind('keydown', function(e) {
        
            if (e.which === 27 || e.which === 13 || (e.which >= 37 && e.which <= 40)) { 
                if (!$('#overlay').is(':visible')) {
                    VeloXCHelpers.addOverlay({ mousemove: VeloXCHelpers.removeOverlay });	
                }
                e.preventDefault();
            }
            
        })
        .bind('keyup', function(e) {

            var coverFlow = (settings.type === 'cars' || settings.type === 'v40cc')? Velo.settings.element : CoverFlow.settings.element,
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
                        if (settings.type === 'cars' || settings.type === 'v40cc') {
                            if (index > 0) {
                                History.pushState({ type: 'open-car', id: index, index: index }, VeloXCHelpers.getPageTitle('open-car', index + 1), '/' + settings.type + '/' + index);
                            }
                            else {
                                window.location = activeCover.find('a').attr('href');
                            }
                        }
                        else {
                            History.pushState({ type: 'open-adventure', id: (index + 1), index: index }, VeloXCHelpers.getPageTitle('open-adventure', index + 1), '/section/' + (index + 1));
                        }
                    }
                    break;
                case 37:
                    //Left
                    if (activeCover.length) {
                        if (activeCover.index() === 0) {
                            VeloKeyNav.coverFlowKeyCounter = 0;
                        }
                        else {
                            activeCover.removeClass('active').prev().addClass('active');
                            VeloKeyNav.coverFlowKeyCounter -= 1;	
                        }
                    }
                    else {
                        if (settings.type === 'cars' || settings.type === 'v40cc') {
                            coverFlow.find('li').eq(startIndex).addClass('active');
                        }
                        else {
                            coverFlow.find('a').eq(startIndex).addClass('active');
                        }
                    }
                    break;
                case 39:
                    //Right
                    if (activeCover.length) {
                        if (activeCover.index() === (settings.covers - 1)) {
                            VeloKeyNav.coverFlowKeyCounter = coversOnScreen - 1;
                        }
                        else {
                            activeCover.removeClass('active').next().addClass('active');
                            VeloKeyNav.coverFlowKeyCounter += 1;	
                        }
                    }
                    else {
                        if (settings.type === 'cars' || settings.type === 'v40cc') {
                            coverFlow.find('li').eq(startIndex).addClass('active');
                        }
                        else {
                            coverFlow.find('a').eq(startIndex).addClass('active');
                        }
                    }
                    break;
            }

            //log('Before: ' + VeloKeyNav.coverFlowKeyCounter);
            if (VeloKeyNav.coverFlowKeyCounter < 0) {
                VeloXCHelpers.unbindOverlay();
                coverFlow.animate({ scrollLeft: scrollPos - (coversOnScreen * 180) }, { 
                    duration: 500, 
                    easing: 'easeOutQuad', 
                    queue: false, 
                    complete: function() {
                        VeloXCHelpers.addOverlay({ mousemove: VeloXCHelpers.removeOverlay });	
                        scrollPos = coverFlow.scrollLeft();
                        if (scrollPos === 0) {
                            VeloKeyNav.coverFlowKeyCounter = activeCover.index();
                        }
                        VeloXCHelpers.setSeason();
                    }
                });
                VeloKeyNav.coverFlowKeyCounter = coversOnScreen - 1;
            }
            else if (VeloKeyNav.coverFlowKeyCounter >= coversOnScreen) {
                VeloXCHelpers.unbindOverlay();
                coverFlow.animate({ scrollLeft: scrollPos + (coversOnScreen * 180) }, {
                    duration: 500, 
                    easing: 'easeOutQuad', 
                    queue: false, 
                    complete: function() {
                        VeloXCHelpers.addOverlay({ mousemove: VeloXCHelpers.removeOverlay });	
                        scrollPos = coverFlow.scrollLeft();
                        if (scrollPos === scrollPosMax) {
                            VeloKeyNav.coverFlowKeyCounter = coversOnScreen - 1 - ((settings.covers - 1) - activeCover.index());
                        }
                        VeloXCHelpers.setSeason();
                    } 
                });
                VeloKeyNav.coverFlowKeyCounter = 0;
            }
            //log('After: ' + VeloKeyNav.coverFlowKeyCounter);	
        });
	},
	
    adventureKeyNav: function(settings) {

        $(document).unbind('keydown keyup')
        .bind('keydown', function(e) {
            if (e.which === 27 || (e.which >= 37 && e.which <= 40)) { e.preventDefault(); }
        })
        .bind('keyup', function(e) {

            var state = History.getState(),
                id = (settings.type === 'cars' || settings.type === 'v40cc')? parseInt(state.cleanUrl.split('/' + settings.type + '/').pop(), 10) : parseInt(state.cleanUrl.split('/section/').pop(), 10),
                scrollPos = $(window).scrollTop(),
                nextScrollPos = VeloXCHelpers.getNextScrollPosition(e),
                duration = nextScrollPos * 1.618;

            // Disable advenure-key-nav in these occasions
            if ($('#overlay').is(':visible') || $('body').is('.loading-next-adventure, .slide-in-next-adventure')) {
                return;
            }

            switch (e.which) {
                case 27:
                    if (settings.type === 'cars' || settings.type === 'v40cc') {
                        History.pushState({ type: 'close-car' }, VeloXCHelpers.getPageTitle('close-car'), '/' + settings.type);
                    }
                    else {
                        History.pushState({ type: 'close-adventure' }, VeloXCHelpers.getPageTitle('close-adventure'), '/');
                    }
                    break;
                case 37:
                    if ((settings.type === 'cars' || settings.type === 'v40cc') && id > 1) {
                        History.pushState({ type: 'slide-car', url: '/' + settings.type +'/' + (id - 1), direction: 'prev' }, VeloXCHelpers.getPageTitle('slide-car', id), '/' + settings.type + '/' + (id - 1));
                    }
                    else if (settings.type === 'adventure' && id > 1) {
                        History.pushState({ type: 'slide-adventure', url: '/section/' + (id - 1), direction: 'prev' }, VeloXCHelpers.getPageTitle('slide-adventure', id - 1), '/section/' + (id - 1));
                    }
                    break;
                case 38:
                    if (settings.type === 'adventure' && scrollPos !== 0) { /* This check is needed on mac/safari */
                        $('html, body').firstScrollable().stop().animate({ scrollTop: scrollPos - nextScrollPos }, { 
                            duration: duration, 
                            easing: 'easeInOutQuad', 
                            queue: false 
                        });
                    }
                    break;
                case 39:
                    if (settings.type === 'cars') {
                        if (id < Scaling.carCoverOffsets.length - 1) {
                            History.pushState({ type: 'slide-car', url: '/' + settings.type +'/' + (id + 1), direction: 'next' }, VeloXCHelpers.getPageTitle('slide-car', id + 2), '/' + settings.type + '/' + (id + 1));
                        }
                    }
					else if (settings.type === 'v40cc') {
                        if (id < Scaling.v40CoverOffsets.length - 1) {
                            History.pushState({ type: 'slide-car', url: '/' + settings.type +'/' + (id + 1), direction: 'next' }, VeloXCHelpers.getPageTitle('slide-car', id + 2), '/' + settings.type + '/' + (id + 1));
                        }
                    }
                    else {
                        if ($('a#next').length) {
                            History.pushState({ type: 'slide-adventure', url: '/section/' + (id + 1), direction: 'next' }, VeloXCHelpers.getPageTitle('slide-adventure', id + 1), '/section/' + (id + 1));
                        }
                    }
                    break;
                case 40:
                    if (settings.type === 'adventure') {
                        $('html, body').firstScrollable().stop().animate({ scrollTop: scrollPos + nextScrollPos }, { 
                            duration: duration, 
                            easing: 'easeInOutQuad', 
                            queue: false 
                        });	
                    }
                    break;
                case 84:
                    if (settings.type === 'adventure' && scrollPos !== 0) { /* This check is needed on mac/safari */
                        Adventure.scrollToTop();
                    }
                    break;
            }

        });

    }
    
    
};

var VeloCompability = {


    fixGeneratedContent: function() {
        /* Appy an extra element to some elements to compensate for lack of generated-content support */
        if (!Modernizr.generatedcontent) {
            Adventure.settings.element.find('.quicklinks a, .links a').add('#menu a').append('<span />');
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
		
        

        GATracking.trackPage(VeloXCHelpers.lang, page);

        $('body').addClass('loading-page');
        VeloXCHelpers.showPNGLoader($('body'));
        VeloXCHelpers.addOverlay();
		
		var req = $.ajax('/api/pageHTML/' + page, { 
		dataType : 'html', 
		type : 'GET', 
		cache: false,
		  error: function (xhr, ajaxOptions, thrownError) {
			$('body').removeClass('loading-page');
			VeloXCHelpers.hidePNGLoader();
			VeloXCHelpers.removeOverlay();
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

            if (page === 'map') {
                AdventureMap.init();
            }
            else if (page === 'cars') {
                Velo.init('cars');
            }
            else if (page === 'v40cc') {
                Velo.init('v40cc');
            }
            else if (page === 'offer') {
                Offer.init();
            }

            $.preload('.page-content img', {
                onFinish: function() {
                    $('body').removeClass('loading-page');
                    VeloXCHelpers.hidePNGLoader();
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

        console.log("playIntro");

        //VeloXCHelpers.cssAnimation(Page.settings.element, {'transform': 'translateX(270px)'}, 450, function(){Page.introCallback();}, 'play-page-intro');
        VeloXCHelpers.cssAnimation(Page.settings.element, { left: leftValue }, 450, function() {
            VeloXCHelpers.removeOverlay();

            if ($.isFunction(cb)) {
                cb();
            }

            Page.settings.element.find('.page-close').bind('click', function(e) {
                History.pushState({ type: 'close-page' }, VeloXCHelpers.getPageTitle('close-page'), '/');
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
                Offer.out();
            }

            //VeloXCHelpers.cssAnimation(Page.settings.element, {'transform': 'translateX('+(270 -(Scaling.windowDimensions.width - 270))+')'}, 450, function(){
            VeloXCHelpers.cssAnimation(Page.settings.element, { left: 270 - (Scaling.windowDimensions.width - leftValue) }, 450, function() {
                Page.settings.element.empty().hide();

                // CoverFlow-key nav, disable on IE until mouseover-bug is fixed
                if (parseInt(VeloXCHelpers.userAgentString.indexOf('msie'), 10) === -1) {

                    scrollLeft = CoverFlow.settings.element.scrollLeft();
                    firstIndex = Math.floor(scrollLeft / 180);

                    if (CoverFlow.settings.element.find('.active').length) {
                        VeloKeyNav.coverFlowKeyCounter = CoverFlow.settings.element.find('.active').index() - firstIndex - 1;
                    }

                    VeloKeyNav.coverFlowKeyNav({type: 'adventure', covers: 50});

                }

                VeloXCHelpers.removeOverlay();

                if ($.isFunction(cb)) { 
                    cb();
                }
            
            }, 'play-page-outro');
        }

    }
    
    
};

var Velo = {


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
        this.settings.coverWrapper.width(Velo.settings.coverCount * Velo.settings.coverWidth);
    },
	
	
    setCenterLine: function() {
        Velo.settings.centerLine = (Scaling.windowDimensions.width - 270) / 2;
    },
	
	
    adjustNavSpeed: function() {

        var stageWidth, maxScroll;

        if (Velo.settings.coverWrapper) {

            stageWidth = Scaling.windowDimensions.width - 270;
            maxScroll = Velo.settings.coverWrapper.width() - stageWidth;		

            Velo.settings.adjustedNavSpeed = Velo.settings.navSpeed * (1 + stageWidth / maxScroll);

        }

    },
	
	
    moveCoverFlow: function(mousePos) {	
    
        var delta = Math.abs(1 - mousePos / Velo.settings.centerLine);

        (function moveCovers() {
            Velo.settings.timer = setTimeout(function() {
                if (mousePos > Velo.settings.centerLine) {
                    Velo.settings.element[0].scrollLeft += (Velo.settings.adjustedNavSpeed * delta);
                }
                else {
                    Velo.settings.element[0].scrollLeft -= (Velo.settings.adjustedNavSpeed * delta);
                }
                moveCovers();
            }, 11);
        })();	
    },
	
	
    bindEvents: function() {

        this.settings.element.bind('mousemove', $.throttle(100, true, function(e) { 
            clearTimeout(Velo.settings.timer);
            Velo.moveCoverFlow(e.pageX - 270); 
        }))
        .bind('mouseenter mouseleave mousedown', function() { 
            clearTimeout(Velo.settings.timer);
            $('.car-covers').find('.active').removeClass('active');
            VeloKeyNav.coverFlowKeyCounter = 0;
        })
        .bind('mousewheel', function(e, delta){
            e.preventDefault();
            clearTimeout(Velo.settings.timer);
            delta = (delta < 0)? -1 : 1;
            this.scrollLeft -= (delta * 20);
        })
        .bind('click', function(e) {
            var cover = $(e.target).closest('.item'),
            id = cover.attr('href').split('/').pop(),
            index = cover.closest('li').index();

            clearTimeout(Velo.settings.timer);

            if (index === 0) {
                return;
            }
            else {
                History.pushState({ type: 'open-car', id: id, index: index }, VeloXCHelpers.getPageTitle('open-car', parseInt(index, 10) + 1), '/' + Velo.settings.pagetype + '/' + id);
            }

            e.preventDefault();
        });

        // CoverFlow-key nav, disable on IE until mouseover-bug is fixed
        if (parseInt(VeloXCHelpers.userAgentString.indexOf('msie'), 10) === -1) {
            VeloKeyNav.coverFlowKeyCounter = 0;

            	VeloKeyNav.coverFlowKeyNav({type: Velo.settings.pagetype, covers: 11});
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
            cover = Velo.settings.element.find('li').eq(index),
            req = $.ajax('/api/' + Velo.settings.pagepath + '/' + id, { dataType : 'html', type : 'GET', cache: false }),
            percent = Scaling.scalingPercentage(),
            leftValue;



        Velo.settings.scrollLeft = Velo.settings.element.scrollLeft();
        leftValue = ((180 * index) + 270 - Velo.settings.scrollLeft) - ((percent * 1280) * Velo.settings.offsets[index]);

        // Prevent mousemove from hiding the overlay (webkit)
        VeloXCHelpers.unbindOverlay();

        // If we open with click-event, the overlay has not been added yet.
        VeloXCHelpers.addOverlay();

        CoverFlow.settings.loader.detach().appendTo(cover).show().animate({ width: 180 }, { duration: 5000, queue: false, easing: 'easeInOutQuad' });

        req.success(function(resp) {

            $('body').addClass('loading-adventure');

            $('#current-cover').html(resp).find('img').css({					
                width: percent * 1280,
                height: percent * 800,
                left: leftValue
            });

            VeloCompability.fixGeneratedContent();

            //$.preload('.adventure-content img', {
            $('.car-content img').preload({ 
                onFinish: function() {
                    CoverFlow.settings.loader.stop().animate({ width: 180 }, { 
                        duration: 500, 
                        queue: false, 
                        easing: 'easeInOutQuad',
                        complete: function() {
                            $('body').removeClass('loading-adventure');
                            CoverFlow.settings.loader.hide().width(0);
                            Velo.playIntro(cover, index);
                        }
                    });
                }
            });

        }); 

    },
	
	
    playIntro: function(cover, index) {

        var duration = 0.8 * 1000,
            leftValue = (-180 * index) + Velo.settings.scrollLeft,
            expandWidth = Velo.settings.coverWrapper.width() + Scaling.windowDimensions.width;

        $('#current-cover').show();
        cover.addClass('expand').find('img').hide();

        // #HACK Make animations non-instant
        //$(window).scrollTop(0); 

        VeloXCHelpers.cssAnimation(Velo.settings.coverWrapper, { left: leftValue, width: expandWidth }, duration);
        VeloXCHelpers.cssAnimation(cover, { width: Scaling.windowDimensions.width }, duration);
        VeloXCHelpers.cssAnimation($('#current-cover').find('.scene img'), { left: 0 }, duration, Velo.introCallback, 'play-car-intro');
        VeloXCHelpers.cssAnimation($('#sidebar'), { left: -270 }, duration);

    },
	
	
    playOutro: function() {

        var duration = 0.8 * 1000,
            cover = Velo.settings.element.find('.expand'),
            index = cover.index(),
            leftValue = ((180 * index) + 270 - Velo.settings.scrollLeft) - ((Scaling.scalingPercentage() * 1280) * Velo.settings.offsets[index]),
            maxScroll = (Velo.settings.coverCount * 180) - (Scaling.windowDimensions.width - 270), /* (Scaling.windowDimensions.width - 270) */
            coverWrapperWidth = Velo.settings.coverCount * Velo.settings.coverWidth;

        VeloXCHelpers.addOverlay();

        // Fix for when user slides "prev" and the cover-wrapper has not scrolled past the first cover-item
        if (Velo.settings.scrollLeft < 0 && VeloXCHelpers.prevHistoryState.data.direction === 'prev') {
            leftValue += Velo.settings.scrollLeft;
        }

        // Fix for when user slides "next" and the cover-wrapper has not scrolled past the last cover-item
        if (Velo.settings.scrollLeft > maxScroll && VeloXCHelpers.prevHistoryState.data.direction === 'next') {
            leftValue += Velo.settings.scrollLeft - maxScroll;
        }

        //Added to support playOutro after navigating sideways
        $('#current-cover').find('.car-content').css('zIndex', 3332);

        Velo.settings.element.show().scrollLeft(Velo.settings.scrollLeft);
        $('.car-content .description').hide();

        VeloXCHelpers.cssAnimation(Velo.settings.coverWrapper, { left: 270, width: coverWrapperWidth }, duration);
        VeloXCHelpers.cssAnimation(cover, { width: 180 }, duration);
        VeloXCHelpers.cssAnimation($('#current-cover').find('.scene img'), { left: leftValue }, duration, Velo.outroCallback, 'play-car-outro');
        VeloXCHelpers.cssAnimation($('#sidebar'), { left: 0 }, duration);

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

        Velo.settings.element.hide();
        VeloXCHelpers.removeOverlay();
        Velo.initNav();

    },
	
	
    outroCallback: function() {

        var scrollLeft = Velo.settings.element.scrollLeft(),
            firstIndex = Math.floor(scrollLeft / 180);

        $('body').removeClass('car-view');
        $('#current-cover').empty().hide();
        Velo.settings.element.find('.expand img').show().end().find('.expand').removeClass('expand').addClass('active').removeAttr('style');

        // CoverFlow-key nav, disable on IE until mouseover-bug is fixed
        if (parseInt(VeloXCHelpers.userAgentString.indexOf('msie'), 10) === -1) {
            VeloKeyNav.coverFlowKeyCounter = Velo.settings.element.find('.active').index() - firstIndex - 1;
            VeloKeyNav.coverFlowKeyNav({type: Velo.settings.pagetype, covers: 11});
        }

        //setTimeout(VeloXCHelpers.removeOverlay, 500);
        Velo.settings.element[0].scrollLeft += 1; // Fix for older browsers
        VeloXCHelpers.addOverlay({ mousemove: VeloXCHelpers.removeOverlay });

    },
	
	
    slideInCar: function(url, direction) {

        var adventureWrapper = $('#current-cover'),
            id = parseInt(url.split('/').pop(), 10),
            index = id,
            delta = (direction === 'next')? -1 : 1,
            leftValue = (delta === -1)? Scaling.windowDimensions.width : 0,	
            req = $.ajax('/api/' + Velo.settings.pagepath + '/' + id, { dataType: 'html', type: 'GET', cache: false });

        // Disable the page while loading...
        VeloXCHelpers.addOverlay();

        req.success(function(resp) {

            $('body').addClass('loading-next-adventure');
            $('#' + direction).addClass('loading');

            adventureWrapper.append(resp);

            VeloCompability.fixGeneratedContent();

            //Added to support playOutro after navigating sideways
            Velo.settings.scrollLeft = Velo.settings.scrollLeft -(delta * 180);
            Velo.settings.coverWrapper.css('left', (-180 * index) + Velo.settings.scrollLeft);
            Velo.settings.element.find('.expand img').show()
            .end().find('.expand').removeClass('expand').removeAttr('style')
            .end().find('li').eq(index).addClass('expand').width(Scaling.windowDimensions.width).find('img').hide();
            // END

            adventureWrapper.find('.car-content:last').css({
                zIndex: 1, /* Dont set to zero, will break in ie7 */
                left: leftValue - ((Scaling.scalingPercentage() * 1280) * Velo.settings.offsets[index])
            }).end()
            .find('.car-content:first').css('zIndex', 3332);

            Scaling.resizeNextAdventure();

            VeloXCHelpers.showPNGLoader($('#' + direction), {
                size: 41,
                reset: 4058,
                loop: false,
                interval: 50
            });

            $('.car-content:nth-child(2) img').preload({ 
                onFinish: function() {
                    VeloXCHelpers.hidePNGLoader(function() {
                        $('body').removeClass('loading-next-adventure');
                        adventureWrapper.find('.car-content').removeClass('active');

                        VeloXCHelpers.cssAnimation(adventureWrapper.find('.car-content:last'), { left: 0 }, 1000);
                        VeloXCHelpers.cssAnimation(adventureWrapper.find('.car-content:first'), { left: delta * Scaling.windowDimensions.width }, 1000, function() {
                            adventureWrapper.find('.car-content:first').remove().end()
                            .find('.car-content img').css({
                                left: 0 //Added to support playOutro after navigating sideways
                            });
                            Velo.initNav();
                        }, 'slide-in-next-car');
                    });
                }
            });

        }); 

    },
	
	
    initNav: function() {

        var adventureWrapper = $('#current-cover');

        // #GATracking (lang, adventure-id, scene-id)
		if(Velo.settings.pagetype === 'v40cc'){
			GATracking.trackV40(VeloXCHelpers.lang, Velo.settings.element.find('.expand').index());
		}
		else{
			GATracking.trackCar(VeloXCHelpers.lang, Velo.settings.element.find('.expand').index());
		}
		
		adventureWrapper.find('.car-content:last').addClass('active');

        Velo.moveDescription(false);

        $('.car-content .description').fadeIn(200);

        VeloXCHelpers.removeOverlay();

        // Bind navigation events
        adventureWrapper.find('.adventure-nav').unbind('click').bind('click', function(e) {
            var id = this.href.split('/').pop();

            adventureWrapper.find('.adventure-nav').unbind('click');
            History.pushState({ type: 'slide-car', url: this.href, direction: this.id }, VeloXCHelpers.getPageTitle('slide-car', parseInt(id, 10) + 1), '/' + Velo.settings.pagetype + '/' + id);
            e.preventDefault();
        }).end()
        .find('.to-coverflow').bind('click', function(e) {
            History.pushState({ type: 'close-car' }, VeloXCHelpers.getPageTitle('close-car'), '/' + Velo.settings.pagetype);
            e.preventDefault();
        });

        VeloKeyNav.adventureKeyNav({type: Velo.settings.pagetype});

    },
	
	
    init: function(pagetype) {

    	if(pagetype === 'v40cc') {
    		Velo.settings.pagepath = 'v40HTML';
    		Velo.settings.offsets = Scaling.v40CoverOffsets;
        }
        else {
			Velo.settings.pagepath = 'carHTML';
			Velo.settings.offsets = Scaling.carCoverOffsets;
        }

    	Velo.settings.pagetype = pagetype;
        Velo.settings.element = $('.car-covers');
        Velo.settings.coverWrapper = Velo.settings.element.find('ul');
        Velo.settings.coverArray = Velo.settings.element.find('li');
        Velo.settings.coverWidth = Velo.settings.coverArray.width();
        Velo.settings.coverCount = Velo.settings.coverArray.length;

        Scaling.windowResize();
        this.setWrapperWidth();
        this.setCenterLine();
        this.adjustNavSpeed();
        this.bindEvents();

    }
    
    
};

var Offer = {
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

        VeloXCHelpers.addOverlay({ classname: 'transparent', click: Offer.closeMovie });

        $('#videoplayer').addClass('active').css({
            left: (Scaling.windowDimensions.width / 2) - (768 / 2),
            top: (Scaling.windowDimensions.height / 2) - (500 / 2) 
        });
       
        $("#youtube").show();
		$("#videoplayer").html( videoSrc)
	
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
  	closeMovie: function() {
  		$("#youtube").detach().appendTo("#video");
        $('#videoplayer').removeClass('active');
        VeloXCHelpers.removeOverlay();
		$("#youtube").hide();
    }
};

var AdventureMap = {

    timeout: null,
    mapWrapper: null,
    
    
    scrollMap: function(mouse) {

        var scrollSpeed = 4 * Scaling.scalingPercentage(),
            xMiddle = (Scaling.windowDimensions.width - 270) / 2,
            yMiddle = Scaling.windowDimensions.height / 2,
            deltaX = Math.abs(1 - mouse.x / xMiddle), 
            deltaY = Math.abs(1 - mouse.y / yMiddle);

        clearTimeout(AdventureMap.timeout);

        (function moveCovers() {
            AdventureMap.timeout = setTimeout(function() {
                (mouse.x > xMiddle)? AdventureMap.mapWrapper.scrollLeft += (scrollSpeed * deltaX) : AdventureMap.mapWrapper.scrollLeft -= (scrollSpeed * deltaX);
                (mouse.y > yMiddle)? AdventureMap.mapWrapper.scrollTop += (scrollSpeed * deltaY) : AdventureMap.mapWrapper.scrollTop -= (scrollSpeed * deltaY);
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

        AdventureMap.mapWrapper = document.getElementById('map-wrapper');
        Scaling.resizePage();

        $(AdventureMap.mapWrapper).bind('mousemove', $.throttle(100, true, function(e) { 
            var mouse = { x: e.pageX - 270, y: e.pageY };
            AdventureMap.scrollMap(mouse);
        }))
        .bind('mouseleave mousedown', function() {
            clearTimeout(AdventureMap.timeout);
        })
        .bind('click', function(e) {
            if ($(e.target).is('a')) {
                var id = parseInt($(e.target).text(), 10);
                History.pushState({type: 'map-to-adventure', id: id, index: id-1 }, VeloXCHelpers.getPageTitle('map-to-adventure', id), '/section/' + id);
                e.preventDefault();				
            }
        });

        $(AdventureMap.mapWrapper).find('a')
        .bind('mouseenter', function() { AdventureMap.showTooltip(this); })
        .bind('mouseleave', function() { AdventureMap.hideTooltip(this); });

    }
    
    
};

var Adventure = {


    settings: {
        element: $('#adventure-wrapper'),
        sceneCount: null,
        queuedScroll: 0,
        hasShownTip: false
    },
    
    
    scrollToTop: function() {
        $('html, body').firstScrollable().stop().animate({'scrollTop': 0}, $(window).scrollTop(), 'easeOutQuad');
    },
    
    
    positionCaptions: function(scene, from, to) {

        var sceneHeight = Scaling.windowDimensions.height,
            percent = ($(window).scrollTop() - (scene * sceneHeight)) / sceneHeight;

        Adventure.settings.element.find('.caption-' + (scene + 1)).css('top', to - ((from - to) * percent));

    },
    
    
    moveCaptions: function() {

        var adventureWrapper = Adventure.settings.element,
            scrollPos = $(window).scrollTop(),
            toTop = Adventure.settings.element.find('.to-top'),
            caption,
            from,
            to,
            i;

        if (!Adventure.settings.sceneCount) {
            return;
        }

        //positionCaptions(scene, from, to)
        for (i = 1; i <= Adventure.settings.sceneCount; i++) {
            caption = adventureWrapper.find('.caption-' + (i));

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

                Adventure.positionCaptions((i - 1), from, to);
            }
        }

        // Show and hide top-link #todo - optimize
        if (scrollPos === 0) {
            toTop.stop().animate({ opacity: 0 }, { duration: 200, queue: false });
        }
        else if (toTop.css('opacity') !== '1' && !toTop.is(':animated')) {
            toTop.stop().animate({ opacity:1 }, { duration: 200, queue: false });
        }

        adventureWrapper.find('#adventure-cords').css('top', -(scrollPos) + 75).end()
        .find('.adventure-nav').css('top', -(scrollPos * 3) + (Scaling.windowDimensions.height/2));

        // Move indicator line relative to first scene figcaption
        if ($('#indicator-line').length && adventureWrapper.find('.figcaption').length) {
            $('#indicator-line').css('top', parseInt(adventureWrapper.find('.figcaption')[0].style.top, 10) + 100);
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

        if (!Adventure.settings.sceneCount || !sceneWrapper.find('.figcaption').length) {
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
    
    
    open: function(adventure) {

        var id = adventure.id,
            index = adventure.index,
            cover = CoverFlow.settings.element.find('a').eq(index),
            req = $.ajax('/api/section/' + id, { dataType : 'html', type : 'GET', cache: false }),
            percent = Scaling.scalingPercentage(),
            leftValue;

        CoverFlow.settings.scrollLeft = CoverFlow.settings.element.scrollLeft();
        leftValue = ((180 * index) + 270 - CoverFlow.settings.scrollLeft) - ((percent * 1280) * Scaling.coverOffsets[index]);

        // Prevent mousemove from hiding the overlay (webkit)
        VeloXCHelpers.unbindOverlay();

        // If we open with click-event, the overlay has not been added yet.
        VeloXCHelpers.addOverlay();

        CoverFlow.settings.loader.detach().appendTo(cover).show().animate({ width: 180 }, { duration: 5000, queue: false, easing: 'easeInOutQuad' });

        req.success(function(resp) {

            $('body').addClass('loading-adventure');

            Adventure.settings.element.html(resp).find('#scene-1 img.scale').css({					
                width: percent * 1280,
                height: percent * 800,
                left: leftValue
            });


            VeloCompability.fixGeneratedContent();

            //$.preload('.adventure-content img', {
            $('.adventure-content #scene-1 img').preload({ 
                onFinish: function() {
                    CoverFlow.settings.loader.stop().animate({ width: 180 }, { 
                        duration: 500,
                        queue: false, 
                        easing: 'easeInOutQuad',
                        complete: function() {
                            $('body').removeClass('loading-adventure');
                            CoverFlow.settings.loader.hide().width(0);
                            Adventure.playIntro(cover, index);
                        }
                    });
                }
            });

        }); 

    },
    
    
    playIntro: function(cover, index) {

        var duration = 0.8 * 1000,
            leftValue = (-180 * index) + CoverFlow.settings.scrollLeft,
            expandWidth = CoverFlow.settings.coverWrapper.width() + Scaling.windowDimensions.width;

        Adventure.settings.element.show();
        cover.addClass('expand').find('img').hide();

        // #HACK Make animations non-instant
        $(window).scrollTop(0); 

        VeloXCHelpers.cssAnimation(CoverFlow.settings.coverWrapper, { left: leftValue, width: expandWidth }, duration);
        VeloXCHelpers.cssAnimation(cover, { width: Scaling.windowDimensions.width }, duration);
        VeloXCHelpers.cssAnimation($('#scene-1').find('img.scale'), { left: 0 }, duration, Adventure.introCallback, 'play-adventure-intro');
        //VeloXCHelpers.cssAnimation($('#sidebar'), { left: -270 }, duration);

    },
    
    
    playOutro: function() {

        var duration = 0.8 * 1000,
            cover = CoverFlow.settings.element.find('.expand'),
            index = cover.index(),
            leftValue = ((180 * index) + 270 - CoverFlow.settings.scrollLeft) - ((Scaling.scalingPercentage() * 1280) * Scaling.coverOffsets[index]),
            maxScroll = (CoverFlow.settings.coverCount * 180) - (Scaling.windowDimensions.width - 270), /* (Scaling.windowDimensions.width - 270) */
            coverWrapperWidth = CoverFlow.settings.coverCount * CoverFlow.settings.coverWidth;

        VeloXCHelpers.addOverlay();
        
        // Fix for when user slides "prev" and the cover-wrapper has not scrolled past the first cover-item
        if (CoverFlow.settings.scrollLeft < 0 && VeloXCHelpers.prevHistoryState.data.direction === 'prev') {
            leftValue += CoverFlow.settings.scrollLeft;
        }

        // Fix for when user slides "next" and the cover-wrapper has not scrolled past the last cover-item
        if (CoverFlow.settings.scrollLeft > maxScroll && VeloXCHelpers.prevHistoryState.data.direction === 'next') {
            leftValue += CoverFlow.settings.scrollLeft - maxScroll;
        }

        //Added to support playOutro after navigating sideways
        Adventure.settings.element.find('.adventure-content').css('zIndex', 3332);

        CoverFlow.settings.element.show().scrollLeft(CoverFlow.settings.scrollLeft);
        $('#scene-1').find('.figcaption').add('#indicator-line, #adventure-cords').hide();

        VeloXCHelpers.cssAnimation(CoverFlow.settings.coverWrapper, { left: 270, width: coverWrapperWidth }, duration);
        VeloXCHelpers.cssAnimation(cover, { width: 180 }, duration);
        VeloXCHelpers.cssAnimation($('#scene-1 img'), { left: leftValue }, duration, Adventure.outroCallback, 'play-adventure-outro');
        VeloXCHelpers.cssAnimation($('#sidebar'), { left: 0 }, duration);

    },
    
    
    introCallback: function() {

        var percent = Scaling.scalingPercentage(),
            langText = '',
            tip;

        switch(VeloXCHelpers.lang) {
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
                        Adventure.settings.hasShownTip = true;
                        Adventure.initNav(queueKey);
                    });
                }, delay);

            });

        }

        $('body').addClass('adventure-view');

        // #note changed from Scaling.windowResize(); These should be the only elements in need of resize.
        Adventure.settings.element.find('img.scale').css({
            width: percent * 1280,
            height: percent * 800
        }).end()
        .find('.adventure-content').css({
            width: Scaling.windowDimensions.width,
            height: Scaling.windowDimensions.height
        });

        CoverFlow.settings.element.hide();
        //VeloXCHelpers.removeOverlay();

        // Show key-nav indicator until mousemove or keypress
        if (Adventure.settings.hasShownTip) {
            Adventure.initNav();
        }
        else {
            Adventure.settings.element.find('.adventure-content').append(tip);
            tip.hide().fadeIn(200);
            toggleTip();
        }
		
	},
    
    
    outroCallback: function() {

        var scrollLeft = CoverFlow.settings.element.scrollLeft(),
            firstIndex = Math.floor(scrollLeft / 180);

        Adventure.settings.sceneCount = null;
        $('body').removeClass('adventure-view');
        Adventure.settings.element.empty().hide();
        CoverFlow.settings.element.find('.expand img').show().end().find('.expand').removeClass('expand').addClass('active').removeAttr('style');

        // CoverFlow-key nav, disable on IE until mouseover-bug is fixed
        if (parseInt(VeloXCHelpers.userAgentString.indexOf('msie'), 10) === -1) {
            VeloKeyNav.coverFlowKeyCounter = CoverFlow.settings.element.find('.active').index() - firstIndex - 1;
            VeloKeyNav.coverFlowKeyNav({type: 'adventure', covers: 50});
        }

        //setTimeout(VeloXCHelpers.removeOverlay, 500);
        CoverFlow.settings.element[0].scrollLeft += 1; // Fix for older browsers
        VeloXCHelpers.addOverlay({ mousemove: VeloXCHelpers.removeOverlay });

    },
    
    slideInAdventure: function(url, direction) {

        var adventureWrapper = Adventure.settings.element,
            id = parseInt(url.split('/').pop(), 10),
            index = id - 1,
            delta = (direction === 'next')? -1 : 1,
            leftValue = (delta === -1)? Scaling.windowDimensions.width : 0,	
            req = $.ajax('/api/section/' + id, { dataType: 'html', type: 'GET', cache: false });
            
        // Disable the page while loading...
        VeloXCHelpers.addOverlay();

        req.success(function(resp) {

            $('body').addClass('loading-next-adventure');
            $('#' + direction).addClass('loading');

            adventureWrapper.append(resp);

            VeloCompability.fixGeneratedContent();

            //Added to support playOutro after navigating sideways
            CoverFlow.settings.scrollLeft = CoverFlow.settings.scrollLeft -(delta * 180);
            CoverFlow.settings.coverWrapper.css('left', (-180 * index) + CoverFlow.settings.scrollLeft);
            CoverFlow.settings.element.find('.expand img').show().end()
            .find('.expand').removeClass('expand').removeAttr('style').end()
            .find('a').eq(index).addClass('expand').width(Scaling.windowDimensions.width).find('img').hide();
            // END

            adventureWrapper.find('.adventure-content:last').css({
                zIndex: 1, /* Dont set to zero, will break in ie7 */
                left: leftValue - ((Scaling.scalingPercentage() * 1280) * Scaling.coverOffsets[index])
            }).end()
            .find('.adventure-content:first').css('zIndex', 3332);

            $('html, body').firstScrollable().animate({ scrollTop: 0 }, $(window).scrollTop(), 'easeOutQuad', function() {

                Scaling.resizeNextAdventure();

                VeloXCHelpers.showPNGLoader($('#' + direction), {
                    size: 41,
                    reset: 4058,
                    loop: false,
                    interval: 50
                });

                $('.adventure-content:nth-child(2) #scene-1 .scale').preload({ 
                    onFinish: function() {
                        VeloXCHelpers.hidePNGLoader(function() {
                            $('body').removeClass('loading-next-adventure');
                            adventureWrapper.find('.adventure-content').removeClass('active');

                            VeloXCHelpers.cssAnimation(adventureWrapper.find('.adventure-content:last'), { left: 0 }, 1000);
                            VeloXCHelpers.cssAnimation(adventureWrapper.find('.adventure-content:first'), { left: delta * Scaling.windowDimensions.width }, 1000, function() {
                                adventureWrapper.find('.adventure-content:first').remove().end()
                                .find('#scene-1 img').css({
                                    left: 0 //Added to support playOutro after navigating sideways
                                });
                                Adventure.initNav();
                            }, 'slide-in-next-adventure');
                        });
                    }
                });

            });

        }); 

    },
    
    
    initNav: function(queuedAction) {

        var adventureWrapper = Adventure.settings.element,
            nextScrollPos, duration;

        // #GATracking (lang, adventure-id, scene-id)
        //GATracking.trackAdventure(VeloXCHelpers.lang, CoverFlow.settings.element.find('.expand').index() + 1, 0);

        adventureWrapper.find('.adventure-content:last').addClass('active');
        Adventure.settings.sceneCount = $('#scene-wrapper').find('.scene').length;

        Adventure.moveCaptions();
        Adventure.moveBadge();
        Adventure.setIndicatorLine();

        $('#adventure-cords, #indicator-line, .caption-1').fadeIn(200, function() {
            $('.figcaption').show(); // Show other captions later
        });

        VeloXCHelpers.removeOverlay();

        // Bind navigation events
        adventureWrapper.find('.adventure-nav').unbind('click').bind('click', function(e) {
            var id = this.href.split('/').pop();

            adventureWrapper.find('.adventure-nav').unbind('click');
            History.pushState({ type: 'slide-adventure', url: this.href, direction: this.id }, VeloXCHelpers.getPageTitle('slide-adventure', parseInt(id, 10)), '/section/' + id);
            e.preventDefault();

        }).end()
        .find('.to-coverflow').bind('click', function(e) {
            History.pushState({ type: 'close-adventure' }, VeloXCHelpers.getPageTitle('close-adventure'), '/');
            adventureWrapper.find('.to-top').unbind('click');
            e.preventDefault();
        }).end()
        .find('.to-top').bind('click', function(e) {
            Adventure.scrollToTop();
            e.preventDefault();
        }).end()
        .find('.figcaption a').bind('click', function(e) {
            var link = this.href, id = null, lang = null;

            // Popup-movie
            if (link.indexOf('/assets/movies/') > -1) {
                lang = link.split('_')[1].split('.')[0];
                id = link.split('/assets/movies/')[1].split('_')[0];
                VeloXCHelpers.playMovie(id, lang);
                e.preventDefault();
            }

        });

        VeloKeyNav.adventureKeyNav({type: 'adventure'});

        switch (queuedAction) {
            case 37:
                adventureWrapper.find('#prev').trigger('click');
                break;
            case 39:
                adventureWrapper.find('#next').trigger('click');
                break;
            case 40:
                nextScrollPos = VeloXCHelpers.getNextScrollPosition(40),
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

        // Prevent scrolling when a new adventure is loading
        if ($('body').hasClass('loading-next-adventure') || $('body').hasClass('slide-in-next-adventure')) {
            return;
        }

        delta = (delta < 0)? -1 : 1;

        // Direction-change
        if ( delta !== Adventure.settings.prevDelta) {
            Adventure.settings.queuedScroll = (-delta * speed);
        }

        Adventure.settings.prevDelta = delta;

        // Scroll Down
        if (delta < 0) {
            if (Adventure.settings.queuedScroll < (speed * 10)) {
                Adventure.settings.queuedScroll += speed;
            }
        }

        // Scroll Up
        else {		
            if (Adventure.settings.queuedScroll > (-speed * 10)) {
                Adventure.settings.queuedScroll -= speed;
            }
        }

        duration = 500 + (-delta * Adventure.settings.queuedScroll * 3);

        // Scroll page
        $('html, body').firstScrollable().stop().animate({ scrollTop: '+=' + Adventure.settings.queuedScroll }, { 
            duration: duration, 
            easing: 'easeOutCubic', 
            queue: false, 
            complete: function() { 
                Adventure.settings.queuedScroll = 0; 
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
        currentCover: 26,
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
            VeloXCHelpers.setSeason();
            //VeloXCHelpers.setVisibleCovers();
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
            VeloKeyNav.coverFlowKeyCounter = 0;
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
            History.pushState({ type: 'open-adventure', id: id, index: index }, VeloXCHelpers.getPageTitle('open-adventure', parseInt(id, 10)), '/section/' + id);
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
                History.pushState({ type: 'close-page' }, VeloXCHelpers.getPageTitle('close-page'), '/');
            }
            else {
                History.pushState({ type: 'open-page', page: cleanName }, VeloXCHelpers.getPageTitle('open-page', $(this).index() + 1), page);
            }
            e.preventDefault();
        });

        $('#videoplayer').find('a').bind('click', VeloXCHelpers.closeMovie);

        $(window).bind('resize', $.throttle(100, Scaling.windowResize));

        // CoverFlow-key nav, disable on IE until mouseover-bug is fixed
        if (parseInt(VeloXCHelpers.userAgentString.indexOf('msie'), 10) === -1) {
            VeloKeyNav.coverFlowKeyNav({type: 'adventure', covers: 50});
        }

    },
    
    
    playIntro: function() {

        var windowLocationString = window.location.pathname.toLowerCase(),
            coverArray = CoverFlow.settings.coverArray,
            currentCover = CoverFlow.settings.currentCover,
            index = currentCover - 1,
            coversOnScreen = Math.ceil((Scaling.windowDimensions.width - 270) / CoverFlow.settings.coverWidth),
            timer;

        function applyRemainingCovers() {

            var id, page;

            $('body').removeClass('play-coverflow-intro');
            VeloXCHelpers.removeOverlay();

            if (windowLocationString.indexOf('/section/') > -1) {
                id = parseInt(windowLocationString.split('/section/').pop(), 10);
                Adventure.open({ id: id, index: id - 1 });
            }
            else if (windowLocationString.indexOf('/cars/') > -1) {
                id = parseInt(windowLocationString.split('/cars/').pop(), 10);
                if (/([0-9]+)/.test(id)) {
                    Page.open('cars', function() {
                        Velo.open({id: id, index: id});
                    });
                }
                else {
                    Page.open('cars');
                }
            }
            else if (windowLocationString.indexOf('/v40cc/') > -1) {
                id = parseInt(windowLocationString.split('/v40cc/').pop(), 10);
                if (/([0-9]+)/.test(id)) {
                    Page.open('v40cc', function() {
                        Velo.open({id: id, index: id});
                    });
                }
                else {
                    Page.open('v40cc');
                }
            }
            else if (/\/(v40cc|cars|map|competition|about|app|offer)/.test(windowLocationString)) {
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
            VeloXCHelpers.addOverlay();
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
        VeloXCHelpers.lang = $('body').attr('class').split('lang-').pop();

        // Append coverflow-loader
        CoverFlow.settings.loader = $('#coverflow-loader').length? $('#coverflow-loader') : $('<div id="coverflow-loader" />').appendTo('body');

        VeloCompability.fixGeneratedContent();

        Scaling.windowResize();
        this.setWrapperWidth();
        this.setCenterLine();
        this.adjustNavSpeed();
        this.bindEvents();

        // Add an overlay so the user dont scroll away before we load the right covers
        VeloXCHelpers.addOverlay();

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

        var State = History.getState(),
            windowLocationString = window.location.pathname.toLowerCase(),
            prevId = 0, 
            currId = 0,
            id, index, urlId, urlPage, delta, coversOnScreen;

        function get_dir(filter) {

            if (State.cleanUrl) {
                currId = parseInt(State.cleanUrl.split('/' + filter + '/').pop(), 10);
            }
            
            if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.url) {
                prevId = parseInt(VeloXCHelpers.prevHistoryState.data.url.split('/' + filter + '/').pop(), 10);
            }

            //log('Curr: ' + currId + ' Prev: ' + prevId);

            return (currId > prevId)? 'next' : 'prev';
        }

        function scrollToCenter(type, index, cb) {
        	//console.log(type);
            var obj = (type === 'cars' || type === 'v40cc')? Velo : CoverFlow,
                currentScrollLeft = obj.settings.element.scrollLeft(),
                coversOnScreen = Math.ceil((Scaling.windowDimensions.width - 270) / 180),
                minVisible = Math.round(currentScrollLeft / 180),
                maxVisible = minVisible + coversOnScreen - 1;

            //log('min: ' + minVisible + ' max: ' + maxVisible);
            //log('Duration: ' + (currentScrollLeft - (180 * (index + 1 - coversOnScreen))));

            if (index >= minVisible && index <= maxVisible) {
            
                if ($.isFunction(cb)) {
                    cb();
                }
            }
            
            else {
                if ($.isFunction(cb)) {
                    VeloXCHelpers.addOverlay();
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
        if (VeloXCHelpers.prevHistoryState) log('Prev: ' + VeloXCHelpers.prevHistoryState.data.type);
        */

        var pageType = 'cars'

        if(State.url.indexOf('/v40cc') > -1) {
        	pageType = 'v40cc';
        }


        if (State.data.type === 'open-adventure') {
        
            if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'slide-adventure') {
                Adventure.slideInAdventure('/section/' + State.data.id, get_dir('adventure'));
            }
            else {
                if (Page.settings.visible) {
                    Page.playOutro(VeloXCHelpers.addOverlay);
                }
                scrollToCenter('adventures', State.data.index, function(){ Adventure.open(State.data); });
            }
            
        }
        
        else if (State.data.type === 'close-adventure') {
        
            if ($(window).scrollTop() !== 0) {
                $('html, body').firstScrollable().stop().animate({'scrollTop': 0}, $(window).scrollTop(), 'easeOutQuad', Adventure.playOutro);
            }
            else {
                Adventure.playOutro();
            }
            if (Page.settings.visible) {
                Page.playOutro();
            }
            
        }
        
        else if (State.data.type === 'open-car') {
            if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'slide-car') {
                Velo.slideInCar('/' + pageType +'/' + State.data.id, get_dir(pageType));
                console.log("1");
            }
            else if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'close-page') {
                Page.open(pageType, function() {
                    scrollToCenter(pageType, VeloXCHelpers.prevHistoryState.data.index, function(){ Velo.open(VeloXCHelpers.prevHistoryState.data); });
                });
                console.log("2");
            }
            else if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'open-page' && VeloXCHelpers.prevHistoryState.data.page !== pageType) {
                Page.playOutro(function(){
                    Page.open(pageType, function() { scrollToCenter(pageType, State.data.index, function(){ Velo.open(State.data); }); });
                });
                console.log("3");
            }
            else {
                scrollToCenter(pageType, State.data.index, function(){ Velo.open(State.data); });
                console.log("4");
            }
            
        }
        
        else if (State.data.type === 'close-car') {
        
            if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'close-page') {
                Page.open(pageType);
            }
            else {
                Velo.playOutro();
            }
            
        }
        
        else if (State.data.type === 'slide-adventure') {
        
            if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'slide-adventure') {
                Adventure.slideInAdventure(State.data.url, get_dir('adventure'));
            }
            else if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'close-adventure') {
                id = State.data.url.split('/section/').pop();
                index = (id - 1 < 0)? 0 : id - 1;
                scrollToCenter('adventures', index, function(){ Adventure.open({ id: id, index: index, type: 'open-adventure' }); });
            }
            else {
                Adventure.slideInAdventure(State.data.url, State.data.direction);
            }
            
        }
        
        else if (State.data.type === 'slide-car') {
        
            if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'slide-car') {
                Velo.slideInCar(State.data.url, get_dir(pageType));
            }
            else if (VeloXCHelpers.prevHistoryState && (VeloXCHelpers.prevHistoryState.data.type === 'close-car' || VeloXCHelpers.prevHistoryState.data.type === 'open-page')) {
                id = State.data.url.split('/' + pageType + '/').pop();
                //index = (id - 1 < 0)? 0 : id - 1;
                index = id;
                if (State.data.page !== pageType) {
                    Page.playOutro(function(){
                        Page.open(pageType, function() { scrollToCenter(pageType, index, function() { Velo.open({ id: id, index: index, type: 'open-car' }); }); });
                    });
                }
                else {
                    scrollToCenter(pageType, index, function(){ Velo.open({ id: id, index: index, type: 'open-car' }); });
                }
            }
            else {
                Velo.slideInCar(State.data.url, State.data.direction);
            }
            
        }
        
        else if (State.data.type === 'open-page') {
        
            if(VeloXCHelpers.prevHistoryState && (VeloXCHelpers.prevHistoryState.data.type === 'map-to-adventure' || VeloXCHelpers.prevHistoryState.data.type === 'open-adventure')) {
                Adventure.playOutro();
                Page.open(State.data.page);
            }
            else if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'open-car' && State.data.page !== pageType) {
                Page.playOutro(function(){
                    Page.open(State.data.page);
                });
            }
            else if (VeloXCHelpers.prevHistoryState && (VeloXCHelpers.prevHistoryState.data.type === 'open-car' || VeloXCHelpers.prevHistoryState.data.type === 'slide-car')) {
                if (State.data.page === pageType) {
                    Velo.playOutro();
                }
                else {
                    Page.playOutro(function(){
                        Page.open(State.data.page);
                    });
                }
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
        
            if(VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'open-adventure') {
                Adventure.playOutro();
            }
            else {
                Page.playOutro();
            }
            
        }
        
        else if (State.data.type === 'map-to-adventure') {
        
            if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'slide-adventure') {
                delta = (get_dir('adventure') === 'next')? 1 : -1;
                State.data.url = '/' + (parseInt(VeloXCHelpers.prevHistoryState.data.url.split('/section/').pop(), 10) + delta);
                Adventure.slideInAdventure(State.data.url, get_dir('adventure'));
            }
            else {
                coversOnScreen = Math.ceil((CoverFlow.settings.element.width() - CoverFlow.settings.sidebar.width()) / CoverFlow.settings.coverWidth);
                VeloXCHelpers.addOverlay();
                CoverFlow.settings.element.scrollLeft(180 * (State.data.index - Math.ceil(coversOnScreen/2)));
                Page.playOutro(function() {
                    Adventure.open(State.data);
                });
            }
            
        }
        
        else if (State.data.type === undefined) {
        
            if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'close-adventure') {
                urlId = parseInt(windowLocationString.split('/section/').pop(), 10);
                scrollToCenter('adventures', (urlId - 1), function(){ Adventure.open({ id: urlId, index: urlId - 1 }); });
            }
            if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'open-adventure') {
                Adventure.playOutro(); /* Fix for html4 history */
            }
            else if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'slide-adventure') {
                delta = (get_dir('adventure') === 'next')? 1 : -1;
                State.data.url = '/' + (parseInt(VeloXCHelpers.prevHistoryState.data.url.split('/section/').pop(), 10) + delta);
                Adventure.slideInAdventure(State.data.url, get_dir('adventure'));
            }
            else if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'close-page') {
                urlpage = windowLocationString.split('/').pop();
                Page.open(urlpage);
            }
            else if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'open-page') {
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

        VeloXCHelpers.prevHistoryState = State;

    });

})(window);


/* ADD CLASSES FOR BROWSER SPECIFIC ENHANCEMENTS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* Using this to fix font-weight in ff-mac */
Modernizr.addTest('ff-mac', function () {   
	return (VeloXCHelpers.userAgentString.indexOf('macintosh') > -1) && (VeloXCHelpers.userAgentString.indexOf('firefox') > -1 );
});

/* Using this to tweak hw-acc */
Modernizr.addTest('safari', function () {   
	return (VeloXCHelpers.userAgentString.indexOf('safari') > -1) && (VeloXCHelpers.userAgentString.indexOf('chrome') === -1);
});

/* Chrome */
Modernizr.addTest('chrome', function () {   
	return (VeloXCHelpers.userAgentString.indexOf('safari') > -1) && (VeloXCHelpers.userAgentString.indexOf('chrome') > -1);
});


/* JQUERY EXTENSIONS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
$.fn.extend({
  firstScrollable: function(dir) {
    var scrl = VeloXCHelpers.getScrollable.call(this, {el: 'first', dir: dir});
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
		Adventure.mouseWheelScroll(delta);
	});

	$(window).bind('scroll', Adventure.moveCaptions);
	
});