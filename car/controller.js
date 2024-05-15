const {getAll,remove,get,save} = require('./model');
const renderForm = require('./form');


async function listAction(request,response){
    const cars = await getAll();
    const pugPath = `${__dirname}/views/list`;
    response.render(pugPath,{cars});
}

async function removeAction(request,response){
    const id = parseInt(request.params.id, 10);
    await remove(id);
    response.redirect(request,response);
}

async function formAction(request,response){
    let car = { id: '', brand: '' , model: '', price: '', carstocks: ''};

    if(request.params.id){
        car = await get(parseInt(request.params.id, 10));
    }

    const body = renderForm(car);
    response.send(body);
}

async function saveAction(request,response){
    const car ={
        id: request.body.id,
        brand: request.body.brand,
        model: request.body.model,
        price: request.body.price,
        carstocks: request.body.carstocks,
    };

    await save(car);
    response.redirect(request.baseUrl);
}

module.exports = {listAction,removeAction,formAction,saveAction}