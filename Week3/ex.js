var gl;
var points;

var vertices;

window.onload = function init() {
    var canvas = document.getElementById('gl-canvas');
    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) {
        alert("WebGL unavailable!!");}

    big_circ();

    small_circ_left();

    small_circ_right();

};

function big_circ() {
    vertices = [
        vec2(0.0, 0.0),
    ];

    for (let t = 0.0; t < Math.PI * 2.0 + Math.PI / 64; t += Math.PI / 64) {
        let x = 0.75 * Math.cos(t);
        let y = 0.75 * Math.sin(t);
        
        vertices.push(vec2(x, y));
    }

    // configure webgl
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    var program = initShaders(gl, 'vertex-shader', 'fragment-shader');
    gl.useProgram(program);

    var bufferID = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);

    // set position and render
    var vPosition = gl.getAttribLocation(program, 'vPosition');
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    big_circ_render();
};

function small_circ_left() {
    vertices = [
        vec2(-0.5, 0.25),
    ];

    for (let t = 0.0; t < Math.PI * 2.0 + Math.PI / 64; t += Math.PI / 64) {
        let x = 0.10 * Math.cos(t);
        let y = 0.10 * Math.sin(t);
        
        vertices.push(vec2(x, y));
    }

    // configure webgl
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    var program = initShaders(gl, 'vertex-shader', 'fragment-shader');
    gl.useProgram(program);

    var bufferID = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);

    // set position and render
    var vPosition = gl.getAttribLocation(program, 'vPosition');
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    small_circ_render();
};

function small_circ_right() {
    vertices = [
        vec2(0.5, 0.25),
    ];

    for (let t = 0.0; t < Math.PI * 2.0 + Math.PI / 64; t += Math.PI / 64) {
        let x = 0.10 * Math.cos(t);
        let y = 0.10 * Math.sin(t);
        
        vertices.push(vec2(x, y));
    }

    // configure webgl
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    var program = initShaders(gl, 'vertex-shader', 'fragment-shader');
    gl.useProgram(program);

    var bufferID = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);

    // set position and render
    var vPosition = gl.getAttribLocation(program, 'vPosition');
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    small_circ_render();
};

function big_circ_render() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, vertices.length);
}

function small_circ_render() {
    gl.drawArrays(gl.TRIANGLE_FAN, 0, vertices.length);
}

function rect_render() {
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertices.length);
}