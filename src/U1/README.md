
# Table of Contents

1.  [Handy Math](#org52e043b)
    1.  [Sine, Cosine and Tangent](#org54b8fb8)
        1.  [code](#org1d7a0e9)
    2.  [Rotating 2D Points](#orgb7e579d)
        1.  [code](#org07e2bd1)
        2.  [Learn more](#org3e70c07)
    3.  [Euclidean Distance Between Two Points](#org533c1d3)
        1.  [Two dimensions](#orgef34b8e)
        2.  [n dimensions](#org1dc0609)
        3.  [code](#org6d75586)
    4.  [Perspective Projection ( Fixed Camera )](#orgf8728bc)
        1.  [code](#orgf73fef3)
    5.  [Dot Product](#org5f220a8)
        1.  [Two dimensions](#orgcc2a266)
        2.  [n dimensions](#org2f3775b)
    6.  [Cross Product](#orgd4e2df7)
        1.  [3 dimensions](#orgb068b30)
        2.  [code](#org5868775)



<a id="org52e043b"></a>

# Handy Math


<a id="org54b8fb8"></a>

## Sine, Cosine and Tangent

-   $sine = \frac{opposite}{hypotenuse}$
-   $cosine = \frac{adjacent}{hypotenuse}$
-   $tangent = \frac{sine}{cosine}$

---


<a id="org1d7a0e9"></a>

### code

---


<a id="orgb7e579d"></a>

## Rotating 2D Points

-   $\begin{bmatrix}{x^`}\cr{y^`}\end{bmatrix} = \begin{bmatrix}{cos\theta - sin\theta}\cr{sin\theta \text{ } cos\theta}\end{bmatrix} \begin{bmatrix}{x}\cr{y}\end{bmatrix}$

---


<a id="org07e2bd1"></a>

### code

---


<a id="org3e70c07"></a>

### Learn more

-   [A Gentle Primer on 2D Rotations](https://www.alanzucconi.com/2016/02/03/2d-rotations/)


<a id="org533c1d3"></a>

## Euclidean Distance Between Two Points

[Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) is the most intuitive, &ldquo;ordinary&rdquo; straight-line distance between two points in Euclidean space.


<a id="orgef34b8e"></a>

### Two dimensions

-   $p = (p_x,p_y), \text{ } q = (q_x,q_y)$
-   $distance(p,q) = \sqrt{(p_x - q_x)^2 + (p_y - q_y)^2}$


<a id="org1dc0609"></a>

### n dimensions

-   $p = (p_1,p_2\cdot\cdot\cdot,p_n), \text{ } q = (q_1,q_2\cdot\cdot\cdot,q_n)$
-   $distance(p,q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2 + \cdot\cdot\cdot + (p_n - q_n)^2} = \sqrt{\displaystyle\sum_{i=1}^n(p_i + q_i)^2}$

---


<a id="org6d75586"></a>

### code

---


<a id="orgf8728bc"></a>

## Perspective Projection ( Fixed Camera )

-   $\begin{bmatrix}{x,y,z}\end{bmatrix}$ projects to $\begin{bmatrix}x\frac{d_1}{d_2},y\frac{d_1}{d_2}\end{bmatrix}$
-   **d1** = *focal length* -> the axial distance from the camera center to the image plane.
-   **d2** = *substance distance* -> the axial distance from the camera center to the subject.

---


<a id="orgf73fef3"></a>

### code

---


<a id="org5f220a8"></a>

## Dot Product


<a id="orgcc2a266"></a>

### Two dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1}\end{bmatrix}$
-   $v_1 \cdot v_2 = x_1x_2 + y_1y_2$


<a id="org2f3775b"></a>

### n dimensions

-   $a = \begin{bmatrix}{a_1,a_2,a_3,\ldots,a_n}\end{bmatrix},b = \begin{bmatrix}{b_1,b_2,b_3,\ldots,b_n}\end{bmatrix}$

-   $a \cdot b = a_1b_1 + a_2b_2 + a_3b_3 \ldots a_nb_n$

-   Two non-zero vectors **a** and **b** are orthogonal if and only if $a \cdot b = 0$.
-   If the dot product is positive, the angle between the vectors is **less** than $90\degree$
-   If the dot product is positive, the angle between the vectors is **more** than $90\degree$


<a id="orgd4e2df7"></a>

## Cross Product


<a id="orgb068b30"></a>

### 3 dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1,z_1}\end{bmatrix}$
-   $v_2 = \begin{bmatrix}{x_2,y_2,z_2}\end{bmatrix}$
-   $v_1 \times v_2 = \begin{bmatrix}{y_1z_2 - z_1y_2,z_1x_2 - x_1z_2,x_1y_2 - y_1x_2}\end{bmatrix}$
-   The cross product is orthogonal to both of the original vectors ( v1 and v2 ), which implies the cross product is perpendicular to the plane defined by the original vectors.
-   If the cross product of two vectors is the zero vector, either one or both of the inputs is the zero vector, or they are parallel or antiparallel.

---


<a id="org5868775"></a>

### code

---

