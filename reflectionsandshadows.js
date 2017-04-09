/**
 * Created by Steve on 11/28/2016.
 */

/*
 Load in all the glass information
 */
var buildGlass = {
    r : 0.1,

    verts : null,
    normals : null,
    triangleStrip : null,
    texCoords : null,

    createGeometry : function() {
        this.verts = new Float32Array(glass.verts);
        this.normals = new Float32Array(glass.normals);
        this.triangleStrip = new Uint16Array(glass.triangleStrip);
        this.texCoords = new Float32Array(glass.texCoords);
    },

    wireframe : null, // Uint16Array  (line indices)

    createWireFrame : function() {
        var lines = [];
        lines.push(this.triangleStrip[0], this.triangleStrip[1]);
        var numStripIndices = this.triangleStrip.length;
        for (var i = 2; i < numStripIndices; i++) {
            var a = this.triangleStrip[i-2];
            var b = this.triangleStrip[i-1];
            var c = this.triangleStrip[i];
            if (a != b && b != c && c != a)
                lines.push(a, c, b, c);
        }
        this.wireframe = new Uint16Array(lines);
    },

    numHedgeHogElements : 0,
    hedgeHog : null,  // Float32Array of lines

    createHedgeHog : function() {
        var lines = [];
        var hedgeHogLength = 0.8*this.r;
        var numNormals = this.normals.length;
        for (var i = 0; i < numNormals; i += 3) {
            var p = [this.verts[i], this.verts[i+1], this.verts[i+2]];
            var n = [this.normals[i], this.normals[i+1], this.normals[i+2]];
            var q = [p[0] + hedgeHogLength*n[0],
                p[1] + hedgeHogLength*n[1],
                p[2] + hedgeHogLength*n[2]];
            lines.push(p[0], p[1], p[2],
                q[0], q[1], q[2]);
        }
        this.numHedgeHogElements = lines.length/3;
        this.hedgeHog = new Float32Array(lines);
    }
};

/*
 Load in all the bottle information
 */
var buildBottle = {
    r : 0.1,

    verts : null,
    normals : null,
    triangleStrip : null,
    texCoords : null,

    createGeometry : function() {
        this.verts = new Float32Array(bottle.verts);
        this.normals = new Float32Array(bottle.normals);
        this.triangleStrip = new Uint16Array(bottle.triangleStrip);
        this.texCoords = new Float32Array(bottle.texCoords);
    },

    wireframe : null, // Uint16Array  (line indices)

    createWireFrame : function() {
        var lines = [];
        lines.push(this.triangleStrip[0], this.triangleStrip[1]);
        var numStripIndices = this.triangleStrip.length;
        for (var i = 2; i < numStripIndices; i++) {
            var a = this.triangleStrip[i-2];
            var b = this.triangleStrip[i-1];
            var c = this.triangleStrip[i];
            if (a != b && b != c && c != a)
                lines.push(a, c, b, c);
        }
        this.wireframe = new Uint16Array(lines);
    },

    numHedgeHogElements : 0,
    hedgeHog : null,  // Float32Array of lines

    createHedgeHog : function() {
        var lines = [];
        var hedgeHogLength = 0.8*this.r;
        var numNormals = this.normals.length;
        for (var i = 0; i < numNormals; i += 3) {
            var p = [this.verts[i], this.verts[i+1], this.verts[i+2]];
            var n = [this.normals[i], this.normals[i+1], this.normals[i+2]];
            var q = [p[0] + hedgeHogLength*n[0],
                p[1] + hedgeHogLength*n[1],
                p[2] + hedgeHogLength*n[2]];
            lines.push(p[0], p[1], p[2],
                q[0], q[1], q[2]);
        }
        this.numHedgeHogElements = lines.length/3;
        this.hedgeHog = new Float32Array(lines);
    }
};

/*
 Load in all the table information
 */
var buildTable = {
    r : 0.1,

    verts : null,
    normals : null,
    triangleStrip : null,
    texCoords : null,

    createGeometry : function() {
        this.verts = new Float32Array(table.verts);
        this.normals = new Float32Array(table.normals);
        this.triangleStrip = new Uint16Array(table.triangleStrip);
        this.texCoords = new Float32Array(table.texCoords);
    },

    wireframe : null, // Uint16Array  (line indices)

    createWireFrame : function() {
        var lines = [];
        lines.push(this.triangleStrip[0], this.triangleStrip[1]);
        var numStripIndices = this.triangleStrip.length;
        for (var i = 2; i < numStripIndices; i++) {
            var a = this.triangleStrip[i-2];
            var b = this.triangleStrip[i-1];
            var c = this.triangleStrip[i];
            if (a != b && b != c && c != a)
                lines.push(a, c, b, c);
        }
        this.wireframe = new Uint16Array(lines);
    },

    numHedgeHogElements : 0,
    hedgeHog : null,  // Float32Array of lines

    createHedgeHog : function() {
        var lines = [];
        var hedgeHogLength = 0.8*this.r;
        var numNormals = this.normals.length;
        for (var i = 0; i < numNormals; i += 3) {
            var p = [this.verts[i], this.verts[i+1], this.verts[i+2]];
            var n = [this.normals[i], this.normals[i+1], this.normals[i+2]];
            var q = [p[0] + hedgeHogLength*n[0],
                p[1] + hedgeHogLength*n[1],
                p[2] + hedgeHogLength*n[2]];
            lines.push(p[0], p[1], p[2],
                q[0], q[1], q[2]);
        }
        this.numHedgeHogElements = lines.length/3;
        this.hedgeHog = new Float32Array(lines);
    }
};