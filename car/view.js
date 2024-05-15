function render(cars){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Motor Expo 2023</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <h1>MOTOR IMPORT CAR</h1>
            <table>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>carstocks</th>
                    </tr>
                </thead>
                <tbody>
                ${cars
                .map((car)=> 
                    `<tr>
                        <td>${car.id}</td>
                        <td>${car.brand}</td>
                        <td>${car.model}</td>
                        <td>${car.price}</td>
                        <td>${car.carsotcks}</td>
                    </tr>`)
                .join('')}
                </tbody>
            </table>
    </body>
    </html>
`};

module.exports = render;