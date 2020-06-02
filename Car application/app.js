const car = (name, model, owner, year, image, phone) => ({name, model, owner, year, image, phone});
const log =(text,type, date = new Date().toLocaleString()) => ({text,type, date});
const cars = [
    car('Mersedes', 'Bens','Mariya',2015, 'img/mers.jpg','+7 983 631-01-77'),
    car('BMW', 'X6','Ivan',2016, 'img/bmw.jpg','+7 904 631-00-77'),
    car('Hyundai', 'Solaris','Den',2011, 'img/hunday.jpg','+7 983 631-01-00'),
    car('KIA', 'Optima','Max',2010, 'img/kia.jpg','+7 983 981-54-77'),
    car('Lexus', 'RX-350','Dmitriy',2017, 'img/lexus.jpg','+7 914 055 40 80'),
    car('Mazda', 'RX-7','Vladimir',2012, 'img/mazda.jpg','+7 983 666-01-00'),
    car('Wolksvagen', 'Passat','Timur',2014, 'img/wolksvagen.jpg','+7 983 631-54-54')
]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[1],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar(index){
            this.car = this.filteredCars[index];
            this.selectedCarIndex = index;
        },
        buyCar(){
            this.modalVisibility=false;
            this.logs.push(log(`Success order ${this.car.name}-${this.car.model}`,'ok'));
        },
        canselOrder(){
            this.modalVisibility=false;
            this.logs.push(log(`Canselled order ${this.car.name}-${this.car.model}`,'cnl'));
        }
    },
    computed: {
        phoneBtnText(){
            return this.phoneVisibility? 'Hide phone' : 'Show phone';
        },
        filteredCars(){
            return this.cars.filter(car=>{
                return (car.name).toLowerCase().indexOf(this.search.toLowerCase())>-1||(car.model).toLowerCase().indexOf((this.search).toLowerCase())>-1;
            });
        }
    }
});