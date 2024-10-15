# vue3 Hellow world 渲染过程分析
1. 调用createAppAPI(render)函数创建一个app对象，并返回
![alt text](image.png)
(1)调用createVNode函数创建一个虚拟dom
![alt text](image-1.png)
虚拟dom的实质 :
const vnode = {
    el: null,
    component: null,
    key: props?.key,
    type,
    props: props || {},
    children,
    shapeFlag: getShapeFlag(type),
};
(2)调用render函数渲染vnode

2. renderer.ts执行render函数
(1) 调用patch函数
![alt text](image-2.png)
A processText(n1, n2, container)
![alt text](image-3.png)
B processFragment(n1, n2, container)
![alt text](image-4.png)
C processComponent(n1, n2, container, parentComponent) //创建根组件实例:APP
![alt text](image-5.png)
![alt text](image-6.png)
D setupComponent(instance)
![alt text](image-8.png)
E setupStatefulComponent(instance) //创建proxy
![alt text](image-7.png)
F createSetupContext(instance) //初始化 setup context
![alt text](image-9.png)

3.effect.ts 创建 ReactiveEffect 对象
(1) 执行run
![alt text](image-10.png)
(2) 执行用户传入的fn