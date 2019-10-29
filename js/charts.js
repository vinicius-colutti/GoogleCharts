function desenharPizza(){

            var tabela = new google.visualization.DataTable();
            tabela.addColumn('string','Categorias');
            tabela.addColumn('number','Valores');
            tabela.addRows([
                ['Educacao',2000],
                ['Transporte',500],
                ['Lazer',230],
                ['Saúde',50],
                ['Cartão de Crédito',900],
                ['Alimentação',260]
            ]);

            var opcoes = {
                title: 'Tipos de Gastos',
                height: 500,
                width: 900,
                pieHole: 0.4,
                is3D: true,
                legend: 'labeled',
                pieSliceText: 'value',
                //colors: ['grey', 'red', 'blue', 'yellow', 'pink', 'purple']
                slices: {0:{offset: 0.1}, 1:{color: 'grey', offset: 0.1}, 2:{offset: 0.1}, 3:{offset: 0.1}, 4:{offset: 0.1}, 5:{offset: 0.1}, 6:{offset: 0.1}}
            };

            var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
            grafico.draw(tabela, opcoes);

            tabela = new google.visualization.DataTable();
            tabela.addColumn('string','Mês');
            tabela.addColumn('number','Gastos');
            tabela.addRows([
                ['jan',800],
                ['fev',400],
                ['mar',1100],
                ['abr',400],
                ['mai',500],
                ['jun',750],
                ['jul',1500],
                ['ago',650],
                ['set',850],
                ['out',400],
                ['nov',1000],
                ['dez',720]
            ]);

            var opcoes ={
                title: 'Gastor por mês',
                width: 650,
                height:300,
                vAxis: {format: 'currency', gridlines: {count:5, color: 'transparent'}},
                curveType: 'function',
                legend: 'none'  
            }

            var grafico = new google.visualization.LineChart(document.getElementById("graficoLinha"));

            grafico.draw(tabela, opcoes);

            var tabela = google.visualization.arrayToDataTable(
                [
                    ['Mês', 'Entrada', 'Saída'],    
                    ['jan', 2500, 1000],
                    ['fev', 2000, 500],
                    ['mar', 3000, 1300],
                    ['abr', 1500, 1700],
                    ['mai', 5000, 2250],
                    ['jun', 3567, 3000],
                    ['jul', 3452, 1468],
                    ['ago', 1833, 5250],
                    ['set', 3803, 5500],
                    ['out', 1800, 1000],
                    ['nov', 3569, 1500],
                    ['dez', 3000, 1740]
                ]   
            );

            var opcoes = {
                title: 'Entradas e saídas da conta',
                width:800,
                height:400,
                vAxis: {format: 'currency', gridlines: {color: 'transparent'}, title: 'Valores'},
                hAxis: {title: 'Mês'}
            }

            var grafico = new google.visualization.ColumnChart(document.getElementById("graficoDeColunas"));
             
            grafico.draw(tabela, opcoes); 
            
            


            //colunas surpresa

            var tabela = new google.visualization.DataTable();
            tabela.addColumn('string','Categorias');
            tabela.addColumn('number','Valores');
            tabela.addColumn({type: 'string', role: 'annotation'});
            tabela.addColumn({type: 'string', role: 'style'});
            tabela.addRows([
                ['Educacao',2000,'R$2.000,00', 'blue'],
                ['Transporte',500,'R$500,00', 'grey'],
                ['Lazer',230,'R$230,00', 'grey'],
                ['Saúde',50,'R$50,00', 'grey'],
                ['Cartão de Crédito',900,'R$900,00', '#8904B1'],
                ['Alimentação',260,'R$260,00', 'grey']
            ]);
 
            tabela.sort([{column:1, desc: true}]);

            var opcoes = {  
                title: 'Tipos de Gastos',
                height:400,
                width: 800,
                vAxis: {gridlines: {count:0, color: 'transparent'}},
                legend:'none',
                hAxis: {gridlines:{color: 'transparent'}, format: 'currency', textPosition: 'none'},
                annotations: {alwaysOutside: 'true'} 
            }
            var grafico = new google.visualization.BarChart(document.getElementById("graficoColunaSurpresa"));
            grafico.draw(tabela, opcoes);






            //GRAFICO DE BARRAS COM ARQUIVO JSON

            var dadosJson = $.ajax({
                url: 'json/dados.json',
                dataType: 'json',
                async: false
            }).responseText;

            var tabela = new google.visualization.DataTable(dadosJson);

            var grafico = new google.visualization.BarChart(document.getElementById('graficoBarrasJson'));

            grafico.draw(tabela);


        }