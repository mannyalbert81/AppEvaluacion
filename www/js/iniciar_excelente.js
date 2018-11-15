

	$(document).on("ready",onDeviceReady);
	
	

	function onDeviceReady() 
	{
		excelente();
	}

	

	function excelente() {

		 var base_url = 'http://186.4.157.125:80/webcapremci/webservices_evaluacion/';
			var pag_service = 'SincronizacionService.php?jsoncallback=?' ;
			var nombre_usuarios = "";
			
			$(document).on('click', '#btn_excelente', function(){
			
				
				 var cedula = $("#cedula").val();
				 var calificacion = "Excelente";
				 var imei= "1111111111";
		    	 var error="";

		    	    if (cedula == "")
			        {
				    	$("#mensaje_cedula").text("Introduzca Cedula");
			    		$("#mensaje_cedula").fadeIn("slow"); //Muestra mensaje de error
			    		error="SI";
			            return false;
				    }
			    	else 
			    	{
			    		$("#mensaje_cedula").fadeOut("slow"); //Muestra mensaje de error
			    		error="NO";
					}
		    	   
		    	   if(error=="NO"){
			  		
		    		  $.ajax({
	  	    			   type: 'GET',
	  	    			   url: base_url+pag_service,
	  	    			   data:{cedula:cedula, calificacion:calificacion, imei:imei},
	  	    			   dataType: 'json',
	  	    			   success: function (x) {
	  	    				 
	  	    				$.each(x, function(i, j) {			
								nombre_usuarios  =  j.nombre_usuarios;
							});
	  	    				
	  	    			   window.location.href = "index.html?succes="+nombre_usuarios+"";
	  	    			
	  	    			   },
	  	    			   error: function (jqXHR, textStatus, errorThrown) {
	  	    	    	   
	  	    			   window.location.href = "index.html?error='Error'";
	  	     	    		    
	  	    			  }
	  	    			   
	  	    		   	});
		    	     }
				
			     });
			
	
			       $( "#cedula" ).focus(function() {
				   $("#mensaje_cedula").fadeOut("slow");
			       });
			
	}
    
    