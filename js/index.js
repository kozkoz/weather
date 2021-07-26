
//現在の天気を取得する場所の名前
function checkWeaher(){
let targetCityName = document.getElementById("city name").value;
console.log(targetCityName);
let appId = "5f57778b73e6f9fca0dbfa588e25af01";

const requestUrl = "https://api.openweathermap.org/data/2.5/weather?APPID=" + appId + "&lang=ja&units=metric&q=" + targetCityName + ",jp;";

//Ajax通信用のオブジェクトを作成
let xhr =new XMLHttpRequest();

//通信方式とURLを設定
xhr.open("GET",requestUrl);

//通信を実行する
xhr.send();

//通信ステータスが変わったら実行される関数
xhr.onreadystatechange = function(){
    //通信が完了
    if(xhr.readyState == 4){
        ShowTodaysWeather(xhr.responseText);
    }
}
}

/**
 * 今日の天気を表示する
 */
function ShowTodaysWeather(response){

    let obj = JSON.parse(response);

    let weather = obj.weather[0].description;
    let city = obj.name;
    let temp = obj.main.temp;
    let iconPath = `../img/${obj.weather[0].icon}.svg`;


    console.log("現在の" + city + "の天気は" + weather);
    console.log("気温は" + temp + "度です。");
    console.log("画像パス" + iconPath);

    const weatherText = "現在の" + city + "の天気は" + weather;
    const tempText = "気温は" + temp + "度です。";
    const weatherInfo =`
        <div class = "info">
            <p>
                ${weatherText}<br>
                ${tempText}
            </p>
        </div>`;
    const weatherIcon = `<div class = "icon"><img src ="${iconPath}"></img></div>`;
    

    innerText.innerHTML = weatherText;
    innerText.innerHTML = tempText;
    innerText.innerHTML = weatherInfo;
    images.innerHTML = weatherIcon;

    var login = function() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
      
        if (username === 'bob' && password === 'secret') {
          ons.notification.alert('Congratulations!');
        } else {
          ons.notification.alert('Incorrect username or password.');
        }
      };
}

