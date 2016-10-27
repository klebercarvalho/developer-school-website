 $(document).ready(function(){
        $('#send_message').click(function(e){
            
            // Stop form submission & check the validation
            e.preventDefault();
            
            // Variable declaration
            var error = false;
            
            var email = $('#exampleInputEmail').val();
            var subject = $('#exampleInputSubject').val();
            var message = $('#exampleInputMessage').val();
            
         	
            if(email.length == 0 || email.indexOf('@') == '-1'){
                var error = true;
                // $('#email_error').fadeIn(500);
                $('#exampleInputEmail').addClass("validation");
                
            }else{
                $('#exampleInputEmail').removeClass("validation");
            }
            if(subject.length == 0){
                var error = true;
                $('#exampleInputSubject').addClass("validation");
            }else{
                $('#exampleInputSubject').removeClass("validation");
            }
            if(message.length == 0){
                var error = true;
                $('#exampleInputMessage').addClass("validation");
            }else{
                $('#exampleInputMessage').removeClass("validation");
            }
            
            // If there is no validation error, next to process the mail function
            if(error == false){
               // Disable submit button just after the form processed 1st time successfully.
                
                $('#send_message').attr({'enabled' : 'enable', 'value' : 'Enviando...' });
                
				/* Post Ajax function of jQuery to get all the data from the submission of the form as soon as the form sends the values to email.php*/
                $.post("php/envia-contato.php", $("#contact_form").serialize(),function(result){
                    //Check the result set from email.php file.
                    if(result == 'sent'){
                        //If the email is sent successfully, remove the submit button
                         
                         $('#send_message').attr({'enabled' : 'enable', 'value' : 'Enviar' });
                        //Display the success message
                        $('#mail_success').fadeIn(500);
                    }else{
                        //Display the error message
                        $('#mail_fail').fadeIn(500);
                        // Enable the submit button again
                        $('#send_message').removeAttr('disabled').attr('value', 'Enviar a Mensagem');
                    }
                });
            }
        });    
    });
 
 $(document).ready(function(){
     $('#send_interested').click(function(e){
         
         // Stop form submission & check the validation
         e.preventDefault();
         
         // Variable declaration
         var error = false;
         
         var email = $('#interesseInputEmail').val();
         var name = $('#interesseInputName').val();
         
      	
         if(email.length == 0 || email.indexOf('@') == '-1'){
             var error = true;
             // $('#email_error').fadeIn(500);
             $('#interesseInputEmail').addClass("validation");
             
         }else{
             $('#interesseInputEmail').removeClass("validation");
         }
         if(name.length == 0){
             var error = true;
             $('#interesseInputName').addClass("validation");
         }else{
             $('#interesseInputName').removeClass("validation");
         }
         
         // If there is no validation error, next to process the mail function
         if(error == false){
            // Disable submit button just after the form processed 1st time successfully.
             
             $('#send_interested').attr({'enabled' : 'enable', 'value' : 'Enviando...' });
             
				/* Post Ajax function of jQuery to get all the data from the submission of the form as soon as the form sends the values to email.php*/
             $.post("php/envia-interesse.php", $("#interesse_form").serialize(),function(result){
                 //Check the result set from email.php file.
                 if(result == 'sent'){
                     //If the email is sent successfully, remove the submit button
                      
                      $('#send_interested').attr({'enabled' : 'enable', 'value' : 'Enviar' });
                     //Display the success message
                     $('#interesse_mail_success').fadeIn(500);
                 }else{
                     //Display the error message
                     $('#interesse_mail_fail').fadeIn(500);
                     // Enable the submit button again
                     $('#send_interested').removeAttr('disabled').attr('value', 'Enviar a Mensagem');
                 }
             });
         }
     });    
 });