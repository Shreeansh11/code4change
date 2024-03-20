function calculateLifestyleChanges() {
    var bloodPressure = document.getElementById('blood-pressure').value;
    var bloodSugar = document.getElementById('blood-sugar').value;
    var cholesterol = document.getElementById('cholesterol').value;

    // Example logic to determine lifestyle changes based on vitals
    var lifestyleChanges = [];

    if (bloodPressure > '130/80') {
        lifestyleChanges.push("Reduce sodium intake and increase physical activity.");
    }

    if (bloodSugar > 100) {
        lifestyleChanges.push("Limit sugary foods and refined carbohydrates, and exercise regularly.");
    }

    if (cholesterol > 200) {
        lifestyleChanges.push("Eat a heart-healthy diet, exercise regularly, and avoid smoking.");
    }

    displayLifestyleChanges(lifestyleChanges);
}

function displayLifestyleChanges(changes) {
    var output = "<h2>Lifestyle Changes Needed:</h2><ul>";
    for (var i = 0; i < changes.length; i++) {
        output += "<li>" + changes[i] + "</li>";
    }
    output += "</ul>";
    document.getElementById('lifestyle-changes').innerHTML = output;
}
