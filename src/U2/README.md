
# Table of Contents

1.  [Taming Randomness](#orgcc010e3)
    1.  [Uniform Random](#orgc14984c)
        1.  [code](#org2bbe09e)
    2.  [Random<sup>2</sup>](#orgc589020)
        1.  [code](#org7f3340f)
    3.  [Random<sup>N</sup>](#org5d49cd5)
        1.  [code](#org2ba9f28)
    4.  [( Random + Random ) / 2](#orgfa6bbcc)
        1.  [code](#orgcee520b)
    5.  [( Random<sub>1</sub> + Random<sub>2</sub> + &#x2026; + Random<sub>N</sub> ) / 2](#orgd3c0929)
        1.  [code](#org4595b7d)
    6.  [Normal Distribution ( Gaussian )](#org4273266)
        1.  [code](#org8a0c9f1)
    7.  [Perlin Noise](#org2013aa2)
        1.  [Distribution](#org85b2f50)
            1.  [code](#orga820a7c)
        2.  [Variation over time](#orgdadf087)
            1.  [code](#orgb773eab)
    8.  [Random Walkers](#orgd4a913c)
        1.  [code](#orgf2e0087)



<a id="orgcc010e3"></a>

# Taming Randomness


<a id="orgc14984c"></a>

## Uniform Random

    let v = random(1);


<a id="org2bbe09e"></a>

### [code](js/sketch_01.js)

---


<a id="orgc589020"></a>

## Random<sup>2</sup>

    let v = pow(random(1), 2);


<a id="org7f3340f"></a>

### [code](js/sketch_02.js)

---


<a id="org5d49cd5"></a>

## Random<sup>N</sup>

    let v = pow(random(1), n);


<a id="org2ba9f28"></a>

### [code](js/sketch_03.js)

---


<a id="orgfa6bbcc"></a>

## ( Random + Random ) / 2

    let v = ( random(1) + random(1) ) / 2;


<a id="orgcee520b"></a>

### [code](js/sketch_04.js)

---


<a id="orgd3c0929"></a>

## ( Random<sub>1</sub> + Random<sub>2</sub> + &#x2026; + Random<sub>N</sub> ) / 2

    let v = 0;
    for (let i = 0; i < n; i++) {
      v += random(1);
    }
    v /= n;


<a id="org4595b7d"></a>

### [code](js/sketch_05.js)

---


<a id="org4273266"></a>

## Normal Distribution ( Gaussian )

    // Box-Muller Transform (Unif(0,1) => N(0,1))
    // avoiding log(0) by using (1 - random(1))
    let mean = 0.5, variance = 0.1;
    let v = sqrt(-2 * log(1 - random(1))) * cos(2 * Math.PI * Math.random(1)) * variance + mean;

-   **note** : [randomGaussian()](https://p5js.org/reference/#/p5/randomGaussian) is available in p5.js


<a id="org8a0c9f1"></a>

### [code](js/sketch_06.js)

---


<a id="org2013aa2"></a>

## Perlin Noise


<a id="org85b2f50"></a>

### Distribution

    let v = noise(x); x += 0.001;

-   **note** : see [noise()](https://p5js.org/reference/#/p5/noise) function in p5.js


<a id="orga820a7c"></a>

#### [code](js/sketch_07.js)

---


<a id="orgdadf087"></a>

### Variation over time

    let v = noise(x); x += 0.01;


<a id="orgb773eab"></a>

#### [code](js/sketch_08.js)

---


<a id="orgd4a913c"></a>

## Random Walkers


<a id="orgf2e0087"></a>

### code

---

