
# Table of Contents

1.  [Taming Randomness](#orgd49b97a)
    1.  [Uniform Random](#org2937cb1)
        1.  [code](#org6155011)
    2.  [Random<sup>2</sup>](#orga12f28b)
        1.  [code](#org6b2917b)
    3.  [Random<sup>N</sup>](#org2879fb4)
        1.  [code](#org103ea59)
    4.  [( Random + Random ) / 2](#org9dfaf9e)
        1.  [code](#orgf0879d0)
    5.  [( Random<sub>1</sub> + Random<sub>2</sub> + &#x2026; + Random<sub>N</sub> ) / 2](#orgbcb1d97)
        1.  [code](#org34ac12a)
    6.  [Normal Distribution ( Gaussian )](#orgfdb38c6)
        1.  [code](#orgbc815d7)
    7.  [Perlin Noise](#org3b1b557)
        1.  [Distribution](#orgb3d714c)
            1.  [code](#orgae25330)
        2.  [Variation over time](#org9f328f9)
            1.  [code](#org3d2b403)
    8.  [Random Walkers](#org034320e)
        1.  [code](#org968640b)



<a id="orgd49b97a"></a>

# Taming Randomness


<a id="org2937cb1"></a>

## Uniform Random

    let v = random(1);


<a id="org6155011"></a>

### [code](js/sketch_01.js)

---


<a id="orga12f28b"></a>

## Random<sup>2</sup>

    let v = pow(random(1), 2);


<a id="org6b2917b"></a>

### code

---


<a id="org2879fb4"></a>

## Random<sup>N</sup>

    let v = pow(random(1), n);


<a id="org103ea59"></a>

### code

---


<a id="org9dfaf9e"></a>

## ( Random + Random ) / 2

    let v = ( random(1) + random(1) ) / 2;


<a id="orgf0879d0"></a>

### code

---


<a id="orgbcb1d97"></a>

## ( Random<sub>1</sub> + Random<sub>2</sub> + &#x2026; + Random<sub>N</sub> ) / 2

    let v = 0;
    for (let i = 0; i < n; i++) {
      v += random(1);
    }
    v /= n;


<a id="org34ac12a"></a>

### code

---


<a id="orgfdb38c6"></a>

## Normal Distribution ( Gaussian )

    // Box-Muller Transform (Unif(0,1) => N(0,1))
    // avoiding log(0) by using (1 - random(1))
    let mean = 0.5, variance = 0.1;
    let v = sqrt(-2 * log(1 - random(1))) * cos(2 * Math.PI * Math.random(1)) * variance + mean;

-   **note** : [randomGaussian()](https://p5js.org/reference/#/p5/randomGaussian) is available in p5.js


<a id="orgbc815d7"></a>

### code

---


<a id="org3b1b557"></a>

## Perlin Noise


<a id="orgb3d714c"></a>

### Distribution

    let v = noise(x); x += 0.001;

-   **note** : see [noise()](https://p5js.org/reference/#/p5/noise) function in p5.js


<a id="orgae25330"></a>

#### code

---


<a id="org9f328f9"></a>

### Variation over time

    let v = noise(x); x += 0.01;


<a id="org3d2b403"></a>

#### code

---


<a id="org034320e"></a>

## Random Walkers


<a id="org968640b"></a>

### code

---

