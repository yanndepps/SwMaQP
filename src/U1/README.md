
# Table of Contents

1.  [Handy Math](#org6a1b5d3)
    1.  [Sine, Cosine and Tangent](#org3a2c287)
        1.  [code](#org05e978b)
    2.  [Rotating 2D Points](#org98c1516)
        1.  [code](#orgebfa78a)
        2.  [Learn more](#orgd8951e0)
    3.  [Euclidean Distance Between Two Points](#org66bf43b)
        1.  [Two dimensions](#org312485e)
        2.  [n dimensions](#org8b3fe08)
        3.  [code](#orgf0faab9)
    4.  [Perspective Projection ( Fixed Camera )](#org9277f6d)
        1.  [code](#orgd7ddc10)
    5.  [Dot Product](#orgb8ca13e)
        1.  [Two dimensions](#org0a3eb3d)
        2.  [n dimensions](#orge445e66)
    6.  [Cross Product](#org47009bf)
        1.  [3 dimensions](#org84fc7e1)
        2.  [code](#org5159302)



<a id="org6a1b5d3"></a>

# Handy Math


<a id="org3a2c287"></a>

## Sine, Cosine and Tangent

-   $sine = \frac{opposite}{hypotenuse}$
-   $cosine = \frac{adjacent}{hypotenuse}$
-   $tangent = \frac{sine}{cosine}$

---


<a id="org05e978b"></a>

### code

---


<a id="org98c1516"></a>

## Rotating 2D Points

-   $\begin{bmatrix}x^1\cr y^1\end{bmatrix} = \begin{bmatrix}cos\theta & - & sin\theta\cr sin\theta \text{ }\text{ }\text{ }\text{ }\text{ } & cos\theta\end{bmatrix} \begin{bmatrix}x\cr y\end{bmatrix}$

---


<a id="orgebfa78a"></a>

### code

---


<a id="orgd8951e0"></a>

### Learn more

-   [A Gentle Primer on 2D Rotations](https://www.alanzucconi.com/2016/02/03/2d-rotations/)


<a id="org66bf43b"></a>

## Euclidean Distance Between Two Points

[Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) is the most intuitive, &ldquo;ordinary&rdquo; straight-line distance between two points in Euclidean space.


<a id="org312485e"></a>

### Two dimensions

-   $p = (p_x,p_y), \text{ } q = (q_x,q_y)$
-   $distance(p,q) = \sqrt{(p_x - q_x)^2 + (p_y - q_y)^2}$


<a id="org8b3fe08"></a>

### n dimensions

-   $p = (p_1,p_2\cdot\cdot\cdot,p_n), \text{ } q = (q_1,q_2\cdot\cdot\cdot,q_n)$
-   $distance(p,q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2 + \cdot\cdot\cdot + (p_n - q_n)^2} = \sqrt{\displaystyle\sum_{i=1}^n(p_i + q_i)^2}$

---


<a id="orgf0faab9"></a>

### code

---


<a id="org9277f6d"></a>

## Perspective Projection ( Fixed Camera )

-   $\begin{bmatrix}{x,y,z}\end{bmatrix}$ projects to $\begin{bmatrix}x\frac{d_1}{d_2},y\frac{d_1}{d_2}\end{bmatrix}$
-   **d1** = *focal length* -> the axial distance from the camera center to the image plane.
-   **d2** = *substance distance* -> the axial distance from the camera center to the subject.

---


<a id="orgd7ddc10"></a>

### code

---


<a id="orgb8ca13e"></a>

## Dot Product


<a id="org0a3eb3d"></a>

### Two dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1}\end{bmatrix}$
-   $v_1 \cdot v_2 = x_1x_2 + y_1y_2$


<a id="orge445e66"></a>

### n dimensions

-   $a = \begin{bmatrix}{a_1,a_2,a_3,\ldots,a_n}\end{bmatrix},b = \begin{bmatrix}{b_1,b_2,b_3,\ldots,b_n}\end{bmatrix}$

-   $a \cdot b = a_1b_1 + a_2b_2 + a_3b_3 \ldots a_nb_n$

-   Two non-zero vectors **a** and **b** are orthogonal if and only if $a \cdot b = 0$.
-   If the dot product is positive, the angle between the vectors is **less** than $90\degree$
-   If the dot product is positive, the angle between the vectors is **more** than $90\degree$


<a id="org47009bf"></a>

## Cross Product


<a id="org84fc7e1"></a>

### 3 dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1,z_1}\end{bmatrix}$
-   $v_2 = \begin{bmatrix}{x_2,y_2,z_2}\end{bmatrix}$
-   $v_1 \times v_2 = \begin{bmatrix}{y_1z_2 - z_1y_2,z_1x_2 - x_1z_2,x_1y_2 - y_1x_2}\end{bmatrix}$
-   The cross product is orthogonal to both of the original vectors ( v1 and v2 ), which implies the cross product is perpendicular to the plane defined by the original vectors.
-   If the cross product of two vectors is the zero vector, either one or both of the inputs is the zero vector, or they are parallel or antiparallel.

---


<a id="org5159302"></a>

### code

---

