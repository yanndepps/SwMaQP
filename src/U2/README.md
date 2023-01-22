
# Table of Contents

1.  [Taming Randomness](#org9bb49c0)
    1.  [Uniform Random](#org0bfac03)
        1.  [code](#orgc3ce8f4)
    2.  [Random<sup>2</sup>](#org3f21073)
        1.  [code](#orgd462575)
    3.  [Random<sup>N</sup>](#orga114d12)
        1.  [code](#org17db8ba)
    4.  [( Random + Random ) / 2](#org9e41a08)
        1.  [code](#org87424ae)
    5.  [( Random<sub>1</sub> + Random<sub>2</sub> + &#x2026; + Random<sub>N</sub> ) / 2](#org75f0c68)
        1.  [code](#org22bf36e)
    6.  [Normal Distribution ( Gaussian )](#org727233c)
        1.  [code](#orgfa3bba4)
    7.  [Perlin Noise](#orga8ada74)
        1.  [Distribution](#org708bfb7)
            1.  [code](#org16dcf33)
        2.  [Variation over time](#org55d6535)
            1.  [code](#org2db3651)
    8.  [Random Walkers](#org7fcdd4c)
        1.  [code](#org20062a7)



<a id="org9bb49c0"></a>

# Taming Randomness


<a id="org0bfac03"></a>

## Uniform Random

    let v = random(1);


<a id="orgc3ce8f4"></a>

### [code](js/sketch_01.js)

---


<a id="org3f21073"></a>

## Random<sup>2</sup>

    let v = pow(random(1), 2);


<a id="orgd462575"></a>

### [code](js/sketch_02.js)

---


<a id="orga114d12"></a>

## Random<sup>N</sup>

    let v = pow(random(1), n);


<a id="org17db8ba"></a>

### code

---


<a id="org9e41a08"></a>

## ( Random + Random ) / 2

    let v = ( random(1) + random(1) ) / 2;


<a id="org87424ae"></a>

### code

---


<a id="org75f0c68"></a>

## ( Random<sub>1</sub> + Random<sub>2</sub> + &#x2026; + Random<sub>N</sub> ) / 2

    let v = 0;
    for (let i = 0; i < n; i++) {
      v += random(1);
    }
    v /= n;


<a id="org22bf36e"></a>

### code

---


<a id="org727233c"></a>

## Normal Distribution ( Gaussian )

    // Box-Muller Transform (Unif(0,1) => N(0,1))
    // avoiding log(0) by using (1 - random(1))
    let mean = 0.5, variance = 0.1;
    let v = sqrt(-2 * log(1 - random(1))) * cos(2 * Math.PI * Math.random(1)) * variance + mean;

-   **note** : [randomGaussian()](https://p5js.org/reference/#/p5/randomGaussian) is available in p5.js


<a id="orgfa3bba4"></a>

### code

---


<a id="orga8ada74"></a>

## Perlin Noise


<a id="org708bfb7"></a>

### Distribution

    let v = noise(x); x += 0.001;

-   **note** : see [noise()](https://p5js.org/reference/#/p5/noise) function in p5.js


<a id="org16dcf33"></a>

#### code

---


<a id="org55d6535"></a>

### Variation over time

    let v = noise(x); x += 0.01;


<a id="org2db3651"></a>

#### code

---


<a id="org7fcdd4c"></a>

## Random Walkers


<a id="org20062a7"></a>

### code

---

