/** To do ↓
 * 
 * Show table with all database data √
 * Make ID auto increment √
 * Create first contact iterface 
 * Do a loop so the program dosent end after a action 
 * 
 * 
 * Sett function to change any data needed in database
 * Sett function to show only pendent tasks in table
 * Connect all function in index 
 *
 * Make it all work withouts errors 
 * Clean the code and optimize some things
 * 
 * Done?
 */


// Time count ↓
 const date = new Date();

 let dateBefore = Date.parse("Fri Apr 01 2022 14:10:08 GMT-0300 (Horário Padrão de Brasília)")
 let dateNow = date.getTime()
 
 //let sub = dateNow - dateBefore 
 
 // 10 segundos = 10000
 // 10 minutos = 600000
 // 10 horas = 3.6 ** +7
 // 10 dias = 8,64 ** +8
 
 const sub = (3,6e+7)
 
 console.log("sub: " + sub)
 
 let time, prefix
 
 if (sub > 1000 && sub <= 60000){
 
 
 time = date.getSeconds()
 prefix = "Secounds"
 }
 
 else if(sub > 60000 && sub <= 3,6e+6){
 
 time = new Date(sub).getMinutes()
 prefix = "Minutes"
 }
 
 else if(sub > 3,6e+6 && sub <= 8,64e+7){
 
 time =  new Date(sub).getMinutes()
 prefix = "Hours"
 }
 else{
 
 time =  new Date(sub).getDay()
 prefix = "Days"
 }
 
 
 
 console.log("Time passed: " + time +" "+ prefix)