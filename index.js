async function getReadDays() {

    try {
        var d = new Date();
        var year = d.getFullYear();
        let veckoMidsommarDagar = []

        var basicContainer = document.createElement("div")
            //basicContainer.classList("basicContainer")
        basicContainer.style = "justify-content: center;width:100%; height:100%; padding:10px; display:flex; border:1px solid black; background-color:silver;flex-wrap: wrap;"

        var title = document.createElement("div")
        title.innerText = "I den här övningen listade jag alla veckodagar som midsommarafton har varit på de senaste 5 åren -  Jag använde Fetch med async / await!"

        title.style = "width:90%; padding:10px; text-align: center;;  background-color:silver; font-size:25px;"
            //title.classList("title")
        basicContainer.appendChild(title)



        for (var s = year; s > year - 6; s--) {
            let response = await fetch("https://api.dryg.net/dagar/v2.1/" + s + "/6")
            let days = await response.json()

            for (var i = 0; i < days.dagar.length; i++) {
                if (days.dagar[i]["helgdag"] == "Midsommarafton") {
                    let vecka = days.dagar[i]["vecka"]

                    var containerDayDate1 = document.createElement("div")
                    containerDayDate1.style = "margin: 10px;background-color: white;border: 2px solid #fff;"
                        //containerDayDate1.classList("containerDayDate1")

                    var veckor = document.createElement("div")

                    //veckor.classList("veckor")

                    veckor.style = "text-align:center; border:1px solid black; background-color:silver;color:blue; font-size:20px;font-weight: bold; padding:5px"


                    veckor.innerText = s

                    containerDayDate1.appendChild(veckor)
                    veckoMidsommarDagar.push(s)

                    for (var j = 0; j < days.dagar.length; j++) {
                        if (days.dagar[j]["vecka"] == vecka) {
                            veckoMidsommarDagar.push(days.dagar[j])

                            var containerDayDate2 = document.createElement("div")
                            containerDayDate2.style = "width:300px; padding:5px; background-color:lightgray; display:flex"
                                //containerDayDate2.classList("containerDayDate")

                            var date = document.createElement("div")
                                //date.classList("date")
                            date.style = "color:deepskyblue; width:150px; height:1  0px; padding:5px; textAlign:center; background-color:lightgray;"
                            date.innerText = days.dagar[j]['datum']

                            var day = document.createElement("div")
                                //day.classList("day")
                            day.style = "color:coral; width:150px; height:1  0px; padding:5 px; textAlign:center; background-color:lightgray;"
                            day.innerText = days.dagar[j]['veckodag']

                            containerDayDate2.appendChild(day)
                            containerDayDate2.appendChild(date)
                            containerDayDate1.appendChild(containerDayDate2)
                        }
                    }

                    basicContainer.appendChild(containerDayDate1)
                }
            }
        }


        //basicContainer.appendChild(container)
        document.body.appendChild(basicContainer)



        // console.log(days.dagar[1]['vecka'])
        // console.log(days.dagar)

        console.log(veckoMidsommarDagar)

    } catch (error) {
        console.log("error: ", error)
    }
}

getReadDays()