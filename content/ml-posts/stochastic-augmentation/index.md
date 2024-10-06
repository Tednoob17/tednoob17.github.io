---
title: "Stochastic Augmentation in Deep Learning"
date: 2021-04-11T16:30:51+05:30
tags: ["Data Augmentation", "Tensorflow"]
posttype: "AI-ML"
summary: "This post describes stochastic augmentation, a technique that introduces randomness into datasets. This approach has proven effective in improving the generalization"
hidden: true
---

In the ever-evolving landscape that is deep learning, innovations and breakthroughs are commonplace. However, there is always one little crutch, ie training data. Unbiased Datasets with good size and quality annotations are either expensive or hard obtain, especially for application specific needs.

These crutch factors could be things like size, quality, annotations efforts, imbalance in class/variations and distributions, and of course there is [Known Unknowns](https://research.google/blog/uncovering-unknown-unknowns-in-machine-learning/?m=1). It is always a good idea to know how to make full use of the available data, one such way is Augmentation.

Augmentation is not a new concept. It basically involves the process of artificially expanding datasets by introducing transformations like rotation, changing brightness, scaling, flips and many more. Usually these transformations are performed deterministicly, ie where, when, what transformations is predetermined and applied either during data preparation or training time. However, there is a better way to do augmentation: by introducing some randomness.

## Stochastic Augmentation

Enter stochastic augmentation, This introduces a randomness in that augmentation process, unlike the deterministic approach one discussed earlier which involves apply fixed transformations, stochastic augmentation adds variability by randomly selecting/introducing augmentation based on a probability. This injects lets call it noise (the good kind) into the training data, forcing the model to learn more of robust and invariant representations, which can lead to better generalization.

There are more benefits for applying augmentation like this, such as breaking correlations, mitigating overfitting to training data (especially between relatively adjacent samples), forces the model to learn more abstract and robust features, and can even reduce the effects of distribution imbalances.

## How (to apply)?

Now comes the question of how to apply stochastic augmentation. Simple, Assign a probability for each augmentation (`p < 1`), apply augmentation with probability of (`p`) and return unmodified (without any augmentation) with probability of (`1-p`). By controlling (`p`) you can determine how much of that augmentation you introduce to the training data.

TensorFlow provides a way of adding stochastic augmentations in image datasets, there are [`tf.image.random_*`](https://www.tensorflow.org/api_docs/python/tf/image/random_brightness) ops. You can add these to your input pipeline. for example

```python
def add_augmentation(img, label):
    img = tf.image.random_brightness(img, ....)
    img = tf.image.random_contrast(img, ...)
    ....
    return img, label
ds = tf.data.Dataset. ...
ds = ds.map(map_func = add_augmentation)
...
```

Refer to the `tf.image.random_*` ops definition, the assignment of (`p`) varies for each ops call, with some even having hardcoded (`p`) values (e.g., `tf.image.random_flip_*`). In some cases, you would also want to know the outcome of these random ops to adjust or augment the labels, or finer control.

In those cases, You can add it as follows,

```python
def flip_augment(img, label, p):
    if tf.random.uniform([]) > p: return img, label
    img = tf.image.flip_left_right(img)
    label = # label augmentation
    .....
    return img, label
ds = tf.data.Dataset. ...
ds = ds.map(lambda x,y: flip_augment(x, y, p = 0.25))
....
```
The above example will add 25% of randomized flip augmentation.

## Final Note
A little bit of caution: implementing stochastic augmentations in practice will require some experimentation. Factors like the probability for each augmentation, the choice of augmentation, and how to apply these augmentations will change depending on available data, the model, and application specifics.

Hope this helps :)
