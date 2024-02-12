hrs=document.getElementById('hour');
mins=document.getElementById('minute');
secs=document.getElementById('second');
day=document.getElementById('day');
period=document.getElementById('period');
daynames=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

setInterval(()=>{
time=new Date();
hours=(time.getHours() > 12 ? time.getHours() - 12 : time.getHours());

hrs.innerHTML = (hours < 10 ? '0' : '')+hours
mins.innerHTML=time.getMinutes()>9? time.getMinutes() : '0'+time.getMinutes()
secs.innerHTML=time.getSeconds()>9? time.getSeconds() : '0'+time.getSeconds()
day.innerHTML=daynames[time.getDay()]
period.innerHTML=time.getHours()>12?'PM':'AM'


},1000)

