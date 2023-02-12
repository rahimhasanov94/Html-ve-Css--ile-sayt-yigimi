
const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");

// UI Objesni Baslatma

const ui = new UI();

// Tum elementleri Yukleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addCar);
}

function addCar(e){

    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if (title ==="" || price ==="" || url ===""){
        // Xəta
    }
    else{
        // yeni arac
        const newCar = new Car(title,price,url);

        ui.addCarToUI(newCar); // arayuze arac ekleme
    }


}