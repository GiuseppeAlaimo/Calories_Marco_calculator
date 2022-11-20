<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calorie requirement calculator</title>
</head>

<body>
    <!-- Immagine di sfondo -->
    <!-- <style>
        body{
            background-image: url("Capture.JPG");
            background-repeat: no-repeat;
            background-size: cover;
        }
    </style> -->
    <h2>Calories and Macro calculator</h2> <!-- titotlo -->
    <br> <!-- righe vuote -->
    <h3>Calories calculator</h3>

    <!-- inizio drop down list -->
    <label>Select your sex</label> <!-- inizio drop down list -->
    <input list="sesso selection" id="sesso" name="sesso">
    <datalist id="sesso selection">
        <option value="Man">
        <option value="Woman">
    </datalist>
    <!-- fine drop down list -->

    <br>

    <!-- caselle di input dati -->
    <label for="nome">Enter your name here: </label>
    <input type="text" name="nome" id="nome" required>
    <br>
    <label for="peso">Enter your weight in kilograms here: </label>
    <input type="text" name="peso" id="peso" required>
    <br>
    <label for="altezza">Enter your height in centimeter here: </label>
    <input type="text" name="altezza" id="altezza" required>
    <br>
    <label for="anni">Enter your age here: </label>
    <input type="text" name="anni" id="anni" required>
    <br>

    <!-- inizio drop down list -->
    <label> Select your level of activity during the week </label>
    <input list="activity selection" id="activity" name="activity">
    <datalist id="activity selection">
        <option value="0 workout">
        <option value="2 workouts">
        <option value="from 3 to 5 workouts">
        <option value="6 or 7 workouts">
    </datalist>
    <!-- fine drop down list -->

    <br>
    <h3>Macro calculator</h3>

    <!-- tasto per calcolare tutte cose -->
    <form>
        <input type="button" value="Calculate" onclick=Calculate()>
    </form>

    <!-- qui veranno mostrati i risultati -->
    <p id="risultati"></p>

    <!-- Macro drop down list -->
    <label id=macro_label hidden=true> Select now the type of diet you prefere to follow</label>
    <input list="macro selection" id="macro" name="macro" hidden=true>
    <datalist id="macro selection">
        <option value="High carbs">
        <option value="High protein">
        <option value="High fats">
    </datalist>

    <!-- tasto calcolo dei macronutrienti -->
    <form>
        <input type="button" id=macro_button hidden=true value="Calculate macro" onclick=CalculateMacro()>
    </form>

    <!-- qui veranno mostrati i risultati dei macronutrienti-->
    <p id="risultati_macro"></p>

    <!-- script -->
    <script src="script.js"></script>

</body>

</html>
