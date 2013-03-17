$(document).ready(function(){
	
	//Sidebar Accordion Menu:
		
		$("#main-nav li ul").hide(); // Hide all sub menus
		$("#main-nav li a.current").parent().find("ul").slideToggle("slow"); // Slide down the current menu item's sub menu
		
		$("#main-nav li a.nav-top-item").click( // When a top menu item is clicked...
			function () {
				$(this).parent().siblings().find("ul").slideUp("normal"); // Slide up all sub menus except the one clicked
				$(this).next().slideToggle("normal"); // Slide down the clicked sub menu
				return false;
			}
		);
		
		$("#main-nav li a.no-submenu").click( // When a menu item with no sub menu is clicked...
			function () {
				window.location.href=(this.href); // Just open the link instead of a sub menu
				return false;
			}
		); 

    // Sidebar Accordion Menu Hover Effect:
		
		$("#main-nav li .nav-top-item").hover(
			function () {
				$(this).stop().animate({ paddingRight: "25px" }, 200);
			}, 
			function () {
				$(this).stop().animate({ paddingRight: "15px" });
			}
		);

    //Minimize Content Box
		
		$(".content-box-header h3").css({ "cursor":"default" }); // Give the h3 in Content Box Header a different cursor
		$(".cat h3").css({ "cursor":"s-resize" }); // Give the h3 in Content Box Header a different cursor
		$(".closed-box .content-box-content").hide(); // Hide the content of the header if it has the class "closed"
		$(".cat h3").click( // When the h3 is clicked...
			function () {
			  $(this).parent().next().toggle(); // Toggle the Content Box
			  $(this).parent().parent().toggleClass("closed-box"); // Toggle the class "closed-box" on the content box
			}
		);
		
    //Close button:
		
		$(".close").click(
			function () {
				$(this).parent().fadeTo(400, 0, function () { // Links with the class "close" will close parent
					$(this).slideUp(400);
				});
				return false;
			}
		);

    // Alternating table rows:
		
		$('tbody tr:even').addClass("alt-row"); // Add class "alt-row" to even table rows

	// Other Functions
		$('.mover').hide();
		$('#slideToggle').click(function(){
			$(this).siblings('.mover').slideToggle();
		});
		$('.mover2').hide();
		$('#slideToggle2').click(function(){
			$(this).siblings('.mover2').slideToggle();
		});
		$('.mover3').hide();
		$('#slideToggle3').click(function(){
			$(this).siblings('.mover3').slideToggle();
		});
		
	// Initialise jQuery WYSIWYG:
		
		$('.wysiwyg').wysiwyg({
			controls: {
				separator07	: { visible : true },
				cut			: { visible : true },
				copy		: { visible : true },
				paste		: { visible : true },
				html		: { visible : true }
			}
		});
		
});

function confirmDelete(id, ask, url) {
	temp = window.confirm(ask);
	if (temp) {
		window.location=url+id;
	}
}
function open_window(link,w,h) {
	var win = "width="+w+",height="+h+",menubar=no,location=no,resizable=yes,scrollbars=yes";
	wishWin = window.open(link,'wishWin',win);
}