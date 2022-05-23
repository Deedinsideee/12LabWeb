let data = [{

    "id": 1,

    "model": "легко",

    "price": 789000,

    "power": 123000,

    "description": "оочень быстрая",

    "brandName": "бемелье"

}, {

    "id": 2,

    "model": "amg ",

    "price": 17648900,

    "power": 15000,

    "description": "ну очеень быстрая",

    "brandName": "Меркедес"

}]

for (let key in data) {
        let row = document.createElement('tr')
        row.innerHTML = `<td class="login">${data[key].id}</td>
                      <td class="login">${data[key].model}</td>
                      <td class="login">${data[key].price}</td>
                      <td class="login">${data[key].power}</td>
                      <td class="login">${data[key].description}</td>
                      <td class="login">${data[key].brandName}</td>
                     `
        document.querySelector('.car').appendChild(row)
    }