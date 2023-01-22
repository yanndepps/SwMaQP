
# Table of Contents

1.  [Taming Randomness](#org9dbd2eb)
    1.  [Uniform Random](#org7894a03)
        1.  [code](#org60fa9fc)
    2.  [Random<sup>2</sup>](#org54ffc81)
        1.  [code](#org1e7dd68)
    3.  [Random<sup>N</sup>](#orgf3a845e)
        1.  [code](#orgef19c17)
    4.  [( Random + Random ) / 2](#org956e5dd)
        1.  [code](#org4e02f42)
    5.  [( Random<sub>1</sub> + Random<sub>2</sub> + &#x2026; + Random<sub>N</sub> ) / 2](#orga19f4ad)
        1.  [code](#orgfa3953d)
    6.  [Normal Distribution ( Gaussian )](#org0de6705)
        1.  [code](#org123bfca)
    7.  [Perlin Noise](#orga289cbc)
        1.  [Distribution](#orgc25018d)
            1.  [code](#org9b592d1)
        2.  [Variation over time](#orga84b463)
            1.  [code](#org3655852)
    8.  [Random Walkers](#org1af72e1)
        1.  [code](#orgb0914ef)



<a id="org9dbd2eb"></a>

# Taming Randomness


<a id="org7894a03"></a>

## Uniform Random

    let v = random(1);


<a id="org60fa9fc"></a>

### [code](js/sketch_01.js)

---


<a id="org54ffc81"></a>

## Random<sup>2</sup>

    let v = pow(random(1), 2);


<a id="org1e7dd68"></a>

### [code](js/sketch_02.js)

---


<a id="orgf3a845e"></a>

## Random<sup>N</sup>

    let v = pow(random(1), n);


<a id="orgef19c17"></a>

### [code](js/sketch_03.js)

---


<a id="org956e5dd"></a>

## ( Random + Random ) / 2

    let v = ( random(1) + random(1) ) / 2;


<a id="org4e02f42"></a>

### [code](js/sketch_04.js)

---


<a id="orga19f4ad"></a>

## ( Random<sub>1</sub> + Random<sub>2</sub> + &#x2026; + Random<sub>N</sub> ) / 2

    let v = 0;
    for (let i = 0; i < n; i++) {
      v += random(1);
    }
    v /= n;


<a id="orgfa3953d"></a>

### [code](js/sketch_05.js)

---


<a id="org0de6705"></a>

## Normal Distribution ( Gaussian )

    // Box-Muller Transform (Unif(0,1) => N(0,1))
    // avoiding log(0) by using (1 - random(1))
    let mean = 0.5, variance = 0.1;
    let v = sqrt(-2 * log(1 - random(1))) * cos(2 * Math.PI * Math.random(1)) * variance + mean;

-   **note** : [randomGaussian()](https://p5js.org/reference/#/p5/randomGaussian) is available in p5.js


<a id="org123bfca"></a>

### [code](js/sketch_06.js)

---


<a id="orga289cbc"></a>

## Perlin Noise


<a id="orgc25018d"></a>

### Distribution

    let v = noise(x); x += 0.001;

-   **note** : see [noise()](https://p5js.org/reference/#/p5/noise) function in p5.js


<a id="org9b592d1"></a>

#### code

---


<a id="orga84b463"></a>

### Variation over time

    let v = noise(x); x += 0.01;


<a id="org3655852"></a>

#### code

---


<a id="org1af72e1"></a>

## Random Walkers


<a id="orgb0914ef"></a>

### code

---

