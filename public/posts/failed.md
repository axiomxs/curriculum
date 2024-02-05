## **Failed to create a socket for IPv4 ‘0.0.0.0‘: errno: 13**

**这是我在部署 linuxDeploy 里面宝塔面板的 mysql 的时候出现的**

**因为网络权限不足，给 mysql 用户添加权限就行了**

```
sudo usermod -a -G aid_inet,aid_net_raw mysql
```
