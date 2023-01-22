
# Table of Contents

1.  [Taming Randomness](#org2157e3f)
    1.  [Uniform Random](#orge4f936f)
        1.  [code](#org13c2fda)
    2.  [Random<sup>2</sup>](#orgcdade26)
        1.  [code](#orge95e48b)
    3.  [Random<sup>N</sup>](#org10efb1b)
        1.  [code](#org137d3eb)
    4.  [( Random + Random ) / 2](#org3502c63)
        1.  [code](#org9cfd47e)
    5.  [( Random<sub>1</sub> + Random<sub>2</sub> + &#x2026; + Random<sub>N</sub> ) / 2](#orge6fc57b)
        1.  [code](#org0212594)
    6.  [Normal Distribution ( Gaussian )](#org67dfa91)
        1.  [code](#org9274591)
    7.  [Perlin Noise](#org82faeb0)
        1.  [Distribution](#orge74cc21)
            1.  [code](#org087e887)
        2.  [Variation over time](#org05c34b5)
            1.  [code](#org5038bd9)
    8.  [Random Walkers](#org229f13d)
        1.  [code](#orged0f18e)



<a id="org2157e3f"></a>

# Taming Randomness


<a id="orge4f936f"></a>

## Uniform Random

    let v = random(1);


<a id="org13c2fda"></a>

### [code](js/sketch_01.js)

---


<a id="orgcdade26"></a>

## Random<sup>2</sup>

    let v = pow(random(1), 2);


<a id="orge95e48b"></a>

### [code](js/sketch_02.js)

---


<a id="org10efb1b"></a>

## Random<sup>N</sup>

    let v = pow(random(1), n);


<a id="org137d3eb"></a>

### [code](js/sketch_03.js)

---


<a id="org3502c63"></a>

## ( Random + Random ) / 2

    let v = ( random(1) + random(1) ) / 2;


<a id="org9cfd47e"></a>

### [code](js/sketch_04.js)

---


<a id="orge6fc57b"></a>

## ( Random<sub>1</sub> + Random<sub>2</sub> + &#x2026; + Random<sub>N</sub> ) / 2

    let v = 0;
    for (let i = 0; i < n; i++) {
      v += random(1);
    }
    v /= n;


<a id="org0212594"></a>

### [code](js/sketch_05.js)

---


<a id="org67dfa91"></a>

## Normal Distribution ( Gaussian )

    // Box-Muller Transform (Unif(0,1) => N(0,1))
    // avoiding log(0) by using (1 - random(1))
    let mean = 0.5, variance = 0.1;
    let v = sqrt(-2 * log(1 - random(1))) * cos(2 * Math.PI * Math.random(1)) * variance + mean;

-   **note** : [randomGaussian()](https://p5js.org/reference/#/p5/randomGaussian) is available in p5.js


<a id="org9274591"></a>

### code

---


<a id="org82faeb0"></a>

## Perlin Noise


<a id="orge74cc21"></a>

### Distribution

    let v = noise(x); x += 0.001;

-   **note** : see [noise()](https://p5js.org/reference/#/p5/noise) function in p5.js


<a id="org087e887"></a>

#### code

---


<a id="org05c34b5"></a>

### Variation over time

    let v = noise(x); x += 0.01;


<a id="org5038bd9"></a>

#### code

---


<a id="org229f13d"></a>

## Random Walkers


<a id="orged0f18e"></a>

### code

---

