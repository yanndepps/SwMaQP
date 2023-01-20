
# Table of Contents

1.  [Notes](#orgb1decc7)
2.  [Handy Math](#orgcfbdcaf)
    1.  [Sine, Cosine and Tangent](#org252e004)
        1.  [code](#org33826fb)
    2.  [Rotating 2D Points](#org1dc3e81)
        1.  [code](#orgcfbc8e1)
        2.  [Learn more](#org23280f1)
    3.  [Euclidean Distance Between Two Points](#orga1e5259)
        1.  [Two dimensions](#org3340c2d)
        2.  [n dimensions](#org6b86ab4)
        3.  [code](#org00e173b)
    4.  [Perspective Projection ( Fixed Camera )](#orgf9ef23d)
        1.  [code](#org0b9d748)
    5.  [Dot Product](#org1820b0e)
        1.  [Two dimensions](#orgda0f8a7)
        2.  [n dimensions](#orga7f2c93)
    6.  [Cross Product](#org91c3f52)
        1.  [3 dimensions](#org547578e)
        2.  [code](#org893bf22)



<a id="orgb1decc7"></a>

# Notes

It seems that the `\begin{bmatrix}` function still doesn&rsquo;t properly render in Github markdown &#x2026;


<a id="orgcfbdcaf"></a>

# Handy Math


<a id="org252e004"></a>

## Sine, Cosine and Tangent

-   $sine = \frac{opposite}{hypotenuse}$
-   $cosine = \frac{adjacent}{hypotenuse}$
-   $tangent = \frac{sine}{cosine}$

---


<a id="org33826fb"></a>

### code

---


<a id="org1dc3e81"></a>

## Rotating 2D Points

-   $\begin{bmatrix}x^1\cr y^1\end{bmatrix} = \begin{bmatrix}cos\theta & - & sin\theta\cr sin\theta & \text{ } & cos\theta\end{bmatrix} \begin{bmatrix}x\cr y\end{bmatrix}$

---


<a id="orgcfbc8e1"></a>

### code

---


<a id="org23280f1"></a>

### Learn more

-   [A Gentle Primer on 2D Rotations](https://www.alanzucconi.com/2016/02/03/2d-rotations/)


<a id="orga1e5259"></a>

## Euclidean Distance Between Two Points

[Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) is the most intuitive, &ldquo;ordinary&rdquo; straight-line distance between two points in Euclidean space.


<a id="org3340c2d"></a>

### Two dimensions

-   $p = (p_x,p_y), \text{ } q = (q_x,q_y)$
-   $distance(p,q) = \sqrt{(p_x - q_x)^2 + (p_y - q_y)^2}$


<a id="org6b86ab4"></a>

### n dimensions

-   $p = (p_1,p_2\cdot\cdot\cdot,p_n), \text{ } q = (q_1,q_2\cdot\cdot\cdot,q_n)$
-   $distance(p,q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2 + \cdot\cdot\cdot + (p_n - q_n)^2} = \sqrt{\displaystyle\sum_{i=1}^n(p_i + q_i)^2}$

---


<a id="org00e173b"></a>

### code

---


<a id="orgf9ef23d"></a>

## Perspective Projection ( Fixed Camera )

-   $\begin{bmatrix}{x,y,z}\end{bmatrix}$ projects to $\begin{bmatrix}x\frac{d_1}{d_2},y\frac{d_1}{d_2}\end{bmatrix}$
-   **d1** = *focal length* -> the axial distance from the camera center to the image plane.
-   **d2** = *substance distance* -> the axial distance from the camera center to the subject.

---


<a id="org0b9d748"></a>

### code

---


<a id="org1820b0e"></a>

## Dot Product


<a id="orgda0f8a7"></a>

### Two dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1}\end{bmatrix}$
-   $v_1 \cdot v_2 = x_1x_2 + y_1y_2$


<a id="orga7f2c93"></a>

### n dimensions

-   $a = \begin{bmatrix}{a_1,a_2,a_3,\ldots,a_n}\end{bmatrix},b = \begin{bmatrix}{b_1,b_2,b_3,\ldots,b_n}\end{bmatrix}$

-   $a \cdot b = a_1b_1 + a_2b_2 + a_3b_3 \ldots a_nb_n$

-   Two non-zero vectors **a** and **b** are orthogonal if and only if $a \cdot b = 0$.
-   If the dot product is positive, the angle between the vectors is **less** than $90\degree$
-   If the dot product is positive, the angle between the vectors is **more** than $90\degree$


<a id="org91c3f52"></a>

## Cross Product


<a id="org547578e"></a>

### 3 dimensions

-   $v_1 = \begin{bmatrix}{x_1,y_1,z_1}\end{bmatrix}$
-   $v_2 = \begin{bmatrix}{x_2,y_2,z_2}\end{bmatrix}$
-   $v_1 \times v_2 = \begin{bmatrix}{y_1z_2 - z_1y_2,z_1x_2 - x_1z_2,x_1y_2 - y_1x_2}\end{bmatrix}$
-   The cross product is orthogonal to both of the original vectors ( v1 and v2 ), which implies the cross product is perpendicular to the plane defined by the original vectors.
-   If the cross product of two vectors is the zero vector, either one or both of the inputs is the zero vector, or they are parallel or antiparallel.

---


<a id="org893bf22"></a>

### code

---

