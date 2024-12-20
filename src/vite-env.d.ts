/// <reference types="vite/client" />

// 三斜杠指令是包含单个 XML 标记的单行注释。注释的内容用作编译器指令
// 三斜杠指令仅在其包含文件的顶部有效。三斜杠指令前只能有单行或多行注释，包括其他三斜杠指令。如果在语句或声明之后遇到它们，它们将被视为常规单行注释，并且没有特殊含义
// 与用作依赖声明的 /// <reference path="..." /> 指令类似，/// <reference types="..." /> 指令声明对包的依赖
// 例如，在声明文件中包含 /// <reference types="node" /> 声明该文件使用 @types/node/index.d.ts 中声明的名称；因此，这个包需要与声明文件一起包含在编译中