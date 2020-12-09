$(document).ready(function() {
    var max_fields = 1000; //maximum input boxes allowed
    var wrapper = $(".input_fields_wrap"); //Fields wrapper
    var add_button = $(".add_field_button"); //Add button ID

    var x = 1; //initlal text box count
    $(add_button).click(function(e) { //on add input button click
        e.preventDefault();
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div class="row mt-2 pb-1 input_fields_wrap"><div class="col-lg-1"><div class="row"><div class="col-3"><input type="checkbox" name="check[]" class="checkbox"></div><div class="col-9">1</div></div></div><div class="col-lg-1"><input type="text" class="form-control"></div><div class="col-lg-3"><input type="text" class="form-control"></div><div class="col-lg-2"><input type="text" class="form-control"></div><div class="col-lg-2"><select id="state" class="form-control js-example-basic-single" type="text"><option value="AL">Alabama</option><option value="WY">Wyoming</option></select></div><div class="col-lg-2"><select id="statesct" class="form-control js-example-basic-single" type="text"><option value="AL">Alabama</option><option value="WY">Wyoming</option></select></div><button class="btn btn-danger remove_field"><i class="fas fa-trash-alt"></i></button></div>'); //add input box
        }
    });
    var add_buttonmultiple = $(".add_field_buttonmultiple"); //Add button ID

    var x = 3; //initlal text box count
    $(add_buttonmultiple).click(function(e) { //on add input button click
        e.preventDefault();
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div class="row mt-2 pb-1 input_fields_wrap"><div class="col-lg-1"><div class="row"><div class="col-3"><input type="checkbox" name="check[]" class="checkbox"></div><div class="col-9">1</div></div></div><div class="col-lg-1"><input type="text" class="form-control"></div><div class="col-lg-3"><input type="text" class="form-control"></div><div class="col-lg-2"><input type="text" class="form-control"></div><div class="col-lg-2"><select id="state" class="form-control js-example-basic-single" type="text"><option value="AL">Alabama</option><option value="WY">Wyoming</option></select></div><div class="col-lg-2"><select id="statesct" class="form-control js-example-basic-single" type="text"><option value="AL">Alabama</option><option value="WY">Wyoming</option></select></div><button class="btn btn-danger remove_field"><i class="fas fa-trash-alt"></i></button></div>'); //add input box
        }
    });
    $(wrapper).on("click", ".remove_field", function(e) { //user click on remove text
        var answer = window.confirm("Save data?")
        if (answer == true) {
            e.preventDefault();
            $(this).parent('div').remove();
            x--;
        } else {
            alert('ok!');
        }
    });
});
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
    });


    return false;
});
$('.dropdown-toggle').dropdown()
$('.ordering_div').hide();
$('.recordtoreport_div').hide();
$('.sct1').hide();
$('.sct2').hide();
$('.sct3').hide();
var select_all = document.getElementById("select_all"); //select all checkbox
var checkboxes = document.getElementsByClassName("checkbox"); //checkbox items

//select all checkboxes
select_all.addEventListener("change", function(e) {
    for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = select_all.checked;
    }
});


for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', function(e) { //".checkbox" change 
        //uncheck "select all", if one of the listed checkbox item is unchecked
        if (this.checked == false) {
            select_all.checked = false;
        }
        //check "select all" if all checkbox items are checked
        if (document.querySelectorAll('.checkbox:checked').length == checkboxes.length) {
            select_all.checked = true;
        }
    });
}
$(document).ready(function() {
    $("#statesct").select2({
        tags: true
    });

    $("#btn-add-state").on("click", function() {
        var newStateVal = $("#new-state").val();
        // Set the value, creating a new option if necessary
        if ($("#statesct").find("option[value=" + newStateVal + "]").length) {
            $("#statesct").val(newStateVal).trigger("change");
        } else {
            // Create the DOM option that is pre-selected by default
            var newState = new Option(newStateVal, newStateVal, true, true);
            // Append it to the select
            $("#statesct").append(newState).trigger('change');
        }
    });
});
$(document).ready(function() {
    $("#state").select2({
        tags: true
    });

    $("#btn-add-state").on("click", function() {
        var newStateVal = $("#new-state").val();
        // Set the value, creating a new option if necessary
        if ($("#state").find("option[value=" + newStateVal + "]").length) {
            $("#state").val(newStateVal).trigger("change");
        } else {
            // Create the DOM option that is pre-selected by default
            var newState = new Option(newStateVal, newStateVal, true, true);
            // Append it to the select
            $("#state").append(newState).trigger('change');
        }
    });
});
$('.ordering_div').hide();
$('.recordtoreport_div').hide();
$('.sct1').hide();
$('.sct2').hide();
$('.sct3').hide();
$('.box').click(function() {
    $(this).animate({
        height: '50px',
        width: '100%'
    })
});
document.querySelectorAll(".riskidentity_css>div>div>div:nth-child(1) p").forEach(function(node) {
    node.ondblclick = function() {
        var val = this.innerHTML;
        var input = document.createElement("input");
        input.value = val;
        input.onblur = function() {
            var val = this.value;
            this.parentNode.innerHTML = val;
        }
        this.innerHTML = "";
        this.appendChild(input);
        input.focus();
    }
});
$('.afterkickoff3').hide();
$('.tabcontrol3').hide();
$('.afterkickoff1').hide();
$('.tabcontrol1').hide();
$(".kickoff3").click(function() {
    $('.tabcontrol3').hide();
    $('.afterkickoff3').show();
});
$(".control3main").click(function() {
    $('.tabcontrol3').toggle();
    $('.afterkickoff3').hide();
});
$(".kickoff1").click(function() {
    $('.tabcontrol1').hide();
    $('.afterkickoff1').show();
});
$(".control1main").click(function() {
    $('.tabcontrol1').toggle();
    $('.afterkickoff1').hide();
});
$('.box').click(function() {
    $(this).animate({
        height: '100px',
        width: '100%'
    })
});
$('.boxx').click(function() {
    $(this).animate({
        height: '60px',
        width: '100%'
    })
});
$(document).ready(function() {
    $('.flexslider').flexslider();
    $("#flexiselDemo4").flexisel({
        visibleItems: 6,
        animationSpeed: 1000,
        autoPlay: false,
        autoPlaySpeed: 3000,
        pauseOnHover: true,
        reverse: false,
        startAt: 0,
        move: 0,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
            portrait: {
                changePoint: 480,
                visibleItems: 1
            },
            landscape: {
                changePoint: 640,
                visibleItems: 2
            },
            tablet: {
                changePoint: 960,
                visibleItems: 3
            }
        }
    });
    $("#flexiselDemo5").flexisel({
        visibleItems: 6,
        animationSpeed: 1000,
        autoPlay: false,
        autoPlaySpeed: 3000,
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
            portrait: {
                changePoint: 480,
                visibleItems: 1
            },
            landscape: {
                changePoint: 640,
                visibleItems: 2
            },
            tablet: {
                changePoint: 960,
                visibleItems: 3
            }
        }
    });
});