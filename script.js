let selected = [];

// Select symptom
function selectSymptom(btn) {
    let symptom = btn.innerText;

    if (selected.includes(symptom)) {
        selected = selected.filter(s => s !== symptom);
        btn.classList.remove("active");
    } else {
        selected.push(symptom);
        btn.classList.add("active");
    }
}

// Search filter
document.getElementById("search").addEventListener("keyup", function() {
    let value = this.value.toLowerCase();
    let buttons = document.querySelectorAll(".buttons button");

    buttons.forEach(btn => {
        if (btn.innerText.toLowerCase().includes(value)) {
            btn.style.display = "inline-block";
        } else {
            btn.style.display = "none";
        }
    });
});

// Disease logic
function checkDisease() {
    let output = document.getElementById("output");

    if (selected.length === 0) {
        output.innerHTML = "⚠️ Please select symptoms!";
        return;
    }

    if (selected.includes("Fever") && selected.includes("Cough")) {
        output.innerHTML = `
        <h3>Possible Disease: Flu</h3>
        <p>💊 Medicines: Paracetamol, Rest</p>
        <p>⚠️ Consult doctor if severe</p>`;
    }
    else if (selected.includes("Cold") && selected.includes("Allergy")) {
        output.innerHTML = `
        <h3>Possible Disease: Allergy</h3>
        <p>💊 Medicines: Cetirizine</p>
        <p>⚠️ Avoid dust & allergens</p>`;
    }
    else if (selected.includes("Headache")) {
        output.innerHTML = `
        <h3>Possible Issue: Migraine / Stress</h3>
        <p>💊 Medicines: Paracetamol</p>
        <p>⚠️ Take rest</p>`;
    }
    else {
        output.innerHTML = `
        <h3>General Condition</h3>
        <p>💊 Basic care recommended</p>
        <p>⚠️ Consult doctor</p>`;
    }
}
