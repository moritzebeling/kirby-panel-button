export function openUrlInNewTab( field ){
    console.log('Button field', field.label, field.url);
    
    window.open( field.url, '_blank' );
}

export function triggerWebhook( field ){
    console.log('Button field', field.label, field.url);
    
    field.isLoading = true;
    
    fetch( field.url )
        .then((response) => response.json())
        .then((data) => {

            field.isLoading = false;
            console.log('Button field', 'Webhook successfully triggered', data);
            
            if( field.reload === true ){
                setTimeout(() => {
                    location.reload();
                }, 50);
            }

        })
        .catch((error) => {
            
            field.hasError = true;
            console.error('Button field', 'Error', error);

        });
}