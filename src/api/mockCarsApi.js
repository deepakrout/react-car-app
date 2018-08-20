/**
 * Mock api to get some mock data while the back end is not yet developed.
 */

const cars = [
    {
        id: "1",
        manufacturer: "Honda",
        make: "Accord",
        model: "EX",
        year: "2015"
    },
    {
        id: "2",
        manufacturer: "Ford",
        make: "Explorer",
        model: "Limited",
        year: "2017"
    },
    {
        id: "3",
        manufacturer: "Toyota",
        make: "Venza",
        model: "EX-L",
        year: "2016"
    },
    {
        id: "4",
        manufacturer: "Honda",
        make: "Pilot",
        model: "EX-L",
        year: "2017"
    },
    {
        id: "5",
        manufacturer: "Kia",
        make: "Spectra",
        model: "LT",
        year: "2014"
    },
    {
        id: "6",
        manufacturer: "Mazda",
        make: "CX",
        model: "9",
        year: "2017"
    },
    {
        id: "7",
        manufacturer: "Ford",
        make: "Edge",
        model: "LTD",
        year: "2017"
    }
];

const delay = 1000;

const generateId = (cars) => {
    return cars.length + 1;
};

class CarsApi {
    static getAllCars() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], cars));
            }, delay);
        });
    }

  
    static saveCar(car) {
        car = Object.assign({}, car); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                /*   const minCarTitleLength = 1;
                  if (car.manufacturer.length < minCarTitleLength) {
                    reject(`manufacturer must be at least ${minCarTitleLength} characters.`);
                  } */

                if (car.id) {
                    const existingCarIndex = cars.findIndex(a => a.id == car.id);
                    cars.splice(existingCarIndex, 1, car);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids for new cars in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    car.id = generateId(car);
                    cars.push(car);
                }
                resolve(car);
            }, delay);
        });
    }

    static deleteCar(carId) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const indexOfCarToDelete = cars.findIndex(car => {
              car.id == parseInt(carId);
            });
            cars.splice(indexOfCarToDelete, 1);
            //debugger;
            resolve();
          }, delay);
        });
      }

}

export default CarsApi;