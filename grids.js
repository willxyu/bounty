(function() {
    var canvas = document.createElement('canvas'),
        con = canvas.getContext('2d');
    
    canvas.style.background = '#000';
    document.body.appendChild(canvas);
    
    /**
     * Grid Lines
     */
    function grid() {
        var w = canvas.width, 
            h = canvas.height;
        
        /**
         * i is used for both x and y to draw
         * a line every 5 pixels starting at
         * .5 to offset the canvas edges
         */
        for(var i = .5; i < w || i < h; i += 5) {
            // draw horizontal lines
            con.moveTo( i, 0 );
            con.lineTo( i, h);
            // draw vertical lines
            con.moveTo( 0, i );
            con.lineTo( w, i);
        }
        con.strokeStyle = 'hsla(0, 0%, 40%, .5)';
        con.stroke();
    }

    grid();
})();