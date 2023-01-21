
# Table of Contents

1.  [Notes](#org0e56094)
2.  [Handy Math](#org298e24f)
    1.  [Sine, Cosine and Tangent](#orgfde0dd1)
        1.  [code](#org444ea3a)
    2.  [Rotating 2D Points](#org092b8f3)
        1.  [code](#orgadbcaff)
        2.  [Learn more](#org5600208)
    3.  [Euclidean Distance Between Two Points](#orgb9aeb92)
        1.  [Two dimensions](#orgf4c9325)
        2.  [n dimensions](#org02dae9b)
        3.  [code](#org6c88893)
    4.  [Manhattan Distance Between Two Points](#org9fda69e)
        1.  [Two dimensions](#orgf26b361)
        2.  [code](#org40ed7e9)
    5.  [Perspective Projection ( Fixed Camera )](#org37617df)
        1.  [code](#org5193120)
    6.  [Dot Product](#org29ca8e1)
        1.  [Two dimensions](#orgfe3e6cf)
        2.  [n dimensions](#orga427950)
        3.  [code](#org5414874)
    7.  [Cross Product](#org5dd7f23)
        1.  [3 dimensions](#org2344fbf)
        2.  [code](#org89ee10c)



<a id="org0e56094"></a>

# Notes

It seems that the `\begin{bmatrix}` function still doesn&rsquo;t properly render in Github markdown &#x2026;


<a id="org298e24f"></a>

# Handy Math


<a id="orgfde0dd1"></a>

## Sine, Cosine and Tangent

-   $sine = \frac{opposite}{hypotenuse}$
-   $cosine = \frac{adjacent}{hypotenuse}$
-   $tangent = \frac{sine}{cosine}$

---


<a id="org444ea3a"></a>

### [code](js/sketch_01.js)

---


<a id="org092b8f3"></a>

## Rotating 2D Points

-   $\begin{bmatrix}x^1\cr y^1\end{bmatrix} = \begin{bmatrix}cos\theta & - & sin\theta\cr sin\theta & \text{ } & cos\theta\end{bmatrix} \begin{bmatrix}x\cr y\end{bmatrix}$

---


<a id="orgadbcaff"></a>

### [code](js/sketch_02.js)

---


<a id="org5600208"></a>

### Learn more

-   [A Gentle Primer on 2D Rotations](https://www.alanzucconi.com/2016/02/03/2d-rotations/)


<a id="orgb9aeb92"></a>

## Euclidean Distance Between Two Points

[Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) is the most intuitive, &ldquo;ordinary&rdquo; straight-line distance between two points in Euclidean space.


<a id="orgf4c9325"></a>

### Two dimensions

-   $p = (p_x,p_y), \text{ } q = (q_x,q_y)$
-   $distance(p,q) = \sqrt{(p_x - q_x)^2 + (p_y - q_y)^2}$


<a id="org02dae9b"></a>

### n dimensions

-   $p = (p_1,p_2\cdot\cdot\cdot,p_n), \text{ } q = (q_1,q_2\cdot\cdot\cdot,q_n)$
-   $distance(p,q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2 + \cdot\cdot\cdot + (p_n - q_n)^2} = \sqrt{\displaystyle\sum_{i=1}^n(p_i + q_i)^2}$

---


<a id="org6c88893"></a>

### [code](js/sketch_03.js)

---


<a id="org9fda69e"></a>

## Manhattan Distance Between Two Points

Euclidean distance is not the only way to measure distance between two points.
In mathematics, distance is defined by a [function called distance function or metric](https://en.wikipedia.org/wiki/Metric_space), which can be any function that satisfy a set of conditions.
[Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry) is an example of a non-Euclidean distance, which is the sum of the absolute differences of their Cartesian coordinate, or the distance a car whould drive in a city laid out in square blocks.


<a id="orgf26b361"></a>

### Two dimensions

-   $p = (p_x,p_y), q = (q_x,q_y)$
-   $distance(p,q) = |p_x - q_x| - |p_y - q_y|$

---


<a id="org40ed7e9"></a>

### [code](js/sketch_04.js)

---


<a id="org37617df"></a>

## Perspective Projection ( Fixed Camera )

-   $\begin{bmatrix}{x,y,z}\end{bmatrix}$ projects to $\begin{bmatrix}x\frac{d_1}{d_2},y\frac{d_1}{d_2}\end{bmatrix}$
-   **d1** = *focal length* -> the axial distance from the camera center to the image plane.
-   **d2** = *substance distance* -> the axial distance from the camera center to the subject.

---


<a id="org5193120"></a>

### [code](js/sketch_05.js)

---


<a id="org29ca8e1"></a>

## Dot Product


<a id="orgfe3e6cf"></a>

### Two dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1}\end{bmatrix}$
-   $v_1 \cdot v_2 = x_1x_2 + y_1y_2$


<a id="orga427950"></a>

### n dimensions

-   $a = \begin{bmatrix}{a_1,a_2,a_3,\ldots,a_n}\end{bmatrix},b = \begin{bmatrix}{b_1,b_2,b_3,\ldots,b_n}\end{bmatrix}$

-   $a \cdot b = a_1b_1 + a_2b_2 + a_3b_3 \ldots a_nb_n$

-   Two non-zero vectors **a** and **b** are orthogonal if and only if $a \cdot b = 0$.
-   If the dot product is positive, the angle between the vectors is **less** than $90\degree$
-   If the dot product is positive, the angle between the vectors is **more** than $90\degree$

---


<a id="org5414874"></a>

### [code](js/sketch_06.js)

---


<a id="org5dd7f23"></a>

## Cross Product


<a id="org2344fbf"></a>

### 3 dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1,z_1}\end{bmatrix}$
-   $v_2 = \begin{bmatrix}{x_2,y_2,z_2}\end{bmatrix}$
-   $v_1 \times v_2 = \begin{bmatrix}{y_1z_2 - z_1y_2,z_1x_2 - x_1z_2,x_1y_2 - y_1x_2}\end{bmatrix}$
-   The cross product is orthogonal to both of the original vectors ( v1 and v2 ), which implies the cross product is perpendicular to the plane defined by the original vectors.
-   If the cross product of two vectors is the zero vector, either one or both of the inputs is the zero vector, or they are parallel or antiparallel.

---


<a id="org89ee10c"></a>

### [code](js/sketch_07.js)

---

