

    let main = document.getElementById("main")
    let btn = document.getElementById("btn").addEventListener("click", myfun)

    function myfun(){
        
        let cityName = document.getElementById("city").value

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f1f7c6667be07f20d3e901bfd7866caf`
    
        fetch(url)
        .then(function(res){
            let data =  res.json()
            return data
        })
        .then(function(data){
            getSevenDay(data)
            // console.log(data)
        })
        .catch(function(err){
            console.log(error)
        })


        function getSevenDay(data){

            let lat = data.coord.lat
            let long = data.coord.lon
            

            const url =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=f1f7c6667be07f20d3e901bfd7866caf`


            fetch(url)
            .then(function(res){
                return res.json()
            })
            .then(function(res){
            let arr = res.daily;
            console.log("here", arr);
            main.innerHTML=null
            append7Day(arr);

            })
            .catch(function(err){
                console.log("error")
            })


    function append7Day(data) {
        
    let i=0;

    const d = new Date();
    let day = d.getDay();
    let arr =["Mon","Tues","Wed","Thu","Fri","Sat","Sun"]

    data.forEach(function (elem) {
        if(i==-1) 
        {
        }
        else if(day>7) {
            day = 0
        }
         else {

            let box = document.createElement("div");
            box.id = "box"
            // box.style.border="1px solid "

            let days = document.createElement("h4")
            days.innerText=`  ${arr[day-1]}`

            let description = document.createElement("img")
            description.id = "image"

            let descrip  = document.createElement("p")
            descrip.innerText =`Clouds : ${data[i].weather[0].description}`

            if(data[i].weather[0].description=='clear sky') description.src = "https://img.icons8.com/external-kosonicon-lineal-color-kosonicon/2x/external-clear-sky-weather-kosonicon-lineal-color-kosonicon.png"
            else if(data[i].weather[0].description=='scattered clouds') description.src = "https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_SunCloudy.png"
            else  if(data[i].weather[0].description=='few clouds') description.src= "https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-few-clouds-128.png"
            else if(data[i].weather[0].description=='clear sky') description.src = "https://img.icons8.com/external-kosonicon-flat-kosonicon/2x/external-clear-sky-weather-kosonicon-flat-kosonicon.png"
            else if(data[i].weather[0].description=='broken clouds') description.src = "https://img.icons8.com/external-flat-icons-inmotus-design/2x/external-clouds-weather-nature-flat-icons-inmotus-design-6.png"
            else if(data[i].weather[0].description=="light rain") description.src = "https://img.icons8.com/external-flat-icons-inmotus-design/2x/external-clouds-weather-nature-flat-icons-inmotus-design-6.png"
            else description.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8YwLYY3aowa2T0smfAGuVR3iytbp8_TTtFA&usqp=CAU"

            
            let temp = document.createElement("h4");
            temp.innerText = `Current : ${Math.round(elem.temp.day -273)}°C`;
    
            let maxTemp = document.createElement("h4");
            maxTemp.innerText = `${Math.round(elem.temp.max -273)}°C`;
    
            let minTemp = document.createElement("h4");
            minTemp.innerText = `${Math.round(elem.temp.min -273)}°C`;
    
            let humidity = document.createElement("h4");
            humidity.innerText = `Humidity : ${elem.humidity}`;
    
            box.append(days,description, maxTemp, minTemp);  
    
            main.append(box);
            //  console.log(data[i].weather[0].icon)

            console.log(data[i].weather[0].description)
        }
        i++;
        day++
    })
}






    }  

}


