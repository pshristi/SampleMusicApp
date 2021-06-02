var socket = io()
function play(aid)
{
    socket.emit("play",{id : aid})
}

$(()=> {
    socket.on("play",(data) => {
        $('#a'+data.id)[0].play()
    })
})