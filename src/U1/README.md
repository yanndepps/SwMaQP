
# Table of Contents

1.  [Handy Math](#org93d771f)
    1.  [Sine, Cosine and Tangent](#org82f99ee)
        1.  [code](#orga13f37e)
    2.  [Rotating 2D Points](#org097daed)
        1.  [code](#org896c9f1)
        2.  [Learn more](#orgc5308b8)
    3.  [Euclidean Distance Between Two Points](#org45a244a)
        1.  [Two dimensions](#org8392726)
        2.  [n dimensions](#org7b4454f)
        3.  [code](#orgcc561cc)
    4.  [Perspective Projection ( Fixed Camera )](#org4b82eca)
        1.  [code](#org45cb034)
    5.  [Dot Product](#org6e50f92)
        1.  [Two dimensions](#orgaf03708)
        2.  [n dimensions](#org594331f)
    6.  [Cross Product](#orgbad4e53)
        1.  [3 dimensions](#org19e95c9)
        2.  [code](#org310b31d)



<a id="org93d771f"></a>

# Handy Math


<a id="org82f99ee"></a>

## Sine, Cosine and Tangent

-   $sine = \frac{opposite}{hypotenuse}$
-   $cosine = \frac{adjacent}{hypotenuse}$
-   $tangent = \frac{sine}{cosine}$

---


<a id="orga13f37e"></a>

### code

---


<a id="org097daed"></a>

## Rotating 2D Points

-   $$\begin{bmatrix}{x^1}\cr{y^1}\end{bmatrix} = \begin{bmatrix}{cos\theta - sin\theta}\cr{sin\theta \text{ } \text{  } \text{  } \text{  } \text{  } cos\theta}\end{bmatrix} \begin{bmatrix}{x}\cr{y}\end{bmatrix}$$

---


<a id="org896c9f1"></a>

### code

---


<a id="orgc5308b8"></a>

### Learn more

-   [A Gentle Primer on 2D Rotations](https://www.alanzucconi.com/2016/02/03/2d-rotations/)


<a id="org45a244a"></a>

## Euclidean Distance Between Two Points

[Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) is the most intuitive, &ldquo;ordinary&rdquo; straight-line distance between two points in Euclidean space.


<a id="org8392726"></a>

### Two dimensions

-   $p = (p_x,p_y), \text{ } q = (q_x,q_y)$
-   $distance(p,q) = \sqrt{(p_x - q_x)^2 + (p_y - q_y)^2}$


<a id="org7b4454f"></a>

### n dimensions

-   $p = (p_1,p_2\cdot\cdot\cdot,p_n), \text{ } q = (q_1,q_2\cdot\cdot\cdot,q_n)$
-   $distance(p,q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2 + \cdot\cdot\cdot + (p_n - q_n)^2} = \sqrt{\displaystyle\sum_{i=1}^n(p_i + q_i)^2}$

---


<a id="orgcc561cc"></a>

### code

---


<a id="org4b82eca"></a>

## Perspective Projection ( Fixed Camera )

-   $\begin{bmatrix}{x,y,z}\end{bmatrix}$ projects to $\begin{bmatrix}x\frac{d_1}{d_2},y\frac{d_1}{d_2}\end{bmatrix}$
-   **d1** = *focal length* -> the axial distance from the camera center to the image plane.
-   **d2** = *substance distance* -> the axial distance from the camera center to the subject.

---


<a id="org45cb034"></a>

### code

---


<a id="org6e50f92"></a>

## Dot Product


<a id="orgaf03708"></a>

### Two dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1}\end{bmatrix}$
-   $v_1 \cdot v_2 = x_1x_2 + y_1y_2$


<a id="org594331f"></a>

### n dimensions

-   $a = \begin{bmatrix}{a_1,a_2,a_3,\ldots,a_n}\end{bmatrix},b = \begin{bmatrix}{b_1,b_2,b_3,\ldots,b_n}\end{bmatrix}$

-   $a \cdot b = a_1b_1 + a_2b_2 + a_3b_3 \ldots a_nb_n$

-   Two non-zero vectors **a** and **b** are orthogonal if and only if $a \cdot b = 0$.
-   If the dot product is positive, the angle between the vectors is **less** than $90\degree$
-   If the dot product is positive, the angle between the vectors is **more** than $90\degree$


<a id="orgbad4e53"></a>

## Cross Product


<a id="org19e95c9"></a>

### 3 dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1,z_1}\end{bmatrix}$
-   $v_2 = \begin{bmatrix}{x_2,y_2,z_2}\end{bmatrix}$
-   $v_1 \times v_2 = \begin{bmatrix}{y_1z_2 - z_1y_2,z_1x_2 - x_1z_2,x_1y_2 - y_1x_2}\end{bmatrix}$
-   The cross product is orthogonal to both of the original vectors ( v1 and v2 ), which implies the cross product is perpendicular to the plane defined by the original vectors.
-   If the cross product of two vectors is the zero vector, either one or both of the inputs is the zero vector, or they are parallel or antiparallel.

---


<a id="org310b31d"></a>

### code

---

