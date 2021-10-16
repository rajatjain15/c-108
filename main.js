function startClassification()
{
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/28lmSqTRt/model.json',modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
if (error)
{
    console.error(error);
}
else{
    console.log(results);
    random_number_r= Math.floor(Math.random()*255)+1;
    random_number_g= Math.floor(Math.random()*255)+1;
    random_number_b= Math.floor(Math.random()*255)+1;

    document.getElementById("sound_herd").innerHTML='I can hear - '+ results[0].label;
    document.getElementById("confidence_level").innerHTML='Accuracy - '+ (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("sound_herd").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("confidence_level").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img1=document.getElementById('cat.jfif')
    img2=document.getElementById('cow.jfif')
    img3=document.getElementById('dog.jfif')
    img4=document.getElementById('lion.jfif')

    if(results[0].label=="barking"){
        img3.src='dog bark.gif';
        img1.src='cat.jfif';
        img2.src='cow.jfif';
        img4.src='lion.jfif';
 }else if (results[0].label=="cat sound"){
    img3.src='dog.jfif';
    img1.src='catsound.gif';
    img2.src='cow.jfif';
    img4.src='lion.jfif';
 }else if (results[0].label=="mooing"){
    img3.src='dog.jfif';
    img1.src='cat.jfif';
    img2.src='cow.gif';
    img4.src='lion.jfif'; 
 }else 
 {
    img3.src='dog bark.gif';
    img1.src='cat.jfif';
    img2.src='cow.jfif';
    img4.src='lion roar.gif';

}
}
}