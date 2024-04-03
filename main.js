function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/e9R317JFs/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Posso ouvir - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Precisão - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img1 = document.getElementById('imagem1');
        img2 = document.getElementById('imagem2');
        img3 = document.getElementById('imagem3');
        img4 = document.getElementById('imagem4');

        if (results[0].label == "girafa") {
            img1.src = 'girafa.gif';
            img2.src = 'eu.jpg';
            img3.src = 'cabra.jpeg';
            img4.src = 'ruido.jpeg';
        } else if (results[0].label == "eu") {
            img1.src = 'girafa.jpeg';
            img2.src = 'eu.gif';
            img3.src = 'cabra.jpeg';
            img4.src = 'ruido.jpeg';
        } else if (results[0].label == "cabra") {
            img1.src = 'girafa.jpeg';
            img2.src = 'eu.jpg';
            img3.src = 'cabra.gif';
            img4.src = 'ruido.jpeg';
        } else {
            img1.src = 'girafa.jpeg';
            img2.src = 'eu.jpg';
            img3.src = 'cabra.jpeg';
            img4.src = 'ruido.gif';
        }
    }
}