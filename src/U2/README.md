
# Table of Contents

1.  [Taming Randomness](#org74be534)
    1.  [Uniform Random](#orgb91f023)
        1.  [code](#org645fb5c)
    2.  [Random<sup>2</sup>](#org6244555)
        1.  [code](#org71d7f57)
    3.  [Random<sup>N</sup>](#org385be64)
        1.  [code](#org4f2d45b)
    4.  [( Random + Random ) / 2](#org3986ef9)
        1.  [code](#org01b80b7)
    5.  [( Random<sub>1</sub> + Random<sub>2</sub> + &#x2026; + Random<sub>N</sub> ) / 2](#org817da87)
        1.  [code](#orgf00bb9c)
    6.  [Normal Distribution ( Gaussian )](#org6d83886)
        1.  [code](#org8f5a425)
    7.  [Perlin Noise](#orgb11258e)
        1.  [Distribution](#orgd173abb)
            1.  [code](#orge70fe5e)
        2.  [Variation over time](#orgc258b51)
            1.  [code](#orgae798f5)
    8.  [Random Walkers](#orga9c3875)
        1.  [code](#org9214382)



<a id="org74be534"></a>

# Taming Randomness


<a id="orgb91f023"></a>

## Uniform Random

    let v = random(1);


<a id="org645fb5c"></a>

### [code](js/sketch_01.js)

---


<a id="org6244555"></a>

## Random<sup>2</sup>

    let v = pow(random(1), 2);


<a id="org71d7f57"></a>

### [code](js/sketch_02.js)

---


<a id="org385be64"></a>

## Random<sup>N</sup>

    let v = pow(random(1), n);


<a id="org4f2d45b"></a>

### [code](js/sketch_03.js)

---


<a id="org3986ef9"></a>

## ( Random + Random ) / 2

    let v = ( random(1) + random(1) ) / 2;


<a id="org01b80b7"></a>

### [code](js/sketch_04.js)

---


<a id="org817da87"></a>

## ( Random<sub>1</sub> + Random<sub>2</sub> + &#x2026; + Random<sub>N</sub> ) / 2

    let v = 0;
    for (let i = 0; i < n; i++) {
      v += random(1);
    }
    v /= n;


<a id="orgf00bb9c"></a>

### [code](js/sketch_05.js)

---


<a id="org6d83886"></a>

## Normal Distribution ( Gaussian )

    // Box-Muller Transform (Unif(0,1) => N(0,1))
    // avoiding log(0) by using (1 - random(1))
    let mean = 0.5, variance = 0.1;
    let v = sqrt(-2 * log(1 - random(1))) * cos(2 * Math.PI * Math.random(1)) * variance + mean;

-   **note** : [randomGaussian()](https://p5js.org/reference/#/p5/randomGaussian) is available in p5.js


<a id="org8f5a425"></a>

### [code](js/sketch_06.js)

---


<a id="orgb11258e"></a>

## Perlin Noise


<a id="orgd173abb"></a>

### Distribution

    let v = noise(x); x += 0.001;

-   **note** : see [noise()](https://p5js.org/reference/#/p5/noise) function in p5.js


<a id="orge70fe5e"></a>

#### [code](js/sketch_07.js)

---


<a id="orgc258b51"></a>

### Variation over time

    let v = noise(x); x += 0.01;


<a id="orgae798f5"></a>

#### [code](js/sketch_08.js)

---


<a id="orga9c3875"></a>

## Random Walkers


<a id="org9214382"></a>

### [code](js/sketch_09.js)

---

