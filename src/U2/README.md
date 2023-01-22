
# Table of Contents

1.  [Taming Randomness](#org7a05ab5)
    1.  [Uniform Random](#org2bf21cb)
        1.  [code](#org6637d25)
    2.  [Random<sup>2</sup>](#org141760a)
        1.  [code](#org13c8476)
    3.  [Random<sup>N</sup>](#org1fdaf4c)
        1.  [code](#orgead3224)
    4.  [( Random + Random ) / 2](#orgd9fab09)
        1.  [code](#org1508b97)
    5.  [( Random<sub>1</sub> + Random<sub>2</sub> + &#x2026; + Random<sub>N</sub> ) / 2](#orgefe1aa5)
        1.  [code](#orgdd835e2)



<a id="org7a05ab5"></a>

# Taming Randomness


<a id="org2bf21cb"></a>

## Uniform Random

    let v = random(1);


<a id="org6637d25"></a>

### [code](js/sketch_01.js)

---


<a id="org141760a"></a>

## Random<sup>2</sup>

    let v = pow(random(1), 2);


<a id="org13c8476"></a>

### code

---


<a id="org1fdaf4c"></a>

## Random<sup>N</sup>

    let v = pow(random(1), n);


<a id="orgead3224"></a>

### code

---


<a id="orgd9fab09"></a>

## ( Random + Random ) / 2

    let v = ( random(1) + random(1) ) / 2;


<a id="org1508b97"></a>

### code

---


<a id="orgefe1aa5"></a>

## ( Random<sub>1</sub> + Random<sub>2</sub> + &#x2026; + Random<sub>N</sub> ) / 2

    let v = 0;
    for (let i = 0; i < n; i++) {
      v += random(1);
    }
    v /= n;


<a id="orgdd835e2"></a>

### code

---

