

	$(document).on("ready",mensajes);

	var succes="";
	var error="";
	
	function getQueryVariable(variable)
	{
	       var query = window.location.search.substring(1);
	       var vars = query.split("&");
	       for (var i=0;i<vars.length;i++) {
	               var pair = vars[i].split("=");
	               if(pair[0] == variable){return pair[1];}
	       }
	       return(false);
	      
	}
	
	succes = getQueryVariable("succes");
	error = getQueryVariable("error");
	



	function mensajes() {
	        
		if(succes!=""){
			
		   swal("Gracias por Calificarnos", "Hola "+succes+" tu calificación se registro correctamente.", "success");	
		   $("#cedula").val("");
				
		}else{}
		
	    if(error!=""){
		
	        swal("Gracias por Calificarnos", "Cedula no existe registrada en nuestra base de datos.", "error");
		    $("#cedula").val("");
	    	
		}else{}
		   
	    
	}



