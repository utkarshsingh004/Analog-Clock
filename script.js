// Logic for the rotation of Hour, Minute & Second hands of clock:

// 1.) For hour hand:-

// Hour hand takes 12hrs for One complete rotation (i.e 360 degree). Therefore,
//                        12 hrs = 360 degree
//                         1 hrs = 30 degree
//                          h hrs=30h degree
//  But there is some error due to rotation of minute and second hands of clock, We can neglect the error occur due to the rotation of second hand. 
//  Since, change in rotation of hour hand due to minute hand is:
//                           60 min = 30 degree
//                           1 min = 0.5 degree
//                           m min = 0.5m degree
//  Therefore, [for hour hand = 30h + 0.5m]

// 2.) For minute hand:-

//  Minute hand takes 60min for One complete rotation (i.e 360 degree). Therefore,
//                        60 min = 360 degree
//                         1 min = 6 degree
//                          [m min= 6m degree]
//   We can neglect the error occur due to the rotation of second hand. 

// 3.) For second hand:-

//  Second hand takes 60min for One complete rotation (i.e 360 degree). Therefore,
//                        60 sec = 360 degree
//                         1 sec = 6 degree
//                          [s sec = 6s degree]
     

//                                     Code start from here:-
setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hourHand.style.transform = `rotate(${hrotation}deg)`;
    minuteHand.style.transform = `rotate(${mrotation}deg)`;
    secondHand.style.transform = `rotate(${srotation}deg)`;
}, 1000);