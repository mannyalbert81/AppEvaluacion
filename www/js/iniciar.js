
$(document).on("ready",onDeviceReady);

document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() 
{
	checkConnection();
	
}

var online=0;

function checkConnection() {
	  
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
    	 
    	 procesos();
     }else{
    	
    	 $(document).on('click', '#btn_excelente', function(){
    	 
	    	 swal("Capremci Informa", "Tu dispositivo no tiene internet.", "error");
	    	 window.location.href = "index.html";
	 	 	 $("#cedula").val("");
	    	
    	 });
    	 
    	 $(document).on('click', '#btn_bueno', function(){
        	 
	    	 swal("Capremci Informa", "Tu dispositivo no tiene internet.", "error");
	    	 window.location.href = "index.html";
	 	 	 $("#cedula").val("");
	    	
    	 });
    	 
    	 
    	 $(document).on('click', '#btn_regular', function(){
        	 
	    	 swal("Capremci Informa", "Tu dispositivo no tiene internet.", "error");
	    	 window.location.href = "index.html";
	 	 	 $("#cedula").val("");
	    	
    	 });
    	 
    	 $(document).on('click', '#btn_malo', function(){
        	 
	    	 swal("Capremci Informa", "Tu dispositivo no tiene internet.", "error");
	    	 window.location.href = "index.html";
	 	 	 $("#cedula").val("");
	    	
    	 });
    	 
    	 
    	 
    	 
     }

	 	
     }

function procesos() {
	
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
			  		
   	    		
   	    		
   	    		   if(online=='1'){
   	    		   
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
   	    		   
   	    		   }else{
   	    			   
   	    			 swal("Capremci Informa", "Tu dispositivo no tiene internet.", "error");
   	    			$("#cedula").val("");
   	    			   
   	    		   }
   	    		   
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
      	    		
      	    		 if(online=='1'){
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
      	    		
      	    		   
   			      } else{
   			   
	    			 swal("Capremci Informa", "Tu dispositivo no tiene internet.", "error");
	    			$("#cedula").val("");
	    			   
	    		   }
      	    		 
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
      	    		 
      	    		 if(online=='1'){
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
      	    		
      	    		 } else{
      	   			   
   	    			 swal("Capremci Informa", "Tu dispositivo no tiene internet.", "error");
   	    			 $("#cedula").val("");
   	    			   
   	    		   }
      	    		   
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
      	    		 
      	    		 if(online=='1'){
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
      	    		} else{
       	   			   
      	    			 swal("Capremci Informa", "Tu dispositivo no tiene internet.", "error");
      	    			 $("#cedula").val("");
      	    			   
      	    		   }
      	    		   
   			  }
       	    	   
       		});
    		
    		
    	 
    		 $( "#cedula" ).focus(function() {
   			  $("#mensaje_cedula").fadeOut("slow");
   		     });
    		 
   
}






