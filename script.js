let deficit, surplus

function Calculate() {
    sesso = document.getElementById("sesso").value
    nome = document.getElementById("nome").value
    peso = document.getElementById("peso").value
    altezza = document.getElementById("altezza").value
    anni = document.getElementById("anni").value
    attivita = document.getElementById("activity").value

    //calcolare BMR = Basic Metabolic Rate
    if (sesso = "Man") {
        bmr = 66.5 + (13.75 * peso) + (5.003 * altezza) - (6.755 * anni)
    }
    else {
        bmr = 655.1 + (9.563 * peso) + (1.850 * altezza) - (4.676 * anni)
    }

    // calcolare il DCR daily calorie requirement
    let dcr = 0
    switch (attivita) {
        case "0 workout":
            dcr = bmr * 1.2
            break
        case "2 workouts":
            dcr = bmr * 1.375
            break
        case "from 3 to 5 workouts":
            dcr = bmr * 1.55
            break
        case "6 or 7 workouts":
            dcr = bmr * 1.725
            break
    }

    //calcolare deficit calorico
    deficit = dcr - ((dcr * 20) / 100)

    // calcolare surplus calorico
    surplus = dcr + 300

    //Mostrare risultati
    // console.log("The basic metabolic rate of " + nome + " is " + bmr +  " kcal")
    // console.log("The daily calorie requirement is " + dcr +  " kcal")
    // console.log("To be in calorie deficit you need to eat max " + deficit +  " kcal")

    document.getElementById("risultati").innerText = "The basic metabolic rate of " + nome + " is " + Math.round(bmr) + " kcal \nThe daily calorie requirement is " + Math.round(dcr) + " kcal\nIf you want to loose fat you need to get around " + Math.round(deficit) + " kcal" + "\nIf you want to gain muscle you need to get around " + Math.round(surplus) + " kcal"

    // mostra i nuovi pulsanti
    document.getElementById("macro").hidden = false
    document.getElementById("macro_label").hidden = false
    document.getElementById("macro_button").hidden = false
    return deficit
}

function CalculateMacro() {
    let P
    let C
    let F
    macro = document.getElementById("macro").value
    switch (macro) {
        case "High carbs":
            P = (deficit * 0.2) / 4
            F = (deficit * 0.1) / 9
            C = (deficit * 0.7) / 4
            document.getElementById("risultati_macro").innerText = "20% Protein = " + Math.round(P) + " grams \n" + "10% Fats = " + Math.round(F) + " grams \n" + "70% Carbs = " + Math.round(C) + " grams"
            break
        case "High protein":
            P = (deficit * 0.30) / 4
            F = (deficit * 0.20) / 9
            C = (deficit * 0.5) / 4
            document.getElementById("risultati_macro").innerText = "30% Protein = " + Math.round(P) + " grams \n" + "20% Fats = " + Math.round(F) + " grams \n" + "50% Carbs = " + Math.round(C) + " grams"
            break
        case "High fats":
            P = (deficit * 0.23) / 4
            F = (deficit * 0.7) / 9
            C = (deficit * 0.07) / 4
            document.getElementById("risultati_macro").innerText = "23% Protein = " + Math.round(P) + " grams \n" + "70% Fats = " + Math.round(F) + " grams \n" + "7% Carbs = " + Math.round(C) + " grams"
            break
    }

}
