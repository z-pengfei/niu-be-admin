/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    semi: ["warn", "always"], // 禁止尾部使用分号
    // 'no-console': 'warn', // 禁止出现console
    // 'no-debugger': 'warn', // 禁止出现debugger
    "no-duplicate-case": "warn", // 禁止出现重复case
    "no-extra-parens": "warn", // 禁止不必要的括号
    "no-unreachable": "warn", // 禁止出现[return|throw]之后的代码块
    "no-else-return": "warn", // 禁止if语句中return语句之后有else块
    "no-empty-function": "warn", // 禁止出现空的函数块
    "no-multi-spaces": "warn", // 禁止使用多个空格
    "no-redeclare": "warn", // 禁止多次声明同一变量
    "no-return-await": "warn", // 禁用不必要的[return/await]
    "no-mixed-spaces-and-tabs": "warn", // 禁止空格和tab的混合缩进
    "no-multiple-empty-lines": "warn", // 禁止出现多行空行
    "no-trailing-spaces": "warn", // 禁止一行结束后面不要有空格
    "no-var": "warn", // 禁止出现var用let和const代替
    "no-delete-var": "off", // 允许出现delete变量的使用
    "no-unused-vars": 0,
    "no-shadow": "off", // 允许变量声明与外层作用域的变量同名
    eqeqeq: "warn", // 要求使用 === 和 !==
    "space-before-blocks": "warn", // 要求在块之前使用一致的空格
    "space-in-parens": "warn", // 要求在圆括号内使用一致的空格
    "space-infix-ops": "warn", // 要求操作符周围有空格
    "space-unary-ops": "warn", // 要求在一元操作符前后使用一致的空格
    "switch-colon-spacing": "warn", // 要求在switch的冒号左右有空格
    "arrow-spacing": "warn", // 要求箭头函数的箭头前后使用一致的空格
    "array-bracket-spacing": "warn", // 要求数组方括号中使用一致的空格
    "brace-style": "warn", // 要求在代码块中使用一致的大括号风格
    "max-nested-callbacks": ["warn", 3], // 要求回调函数最大嵌套深度3
    "comma-dangle": 0,
    "vue/multi-word-component-names": 0
  }
};
