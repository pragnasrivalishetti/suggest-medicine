let ageGroup = "";
let selectedSymptoms = [];

function selectAge(age) {
    ageGroup = age;
    document.getElementById("ageSection").classList.add("hidden");
    document.getElementById("symptomSection").classList.remove("hidden");
}

function toggleSymptom(btn, symptom) {
    btn.classList.toggle("active");

    if (selectedSymptoms.includes(symptom)) {
        selectedSymptoms = selectedSymptoms.filter(s => s !== symptom);
    } else {
        selectedSymptoms.push(symptom);
    }
}

function checkResult() {
    let input = document.getElementById("searchSymptom").value.toLowerCase();
    if (input) selectedSymptoms.push(input);

    let disease = "";
    let medicines = [];
    let note = "";

    if (selectedSymptoms.includes("fever") && selectedSymptoms.includes("cold")) {
        disease = "Flu";
        medicines = ["Paracetamol", "Dolo 650", "Cetirizine"];
    } 
    else if (selectedSymptoms.includes("cough")) {
        disease = "Cough Infection";
        medicines = ["Benadryl", "Ascoril", "Vicks Syrup"];
    } 
    else if (selectedSymptoms.includes("headache")) {
        disease = "Headache";
        medicines = ["Crocin", "Ibuprofen", "Disprin"];
    } 
    else {
        disease = "General Weakness";
        medicines = ["ORS", "Vitamin C", "Multivitamins"];
    }

    if (ageGroup === "elder" && selectedSymptoms.includes("fever")) {
        note = "⚠️ High risk detected. Please consult a doctor.";
    } else {
        note = "Take rest and stay hydrated.";
    }

    document.getElementById("disease").innerText = disease;

    let list = document.getElementById("medicines");
    list.innerHTML = "";
    medicines.forEach(m => {
        let li = document.createElement("li");
        li.innerText = m;
        list.appendChild(li);
    });

    document.getElementById("note").innerText = note;

    document.getElementById("symptomSection").classList.add("hidden");
    document.getElementById("resultSection").classList.remove("hidden");
}

function restartApp() {
    ageGroup = "";
    selectedSymptoms = [];

    document.getElementById("searchSymptom").value = "";

    document.querySelectorAll(".buttons button").forEach(btn => {
        btn.classList.remove("active");
    });

    document.getElementById("resultSection").classList.add("hidden");
    document.getElementById("ageSection").classList.remove("hidden");
}
