$(function() 
  {
      $("#one").click(function(event) {
	      event.preventDefault();
	      var total=[];
	      total[0] = $( "#disc-list" ).val();
	      total[1] = $( "#inst-list" ).val();
	      total[2] = $( "#int-level" ).val();
	      total[3] = $( "#phase-id" ).val();
	      total[4] = $( "#web-id" ).val();
	      total[5] = $( "#lab-type" ).val();
	      total[6] = $( "#tech-list" ).val();
	      total[7] = $( "#dev_name" ).val();
	      total[8] = $( "#email_id" ).val();
	      total[9] = $( "#lab_name" ).val();
	      total[10] = $( "#slug" ).val();
	      total[11] = $( "#arch" ).val();
	      total[12] = $( "#build" ).val();
	      total[13] = $( "#config_command" ).val();
	      total[14] = $( "#storage" ).val();
	      total[15] = $( "#stop" ).val();
	      total[16] = $( "#start" ).val();
	      total[17] = $( "#init_commands" ).val();
	      total[18]= $( "#back_commands" ).val();
	      total[19]= $( "#inst_commands" ).val();
	      total[20]= $( "#service" ).val();
	      total[21]= $( "#os" ).val();
	      total[22]= $( "#os_version" ).val();
	      total[23]= $( "#post_build" ).val();
	      total[24]= $( "#config_command" ).val();
	      total[25]= $( "#repo_url" ).val();
	      total[26]= $( "#total_exp" ).val(); 
	      total[27]= $( "#pre_build" ).val();
	      total[28]= $( "#status" ).val(); 
	     
	      for (var i=0;i<total.length;i++)
		  {
		      if(total[i] == "")
			  {
			      alert("Please fill all form");
			      return false;
			  }
		  }
	      alert("downloaded");

	      
	  });
  });

$(function() {
	$(document).ready(function() {
		$.ajax({
			type: "GET",
			    url: api.get_disc,
			    success: function(data) {
			    for(var i in data) {
				//console.log(data[i]);
				$('#disc-list').append('<option value="' + data[i].id + '">' + data[i].name + '</option>');
			    }
			    
			}
		    });    
	    });
    });

// To display institute list
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

// To display Technologies

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

// To display newtech drop down menu

$(document).ready(function() {
	
	var wrapper         = $("#tech"); //Fields wrapper
	var add_button      = $(".add_field_button"); //Add button ID
	var x = 1;
	$(add_button).click(function(e){ //on add input button click
		e.preventDefault();
		var a=$("#repeating-form-section-template").html();
		$(wrapper).append(a);
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

// To display new technology div 
/*
function new_tech()
{
    document.getElementById("add").innerHTML = "<div id='load_tech();'>New tech <input type='text' id='tech_value'></input>&nbsp;&nbsp;FOSS&nbsp;&nbsp;<select id='foss'><option value='None'>Select</option><option value='1'>Yes</option><option value='0'>No</option></select>&nbsp;&nbsp;<button id='submit-tech'>save</button></div>";
     $('#submit-tech').click(add_tech);
}

// To add technology into the database

function add_tech(event)
{
    event.preventDefault();
    var x = 0;
    var e = document.getElementById("foss");
    var foss_value = e.options[e.selectedIndex].value; 
    var name = document.getElementById("tech_value").value;
    if (foss_value == "None" || name =="")
       	{
	    alert('wrong data');
	    return false;
	}
    var d = {"name":name,"foss":foss_value};
    $.ajax({
	    type: "POST",
		url: api.post_tech,
		dataType: "json",
		data: d,
		success: function(data) {
		//console.log(data);
		if (data) {
		    document.getElementById("add").innerHTML='<div class="form-group" id="add"><label class="col-sm-4 control-label">Technologies used</label> <button class="add_field_button btn btn-default">Add More</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="add_new_field_button btn btn-default" id="target" onclick="newtech();">Add New</button><div class="col-sm-2"><select class="form-control" id="tech-list"><option>Select</option> </select></div></div></div>';
		    load_tech();
		    alert( + name + " is successfully added in list !");
		    
		}
		else {
		    alert("Cannot add to list !");
		}
		
	    },
		error: function(a, b, c, d) {
		console.log(a,b,c,d);
	    }
	});
    return false;
}


function load_tech()
{
   
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
		$(this).parent('div').remove();
		x--;
	    })

	    
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
	    
    
}

*/