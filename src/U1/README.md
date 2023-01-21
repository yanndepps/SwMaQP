
# Table of Contents

1.  [Notes](#org32d77a0)
2.  [Handy Math](#orge1988e6)
    1.  [Sine, Cosine and Tangent](#orgea38cea)
        1.  [code](#org273021f)
    2.  [Rotating 2D Points](#org0895859)
        1.  [code](#org4d7033f)
        2.  [Learn more](#org408cbc3)
    3.  [Euclidean Distance Between Two Points](#org103d91d)
        1.  [Two dimensions](#org23a33ef)
        2.  [n dimensions](#orga4a5282)
        3.  [code](#org1809587)
    4.  [Manhattan Distance Between Two Points](#orgde2c197)
        1.  [Two dimensions](#orgc170c34)
        2.  [code](#orgfd1b704)
    5.  [Perspective Projection ( Fixed Camera )](#org5662820)
        1.  [code](#orgaffec0e)
    6.  [Dot Product](#org6282fe2)
        1.  [Two dimensions](#orgc2d48bc)
        2.  [n dimensions](#org66cd78d)
        3.  [code](#orgd41de52)
    7.  [Cross Product](#orgdb72d85)
        1.  [3 dimensions](#org3d78289)
        2.  [code](#org8a5d44b)



<a id="org32d77a0"></a>

# Notes

It seems that the `\begin{bmatrix}` function still doesn&rsquo;t properly render in Github markdown &#x2026;


<a id="orge1988e6"></a>

# Handy Math


<a id="orgea38cea"></a>

## Sine, Cosine and Tangent

-   $sine = \frac{opposite}{hypotenuse}$
-   $cosine = \frac{adjacent}{hypotenuse}$
-   $tangent = \frac{sine}{cosine}$

---


<a id="org273021f"></a>

### [code](js/sketch_01.js)

---


<a id="org0895859"></a>

## Rotating 2D Points

-   $\begin{bmatrix}x^1\cr y^1\end{bmatrix} = \begin{bmatrix}cos\theta & - & sin\theta\cr sin\theta & \text{ } & cos\theta\end{bmatrix} \begin{bmatrix}x\cr y\end{bmatrix}$

---


<a id="org4d7033f"></a>

### [code](js/sketch_02.js)

---


<a id="org408cbc3"></a>

### Learn more

-   [A Gentle Primer on 2D Rotations](https://www.alanzucconi.com/2016/02/03/2d-rotations/)


<a id="org103d91d"></a>

## Euclidean Distance Between Two Points

[Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) is the most intuitive, &ldquo;ordinary&rdquo; straight-line distance between two points in Euclidean space.


<a id="org23a33ef"></a>

### Two dimensions

-   $p = (p_x,p_y), \text{ } q = (q_x,q_y)$
-   $distance(p,q) = \sqrt{(p_x - q_x)^2 + (p_y - q_y)^2}$


<a id="orga4a5282"></a>

### n dimensions

-   $p = (p_1,p_2\cdot\cdot\cdot,p_n), \text{ } q = (q_1,q_2\cdot\cdot\cdot,q_n)$
-   $distance(p,q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2 + \cdot\cdot\cdot + (p_n - q_n)^2} = \sqrt{\displaystyle\sum_{i=1}^n(p_i + q_i)^2}$

---


<a id="org1809587"></a>

### [code](js/sketch_03.js)

---


<a id="orgde2c197"></a>

## Manhattan Distance Between Two Points

Euclidean distance is not the only way to measure distance between two points.
In mathematics, distance is defined by a [function called distance function or metric](https://en.wikipedia.org/wiki/Metric_space), which can be any function that satisfy a set of conditions.
[Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry) is an example of a non-Euclidean distance, which is the sum of the absolute differences of their Cartesian coordinate, or the distance a car whould drive in a city laid out in square blocks.


<a id="orgc170c34"></a>

### Two dimensions

-   $p = (p_x,p_y), q = (q_x,q_y)$
-   $distance(p,q) = |p_x - q_x| - |p_y - q_y|$

---


<a id="orgfd1b704"></a>

### [code](js/sketch_04.js)

---


<a id="org5662820"></a>

## Perspective Projection ( Fixed Camera )

-   $\begin{bmatrix}{x,y,z}\end{bmatrix}$ projects to $\begin{bmatrix}x\frac{d_1}{d_2},y\frac{d_1}{d_2}\end{bmatrix}$
-   **d1** = *focal length* -> the axial distance from the camera center to the image plane.
-   **d2** = *substance distance* -> the axial distance from the camera center to the subject.

---


<a id="orgaffec0e"></a>

### [code](js/sketch_05.js)

---


<a id="org6282fe2"></a>

## Dot Product


<a id="orgc2d48bc"></a>

### Two dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1}\end{bmatrix}$
-   $v_1 \cdot v_2 = x_1x_2 + y_1y_2$


<a id="org66cd78d"></a>

### n dimensions

-   $a = \begin{bmatrix}{a_1,a_2,a_3,\ldots,a_n}\end{bmatrix},b = \begin{bmatrix}{b_1,b_2,b_3,\ldots,b_n}\end{bmatrix}$

-   $a \cdot b = a_1b_1 + a_2b_2 + a_3b_3 \ldots a_nb_n$

-   Two non-zero vectors **a** and **b** are orthogonal if and only if $a \cdot b = 0$.
-   If the dot product is positive, the angle between the vectors is **less** than $90\degree$
-   If the dot product is positive, the angle between the vectors is **more** than $90\degree$

---


<a id="orgd41de52"></a>

### [code](js/sketch_06.js)

---


<a id="orgdb72d85"></a>

## Cross Product


<a id="org3d78289"></a>

### 3 dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1,z_1}\end{bmatrix}$
-   $v_2 = \begin{bmatrix}{x_2,y_2,z_2}\end{bmatrix}$
-   $v_1 \times v_2 = \begin{bmatrix}{y_1z_2 - z_1y_2,z_1x_2 - x_1z_2,x_1y_2 - y_1x_2}\end{bmatrix}$
-   The cross product is orthogonal to both of the original vectors ( v1 and v2 ), which implies the cross product is perpendicular to the plane defined by the original vectors.
-   If the cross product of two vectors is the zero vector, either one or both of the inputs is the zero vector, or they are parallel or antiparallel.

---


<a id="org8a5d44b"></a>

### code

---

