function InserirConsulta(dados){
    
    let informacoes = (dados)

    var node = document.getElementById('inferiores')
    //node = node.value

        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }


  
    let inferiores = document.getElementById("inferiores")
    
    let perna 
    let perna2

    let quadriceps

    let tituloAlerta
    let tituloAlerta2
    let circuloStatus
    let circuloStatus2
    let status
    let status2
    let statusAtual
    let statusAtual2
    let data
    let data2
    let divTitulo
    let divTitulo2
    let titulo1

    for(var i=0; i < informacoes.length; i++){

    
            circuloStatus = document.createElement('div')//.classList.add('CirculoStatus')
            circuloStatus.setAttribute('class','CirculoStatus')
            statusAtual = document.createElement('p')//.classList.add('statusAtual')
            statusAtual.setAttribute('class','statusAtual')  
            statusAtual.innerHTML = ('')


            if (i==0){
                titulo1 = 'STATUS API CX ONLINE'


                if(parseInt(informacoes[i].STATUS_) <= 60){
                    circuloStatus.style.backgroundColor =  ('#25D366')

                      
                    statusAtual.innerHTML = ('ONLINE')

                    informacoes[i].STATUS_ = 'OK'
                }
                else if (parseInt(informacoes[i].STATUS_) <= 70 ){
                    circuloStatus.style.backgroundColor =  ('#FCEA1F')
                    statusAtual.innerHTML = ('Minutos')

    
                }
                else if(parseInt(informacoes[i].STATUS_) >70 ){
                    circuloStatus.style.backgroundColor =  ('red')
                    statusAtual.innerHTML = ('Minutos')

                }
            }
            else if(i==1){
                titulo1 = 'INTEGRAÇÃO SISTEMA MICROVIX'

                if(informacoes[i].STATUS_ == 'ONLINE'){
                    statusAtual.innerHTML = (informacoes[i].STATUS_ )

                    informacoes[i].STATUS_ = 'OK'
                    circuloStatus.style.backgroundColor =  ('#25D366')
                }
                else {
                    informacoes[i].STATUS_ = 'DOWN'
                    circuloStatus.style.backgroundColor =  ('red')
    
                }

            }
            else if(i==2){
                titulo1 = 'API VTEX PEDIDOS OMS 10d'

                if(parseInt(informacoes[i].STATUS_) <= 60){
                    circuloStatus.style.backgroundColor =  ('#25D366') 
                    statusAtual.innerHTML = ('ONLINE')
                    informacoes[i].STATUS_ = 'OK'
                }
                else if (parseInt(informacoes[i].STATUS_) <= 70 ){
                    circuloStatus.style.backgroundColor =  ('#FCEA1F')
                    statusAtual.innerHTML = ('Minutos')
    
                }
                else if(parseInt(informacoes[i].STATUS_) >70 ){
                    circuloStatus.style.backgroundColor =  ('red')
                    statusAtual.innerHTML = ('Minutos')

                }
            }

            perna = document.createElement('div')//.classList.add('perna')
            perna.setAttribute('class','perna')
            perna.setAttribute('id','perna')

            tituloAlerta = document.createElement('p')//.classList.add('TituloAlertaAPP')
            tituloAlerta.setAttribute('class','TituloAlertaAPP')
            tituloAlerta.innerHTML = (titulo1)

            



            divTitulo = document.createElement('div')//.classList.add('perna')
            divTitulo.setAttribute('class','divTitulo')
            divTitulo.setAttribute('id','divTitulo')

            status = document.createElement('p')//.classList.add('Status')
            status.setAttribute('class','Status')
            status.innerHTML = (informacoes[i].STATUS_)



            data = document.createElement('p')//.classList.add('DataResponsiva')
            data.setAttribute('class','DataResponsiva')
            data.innerHTML = (informacoes[i].DT_ULTIMA_INTEGRACAO)



            circuloStatus.appendChild(status)
            circuloStatus.appendChild(statusAtual)
            circuloStatus.appendChild(data)
            
            divTitulo.appendChild(tituloAlerta)
            perna.appendChild(divTitulo)
            perna.appendChild(circuloStatus)
            inferiores.appendChild(perna)

            
           



    }

    





}