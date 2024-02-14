var gl;
var points;
var vertices;

window.onload = function init() {
    var canvas = document.getElementById('gl-canvas');
    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) {
        alert("WebGL unavailable!!");   
    }

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0,1.0,1.0,1.0);
    var program = initShaders(gl, 'vertex-shader', 'fragment-shader');
    
}