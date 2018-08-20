/**
 * This is the real api call to api hosted in Azure. The api was developed using DotNet Core 2 and Azure Sql DB.
 */

const baseUrl = `https://deep-cars-api.azurewebsites.net/api`;

class CarsApi {
    static getAllCars() {
        return new Promise((resolve, reject) => {
            fetch(`${baseUrl}/cars`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (cars) {
                    resolve(cars);
                });
        });
    }

    static saveCar(car) {
        car = Object.assign({}, car);
        return new Promise((resolve, reject) => {
            if (car.id) {
                this.updateCar(car.id, car).then(data => {
                    resolve(car);
                });
            } else {
                this.createCar(car).then(data => {
                    resolve(data);
                });
            }
        });
    }

    static createCar(car) {
        return fetch(`${baseUrl}/cars`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    "manufacturer": car.manufacturer,
                    "make": car.make,
                    "model": car.model,
                    "year": car.year
                })
            })
            .then(function (res) {
                return res.json();
            });
    }

    static updateCar(id, car) {
        return fetch(`${baseUrl}/cars/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(car)
        });
    }

    static deleteCar(id) {
        return new Promise((resolve, reject) => {
            return fetch(`${baseUrl}/cars/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            }).then(function (data) {
                resolve("Success");
            });

        });
    }

}

export default CarsApi;