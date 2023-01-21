
# Table of Contents

1.  [Notes](#org3d9e5c6)
2.  [Handy Math](#org4087cb7)
    1.  [Sine, Cosine and Tangent](#org50df386)
        1.  [code](#org0f5f027)
    2.  [Rotating 2D Points](#org61410c9)
        1.  [code](#orgb00e7f1)
        2.  [Learn more](#orgfc2c070)
    3.  [Euclidean Distance Between Two Points](#orgd46a93e)
        1.  [Two dimensions](#orgaf74938)
        2.  [n dimensions](#orgfdb56e0)
        3.  [code](#org41833d2)
    4.  [Manhattan Distance Between Two Points](#orgb1d7102)
        1.  [Two dimensions](#orga7441ae)
        2.  [code](#org877f6d6)
    5.  [Perspective Projection ( Fixed Camera )](#orgf0db7fb)
        1.  [code](#org259793b)
    6.  [Dot Product](#org5835ae4)
        1.  [Two dimensions](#org4e89642)
        2.  [n dimensions](#org285dda7)
    7.  [Cross Product](#org8a8a7fd)
        1.  [3 dimensions](#org9e76cb2)
        2.  [code](#orgd35f8c9)



<a id="org3d9e5c6"></a>

# Notes

It seems that the `\begin{bmatrix}` function still doesn&rsquo;t properly render in Github markdown &#x2026;


<a id="org4087cb7"></a>

# Handy Math


<a id="org50df386"></a>

## Sine, Cosine and Tangent

-   $sine = \frac{opposite}{hypotenuse}$
-   $cosine = \frac{adjacent}{hypotenuse}$
-   $tangent = \frac{sine}{cosine}$

---


<a id="org0f5f027"></a>

### [code](js/sketch_01.js)

---


<a id="org61410c9"></a>

## Rotating 2D Points

-   $\begin{bmatrix}x^1\cr y^1\end{bmatrix} = \begin{bmatrix}cos\theta & - & sin\theta\cr sin\theta & \text{ } & cos\theta\end{bmatrix} \begin{bmatrix}x\cr y\end{bmatrix}$

---


<a id="orgb00e7f1"></a>

### [code](js/sketch_02.js)

---


<a id="orgfc2c070"></a>

### Learn more

-   [A Gentle Primer on 2D Rotations](https://www.alanzucconi.com/2016/02/03/2d-rotations/)


<a id="orgd46a93e"></a>

## Euclidean Distance Between Two Points

[Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) is the most intuitive, &ldquo;ordinary&rdquo; straight-line distance between two points in Euclidean space.


<a id="orgaf74938"></a>

### Two dimensions

-   $p = (p_x,p_y), \text{ } q = (q_x,q_y)$
-   $distance(p,q) = \sqrt{(p_x - q_x)^2 + (p_y - q_y)^2}$


<a id="orgfdb56e0"></a>

### n dimensions

-   $p = (p_1,p_2\cdot\cdot\cdot,p_n), \text{ } q = (q_1,q_2\cdot\cdot\cdot,q_n)$
-   $distance(p,q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2 + \cdot\cdot\cdot + (p_n - q_n)^2} = \sqrt{\displaystyle\sum_{i=1}^n(p_i + q_i)^2}$

---


<a id="org41833d2"></a>

### [code](js/sketch_03.js)

---


<a id="orgb1d7102"></a>

## Manhattan Distance Between Two Points

Euclidean distance is not the only way to measure distance between two points.
In mathematics, distance is defined by a [function called distance function or metric](https://en.wikipedia.org/wiki/Metric_space), which can be any function that satisfy a set of conditions.
[Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry) is an example of a non-Euclidean distance, which is the sum of the absolute differences of their Cartesian coordinate, or the distance a car whould drive in a city laid out in square blocks.


<a id="orga7441ae"></a>

### Two dimensions

-   $p = (p_x,p_y), q = (q_x,q_y)$
-   $distance(p,q) = |p_x - q_x| - |p_y - q_y|$

---


<a id="org877f6d6"></a>

### [code](js/sketch_04.js)

---


<a id="orgf0db7fb"></a>

## Perspective Projection ( Fixed Camera )

-   $\begin{bmatrix}{x,y,z}\end{bmatrix}$ projects to $\begin{bmatrix}x\frac{d_1}{d_2},y\frac{d_1}{d_2}\end{bmatrix}$
-   **d1** = *focal length* -> the axial distance from the camera center to the image plane.
-   **d2** = *substance distance* -> the axial distance from the camera center to the subject.

---


<a id="org259793b"></a>

### code

---


<a id="org5835ae4"></a>

## Dot Product


<a id="org4e89642"></a>

### Two dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1}\end{bmatrix}$
-   $v_1 \cdot v_2 = x_1x_2 + y_1y_2$


<a id="org285dda7"></a>

### n dimensions

-   $a = \begin{bmatrix}{a_1,a_2,a_3,\ldots,a_n}\end{bmatrix},b = \begin{bmatrix}{b_1,b_2,b_3,\ldots,b_n}\end{bmatrix}$

-   $a \cdot b = a_1b_1 + a_2b_2 + a_3b_3 \ldots a_nb_n$

-   Two non-zero vectors **a** and **b** are orthogonal if and only if $a \cdot b = 0$.
-   If the dot product is positive, the angle between the vectors is **less** than $90\degree$
-   If the dot product is positive, the angle between the vectors is **more** than $90\degree$


<a id="org8a8a7fd"></a>

## Cross Product


<a id="org9e76cb2"></a>

### 3 dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1,z_1}\end{bmatrix}$
-   $v_2 = \begin{bmatrix}{x_2,y_2,z_2}\end{bmatrix}$
-   $v_1 \times v_2 = \begin{bmatrix}{y_1z_2 - z_1y_2,z_1x_2 - x_1z_2,x_1y_2 - y_1x_2}\end{bmatrix}$
-   The cross product is orthogonal to both of the original vectors ( v1 and v2 ), which implies the cross product is perpendicular to the plane defined by the original vectors.
-   If the cross product of two vectors is the zero vector, either one or both of the inputs is the zero vector, or they are parallel or antiparallel.

---


<a id="orgd35f8c9"></a>

### code

---

