$( function() {
    $( "#datepicker" ).datepicker();
  } );

  $( function() {
    $( document ).tooltip();
  } );

  $("#polzunok").slider({
    animate: "slow",
    range: "min",    
    value: 50,
    slide : function(event, ui) {    
        $("#result-polzunok").text(ui.value);        
    }
});
$( "#result-polzunok" ).text($( "#polzunok" ).slider( "value" ));  