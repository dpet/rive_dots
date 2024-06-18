addEventListener("DOMContentLoaded", (event) => {
    let canvasses = document.querySelectorAll("canvas");
    for (let c of canvasses){
        const r = new rive.Rive({
            src: "./js/dots.riv",
            canvas: c,
            autoplay: true,
            amimations: "move",
            onLoad: () => {
                c.width = window.innerWidth / 4;
                c.height = window.innerWidth / 4;
              r.resizeDrawingSurfaceToCanvas();
            },
        });
    }

});