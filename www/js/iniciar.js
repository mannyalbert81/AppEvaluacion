$(document).on("ready",procesos);


var online;




function procesos() {
	
	var networkState = navigator.network.connection.type;
    var states = {};
    
    states[Connection.UNKNOWN]  = '1';  //Conexión desconocida;
    states[Connection.ETHERNET] = '1';  //Conexión ethernet;
    states[Connection.WIFI]     = '1';  //Conexión WiFi';
    states[Connection.CELL_2G]  = '1';  //Conexión movil 2G';
    states[Connection.CELL_3G]  = '1';  //Conexión movil 3G';
    states[Connection.CELL_4G]  = '1';  //Conexión movil 4G';
    states[Connection.NONE]     = '0';  //Sin conexión';
      
    online=states[networkState];
   
     if (online=='1'){
	
    	    var base_url = 'http://192.168.1.129:4000/webcapremci/webservices_evaluacion/';
    		var pag_service = 'SincronizacionService.php?jsoncallback=?' ;
    		var nombre_usuarios = "";
    		
    		$(document).on('click', '#btn_excelente', function(){
     		
   			 var cedula = $("#cedula").val();
   			 var calificacion = "Excelente";
   			 var imei= "358240051111110";
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
   	    					
	   	    				alert("Hola "+nombre_usuarios+" tu calificación se registro correctamente.");
	   	    				$("#cedula").val("");
	   	    				
   	    			 },
   	    				     error: function (jqXHR, textStatus, errorThrown) {
   	    				     alert("Cedula no existe en nuestra base de datos.");
   	    			 }

   	    			});
   	    		
   	    		   
			  }
    	    	   
    		});
    		
    		
    		
    		
    		
    		
    		$(document).on('click', '#btn_bueno', function(){
         		
      			 var cedula = $("#cedula").val();
      			 var calificacion = "Bueno";
      			 var imei= "358240051111110";
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
      	    					
   	   	    				alert("Hola "+nombre_usuarios+" tu calificación se registro correctamente.");
   	   	    				$("#cedula").val("");
   	   	    				
      	    			 },
      	    				     error: function (jqXHR, textStatus, errorThrown) {
      	    				     alert("Cedula no existe en nuestra base de datos.");
      	    			 }

      	    			});
      	    		
      	    		   
   			  }
       	    	   
       		});
    		
    		
    		

    		$(document).on('click', '#btn_regular', function(){
         		
      			 var cedula = $("#cedula").val();
      			 var calificacion = "Regular";
      			 var imei= "358240051111110";
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
      	    					
   	   	    				alert("Hola "+nombre_usuarios+" tu calificación se registro correctamente.");
   	   	    				$("#cedula").val("");
   	   	    				
      	    			 },
      	    				     error: function (jqXHR, textStatus, errorThrown) {
      	    				     alert("Cedula no existe en nuestra base de datos.");
      	    			 }

      	    			});
      	    		
      	    		   
   			  }
       	    	   
       		});
    		
    		
    		
    		

    		$(document).on('click', '#btn_malo', function(){
         		
      			 var cedula = $("#cedula").val();
      			 var calificacion = "Malo";
      			 var imei= "358240051111110";
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
      	    					
   	   	    				alert("Hola "+nombre_usuarios+" tu calificación se registro correctamente.");
   	   	    				$("#cedula").val("");
   	   	    				
      	    			 },
      	    				     error: function (jqXHR, textStatus, errorThrown) {
      	    				     alert("Cedula no existe en nuestra base de datos.");
      	    				   $("#cedula").val("");
      	    			 }

      	    			});
      	    		
      	    		   
   			  }
       	    	   
       		});
    		
    		
    	 
    		 $( "#cedula" ).focus(function() {
   			  $("#mensaje_cedula").fadeOut("slow");
   		     });
    		 
    		 
     
     
    }else{
    	
    	
    	 alert("Tu dispositivo no tiene internet.");
    	 $("#cedula").val("");
    }
     
}






