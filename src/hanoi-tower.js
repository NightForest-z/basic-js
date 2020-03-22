module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    function calcDisc (disksNumber) {
        var d=2;
        while (disksNumber>1) {
            d*=2;
            disksNumber--;}
            d-=1
            return d;
        }
    
       
        var disc = new Object ();
        disc.turns = calcDisc (disksNumber);     
        disc.seconds = disc.turns / (turnsSpeed / 3600) + disc.turns % (turnsSpeed / 3600);

return disc;
};