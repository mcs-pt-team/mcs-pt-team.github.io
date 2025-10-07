# GTIIT校园网进阶配置教程

## 1. 前言

当你来到GTIIT，你会发现尽管你可以访问Google等学术网站，但是社交媒体是被禁止的，包括各种AI。

本文旨在教你如何让代理工具与GTIIT校园网完美共存，解决各种问题比如

- **为什么使用校园网且使用Clash或其他代理工具并配置好了规则，但是无法访问moodle，student？**
- **为什么不使用校园网的情况但使用Clash或其他代理工具且就算全局海外，也可以访问moodle？**
- **开了代理工具情况下，如果我要访问students是不是必须手动关闭Clash等代理工具？**

这些问题均能得到完美解决，本教程基于**Windows+Clash(v2.4.2)+Clash虚拟网卡（TUN）模式**

## 2. 各中外合办网络开放程度一览

由本人（石越）通过社交媒体以及学校官网总结出来，不保证绝对准确。

|学校/对比项|Academic access|Social Media access|
| :---------------------------| :------------------------------: | :----------------------------------: |
|上纽|✔️|✔️|
|昆杜|✔️|✔️|
|宁诺|✔️|✔️|
|西浦|✔️|❌|
|北师港浸|✔️|❌|
|温肯|✔️|✔️|
|港中文深|✔️|❌|
|广以|✔️|❌|
|深北莫|❌|❌|
|港科广|✔️|❌|
|港城莞|✔️|❌|

结论：还得是美国合办的大学以及诺丁汉真中国校区开放啊！

## 3. 目的

-   我们的目的保证在**Clash或其他代理工具一直开启在后台**且**连接校园网或开启GTIIT VPN**的情况下，可以成功访问moodle，students，servicehub这些网站。

    这样就可以实现无感翻墙，对于各种国内外包括GTIIT的网络资源，都可以无缝访问，不需要频繁切换VPN的开关。

-   你可以尝试一下，当你开启了Clash或代理工具情况下，95%的可能性students平台是打不开的，70%的可能性moodle是打不开的。

## 4. 前置要求

我使用**Clash Verge Rev v2.4.2代理工具**，如果你想要用其余工具请自行尝试。

确保你配置好了订阅连接以及开启了**规则模式**。

## 5. 正式教程

1. 进入设置，开启**虚拟网卡模式**不要使用系统代理（缺点：代理流量不完整）

    我的虚拟网卡模式配置如下（尽量保持一致）：

    |       配置项目       | 配置参数 |
    | :------------------: | :------: |
    |     TUN 模式堆栈     |  GVisor  |
    |     TUN 网卡名称     |  Mihomo  |
    |   自动设置全局路由   |    ON    |
    |       严格路由       |   OFF    |
    | 自动选择流量出口接口 |    ON    |
    |       DNS 劫持       |  any:53  |
    |     最大传输单元     |   1500   |
2. 进入设置，开启**DNS覆写**并点击设置-高级

    把下面的三行代码（域名）加入fake-ip-filter内

    ```yaml
      fake-ip-filter:
    	#此处省略其余自带的ip..... 你只需要把下面的三行代码加入就行
    	#这三个域名是students平台所用到的，获取办法：抓包
        - 'students.gtiit.edu.cn'
        - 'slcm-rp.gtiit.edu.cn'
        - 'elastic.gtiit.edu.cn'
    ```

    这是我完整DNS覆写配置，供你参考

    ```yaml
    dns:
      enable: true
      listen: ':53'
      enhanced-mode: 'fake-ip'
      fake-ip-range: '198.18.0.1/16'
      fake-ip-filter-mode: 'blacklist'
      prefer-h3: false
      respect-rules: false
      use-hosts: false
      use-system-hosts: false
      ipv6: true
      fake-ip-filter:
        - '*.lan'
        - '*.local'
        - '*.arpa'
        - 'time.*.com'
        - 'ntp.*.com'
        - 'time.*.com'
        - '+.market.xiaomi.com'
        - 'localhost.ptlogin2.qq.com'
        - '*.msftncsi.com'
        - 'www.msftconnecttest.com'
        - 'students.gtiit.edu.cn'
        - 'slcm-rp.gtiit.edu.cn'
        - 'elastic.gtiit.edu.cn'
      default-nameserver:
        - 'system'
        - '223.6.6.6'
        - '8.8.8.8'
        - '2400:3200::1'
        - '2001:4860:4860::8888'
      nameserver:
        - '8.8.8.8'
        - 'https://doh.pub/dns-query'
        - 'https://dns.alidns.com/dns-query'
      direct-nameserver-follow-policy: false
      fallback-filter:
        geoip: true
        geoip-code: 'CN'
        ipcidr:
          - '240.0.0.0/4'
          - '0.0.0.0/32'
        domain:
          - '+.google.com'
          - '+.facebook.com'
          - '+.youtube.com'
      fallback: []
      proxy-server-nameserver:
        - 'https://doh.pub/dns-query'
        - 'https://dns.alidns.com/dns-query'
        - 'tls://223.5.5.5'
      direct-nameserver: []
    ```
3. 进入设置，开启**IPV6**
4. 进入订阅，对你的订阅文件右键，点击编辑规则，**按顺序**加入两个规则

    1. 规则类型 `IP-CIDR`

        规则内容 `42.247.22.151/32`

        代理策略 `PROXY`​ 或其他类似 `节点选择`​ 或 `代理` 等字样的策略，这个随你的订阅而变化，总之不要让他直连。

        添加前置规则
    2. 规则类型 `IP-CIDR`

        规则内容 `116.6.38.28/32`

        代理策略 `PROXY`​ 或其他类似 `节点选择`​ 或 `代理` 等字样的策略，这个随你的订阅而变化，总之不要让他直连。

        添加前置规则
    3. 规则类型 `IP-CIDR`

        规则内容 `116.6.38.30/32`

        代理策略 `PROXY`​ 或其他类似 `节点选择`​ 或 `代理` 等字样的策略，这个随你的订阅而变化，总之不要让他直连。

        添加前置规则
    4. 规则类型 `DOMAIN`

        规则内容 `students.gtiit.edu.cn`

        代理策略 `DIRECT`​ 或其他类似 `直连`等字样的策略，这个随你的订阅而变化，总之让他直连。

        添加前置规则

    保存退出

教程结束

## 6. 原理浅析

1. 对于moodle或servicehub等在代理工具的情况下无法打开是因为对于`cn`​的域名订阅文件大概率会让他通过geoip匹配的方式直连，但是连接校园网的情况下直连moodle会出现`dial tcp 116.6.38.28:443: i/o timeout`，那么干脆直接强制他走代理。

    类似的，servicehub直连会出现另一个ip timeout....

    因此我直接将这三个学校服务器所用到的IP代理 42.247.22.151，116.6.38.28，116.6.38.30
2. 对于students在代理工具的情况下无法打开是因为`dns resolve failed: couldn't find ip`​，这是因为DNS覆写的fake-ip把`students`​域名绕过，生成虚拟 IP来实现透明代理。但是我们需要获取到真实IP，不然会导致`ERR_CONNECTION_CLOSED`，因此把他加入filter列表里。
3. **注意：**

    -   上面的三个IP地址可能会随着时间变化而失效，你自己配置的时候也很有可能会遇到问题。通用的解法打开Clash里的日志，选择All并开始记录日志，然后分析日志。

        举例，最初我连校园网开启Clash Tun模式访问moodle，打不开。日志提示：04:38:13 Warning [TCP] dial DIRECT (match GeoIP/cn) 198.18.0.1:63804(msedge.exe) --\> 116.6.38.28:443 error: connect failed: dial tcp 116.6.38.28:443: i/o timeout

        这就是说明因为moodle的网址域名是cn，通过GeoIP规则直接直连，但是由于校园网情况下（具体原因不知）timeout，所以我上面匹配IP强制他走代理。
    
    -   经测试只有students平台必须在校园网的环境下访问，其他平台海外代理均可访问，因此走代理没有问题。所以这也是我对students强制走直连以及过滤fake-ip的原因。

‍

‍
