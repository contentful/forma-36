# Forma 36 FCSS

Forma 36 FCSS - Utility CSS classes for applying spacing, colors, typography, shadows, and transitions to elements.

## Getting started

Import the stlyes.css file into your stylesheet.

```
@import '@contentful/forma-36-fcss/dist/styles.css`
```

## Naming convention

The class names consist out of the prefix (e.g. .f36-) the attribute (e.g. margin-bottom) and the scale or modifier (--xs).
See a list of all class names below

### Spacing

**Margin**

```
margin-top
margin-bottom
margin-right
margin-left
margin
margin-horizontal
margin-vertical

Scale:
xs, s, m, l, xl, 2xl, 3xl, 4xl

Class name composition example:

 .f36-margin-top--xs
```

**Padding**

```
padding-top
padding-bottom
padding-right
padding-left
padding
padding-horizontal
padding-vertical

Scale:
xs, s, m, l, xl, 2xl, 3xl, 4xl

Class name composition example:

 .f36-padding-top--xs
```

### Typography

**Font Families**

```
.font-family--sans-serif
.font-family--monospace
```

**Typography Scale**

```
font-size

Scale:
s, m, l, xl, 2xl, 3xl

Class name composition example:

 .f36-font-size--s
```

**Weights**

```
font-weight

Scale:
normal, medium, demi-bold

Class name composition example:

.f36-font-weight--normal
```

**Line Height**

```
line-height

Scale:
default, condensed

Classname composition example:

.f36-line-height--default
```

### Colors

**Text Colors & Backgrounds**

Semantic Colors:

| Color                | Background                      |
| -------------------- | :------------------------------ |
| .f36-color--primary, | .f36-background-color--primary  |
| .f36-color--positive | .f36-background-color--positive |
| .f36-color--negative | .f36-background-color--negative |
| .f36-color--warning  | .f36-background-color--warning  |

Text Colors:

| Color                 |
| --------------------- |
| .f36-color--text-dark |
| .f36-color--text-mid  |
| .f36-color--text-mid  |

Element Colors

| Color                        | Background                              |
| ---------------------------- | :-------------------------------------- |
| .f36-color--element-darkest  | .f36-background-color--element-darkest  |
| .f36-color--element-dark     | .f36-background-color--element-dark     |
| .f36-color--element-mid      | .f36-background-color--element-mid      |
| .f36-color--element-light    | .f36-background-color--element-light    |
| .f36-color--element-lightest | .f36-background-color--element-lightest |

Contast Colors

| Color                      | Background                            |
| -------------------------- | :------------------------------------ |
| .f36-color--contrast-dark  | .f36-background-color--contrast-dark  |
| .f36-color--contrast-mid   | .f36-background-color--contrast-mid   |
| .f36-color--contrast-light | .f36-background-color--contrast-light |

Colors:

| Color              | Background                    |
| ------------------ | :---------------------------- |
| .f36-color--blue   | .f36-background-color--blue   |
| .f36-color--green  | .f36-background-color--green  |
| .f36-color--red    | .f36-background-color--red    |
| .f36-color--orange | .f36-background-color--orange |
| .f36-color--coral  | .f36-background-color--coral  |

Secondary Colors:

| Color            | Background                  |
| ---------------- | :-------------------------- |
| .f36-color--mint | .f36-background-color--mint |
| .f36-color--ice  | .f36-background-color--ice  |

White:

| Color             | Background                   |
| ----------------- | :--------------------------- |
| .f36-color--white | .f36-background-color--white |

## Shadows

```
box-shadow

Scale:
default, heavy

Class name composition example:

.f36-box-shadow--default
```

### Glows

```
box-shadow

Scale:
primary, negative, positive

Class name composition example:

.f36-glow--primary
```

## Transitions

```
transition-duration

Scale:
short, default, long

Class name composition example:

.f36-transition-duration--short
```

### Easing

```
transition-easing

Scale:
default, cubic-bezier

Class name composition example:

.f36-transition-easing--default
```
