关于react引入图片无法显示的问题（不报错）

问题在UI组件里面使用添加图片，直接用src给出路径

![img](https://forevers.love/upload/32391698136162_.pic.jpg)

路径正确，vscode中可以正确访问到。实际中却不显示，或显示“？”

解决方案：将图片路径由import引入，再给src。

![img](https://forevers.love/upload/32441698136248_.pic.jpg)