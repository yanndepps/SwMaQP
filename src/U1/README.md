
# Table of Contents

1.  [Notes](#orgd8c208f)
2.  [Handy Math](#org620c36b)
    1.  [Sine, Cosine and Tangent](#org921096b)
        1.  [code](#org4d800b0)
    2.  [Rotating 2D Points](#org3860123)
        1.  [code](#org8a38b34)
        2.  [Learn more](#orgad54122)
    3.  [Euclidean Distance Between Two Points](#org6f10768)
        1.  [Two dimensions](#orgcfc96b1)
        2.  [n dimensions](#org21533c9)
        3.  [code](#org340f367)
    4.  [Manhattan Distance Between Two Points](#orgcd5d8fa)
        1.  [Two dimensions](#orgd32b984)
        2.  [code](#org49ccbf5)
    5.  [Perspective Projection ( Fixed Camera )](#org9684b17)
        1.  [code](#org7adf2de)
    6.  [Dot Product](#org03f8c3f)
        1.  [Two dimensions](#org646fafd)
        2.  [n dimensions](#org69cfc9a)
    7.  [Cross Product](#orgbb5263d)
        1.  [3 dimensions](#org3bcb145)
        2.  [code](#org0df6d1f)



<a id="orgd8c208f"></a>

# Notes

It seems that the `\begin{bmatrix}` function still doesn&rsquo;t properly render in Github markdown &#x2026;


<a id="org620c36b"></a>

# Handy Math


<a id="org921096b"></a>

## Sine, Cosine and Tangent

-   $sine = \frac{opposite}{hypotenuse}$
-   $cosine = \frac{adjacent}{hypotenuse}$
-   $tangent = \frac{sine}{cosine}$

---


<a id="org4d800b0"></a>

### [code](js/sketch_01.js)

---


<a id="org3860123"></a>

## Rotating 2D Points

-   $\begin{bmatrix}x^1\cr y^1\end{bmatrix} = \begin{bmatrix}cos\theta & - & sin\theta\cr sin\theta & \text{ } & cos\theta\end{bmatrix} \begin{bmatrix}x\cr y\end{bmatrix}$

---


<a id="org8a38b34"></a>

### [code](js/sketch_02.js)

---


<a id="orgad54122"></a>

### Learn more

-   [A Gentle Primer on 2D Rotations](https://www.alanzucconi.com/2016/02/03/2d-rotations/)


<a id="org6f10768"></a>

## Euclidean Distance Between Two Points

[Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) is the most intuitive, &ldquo;ordinary&rdquo; straight-line distance between two points in Euclidean space.


<a id="orgcfc96b1"></a>

### Two dimensions

-   $p = (p_x,p_y), \text{ } q = (q_x,q_y)$
-   $distance(p,q) = \sqrt{(p_x - q_x)^2 + (p_y - q_y)^2}$


<a id="org21533c9"></a>

### n dimensions

-   $p = (p_1,p_2\cdot\cdot\cdot,p_n), \text{ } q = (q_1,q_2\cdot\cdot\cdot,q_n)$
-   $distance(p,q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2 + \cdot\cdot\cdot + (p_n - q_n)^2} = \sqrt{\displaystyle\sum_{i=1}^n(p_i + q_i)^2}$

---


<a id="org340f367"></a>

### [code](js/sketch_03.js)

---


<a id="orgcd5d8fa"></a>

## Manhattan Distance Between Two Points

Euclidean distance is not the only way to measure distance between two points.
In mathematics, distance is defined by a [function called distance function or metric](https://en.wikipedia.org/wiki/Metric_space), which can be any function that satisfy a set of conditions.
[Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry) is an example of a non-Euclidean distance, which is the sum of the absolute differences of their Cartesian coordinate, or the distance a car whould drive in a city laid out in square blocks.


<a id="orgd32b984"></a>

### Two dimensions

-   $p = (p_x,p_y), q = (q_x,q_y)$
-   $distance(p,q) = |p_x - q_x| - |p_y - q_y|$

---


<a id="org49ccbf5"></a>

### [code](js/sketch_04.js)

---


<a id="org9684b17"></a>

## Perspective Projection ( Fixed Camera )

-   $\begin{bmatrix}{x,y,z}\end{bmatrix}$ projects to $\begin{bmatrix}x\frac{d_1}{d_2},y\frac{d_1}{d_2}\end{bmatrix}$
-   **d1** = *focal length* -> the axial distance from the camera center to the image plane.
-   **d2** = *substance distance* -> the axial distance from the camera center to the subject.

---


<a id="org7adf2de"></a>

### [code](js/sketch_05.js)

---


<a id="org03f8c3f"></a>

## Dot Product


<a id="org646fafd"></a>

### Two dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1}\end{bmatrix}$
-   $v_1 \cdot v_2 = x_1x_2 + y_1y_2$


<a id="org69cfc9a"></a>

### n dimensions

-   $a = \begin{bmatrix}{a_1,a_2,a_3,\ldots,a_n}\end{bmatrix},b = \begin{bmatrix}{b_1,b_2,b_3,\ldots,b_n}\end{bmatrix}$

-   $a \cdot b = a_1b_1 + a_2b_2 + a_3b_3 \ldots a_nb_n$

-   Two non-zero vectors **a** and **b** are orthogonal if and only if $a \cdot b = 0$.
-   If the dot product is positive, the angle between the vectors is **less** than $90\degree$
-   If the dot product is positive, the angle between the vectors is **more** than $90\degree$


<a id="orgbb5263d"></a>

## Cross Product


<a id="org3bcb145"></a>

### 3 dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1,z_1}\end{bmatrix}$
-   $v_2 = \begin{bmatrix}{x_2,y_2,z_2}\end{bmatrix}$
-   $v_1 \times v_2 = \begin{bmatrix}{y_1z_2 - z_1y_2,z_1x_2 - x_1z_2,x_1y_2 - y_1x_2}\end{bmatrix}$
-   The cross product is orthogonal to both of the original vectors ( v1 and v2 ), which implies the cross product is perpendicular to the plane defined by the original vectors.
-   If the cross product of two vectors is the zero vector, either one or both of the inputs is the zero vector, or they are parallel or antiparallel.

---


<a id="org0df6d1f"></a>

### code

---

