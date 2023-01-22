
# Table of Contents

1.  [Taming Randomness](#org8c7d8db)
    1.  [Uniform Random](#org3200263)
        1.  [code](#org20fdbe2)
    2.  [Random<sup>2</sup>](#orgc7be51e)
        1.  [code](#orge94266d)
    3.  [Random<sup>N</sup>](#orgc7f4015)
        1.  [code](#orgb31a1ca)
    4.  [( Random + Random ) / 2](#orgaa91cc7)
        1.  [code](#orgc0984d6)
    5.  [( Random<sub>1</sub> + Random<sub>2</sub> + &#x2026; + Random<sub>N</sub> ) / 2](#org1e6554a)
        1.  [code](#orgf674bbf)
    6.  [Normal Distribution ( Gaussian )](#org206f7c7)
        1.  [code](#org1dcdf69)
    7.  [Perlin Noise](#org3583038)
        1.  [Distribution](#org63f02bd)
            1.  [code](#org948afd2)
        2.  [Variation over time](#orge327398)
            1.  [code](#org4675804)
    8.  [Random Walkers](#orge4e1ac2)
        1.  [code](#orge1160ca)



<a id="org8c7d8db"></a>

# Taming Randomness


<a id="org3200263"></a>

## Uniform Random

    let v = random(1);


<a id="org20fdbe2"></a>

### [code](js/sketch_01.js)

---


<a id="orgc7be51e"></a>

## Random<sup>2</sup>

    let v = pow(random(1), 2);


<a id="orge94266d"></a>

### [code](js/sketch_02.js)

---


<a id="orgc7f4015"></a>

## Random<sup>N</sup>

    let v = pow(random(1), n);


<a id="orgb31a1ca"></a>

### [code](js/sketch_03.js)

---


<a id="orgaa91cc7"></a>

## ( Random + Random ) / 2

    let v = ( random(1) + random(1) ) / 2;


<a id="orgc0984d6"></a>

### code

---


<a id="org1e6554a"></a>

## ( Random<sub>1</sub> + Random<sub>2</sub> + &#x2026; + Random<sub>N</sub> ) / 2

    let v = 0;
    for (let i = 0; i < n; i++) {
      v += random(1);
    }
    v /= n;


<a id="orgf674bbf"></a>

### code

---


<a id="org206f7c7"></a>

## Normal Distribution ( Gaussian )

    // Box-Muller Transform (Unif(0,1) => N(0,1))
    // avoiding log(0) by using (1 - random(1))
    let mean = 0.5, variance = 0.1;
    let v = sqrt(-2 * log(1 - random(1))) * cos(2 * Math.PI * Math.random(1)) * variance + mean;

-   **note** : [randomGaussian()](https://p5js.org/reference/#/p5/randomGaussian) is available in p5.js


<a id="org1dcdf69"></a>

### code

---


<a id="org3583038"></a>

## Perlin Noise


<a id="org63f02bd"></a>

### Distribution

    let v = noise(x); x += 0.001;

-   **note** : see [noise()](https://p5js.org/reference/#/p5/noise) function in p5.js


<a id="org948afd2"></a>

#### code

---


<a id="orge327398"></a>

### Variation over time

    let v = noise(x); x += 0.01;


<a id="org4675804"></a>

#### code

---


<a id="orge4e1ac2"></a>

## Random Walkers


<a id="orge1160ca"></a>

### code

---

