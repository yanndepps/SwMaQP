
# Table of Contents

1.  [Notes](#org1a07399)
2.  [Handy Math](#orgea053e9)
    1.  [Sine, Cosine and Tangent](#org098b0d5)
        1.  [code](#org630d4c0)
    2.  [Rotating 2D Points](#org7d325d5)
        1.  [code](#orgca9844c)
        2.  [Learn more](#orgb7c357c)
    3.  [Euclidean Distance Between Two Points](#org45933f4)
        1.  [Two dimensions](#org467c10c)
        2.  [n dimensions](#orgfe336c9)
        3.  [code](#org99c7f95)
    4.  [Perspective Projection ( Fixed Camera )](#org3397562)
        1.  [code](#org4a504bc)
    5.  [Dot Product](#org3bde2d7)
        1.  [Two dimensions](#orgc28caf5)
        2.  [n dimensions](#orgff2e735)
    6.  [Cross Product](#org97ce1a0)
        1.  [3 dimensions](#org40ead40)
        2.  [code](#orgbe46643)



<a id="org1a07399"></a>

# Notes

It seems that the `\begin{bmatrix}` function still doesn&rsquo;t properly render in Github markdown &#x2026;


<a id="orgea053e9"></a>

# Handy Math


<a id="org098b0d5"></a>

## Sine, Cosine and Tangent

-   $sine = \frac{opposite}{hypotenuse}$
-   $cosine = \frac{adjacent}{hypotenuse}$
-   $tangent = \frac{sine}{cosine}$

---


<a id="org630d4c0"></a>

### [code](js/sketch_01.js)

---


<a id="org7d325d5"></a>

## Rotating 2D Points

-   $\begin{bmatrix}x^1\cr y^1\end{bmatrix} = \begin{bmatrix}cos\theta & - & sin\theta\cr sin\theta & \text{ } & cos\theta\end{bmatrix} \begin{bmatrix}x\cr y\end{bmatrix}$

---


<a id="orgca9844c"></a>

### code

---


<a id="orgb7c357c"></a>

### Learn more

-   [A Gentle Primer on 2D Rotations](https://www.alanzucconi.com/2016/02/03/2d-rotations/)


<a id="org45933f4"></a>

## Euclidean Distance Between Two Points

[Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) is the most intuitive, &ldquo;ordinary&rdquo; straight-line distance between two points in Euclidean space.


<a id="org467c10c"></a>

### Two dimensions

-   $p = (p_x,p_y), \text{ } q = (q_x,q_y)$
-   $distance(p,q) = \sqrt{(p_x - q_x)^2 + (p_y - q_y)^2}$


<a id="orgfe336c9"></a>

### n dimensions

-   $p = (p_1,p_2\cdot\cdot\cdot,p_n), \text{ } q = (q_1,q_2\cdot\cdot\cdot,q_n)$
-   $distance(p,q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2 + \cdot\cdot\cdot + (p_n - q_n)^2} = \sqrt{\displaystyle\sum_{i=1}^n(p_i + q_i)^2}$

---


<a id="org99c7f95"></a>

### code

---


<a id="org3397562"></a>

## Perspective Projection ( Fixed Camera )

-   $\begin{bmatrix}{x,y,z}\end{bmatrix}$ projects to $\begin{bmatrix}x\frac{d_1}{d_2},y\frac{d_1}{d_2}\end{bmatrix}$
-   **d1** = *focal length* -> the axial distance from the camera center to the image plane.
-   **d2** = *substance distance* -> the axial distance from the camera center to the subject.

---


<a id="org4a504bc"></a>

### code

---


<a id="org3bde2d7"></a>

## Dot Product


<a id="orgc28caf5"></a>

### Two dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1}\end{bmatrix}$
-   $v_1 \cdot v_2 = x_1x_2 + y_1y_2$


<a id="orgff2e735"></a>

### n dimensions

-   $a = \begin{bmatrix}{a_1,a_2,a_3,\ldots,a_n}\end{bmatrix},b = \begin{bmatrix}{b_1,b_2,b_3,\ldots,b_n}\end{bmatrix}$

-   $a \cdot b = a_1b_1 + a_2b_2 + a_3b_3 \ldots a_nb_n$

-   Two non-zero vectors **a** and **b** are orthogonal if and only if $a \cdot b = 0$.
-   If the dot product is positive, the angle between the vectors is **less** than $90\degree$
-   If the dot product is positive, the angle between the vectors is **more** than $90\degree$


<a id="org97ce1a0"></a>

## Cross Product


<a id="org40ead40"></a>

### 3 dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1,z_1}\end{bmatrix}$
-   $v_2 = \begin{bmatrix}{x_2,y_2,z_2}\end{bmatrix}$
-   $v_1 \times v_2 = \begin{bmatrix}{y_1z_2 - z_1y_2,z_1x_2 - x_1z_2,x_1y_2 - y_1x_2}\end{bmatrix}$
-   The cross product is orthogonal to both of the original vectors ( v1 and v2 ), which implies the cross product is perpendicular to the plane defined by the original vectors.
-   If the cross product of two vectors is the zero vector, either one or both of the inputs is the zero vector, or they are parallel or antiparallel.

---


<a id="orgbe46643"></a>

### code

---

