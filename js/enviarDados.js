function Chamadas(){
   /* let check = document.getElementById('preventSleepSwitch')
    check.checked = true*/

            
    try{

        myHeaders = new Headers({
            "x-hubin-access-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUFAgLSBTaG91bGRlciIsInRlbmFudCI6InNob3VsZGVyIiwidHlwZVRva2VuIjoiMiIsImV4cCI6MTAyOTI2NDUzMDAzODl9.67GhDUrDThdm6fgj8MiVDpL-YkTlGADpMXAHYLYDNEU"    
        });

            
        var myInit = { 
            method: 'GET',
            headers: myHeaders
        }


        fetch('https://shoulder.wevo.io/iomanager/api/flows/execute/route/enterprise/getDetailsServer', myInit)
        .then(function(response) {

        
            if(response.status != 200){
                return dorme(60000)
            }

            else{                
                return response.json();

            }

        }).then(function(data) {  
            let corpoGeral = data


            InserirDadosTela(corpoGeral.Servidores)
            InserirConsulta(corpoGeral.Consultas)
            dorme(300000)


        })
        
    }
    catch(err){
        console.log("Ocorreu um erro - " + err)
        return dorme(60000)

    }



    


}

async function dorme(valor){
    await sleep(valor)
    
    Chamadas()

}