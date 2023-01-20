
# Table of Contents

1.  [Handy Math](#org8767e05)
    1.  [Sine, Cosine and Tangent](#org860580d)
        1.  [code](#org67f7d45)
    2.  [Rotating 2D Points](#org64adae1)
        1.  [code](#org9c9a8da)
        2.  [Learn more](#orgc9aa31b)
    3.  [Euclidean Distance Between Two Points](#orgfbe2a7d)
        1.  [Two dimensions](#orgdb638ce)
        2.  [n dimensions](#org8d7376c)
        3.  [code](#org14b138b)
    4.  [Perspective Projection ( Fixed Camera )](#org16abc9b)
        1.  [code](#org91c284d)
    5.  [Dot Product](#orge3a21e6)
        1.  [Two dimensions](#org408f9f4)
        2.  [n dimensions](#org0464c45)
    6.  [Cross Product](#org4a8b9f1)
        1.  [3 dimensions](#org10d50c4)
        2.  [code](#orgcf39720)



<a id="org8767e05"></a>

# Handy Math


<a id="org860580d"></a>

## Sine, Cosine and Tangent

-   $sine = \frac{opposite}{hypotenuse}$
-   $cosine = \frac{adjacent}{hypotenuse}$
-   $tangent = \frac{sine}{cosine}$

---


<a id="org67f7d45"></a>

### code

---


<a id="org64adae1"></a>

## Rotating 2D Points

-   $\begin{bmatrix}x^1\cr y^1\end{bmatrix} = \begin{bmatrix}cos\theta & - & sin\theta\cr sin\theta & \text{ } & cos\theta\end{bmatrix} \begin{bmatrix}x\cr y\end{bmatrix}$

---


<a id="org9c9a8da"></a>

### code

---


<a id="orgc9aa31b"></a>

### Learn more

-   [A Gentle Primer on 2D Rotations](https://www.alanzucconi.com/2016/02/03/2d-rotations/)


<a id="orgfbe2a7d"></a>

## Euclidean Distance Between Two Points

[Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) is the most intuitive, &ldquo;ordinary&rdquo; straight-line distance between two points in Euclidean space.


<a id="orgdb638ce"></a>

### Two dimensions

-   $p = (p_x,p_y), \text{ } q = (q_x,q_y)$
-   $distance(p,q) = \sqrt{(p_x - q_x)^2 + (p_y - q_y)^2}$


<a id="org8d7376c"></a>

### n dimensions

-   $p = (p_1,p_2\cdot\cdot\cdot,p_n), \text{ } q = (q_1,q_2\cdot\cdot\cdot,q_n)$
-   $distance(p,q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2 + \cdot\cdot\cdot + (p_n - q_n)^2} = \sqrt{\displaystyle\sum_{i=1}^n(p_i + q_i)^2}$

---


<a id="org14b138b"></a>

### code

---


<a id="org16abc9b"></a>

## Perspective Projection ( Fixed Camera )

-   $\begin{bmatrix}{x,y,z}\end{bmatrix}$ projects to $\begin{bmatrix}x\frac{d_1}{d_2},y\frac{d_1}{d_2}\end{bmatrix}$
-   **d1** = *focal length* -> the axial distance from the camera center to the image plane.
-   **d2** = *substance distance* -> the axial distance from the camera center to the subject.

---


<a id="org91c284d"></a>

### code

---


<a id="orge3a21e6"></a>

## Dot Product


<a id="org408f9f4"></a>

### Two dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1}\end{bmatrix}$
-   $v_1 \cdot v_2 = x_1x_2 + y_1y_2$


<a id="org0464c45"></a>

### n dimensions

-   $a = \begin{bmatrix}{a_1,a_2,a_3,\ldots,a_n}\end{bmatrix},b = \begin{bmatrix}{b_1,b_2,b_3,\ldots,b_n}\end{bmatrix}$

-   $a \cdot b = a_1b_1 + a_2b_2 + a_3b_3 \ldots a_nb_n$

-   Two non-zero vectors **a** and **b** are orthogonal if and only if $a \cdot b = 0$.
-   If the dot product is positive, the angle between the vectors is **less** than $90\degree$
-   If the dot product is positive, the angle between the vectors is **more** than $90\degree$


<a id="org4a8b9f1"></a>

## Cross Product


<a id="org10d50c4"></a>

### 3 dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1,z_1}\end{bmatrix}$
-   $v_2 = \begin{bmatrix}{x_2,y_2,z_2}\end{bmatrix}$
-   $v_1 \times v_2 = \begin{bmatrix}{y_1z_2 - z_1y_2,z_1x_2 - x_1z_2,x_1y_2 - y_1x_2}\end{bmatrix}$
-   The cross product is orthogonal to both of the original vectors ( v1 and v2 ), which implies the cross product is perpendicular to the plane defined by the original vectors.
-   If the cross product of two vectors is the zero vector, either one or both of the inputs is the zero vector, or they are parallel or antiparallel.

---


<a id="orgcf39720"></a>

### code

---

