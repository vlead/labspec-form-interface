
 $(function() {
    $(document).ready(function() {
        $.ajax({
        type: "GET",
        url: api.get_instt,
        success: function(data) {
            for(var i in data) {
            console.log(data[i]);
            $('#inst-list').append('<option value="' + data[i].id + '">' + data[i].name + '</option>');
          }
          
        }
      });    
    });
  });

 $(function() {
    $(document).ready(function() {
        $.ajax({
        type: "GET",
        url: api.get_tech,
        success: function(data) {
            for(var i in data) {
            console.log(data[i]);
            $('#tech-list').append('<option value="' + data[i].id + '">' + data[i].name + '</option>');
          }
          
        }
      });    
    });
  });

 $(function() {
    $(document).ready(function() {
        $.ajax({
        type: "GET",
        url: api.get_disc,
        success: function(data) {
            for(var i in data) {
            console.log(data[i]);
	    $('#disc-list').append('<option value="' + data[i].id + '">' + data[i].name + '</option>');
          }
          
        }
      });    
    });
  });



$(document).ready(function() {

    var wrapper         = $("#tech"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    x = 1;
 
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        $(wrapper).append('<div class="form-group"><div class="col-sm-12"><select id="'+x+'" class="form-control"><option value="">Select</option></select><a href="#" class="remove_field">Remove</a></div></div><p>'); //add input box


$(document).ready(function() {
        $.ajax({
        type: "GET",
        url: api.get_tech,
		    success: function(data) {y=x-1;
		    for(var i in data) {
            console.log(data[i]);
	   
	    
	    $("#"+y).append('<option value="' + data[i].id + '">' + data[i].name + '</option>');
          }
          
        }
      });    
    });



        x++;
    });

 








    
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); 
        $(this).parent('div').remove();x--;
    })
});
