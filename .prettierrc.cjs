module.exports = {
  // 缩进空格数，默认2个空格
  tabWidth: 2,
  // 结尾添加分号
  semi: true,
  // 元素末尾是否加逗号，默认es5: ES5中的 objects, arrays 等会添加逗号，TypeScript 中的 type 后不加逗号
  trailingComma: "none",
  // 使用单引号 (true:单引号;false:双引号)
  singleQuote: false,
  // 每行最多字符数量，超出换行(默认80)
  printWidth: 100,
  // (x)=>{},单个参数箭头函数是否显示小括号。(always:始终显示;avoid:省略括号。默认:always)
  arrowParens: "avoid",
  // 对象字面量的括号之间打印空格 (true - Example: { foo: bar } ; false - Example: {foo:bar})
  bracketSpacing: true,

  endOfLine: "auto",
  overrides: [
    {
      files: "*.html",
      options: {
        parser: "html"
      }
    }
  ]
};
