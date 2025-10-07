# 104818 - Computer Organization and Programming

## 1. Basic Information 基本信息

| Credits 学分 | Type 类型 | Difficulty 参考难度 | Languages 语言 | Prerequisites 前置课程                                       |
| :----------: | :-------: | :-----------------: | :------------: | :----------------------------------------------------------- |
|      4       |    PCC    |        ★★★★         |   x86 ASM, C   | [104952 - Digital Systems and  Computer Structure](./digital.md) |

## 2. Recomanded Resources 推荐资源

-   *Computer Systems: A Programmer’s Perspective, Third Edition (CSAPP)*
    -   [课程官网](https://csapp.cs.cmu.edu) [**配套资源**](https://csapp.cs.cmu.edu)
    -   [**中文版**](https://z-library.sk/book/28525133/62ea78/深入理解计算机系统.html) [社区翻译版](https://hansimov.gitbook.io/csapp) [**英文版**](https://z-library.sk/book/19191715/956b43/computer-systems-a-programmers-perspective-third-edition-global-edition.html) 
-   *Introduction to Computer Organization: An Under the Hood Look at Hardware and x86-64 Assembly*
    -   [**中文版**](https://z-library.sk/book/118606218/126eb9/计算机组成原理基于x8664架构.html) [**英文版**](https://z-library.sk/book/19092249/9edb2f/introduction-to-computer-organization-an-under-the-hood-look-at-hardware-and-x8664-assembly.html)
-   *x86-64 Assembly Language Programming with Ubuntu, By Ed Jorgensen*
    -    [Website](http://www.egr.unlv.edu/~ed/x86.html) [PDF](http://www.egr.unlv.edu/~ed/assembly64.pdf)

## 3. Contributed Learning Tips 学习方法投稿

-   @mcsptteam <mcsptteam@gmail.com>

    >   课程大致可以分为两部分：Linux系统system programming和x86汇编。读CSAPP写简单的程序掌握Linux的系统编程接口与`gcc`和C语言的进阶知识；x86部分类似z80的学习方法，建议可以多通过`objdump`工具对比汇编语言和C语言异同。

-   @Zixuan HUANG <huang14145@gtiit.edu.cn>

    >   这门课大概可以两个部分：**Intel x86-64 汇编 AT&T 语法教学** + **计算机虚拟内存原理讲解**
    >
    >   -   汇编部分可以的话需要能自己用汇编写一些简单的算法，比如点乘叉乘之类的。是在记不住不要紧，至少得能看懂，比如看到JMP族指令你得知道他在干什么。期末考试汇编大概率不会让你真的手写，而是让你填空，选择之类的。 其中虚拟内存部分是重点，需要真真切切地理解概念。 如果感觉上课讲虚拟内存部分听不懂可以看看这个网站：[csapp 虚拟内存原理](https://hansimov.gitbook.io/csapp/part2/ch09-virtual-memory/9.1-physical-and-virtual-addressing) 如果感觉上课时听不懂虚拟内存部分，请花4-6小时认真看完这个网站的第九章，保证你能对虚拟内存大彻大悟。同时务必把这本线上书的第九章所有练习认真独立做完，例子务必要理解，因为期末考试的试题就和这些练习差不多。
    >   -   再次强调**虚拟内存部分请务必理解其中的原理，因为后面104823操作系统直接默认了你对虚拟内存熟烂于心，而且操作系统也会考，甚至还会有让你实现虚拟内存的lab。**
    >
    >   -   如果上完这门课对于逆向工程或者是汇编有兴趣的话，可以尝试挑战CSAPP[配套实验](https://csapp.cs.cmu.edu/3e/labs.html)的[二进制拆弹实验](https://csapp.cs.cmu.edu/3e/bomb.tar)和[缓冲区攻击实验](https://csapp.cs.cmu.edu/3e/target1.tar) 同时实验工具链推荐使用NSA的[Ghidra](https://github.com/NationalSecurityAgency/ghidra), 这是一个非常实用的逆向工程软件框架，用过都说好。 我自己做完这两个lab感觉还是受益匪浅的。温馨提示，这两个lab最后一题写不出的话不用强求自己，因为真的很难。
    >
    >       同时如果对于简单的逆向工程感兴趣的话可以看看这个网站：[Crackme](https://crackmes.one/),里面有非常多的逆向工程材料可以提供练手机会。甚至有一些就是现有软件的反破解设计思路demo，放上去等着别人来破解看看自己的设计是否有缺陷。
    >
    >   -   需要注意的是，反编译或者说逆向工程是一个非常需要谨慎选择的方向，千万不要觉得自己会使ida，做完几个crackme之后就觉得自己牛逼了，想要读逆向工程研究生，想要当大黑客。逆向工程研究可以说是天坑，需要投入大量时间与精力，对基本功要求极高。这些crackme做着玩当作兴趣爱好可以，但是如果想要往这方向发展请千万务必了解业内详情，走访业内人士，三思而后行，不要自大膨胀，被这些雕虫小技骗走了魂。

## 4. Notes Sharing 笔记分享

-   TODO
