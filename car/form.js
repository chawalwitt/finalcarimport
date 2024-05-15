function renderForm(car) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cars</title>
    <link rel="stylesheet" href="/style.css"></link>
</head>
<body>
    <div class="main">
        <div class="img-addedit">
            <img src="https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2023/09/14/CHINA-ECONOMY-TRADE-043506.jpg" alt="">
        </div>
        <div class="form">
            <form action="/car/save" method="post">
                <input type="hidden" id="id" name="id" value="${car.id}" />
                <div class="input"> 
                    <div class="brand-section input2">
                        <label for="brand">Brand:</label>
                        <input type="text" id="brand" name="brand" value="${car.brand}" />
                    </div>
                    <div class="model-section input2">
                        <label for="model">Model:</label>
                        <input type="text" id="model" name="model" value="${car.model}" />
                    </div>
                    <div class="price-section input2">
                        <label for="price">Price:</label>
                        <input type="text" id="price" name="price" value="${car.price}" />
                    </div>
                    <div class="carstocks-section input2">
                        <label for="carstocks">Carstocks:</label>
                        <input type="text" id="carstocks" name="carstocks" value="${car.carstocks}" />
                    </div>
                    <div class="btn-save">
                        <button type="submit">save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</body>
</html>
`};

module.exports = renderForm;