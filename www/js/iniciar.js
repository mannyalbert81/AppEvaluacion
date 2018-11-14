
$(document).on("ready",checkConnection);




function checkConnection() {
	 
	    	 
	    	
	    	 var base_url = 'http://192.168.1.129:4000/webcapremci/webservices_evaluacion/';
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
		   	    				swal("Gracias por Calificarnos", "Hola "+nombre_usuarios+" tu calificación se registro correctamente.", "success");	
		   	    				$("#cedula").val("");
		   	    			 },
		   	    				     error: function (jqXHR, textStatus, errorThrown) {
		   	    				    	swal("Gracias por Calificarnos", "Cedula no existe registrada en nuestra base de datos.", "error");
		   	    				    	$("#cedula").val("");
		   	    			 }
		
		   	    			});
	   	    		   
	   	    		  
	   	    		   
				  }
	    	    	   
	    		});
	    		
	    		
	    		
	    		
	    		
	    		
	    		$(document).on('click', '#btn_bueno', function(){
	         		
	      			 var cedula = $("#cedula").val();
	      			 var calificacion = "Bueno";
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
	      	    					
	      	    				swal("Gracias por Calificarnos", "Hola "+nombre_usuarios+" tu calificación se registro correctamente.", "success");	
	       	    				
	      	    				$("#cedula").val("");
	      	    			 },
	      	    				     error: function (jqXHR, textStatus, errorThrown) {
	      	    				    	swal("Gracias por Calificarnos", "Cedula no existe registrada en nuestra base de datos.", "error");
	      	    				    	$("#cedula").val("");
	      	    			 }

	      	    			});
	      	    		
	      	    		   
	   			     
	      	    		 
	      	    	   }
	       	    	   
	       		});
	    		
	    		
	    		

	    		$(document).on('click', '#btn_regular', function(){
	         		
	      			 var cedula = $("#cedula").val();
	      			 var calificacion = "Regular";
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
	      	    					
	      	    				swal("Gracias por Calificarnos", "Hola "+nombre_usuarios+" tu calificación se registro correctamente.", "success");	
	       	    				
	      	    				$("#cedula").val("");
	      	    			 },
	      	    				     error: function (jqXHR, textStatus, errorThrown) {
	      	    				    	swal("Gracias por Calificarnos", "Cedula no existe registrada en nuestra base de datos.", "error");
	      	    				    	$("#cedula").val("");
	      	    			 }

	      	    			});
	      	    		
	      	    		
	      	    		   
	   			  }
	       	    	   
	       		});
	    		
	    		
	    		
	    		

	    		$(document).on('click', '#btn_malo', function(){
	         		
	      			 var cedula = $("#cedula").val();
	      			 var calificacion = "Malo";
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
	      	    					
	      	    				swal("Gracias por Calificarnos", "Hola "+nombre_usuarios+" tu calificación se registro correctamente.", "success");	
	       	    				
	      	    				$("#cedula").val("");
	      	    			 },
	      	    				     error: function (jqXHR, textStatus, errorThrown) {
	      	    				    	swal("Gracias por Calificarnos", "Cedula no existe registrada en nuestra base de datos.", "error");
	      	    				   $("#cedula").val("");
	      	    			 }

	      	    			});
	      	    		
	      	    		   
	   			  }
	       	    	   
	       		});
	    		
	    		
	    	 
	    		 $( "#cedula" ).focus(function() {
	   			  $("#mensaje_cedula").fadeOut("slow");
	   		     });
	    		 
	    	 
	    	 
	    
	 	
     }









