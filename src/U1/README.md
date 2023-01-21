
# Table of Contents

1.  [Notes](#org34f0c92)
2.  [Handy Math](#orgbe23a0a)
    1.  [Sine, Cosine and Tangent](#org8a4390c)
        1.  [code](#orgf5051e1)
    2.  [Rotating 2D Points](#org8961c35)
        1.  [code](#org58ac8ef)
        2.  [Learn more](#orgbff0200)
    3.  [Euclidean Distance Between Two Points](#org574fcb0)
        1.  [Two dimensions](#orge725e33)
        2.  [n dimensions](#org8a3ae1b)
        3.  [code](#orga065b3d)
    4.  [Manhattan Distance Between Two Points](#orgb951ace)
        1.  [Two dimensions](#org3aa63cf)
        2.  [code](#org497497e)
    5.  [Perspective Projection ( Fixed Camera )](#org85dfc09)
        1.  [code](#org63bd160)
    6.  [Dot Product](#orgf91e4d7)
        1.  [Two dimensions](#org9cc1595)
        2.  [n dimensions](#orgb967f48)
    7.  [Cross Product](#org1a3d332)
        1.  [3 dimensions](#org57b2e82)
        2.  [code](#orgce1d02c)



<a id="org34f0c92"></a>

# Notes

It seems that the `\begin{bmatrix}` function still doesn&rsquo;t properly render in Github markdown &#x2026;


<a id="orgbe23a0a"></a>

# Handy Math


<a id="org8a4390c"></a>

## Sine, Cosine and Tangent

-   $sine = \frac{opposite}{hypotenuse}$
-   $cosine = \frac{adjacent}{hypotenuse}$
-   $tangent = \frac{sine}{cosine}$

---


<a id="orgf5051e1"></a>

### [code](js/sketch_01.js)

---


<a id="org8961c35"></a>

## Rotating 2D Points

-   $\begin{bmatrix}x^1\cr y^1\end{bmatrix} = \begin{bmatrix}cos\theta & - & sin\theta\cr sin\theta & \text{ } & cos\theta\end{bmatrix} \begin{bmatrix}x\cr y\end{bmatrix}$

---


<a id="org58ac8ef"></a>

### [code](js/sketch_02.js)

---


<a id="orgbff0200"></a>

### Learn more

-   [A Gentle Primer on 2D Rotations](https://www.alanzucconi.com/2016/02/03/2d-rotations/)


<a id="org574fcb0"></a>

## Euclidean Distance Between Two Points

[Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) is the most intuitive, &ldquo;ordinary&rdquo; straight-line distance between two points in Euclidean space.


<a id="orge725e33"></a>

### Two dimensions

-   $p = (p_x,p_y), \text{ } q = (q_x,q_y)$
-   $distance(p,q) = \sqrt{(p_x - q_x)^2 + (p_y - q_y)^2}$


<a id="org8a3ae1b"></a>

### n dimensions

-   $p = (p_1,p_2\cdot\cdot\cdot,p_n), \text{ } q = (q_1,q_2\cdot\cdot\cdot,q_n)$
-   $distance(p,q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2 + \cdot\cdot\cdot + (p_n - q_n)^2} = \sqrt{\displaystyle\sum_{i=1}^n(p_i + q_i)^2}$

---


<a id="orga065b3d"></a>

### [code](js/sketch_03.js)

---


<a id="orgb951ace"></a>

## Manhattan Distance Between Two Points

Euclidean distance is not the only way to measure distance between two points.
In mathematics, distance is defined by a [function called distance function or metric](https://en.wikipedia.org/wiki/Metric_space), which can be any function that satisfy a set of conditions.


<a id="org3aa63cf"></a>

### Two dimensions

-   $p = (p_x,p_y), q = (q_x,q_y)$
-   $distance(p,q) = |p_x - q_x| - |p_y - q_y|$

---


<a id="org497497e"></a>

### [code](js/sketch_04.js)

---


<a id="org85dfc09"></a>

## Perspective Projection ( Fixed Camera )

-   $\begin{bmatrix}{x,y,z}\end{bmatrix}$ projects to $\begin{bmatrix}x\frac{d_1}{d_2},y\frac{d_1}{d_2}\end{bmatrix}$
-   **d1** = *focal length* -> the axial distance from the camera center to the image plane.
-   **d2** = *substance distance* -> the axial distance from the camera center to the subject.

---


<a id="org63bd160"></a>

### code

---


<a id="orgf91e4d7"></a>

## Dot Product


<a id="org9cc1595"></a>

### Two dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1}\end{bmatrix}$
-   $v_1 \cdot v_2 = x_1x_2 + y_1y_2$


<a id="orgb967f48"></a>

### n dimensions

-   $a = \begin{bmatrix}{a_1,a_2,a_3,\ldots,a_n}\end{bmatrix},b = \begin{bmatrix}{b_1,b_2,b_3,\ldots,b_n}\end{bmatrix}$

-   $a \cdot b = a_1b_1 + a_2b_2 + a_3b_3 \ldots a_nb_n$

-   Two non-zero vectors **a** and **b** are orthogonal if and only if $a \cdot b = 0$.
-   If the dot product is positive, the angle between the vectors is **less** than $90\degree$
-   If the dot product is positive, the angle between the vectors is **more** than $90\degree$


<a id="org1a3d332"></a>

## Cross Product


<a id="org57b2e82"></a>

### 3 dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1,z_1}\end{bmatrix}$
-   $v_2 = \begin{bmatrix}{x_2,y_2,z_2}\end{bmatrix}$
-   $v_1 \times v_2 = \begin{bmatrix}{y_1z_2 - z_1y_2,z_1x_2 - x_1z_2,x_1y_2 - y_1x_2}\end{bmatrix}$
-   The cross product is orthogonal to both of the original vectors ( v1 and v2 ), which implies the cross product is perpendicular to the plane defined by the original vectors.
-   If the cross product of two vectors is the zero vector, either one or both of the inputs is the zero vector, or they are parallel or antiparallel.

---


<a id="orgce1d02c"></a>

### code

---

