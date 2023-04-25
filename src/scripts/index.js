const btn = document.getElementById('cadastro');

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    
    const name = document.getElementById('name');
    const age = document.getElementById('age');
    const msg = document.getElementById('msg');
    
    const nome = name.value;
    const idade = age.value;
    
    if(idade > 30){
        msg.innerHTML = `Olá ${nome}, você disse que tinha ${idade} anos, que mentira cara! Tá com pressa pra se aposentar?`;
    } else {
        msg.innerHTML = `Olá ${nome}, se você tem ${idade} anos, ainda tem muito tempo pra sentar a bunda na cadeira e estudar!`;
    }
})

const region = document.getElementById('region');

region.addEventListener('change', (e)=> {
    e.preventDefault()
    
    const regiao = region.value
    const msgRegion = document.getElementById('msg-region');

    if(regiao === 'norte'){
        msgRegion.innerHTML = `Aqui vai aguns dados sobre sua região:
                                <br/>
                                <br/>
                                <p>Área: 3.870.000 km²</p>
                                <p>População: 17,71 milhões (2016)</p>
                                <p>PIB: 17,71 milhões (2016)</p>
                                <p>IDH: 17,71 milhões (2016)</p>
                                <p>Densidade: 4,85 hab./km²</p>`
    } else if(regiao === 'nordeste'){
        msgRegion.innerHTML = `Aqui vai aguns dados sobre sua região:
                                <br/>
                                <br/>
                                <p>Área: 1.558.000 km²</p>
                                <p>População: 56 560 081 hab. 2015</p>
                                <p>PIB: R$ 1,004,828,000 mil 2018</p>
                                <p>IDH: 0,710 alto 2017</p>
                                <p>Densidade: 36,39 hab./km²</p>`
    }  else if(regiao === 'sul'){
        msgRegion.innerHTML = `Aqui vai aguns dados sobre sua região:
                                <br/>
                                <br/>
                                <p>Área: 576.774 km²</p>
                                <p>População: 29 754 036 hab. IBGE/2018</p>
                                <p>PIB: 29 754 036 hab. IBGE/2018</p>
                                <p>IDH: 0,831 muito alto 2020</p>
                                <p>Densidade: 0,05 hab./km²</p>`
    } else if(regiao === 'sudeste'){
        msgRegion.innerHTML = `Aqui vai aguns dados sobre sua região:
                                <br/>
                                <br/>
                                <p>Área: 924.511 km²</p>
                                <p>População: 89 632 912 hab. 2021</p>
                                <p>PIB: R$ 3 917 485 milhões 2019</p>
                                <p>IDH: 0,795 alto 2017</p>
                                <p>Densidade: 96,94 hab./km²</p>`
    } else if(regiao === 'centrooeste'){
        msgRegion.innerHTML = `Aqui vai aguns dados sobre sua região:
                                <br/>
                                <br/>
                                <p>Área: 1.612.000 km²</p>
                                <p>População: 16,09 milhões (1 de jul. de 2018)</p>
                                <p>PIB: R$ 542,632 bilhões 2014</p>
                                <p>IDH: R$ 542,632 bilhões 2014</p>
                                <p>Densidade: 10,01 hab/km²²</p>`
    }
})