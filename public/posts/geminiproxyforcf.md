## 使用 CloudFlare 实现在大陆访问 Gemini Api

前些日子想使用 [Gemini Api](https://makersuite.google.com/app/apikey) 生成文章摘要，问题是在大陆会报 网络错误，

今天继续用我们的大善人 CloudFlare 来解决这个问题。

确保你已经有一个域名绑定在 CloudFlare 了

首先打开 [https://dash.cloudflare.com](https://dash.cloudflare.com/) 在左侧菜单点击`Workers 和 Pages`

![](https://telegraph-image-6cq.pages.dev/file/fd5b71d9fc891664b08e4.jpg)

点击 `Create application` 按钮创建一个应用程序

![](https://telegraph-image-6cq.pages.dev/file/ead65e2f1457ce8c85883.jpg)

点击`Create Worker`按钮

![](https://telegraph-image-6cq.pages.dev/file/e1cc5df15393655c15087.jpg)

给这个的Worker起个名字，我这里起的是`gemini-proxy`然后点击`Deploy`部署按钮

![](https://telegraph-image-6cq.pages.dev/file/98a0f983381a68b03f50b.jpg)

在这里你会看到一个部署成功的页面。页面中包含一个域名，这是Worker的默认域名（这个域名需要🪜才可以正常访问，后面会绑定自己的域名使其可以在大陆正常访问）。

我们到这一步直接点击`Edit code`按钮。

![](https://telegraph-image-6cq.pages.dev/file/3ef284f44f84a2b877656.jpg)

在代码编辑页面中，删除默认的代码，并填入以下几行代码：

```
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.host = 'generativelanguage.googleapis.com';
    return fetch(new Request(url, request))
  }
}
```

点击右上角的`Save and deploy`按钮即可。

![](https://telegraph-image-6cq.pages.dev/file/b15ad847c6e4585e88da1.jpg)

完成以上步骤，其实你的Gemini代理就已经就绪了。

## 绑定自己的域名

接下来我们进一步设置，用自己的域名去实现大陆访问。

转到自己在 CloudFlare 上域名的控制面板，点击左侧菜单`DNS`来添加域名解析。

这里我使用自己的域名`qing.pw`，给它增加了子域名A记录：`gemini.qing.pw`

注意：如果想使用 CloudFlare 优选工具选出来的高质量ip，不要开启代理的小黄云。

![](https://telegraph-image-6cq.pages.dev/file/2bea30bce48543a483d16.jpg)

DNS解析记录操作完毕之后，点击左侧菜单`Workers路由`来让我们设置的域名和Worker的路由关系。

![](https://telegraph-image-6cq.pages.dev/file/9ffbf2240bf052472bdc3.jpg)

在`Workers路由`界面，点击`添加路由`按钮，参考如下填写：

![](https://telegraph-image-6cq.pages.dev/file/6fd5cf371b5a6015acd29.jpg)

这里域名换成你刚才设置的那个，`Worker`也选择你之前创建的。点击`Save`即可。

完成这一步你就可以用你自己的域名来请求`Gemini`了。比如我这个域名：

Gemini官方给的例子是：

```
curl \
  -H 'Content-Type: application/json' \
  -d '{"contents":[{"parts":[{"text":"Write a story about a magic backpack"}]}]}' \
  -X POST https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY
```

我们将`generativelanguage.googleapis.com`部分替换为我们的域名`gemini.qing.pw`

```
curl \
  -H 'Content-Type: application/json' \
  -d '{"contents":[{"parts":[{"text":"Write a story about a magic backpack"}]}]}' \
  -X POST https://gemini.baipiao.io/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY
```

并使用 API 测试工具（如APifox）测试是否可以正常使用：

![](https://telegraph-image-6cq.pages.dev/file/d0502a317a46ac4f7eb5f.jpg)

## 参数解析

Headers [ `Content-Type ` : `application/json` ]

Params [ `key` : `YOUR_API_KEY `]

Body:

```
{
    "contents": [
        {
            "parts": [
                {
                    "text": "your_text"
                }
            ]
        }
    ]
}
```

