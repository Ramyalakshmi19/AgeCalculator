const d_today=new Date();
let year_today=d_today.getFullYear();
let month_today=(d_today.getMonth())+1;
let day_today=d_today.getDate();
function calculatefunc()
{
let date=document.getElementById("InputDate").value;
const d=new Date(date);
let year=d.getFullYear();
let month=(d.getMonth())+1;
let day=d.getDate();
if(month_today<month)
{
    year_today-=1;
    month_today+=12;
}
document.getElementById("year").innerHTML=Math.abs(year_today-year);
document.getElementById("month").innerHTML=Math.abs(month_today-month);
document.getElementById("day").innerHTML=Math.abs(day_today-day);
}
// function setmax()
// {
//     let Input=document.getElementById("InputDate");
//     if (month_today<10)
//     {
//         let set_month='0'+String(month_today);
//     }
//     if(day_today<10)
//     {
//         let set_day='0'+String(day_today);
//     }
//     let max_set_date=year_today+set_month+set_day;
//     Input.setAttribute("max",max_set_date);
// }