
# Table of Contents

1.  [Handy Math](#org280937f)
    1.  [Sine, Cosine and Tangent](#org753ca9c)
        1.  [code](#orgbe352ca)
    2.  [Rotating 2D Points](#org0375dcf)
        1.  [code](#org1b9530d)
        2.  [Learn more](#org95d0d63)
    3.  [Euclidean Distance Between Two Points](#org1e6d984)
        1.  [Two dimensions](#org9d7658d)
        2.  [n dimensions](#org7821307)
        3.  [code](#orgb35a7e9)
    4.  [Perspective Projection ( Fixed Camera )](#org6e67fd3)
        1.  [code](#org6f376f8)
    5.  [Dot Product](#org61b808d)
        1.  [Two dimensions](#orgbf8cdcc)
        2.  [n dimensions](#orgb488f3f)
    6.  [Cross Product](#org9ce6fab)
        1.  [3 dimensions](#orgb35e686)
        2.  [code](#orga78b221)



<a id="org280937f"></a>

# Handy Math


<a id="org753ca9c"></a>

## Sine, Cosine and Tangent

-   $sine = \frac{opposite}{hypotenuse}$
-   $cosine = \frac{adjacent}{hypotenuse}$
-   $tangent = \frac{sine}{cosine}$

---


<a id="orgbe352ca"></a>

### code

---


<a id="org0375dcf"></a>

## Rotating 2D Points

-   $\begin{bmatrix}x^1\cr y^1\end{bmatrix} = \begin{bmatrix}cos\theta - sin\theta\cr sin\theta \text{ } \text{  } \text{  } \text{  } \text{  } cos\theta\end{bmatrix} \begin{bmatrix}x\cr y\end{bmatrix}$

---


<a id="org1b9530d"></a>

### code

---


<a id="org95d0d63"></a>

### Learn more

-   [A Gentle Primer on 2D Rotations](https://www.alanzucconi.com/2016/02/03/2d-rotations/)


<a id="org1e6d984"></a>

## Euclidean Distance Between Two Points

[Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) is the most intuitive, &ldquo;ordinary&rdquo; straight-line distance between two points in Euclidean space.


<a id="org9d7658d"></a>

### Two dimensions

-   $p = (p_x,p_y), \text{ } q = (q_x,q_y)$
-   $distance(p,q) = \sqrt{(p_x - q_x)^2 + (p_y - q_y)^2}$


<a id="org7821307"></a>

### n dimensions

-   $p = (p_1,p_2\cdot\cdot\cdot,p_n), \text{ } q = (q_1,q_2\cdot\cdot\cdot,q_n)$
-   $distance(p,q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2 + \cdot\cdot\cdot + (p_n - q_n)^2} = \sqrt{\displaystyle\sum_{i=1}^n(p_i + q_i)^2}$

---


<a id="orgb35a7e9"></a>

### code

---


<a id="org6e67fd3"></a>

## Perspective Projection ( Fixed Camera )

-   $\begin{bmatrix}{x,y,z}\end{bmatrix}$ projects to $\begin{bmatrix}x\frac{d_1}{d_2},y\frac{d_1}{d_2}\end{bmatrix}$
-   **d1** = *focal length* -> the axial distance from the camera center to the image plane.
-   **d2** = *substance distance* -> the axial distance from the camera center to the subject.

---


<a id="org6f376f8"></a>

### code

---


<a id="org61b808d"></a>

## Dot Product


<a id="orgbf8cdcc"></a>

### Two dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1}\end{bmatrix}$
-   $v_1 \cdot v_2 = x_1x_2 + y_1y_2$


<a id="orgb488f3f"></a>

### n dimensions

-   $a = \begin{bmatrix}{a_1,a_2,a_3,\ldots,a_n}\end{bmatrix},b = \begin{bmatrix}{b_1,b_2,b_3,\ldots,b_n}\end{bmatrix}$

-   $a \cdot b = a_1b_1 + a_2b_2 + a_3b_3 \ldots a_nb_n$

-   Two non-zero vectors **a** and **b** are orthogonal if and only if $a \cdot b = 0$.
-   If the dot product is positive, the angle between the vectors is **less** than $90\degree$
-   If the dot product is positive, the angle between the vectors is **more** than $90\degree$


<a id="org9ce6fab"></a>

## Cross Product


<a id="orgb35e686"></a>

### 3 dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1,z_1}\end{bmatrix}$
-   $v_2 = \begin{bmatrix}{x_2,y_2,z_2}\end{bmatrix}$
-   $v_1 \times v_2 = \begin{bmatrix}{y_1z_2 - z_1y_2,z_1x_2 - x_1z_2,x_1y_2 - y_1x_2}\end{bmatrix}$
-   The cross product is orthogonal to both of the original vectors ( v1 and v2 ), which implies the cross product is perpendicular to the plane defined by the original vectors.
-   If the cross product of two vectors is the zero vector, either one or both of the inputs is the zero vector, or they are parallel or antiparallel.

---


<a id="orga78b221"></a>

### code

---

