问题：高度塌陷

![img](https://forevers.love/upload/33031698303674_.pic.jpg)

因为子容器浮动，类似于在二层，而父容器在一层。子容器无法撑开父容器的高度，导致父元素高度塌陷。

![img](https://forevers.love/upload/33061698303765_.pic.jpg)

解决：

![img](https://forevers.love/upload/33091698303982_.pic.jpg)

给父元素的伪元素加上清除浮动，

子元素是浮动元素，但是清除浮动定义在了父元素的伪元素上，而这个伪元素没有浮动。

为什么不给子元素定义清除浮动？

关于clear的定义：

![img](https://forevers.love/upload/33131698304252_.pic.jpg)

![img](https://forevers.love/upload/33141698304311_.pic-liwa.jpg)

![img](https://forevers.love/upload/33151698304353_.pic.jpg)

哪边清除浮动，就把内容放在哪边浮动的下面

![img](https://forevers.love/upload/33181698304433_.pic.jpg)

把after当成最后一个元素，放在浮动元素的下面。

附其他四种解决高度塌陷方法：

![img](https://forevers.love/upload/33071698303896_.pic.jpg)