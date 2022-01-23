const colours = require("cli-color")
const WebSocket = require("ws")

class Server {

    sockets = []
    ws = false
    players = []

    constructor() {
        if(!this.ws){
            try {
                this.ws = new WebSocket.Server({ port: 1050 })
                
                this.ws.on('connection', this.connection)          
                this.ws.on('close', this.close) 

                if(this.ws){
                    this.logSuccess("Server started successfully, listening on 1050");
                }

            } catch (e) {
                this.logError("Failed to start socket server.")
            }
        }else{
            this.logError("You cannot initialise the web socket server multiple times.")
        }
    }

    log = (message) => {
        console.log(`${colours.blue('[~~~]')} ${message}`)
    }

    logSuccess = (message) => {
        console.log(`${colours.green('[OK]')} ${message}`)
        //console.log(`[${(new Date).toString()}] ${message}`)
        
    }
    
    logError = (message) => {
        console.log(`${colours.red('[!!!]')} ${message}`)
    }

    logSend = (address, from) => {
        console.log(`${colours.yellow('[~~>]')} ${colours.blue(`[${from}]`)} Sending data to ${address}`)
    }

    logReceive = (message) => {
        console.log(`${colours.yellow('[<~~]')} ${message}`)
    }
    
    connection = (s) => {
        this.log(`Connection request received from ${s._socket.address().address}`)
        /*if(typeof this.sockets[s._socket.address().address] !== 'undefined') {
            this.logError(`Rejected connection request from ${s._socket.address().address}`)
            s.close();
            return
        }*/

        this.log(`Accepted request from ${s._socket.address().address}`)

        this.sockets.push(s)

        s.on('message', (d) =>{
            this.message(d, s._socket.address().address)
        })
    }

    close = (s) => {
        this.log(`Goodbye ${s._socket.address().address}`);
    }

    send = (s, data, from) => {
        s.send(JSON.stringify(data))
        this.logSend(s._socket.address().address, from)
    }

    sendAll = (data, address = false, from = false) => {
        this.sockets.map(( s) => {
            //if(address === s._socket.address().address) return
            this.send(s, data, from)
        })

    }
    
    message = (d, address) => {

        this.logReceive(`${d}`)

        let data = JSON.parse(d)
        
        if(typeof data.type === 'undefined'){
            this.logError(`Illegal message received from ${address}`)
            return
        }

        if(typeof this[data.type] !== 'function'){
            this.logError(`${data.type} is not a valid function from ${address}`)
            return
        }

        this[data.type](data.data, address);

        
    }

    clientJoined = (data, address) => {
        this.logSuccess("A client is joining the game")
        let player = {
            name: data.name,
            posX: data.posX
        }

        //this.send()
        this.sendAll({
            type: "playerAdded",
            data: player
        }, address, "clientJoined")
    }

}

new Server()
