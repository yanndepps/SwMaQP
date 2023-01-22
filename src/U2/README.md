
# Table of Contents

1.  [Taming Randomness](#org71dbf03)
    1.  [Uniform Random](#org388db7a)
        1.  [code](#org045bf0d)
    2.  [Random<sup>2</sup>](#org599c465)
        1.  [code](#org3f37431)
    3.  [Random<sup>N</sup>](#org2c2bcf2)
        1.  [code](#org5a469c3)
    4.  [( Random + Random ) / 2](#org8cd34fc)
        1.  [code](#org9a6829d)
    5.  [( Random<sub>1</sub> + Random<sub>2</sub> + &#x2026; + Random<sub>N</sub> ) / 2](#org408b9c6)
        1.  [code](#orgaeddbaf)
    6.  [Normal Distribution ( Gaussian )](#org9feb234)
        1.  [code](#org24ec6ae)
    7.  [Perlin Noise](#orgebd322a)
        1.  [Distribution](#org44fd55c)
            1.  [code](#orgec14735)
        2.  [Variation over time](#org9285770)
            1.  [code](#org77c7b41)
    8.  [Random Walkers](#org9520260)
        1.  [code](#orge850ca4)



<a id="org71dbf03"></a>

# Taming Randomness


<a id="org388db7a"></a>

## Uniform Random

    let v = random(1);


<a id="org045bf0d"></a>

### [code](js/sketch_01.js)

---


<a id="org599c465"></a>

## Random<sup>2</sup>

    let v = pow(random(1), 2);


<a id="org3f37431"></a>

### [code](js/sketch_02.js)

---


<a id="org2c2bcf2"></a>

## Random<sup>N</sup>

    let v = pow(random(1), n);


<a id="org5a469c3"></a>

### [code](js/sketch_03.js)

---


<a id="org8cd34fc"></a>

## ( Random + Random ) / 2

    let v = ( random(1) + random(1) ) / 2;


<a id="org9a6829d"></a>

### [code](js/sketch_04.js)

---


<a id="org408b9c6"></a>

## ( Random<sub>1</sub> + Random<sub>2</sub> + &#x2026; + Random<sub>N</sub> ) / 2

    let v = 0;
    for (let i = 0; i < n; i++) {
      v += random(1);
    }
    v /= n;


<a id="orgaeddbaf"></a>

### code

---


<a id="org9feb234"></a>

## Normal Distribution ( Gaussian )

    // Box-Muller Transform (Unif(0,1) => N(0,1))
    // avoiding log(0) by using (1 - random(1))
    let mean = 0.5, variance = 0.1;
    let v = sqrt(-2 * log(1 - random(1))) * cos(2 * Math.PI * Math.random(1)) * variance + mean;

-   **note** : [randomGaussian()](https://p5js.org/reference/#/p5/randomGaussian) is available in p5.js


<a id="org24ec6ae"></a>

### code

---


<a id="orgebd322a"></a>

## Perlin Noise


<a id="org44fd55c"></a>

### Distribution

    let v = noise(x); x += 0.001;

-   **note** : see [noise()](https://p5js.org/reference/#/p5/noise) function in p5.js


<a id="orgec14735"></a>

#### code

---


<a id="org9285770"></a>

### Variation over time

    let v = noise(x); x += 0.01;


<a id="org77c7b41"></a>

#### code

---


<a id="org9520260"></a>

## Random Walkers


<a id="orge850ca4"></a>

### code

---

