# STL

> [!NOTE]
> - STereoLithography
> - Standard Triangle Language
> - Standard Tessellation Language

[**STL**](https://en.wikipedia.org/wiki/STL_(file_format)) is a computer-aided design (CAD) file format that defines the geometry of 3D objects, excluding information such as color, textures, or physical properties that other CAD formats include..




In order to use the ***codeblock stl github markdown extension*** i need to have an `stl` in ascii format like this:

````st
```stl
solid 
  facet normal -1e+0 0e+0 0e+0
    outer loop
      vertex -3e+1 -1e+1 7e+1
      vertex -3e+1 -1e+1 6e+1
      vertex -3e+1 -2e+1 6e+1
    endloop
  endfacet
  facet normal -1e+0 0e+0 0e+0
    outer loop
      vertex -3e+1 -1e+1 7e+1
      vertex -3e+1 -2e+1 6e+1
      vertex -3e+1 -2e+1 7e+1
    endloop
  endfacet
  ...
  facet normal 1e+0 0e+0 0e+0
    outer loop
      vertex -2e+1 -2e+1 7e+1
      vertex -2e+1 -2e+1 6e+1
      vertex -2e+1 -1e+1 6e+1
    endloop
  endfacet
  facet normal 1e+0 0e+0 0e+0
    outer loop
      vertex -2e+1 -2e+1 7e+1
      vertex -2e+1 -1e+1 6e+1
      vertex -2e+1 -1e+1 7e+1
    endloop
  endfacet
endsolid

```
````

---

## STL bin to STL ascii

i've modeled a `.stl` using [https://www.tinkercad.com/](https://www.tinkercad.com/) as you can see in [here](https://www.tinkercad.com/things/86xw1x9iYVw-spaceinvader)

You can export this model to a `.stl` file but it is a `stl binary` file.  I've tried to find a `stl binary` to a `stl ascii` converter online but i didn't.

I've found this npm package: [stl](https://www.npmjs.com/package/stl).

I've used this package in the simpliest node aplication ever and managed to convert this `stl binary` to the `stl ascii`. 🎉