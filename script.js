function calculateAge(){
    const dateOfBirth = document.getElementById("date_of_birth").value;
    const givenDate = document.getElementById("given_date").value;

    // convert user input into data object 
    let startDate = new Date(dateOfBirth);
    let endDate = new Date(givenDate);

    //extract the year,month, and date from user data input
    let  stdobYear = startDate.getFullYear();
    let stdobMonth = startDate.getMonth() +1;
    let stdobDate = startDate.getDate();

    // console.log(` ${stdobYear}Year: ${stdobMonth} Months : ${stdobDate}`)

    let givenYear = endDate.getFullYear();
    let givenMonth = endDate.getMonth();
    let givenDate1 = endDate.getDate();

    leapTest(givenYear);

    if(stdobYear > givenYear ||
        (stdobMonth > givenMonth && stdobYear === givenYear)||
        (stdobDate>givenDate1 && stdobMonth === givenMonth && stdobYear === givenYear)
        ){
            alert("Must be Born!!");
            return;
        }

        let diffYear = givenYear -stdobYear;
        let diffMonth , diffDate;
        if(givenMonth >= stdobMonth){
             diffMonth = givenMonth - stdobMonth;
        }
        else{
            diffYear--;
            diffMonth = 12 + givenMonth - stdobMonth;
        }

        if(givenDate1 >= stdobDate){
            diffDate = givenDate1 -stdobDate;
        }
        else{
            diffMonth--;
            let days = Month[givenMonth-2];
            diffDate =days + givenDate1 - stdobDate;
            if(diffMonth< 0){
                diffMonth =11;
                diffYear--;
            }
        }
        showResult(diffYear, diffMonth ,diffDate);
}

const showResult =(totalYears,totalMonths,totalDays) => {
    document.getElementById('years').textContent =`${totalYears} Year(s)`;
    document.getElementById('months').textContent =`${totalMonths+1} Month(s)`;
    document.getElementById('days').textContent =`${totalDays} Day(s)`;
    document.getElementById("Output_box").style.display ="flex";
    document.getElementById("msg").style.display ="block";
}

//test leap year

function leapTest(year) {
    if((year % 4 ==0)&&(year % 100!=0)||(year % 400 == 0)){
month[1]=29;
    } 
    else{
        months[1]=28;
    }
}