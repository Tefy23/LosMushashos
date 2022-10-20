

function addItem(item){
    const itemHTML = '<div class="card" style="width: 14rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({'name':'Top Valeria',
    'img':'../assets/img/Articulos/top_valeria.jpg',
    'description':'Top negro con mangas acampanadas'});

addItem({'name':'Falda Alicia',
    'img':'../assets/img/Articulos/falda_alicia.png',
    'description':'Falda negra corta'})

addItem({'name':'Falda Pilar',
    'img':'../assets/img/Articulos/falda_pilar.jpg',
    'description':'Falda negra con corte ondulado'})

addItem({'name':'Jumpsuit Water',
    'img':'../assets/img/Articulos/jumpsuit_vinipiel.jpg',
    'description':'Vinipiel'});

addItem({'name':'Abrigo Moon',
    'img':'../assets/img/Articulos/abrigo_moon.jpg',
    'description':'Abrigo negro'})
    
addItem({'name':'Jumpsuit Water',
    'img':'../assets/img/Articulos/jumpsuit_animal_print.jpg',
    'description':'Animal Print'})

addItem({'name':'Air ',
    'img':'../assets/img/Articulos/air_rosa.jpg',
    'description':'Rosa'})

addItem({'name':'Sudadera',
    'img':'../assets/img/Articulos/sudadera_autum.png',
    'description':'Autum'});

addItem({'name':'Sudadera',
    'img':'../assets/img/Articulos/sudadera_winter.png',
    'description':'Winter'})
    
addItem({'name':'Sueter',
    'img':'../assets/img/Articulos/sueter.jpg',
    'description':'Sueter Gris'})