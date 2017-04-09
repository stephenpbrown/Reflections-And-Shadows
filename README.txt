Name: Stephen Brown
Email: stephen.p.brown@wsu.edu
Class: CS442
Programming Assignment #5: Textures, Reflection, and Shadows
Due Date: 12/13/16

References: 
Thanks to the help of Professor Cochran and with some collaboration with Tyler Bounds,
and with referencing my code for the superellipsoid, I was able to successfully 
finish this program.

Wine bottle texture: http://handpickedselections.com/product/490-2011-Merlot.htm
Table wood texture: http://www.sketchuptextureclub.com/textures/architecture/wood-floors/parquet-square/wood-flooring-square-texture-seamless-05395

Overview:
For this project, I rendered a scene containing shadows and reflections using WebGL's
stencil buffer and alpha blending facilities. I started off this assignment by using
Professor Cochran's scripts to generate the bottle.js and glass.js files. I then
got all the vertices, normals, texCoords, and triangle strips for each object
loaded in and got them drawing. I then made another table.js file where I put
the proper values in to generate a plane that sits "below" the bottle and glass.
After I had this all generated, I used Professor Cochran's document to get the reflections
and shadows working. After I got those functioning, I went back and set up the objects
to use different textures. So finally I have a bottle and a glass, sitting on a table
with reflections and shadows

Files Included:
* README.txt
* matrix.js
* bottle.js
* glass.js
* reflectionsandshadows.js
* table.js
* reflectionsandshadows.html
* glassTexture.png
* tableTexture.png
* bottleTexture.png
* webgl-debug.js

.idea folder includes:
* Reflections_and_Shadows.iml
* modules
* workspace
* jsLibraryMappings