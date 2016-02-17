var WSServer = require("./server.js");
var server = [];
var currentServer = null;
for (var i = 1; i <= 8; i++)
{
	currentServer = new WSServer("wss://w" + i + ".web.whatsapp.com/ws", "https://web.whatsapp.com");
	currentServer.Listen(9090 + i);
	server.push(currentServer);
}