export default function rankPredictionDataSet({marks}) {
    // let data = []
    // for (let rankRange:"", lowerCap = 691; rankRange:"", lowerCap >= 100; rankRange:"", lowerCap -= 10) {
    //     data.push({
    //         rankRange:"", lowerCap
    //     })
    // }
    const rankDataSet = [
        {rankRange: "1", lowerCap: 691},
        {rankRange: "2-7", lowerCap: 681},
        {rankRange: "8-31", lowerCap: 671},
        {rankRange: "32-63", lowerCap: 661},
        {rankRange: "64-122", lowerCap: 651},
        {rankRange: "123-232", lowerCap: 641},
        {rankRange: "233-398", lowerCap: 631},
        {rankRange: "399-639", lowerCap: 621},
        {rankRange: "640-994", lowerCap: 611},
        {rankRange: "995-1505", lowerCap: 601},
        {rankRange: "1506-2169", lowerCap: 591},
        {rankRange: "2170-3084", lowerCap: 581},
        {rankRange: "3085-4202", lowerCap: 571},
        {rankRange: "4203-5615", lowerCap: 561},
        {rankRange: "5616-7433", lowerCap: 551},
        {rankRange: "7434-9493", lowerCap: 541},
        {rankRange: "9494-11885", lowerCap: 531},
        {rankRange: "11886-14629", lowerCap: 521},
        {rankRange: "14630-17816", lowerCap: 511},
        {rankRange: "17817-21337", lowerCap: 501},
        {rankRange: "21338-25229", lowerCap: 491},
        {rankRange: "25230-29528", lowerCap: 481},
        {rankRange: "29529-34037", lowerCap: 471},
        {rankRange: "34038-38947", lowerCap: 461},
        {rankRange: "38948-44227", lowerCap: 451},
        {rankRange: "44228-49907", lowerCap: 441},
        {rankRange: "49908-55928", lowerCap: 431},
        {rankRange: "55929-62506", lowerCap: 421},
        {rankRange: "62507-69529", lowerCap: 411},
        {rankRange: "69530-76981", lowerCap: 401},
        {rankRange: "76982-84889", lowerCap: 391},
        {rankRange: "84890-93120", lowerCap: 381},
        {rankRange: "93121-102006", lowerCap: 371},
        {rankRange: "102007-111483", lowerCap: 361},
        {rankRange: "111484-121479", lowerCap: 351},
        {rankRange: "121480-132093", lowerCap: 341},
        {rankRange: "132094-143344", lowerCap: 331},
        {rankRange: "143345-155264", lowerCap: 321},
        {rankRange: "155265-167741", lowerCap: 311},
        {rankRange: "167742-180986", lowerCap: 301},
        {rankRange: "180987-194679", lowerCap: 291},
        {rankRange: "194680-209322", lowerCap: 281},
        {rankRange: "209323-224738", lowerCap: 271},
        {rankRange: "224739-240648", lowerCap: 261},
        {rankRange: "240649-257835", lowerCap: 251},
        {rankRange: "257836-275715", lowerCap: 241},
        {rankRange: "275716-294517", lowerCap: 231},
        {rankRange: "294518-314654", lowerCap: 221},
        {rankRange: "314655-336164", lowerCap: 211},
        {rankRange: "336165-359011", lowerCap: 201},
        {rankRange: "359012-383503", lowerCap: 191},
        {rankRange: "383504-409830", lowerCap: 181},
        {rankRange: "409831-438270", lowerCap: 171},
        {rankRange: "438271-469209", lowerCap: 161},
        {rankRange: "469210-502827", lowerCap: 151},
        {rankRange: "502828-539448", lowerCap: 141},
        {rankRange: "539449-579715", lowerCap: 131},
        {rankRange: "579716-624309", lowerCap: 121},
        {rankRange: "624310-673394", lowerCap: 111},
        {rankRange: "673395-736206", lowerCap: 101},
        {rankRange: "736206 or more", lowerCap: 100}
    ]

    let rankTemp = "";
    if (marks < 720) {
        rankDataSet.forEach(({rankRange, lowerCap}, index) => {
            if (index >= 1 && index < rankDataSet.length - 1) {
                if (marks <= 100) {
                    rankTemp = "736206 or more";
                } else if (marks >= 691) {
                    rankTemp = "1"
                } else if (marks >= lowerCap && marks <= rankDataSet[index - 1].lowerCap - 1) {
                    rankTemp = rankRange
                }
            }
            return rankTemp
        })
    } else {
        rankTemp = "Marks must be less than or equal to 720"
    }
    return rankTemp
}
