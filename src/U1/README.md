
# Table of Contents

1.  [Handy Math](#org54c258a)
    1.  [Sine, Cosine and Tangent](#orgd8ba437)
        1.  [code](#org04ffd8c)
    2.  [Rotating 2D Points](#org478fdbb)
        1.  [code](#org08a26ad)
        2.  [Learn more](#orgca508f8)
    3.  [Euclidean Distance Between Two Points](#orgc61fc6e)
        1.  [Two dimensions](#org417dd0f)
        2.  [n dimensions](#orgaf05cfd)
        3.  [code](#org34465a7)
    4.  [Perspective Projection ( Fixed Camera )](#org9b0644f)
        1.  [code](#org9e22a4e)
    5.  [Dot Product](#orgbdc624e)
        1.  [Two dimensions](#orgd544b91)
        2.  [n dimensions](#org0446767)
    6.  [Cross Product](#org167bfa8)
        1.  [3 dimensions](#org1515059)
        2.  [code](#orgb0b1810)



<a id="org54c258a"></a>

# Handy Math


<a id="orgd8ba437"></a>

## Sine, Cosine and Tangent

-   $sine = \frac{opposite}{hypotenuse}$
-   $cosine = \frac{adjacent}{hypotenuse}$
-   $tangent = \frac{sine}{cosine}$

---


<a id="org04ffd8c"></a>

### code

---


<a id="org478fdbb"></a>

## Rotating 2D Points

-   $\begin{bmatrix}{x^1}\cr{y^1}\end{bmatrix} = \begin{bmatrix}{cos\theta - sin\theta}\cr{sin\theta \text{ } \text{  } \text{  } \text{  } \text{  } cos\theta}\end{bmatrix} \begin{bmatrix}{x}\cr{y}\end{bmatrix}$

---


<a id="org08a26ad"></a>

### code

---


<a id="orgca508f8"></a>

### Learn more

-   [A Gentle Primer on 2D Rotations](https://www.alanzucconi.com/2016/02/03/2d-rotations/)


<a id="orgc61fc6e"></a>

## Euclidean Distance Between Two Points

[Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) is the most intuitive, &ldquo;ordinary&rdquo; straight-line distance between two points in Euclidean space.


<a id="org417dd0f"></a>

### Two dimensions

-   $p = (p_x,p_y), \text{ } q = (q_x,q_y)$
-   $distance(p,q) = \sqrt{(p_x - q_x)^2 + (p_y - q_y)^2}$


<a id="orgaf05cfd"></a>

### n dimensions

-   $p = (p_1,p_2\cdot\cdot\cdot,p_n), \text{ } q = (q_1,q_2\cdot\cdot\cdot,q_n)$
-   $distance(p,q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2 + \cdot\cdot\cdot + (p_n - q_n)^2} = \sqrt{\displaystyle\sum_{i=1}^n(p_i + q_i)^2}$

---


<a id="org34465a7"></a>

### code

---


<a id="org9b0644f"></a>

## Perspective Projection ( Fixed Camera )

-   $\begin{bmatrix}{x,y,z}\end{bmatrix}$ projects to $\begin{bmatrix}x\frac{d_1}{d_2},y\frac{d_1}{d_2}\end{bmatrix}$
-   **d1** = *focal length* -> the axial distance from the camera center to the image plane.
-   **d2** = *substance distance* -> the axial distance from the camera center to the subject.

---


<a id="org9e22a4e"></a>

### code

---


<a id="orgbdc624e"></a>

## Dot Product


<a id="orgd544b91"></a>

### Two dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1}\end{bmatrix}$
-   $v_1 \cdot v_2 = x_1x_2 + y_1y_2$


<a id="org0446767"></a>

### n dimensions

-   $a = \begin{bmatrix}{a_1,a_2,a_3,\ldots,a_n}\end{bmatrix},b = \begin{bmatrix}{b_1,b_2,b_3,\ldots,b_n}\end{bmatrix}$

-   $a \cdot b = a_1b_1 + a_2b_2 + a_3b_3 \ldots a_nb_n$

-   Two non-zero vectors **a** and **b** are orthogonal if and only if $a \cdot b = 0$.
-   If the dot product is positive, the angle between the vectors is **less** than $90\degree$
-   If the dot product is positive, the angle between the vectors is **more** than $90\degree$


<a id="org167bfa8"></a>

## Cross Product


<a id="org1515059"></a>

### 3 dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1,z_1}\end{bmatrix}$
-   $v_2 = \begin{bmatrix}{x_2,y_2,z_2}\end{bmatrix}$
-   $v_1 \times v_2 = \begin{bmatrix}{y_1z_2 - z_1y_2,z_1x_2 - x_1z_2,x_1y_2 - y_1x_2}\end{bmatrix}$
-   The cross product is orthogonal to both of the original vectors ( v1 and v2 ), which implies the cross product is perpendicular to the plane defined by the original vectors.
-   If the cross product of two vectors is the zero vector, either one or both of the inputs is the zero vector, or they are parallel or antiparallel.

---


<a id="orgb0b1810"></a>

### code

---

