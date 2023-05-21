//HomeWORK #1

// alert ('Привiт');

// let answerBirth = 'Шкода, що Ви не захотіли ввести свій(ю) дату народження';
// let answerCity = 'Шкода, що Ви не захотіли ввести свій(ю) своє місце де знаходитесь';
// let answerSport = 'Шкода, що Ви не захотіли ввести свій(ю) улюблений спорт';

// let boxing = 'Круто! Хочеш стати Майком Тайсоном?';
// let football = 'Круто! Хочеш стати Криштiаном Рональдо?';
// let basketball = 'Круто! Хочеш стати Майклом Джорданом?';

// let userBirth = +prompt('Твій рік народження?');
// let currentYear = 2023 - userBirth;
// let string;
// let liveChange;
// let favoriteSport;

// if (userBirth == undefined || userBirth == !true || userBirth == null){
//   alert(answerBirth);
//   currentYear = answerBirth;
//   string = "";
// }else if (userBirth !=="" || userBirth !== " "){
//   string = "Твій вік "
// }

// let userCity= prompt('В якому місті ти живеш?');
// if (userCity == undefined || userCity == !true || userCity == null){
//   alert(answerCity);
//   liveChange = answerCity;
//   userCity="";

// }else if (userCity !=="" || userCity !== " "){
//   liveChange = "Ти живеш у ";
// }

// let userSport = prompt('Який твій улюблений спорт?');
// if (userSport == undefined || userSport == !true || userSport == null){
//   alert(answerSport);
//   answerSport;
//   favoriteSport="";
// }else if (userSport !=="" || userSport !== " "){
//   answerSport = userSport
//   favoriteSport = "Твій спорт "
// }

// if(userCity == 'Київ' || userCity == 'київ'){
//   if (userSport == "Бокс"||userSport == "бокс"){
//     alert(string + currentYear + "\n" + liveChange + "столиці України \n" + boxing);
//   }else if(userSport == "футбол"||userSport == "Футбол" ){
//     alert(string + currentYear + "\n" + liveChange + "столиці України \n" + football);
//   }else if(userSport == "баскетбол"||userSport == "Баскетбол"){
//     alert(string + currentYear + "\n" + liveChange + "столиці України \n" + basketball);
//   }else{
//     alert(string + currentYear + "\n" + liveChange + "столиці України \n" + favoriteSport + answerSport);
//   }
// }else if( userCity == 'Вашингтон' || userCity == 'вашингтон'){
//   if (userSport == "Бокс"||userSport == "бокс" ){
//     alert(string + currentYear + "\n"+ liveChange + "столиці США \n" + boxing);
//   }else if(userSport == "футбол"||userSport == "Футбол" ){
//     alert(string + currentYear +"\n"+ liveChange + "столиці США \n" + football);
//   }else if(userSport == "баскетбол"||userSport == "Баскетбол"){
//     alert(string + currentYear + "\n"+ liveChange + "столиці США \n" + basketball);
//   }else{
//     alert(string + currentYear + "\n"+ liveChange + "столиці США \n" + favoriteSport + answerSport);
//   }
// }else if( userCity == 'Лондон' || userCity == 'лондон'){
//   if (userSport == "Бокс"||userSport == "бокс" ){
//     alert(string + currentYear + "\n"+ liveChange + "столиці Англії\n" + boxing);
//   }else if(userSport == "футбол"||userSport == "Футбол" ){
//     alert(string + currentYear + "\n"+ liveChange + "столиці Англії\n" + football);
//   }else if(userSport == "баскетбол" || userSport == "Баскетбол"){
//     alert(string +  currentYear + "\n" + liveChange + "столиці Англії\n" + basketball);
//   }else {
//     alert(string +  currentYear + "\n" + liveChange + "столиці Англії\n" + favoriteSport + answerSport);
//   }
// }else if (userBirth !==""){
//   alert(string +  currentYear + "\n" + liveChange + userCity + "\n" + favoriteSport + answerSport )
// }

// homeWORK #2
let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch(numOrStr){
  case null:
    console.log ("ви скасували");
    break;
  case '':
    console.log('Empty String');
    break;
    case !isNaN(numOrStr) || numOrStr:
    console.log('number is Ba_NaN');
    break;
  default:
    console.log('OK!')
}

// if(numOrStr === null) {
// console.log('ви скасували')
// } else if( numOrStr.trim() === '' ){
// console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// }