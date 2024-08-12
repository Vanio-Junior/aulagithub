function InserirDadosTela(dados){
    
    let informacoes = (dados)

    var node = document.getElementById('PeitoCostas')
    //node = node.value

        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }


  
    let inferiores = document.getElementById("PeitoCostas")
    
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
    let dia
    let mes
    let hora
    let minuto
    let arrData



    let arr
    let divTitulo
    let divTitulo2
    let tenhoEsseNome = false

    let nomesTitutlo 
    let nomesTitutlo2 

    
    for(var i=0; i<informacoes.length; i++){

            tituloAlerta = document.createElement('p')//.classList.add('TituloAlertaAPP')
            tituloAlerta.setAttribute('class','TituloAlertaAPP')
            informacoes[i].TIPO = informacoes[i].TIPO.replace('COMPOSE', 'QDI Data Lake Tratamento de Dados')
            informacoes[i].TIPO = informacoes[i].TIPO.replace('REPLICATE', 'QDI Data Lake Replicação de Dados')
            tituloAlerta.innerHTML = (informacoes[i].TIPO)
            
            pernaVTEX = document.createElement('div')//.classList.add('perna')
            pernaVTEX.setAttribute('class','vtex')
            divisao2 = document.createElement('div')//.classList.add('perna')
            
            pernaVTEX.appendChild(tituloAlerta)

            
            perna = document.createElement('div')//.classList.add('perna')
            perna.setAttribute('class','ConsultasVTEX')

            data = new Date(informacoes[i].DT_EXEC)
            data.setDate(data.getUTCDate())
            data.setMonth(data.getUTCMonth())
            data.setHours(data.getUTCHours())
            data.setMinutes(data.getUTCMinutes())

            dia = data.getUTCDate()
            mes = data.getMonth()+1
            hora = data.getHours()
            minuto = data.getUTCMinutes()
            arrData = [dia, mes, hora, minuto]

            for(var q=0; q<arrData.length; q++){
                if(arrData[q] < 10){
                    arrData[q] = `0${arrData[q]}`
                }
            }
            
            data2 = `${arrData[0]}/${arrData[1]} ${arrData[2]}:${arrData[3]}`
        

            for(var k=1; k<7; k++){

                divisao = document.createElement('div')//.classList.add('CirculoStatus')
                divisao.setAttribute('class','vtexConsulta')

                circuloStatus = document.createElement('div')//.classList.add('CirculoStatus')
                circuloStatus.setAttribute('class','statusVtex')


                divTitulo = document.createElement('div')//.classList.add('perna')
                divTitulo.setAttribute('class','ifnoConsul')
                divTitulo.setAttribute('id','ifnoConsul')

                if(k  == 1 ){
                    circuloStatus.style.backgroundColor =  ('blue')
                    nomesTitutlo = 'TOTAL'
                    nomesTitutlo2 = informacoes[i].TOTAL

                }
                else if(k  == 2 ){
                    circuloStatus.style.backgroundColor =  ('#25D366')
                    nomesTitutlo = 'RUNNING'
                    nomesTitutlo2 = informacoes[i].RUNNING

                }
                else if (k  == 3 ){
                    circuloStatus.style.backgroundColor =  ('gray')
                    nomesTitutlo = 'STOPPED'
                    nomesTitutlo2 =  informacoes[i].STOPPED

                }
                else if (k  == 4 ){
                    circuloStatus.style.backgroundColor =  ('orange')
                    nomesTitutlo = 'RECOVERING'
                    nomesTitutlo2 =  informacoes[i].RECOVERING

                }
                else if( k == 5){
                    circuloStatus.style.backgroundColor =  ('red')
                    nomesTitutlo = 'ERROR'
                    nomesTitutlo2 =  informacoes[i].ERROR

                }

                else if( k == 6){
                    nomesTitutlo = 'HORA DA CONSULTA'
                    
                    nomesTitutlo2 =  data2
                    circuloStatus.style.backgroundColor =  informacoes[i].Cor
                    divTitulo.setAttribute('class','ifnoConsul2')

                }

                

                
                

                telaCinza= document.createElement('p')//.classList.add('perna')
                telaCinza.setAttribute('class','titulo')
                telaCinza.innerHTML = (nomesTitutlo)
                
                




                statusAtual = document.createElement('p')//.classList.add('statusAtual')
                statusAtual.setAttribute('class','hour')      
                
                if(k==6){
                    statusAtual.style.top = ('-47%')
                }
                statusAtual.innerHTML = (nomesTitutlo2)

                
                //divTitulo.appendChild(status)
                divTitulo.appendChild(statusAtual)

                divisao.appendChild(telaCinza)
                divisao.appendChild(circuloStatus)
                divisao.appendChild(divTitulo)
                perna.appendChild(divisao)




            }


            pernaVTEX.appendChild(perna)

            inferiores.appendChild(pernaVTEX)



        



    }

    





}