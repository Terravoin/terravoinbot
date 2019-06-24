const Discord = require("discord.js");
const client = new Discord.Client();
client.login("NTkyMzk3MjMzMTMyMTQyNjEy.XQ-7Xw.eBd2IUZaSyiCIOlEwIjwZcuEnzA");

client.on("message", (message) => { //В случае если бот заметит новое сообщение (message)..
 if(message.content == "терра лох"){ //Он проверит если его контент (content) равняется фразе "терра лох"
  message.reply("Соси, терра топ"); //И в случае если так и есть он ответит на сообщение фразой Соси, терра топ
  } //Закрытие условия
}); //Закрытие события

client.on("message", (message) => {
	if(message.content == "Тест") {
		message.reply("!q") ;
	}
	
	if(message.content.startsWith("!q")){ //начало второго условия
answer = ["Как маска ебет", "Цена вискаса", "Сережка гей", "ORA ORA ORAORA ORA ORA ORA ORA ORAORA ORA ORAORA ORA ORAORA ORA ORAORA ORA ORAORA ORA ORAORA ORA ORAORA ORA ORAORA ORA ORAORA ORA ORAORA ORA ORAORA ORA ORAORA ORA ORAORA ORA ORA"]; //Массив с возможными ответами
message.channel.send(answer[Math.floor(Math.random() * answer.length)]); //Отправка результата - случайный эл-т из массива.
} // конец второго условия
	
	
});