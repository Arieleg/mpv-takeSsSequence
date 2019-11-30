function sleep(){
    var actTime = mp.get_time();
    while (mp.get_time() - actTime < 0.05){
    }
}

function takeSsS() {

    var N = 12;
    var start = 5;
    var end = 95;
    var step = (end - start)/(N);
    var percent = start;

    while (percent < end) {
        mp.commandv("seek", percent, "absolute-percent");
        sleep();
        mp.commandv("screenshot");          
        percent+=step;
    }   
}



mp.add_key_binding("Ctrl+Alt+s", "takeSsSequence", takeSsS);