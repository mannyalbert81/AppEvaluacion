
	$(document).on("ready",onDeviceReady);
	
	
	function onDeviceReady() 
	{
		$(document).on('click', '#btn_excelente', function(){
		
			db.transaction(checkConnection, errorCB, successCB);
		
		});
	}


    var online;

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
		    	
		    	 excelente();
		    	 
		     }else{
		    	 
		    	 swal("Upss...", "Tu dispositivo se encuentra sin internet.", "info");	
				 $("#cedula").val("");
					
		    	
		     }
		     
    }



    function excelente() {

	    var base_url = 'http://192.168.1.129:4000/webcapremci/webservices_evaluacion/';
		var pag_service = 'SincronizacionService.php?jsoncallback=?' ;
		var nombre_usuarios = "";
		
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
  	    				
  	    			   window.location.href = "index.html?succes="+nombre_usuarios";
  	    				
  	    			
  	    			 },
  	    				     error: function (jqXHR, textStatus, errorThrown) {
  	    				    	
  	    				    	 window.location.href = "index.html?error='Error'";
  	     	    				
  	    				    
  	    			 }
  	    		   	});
	    		   
		       }
	   
		       $( "#cedula" ).focus(function() {
			   $("#mensaje_cedula").fadeOut("slow");
		       });
	 
	}



		function errorCB(err) {
		    console.log('error encontrado');
		}
		
		function successCB (){
			
		}
