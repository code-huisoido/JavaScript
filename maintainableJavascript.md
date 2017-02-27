##编写可维护的javascript

>出处：Maintainable Javascript, 作者 Nicholas Zakas(O'Reilly). Copyright2012 Nicholas Zakas, 978-1-449-32768-2.

###第一章 基本的格式化

1. 缩进层级   
	- 一个相当于4个空格的tab
2. 语句结尾   
	- 加上分号作为结尾
3. 行的长度   
	- 长度限定在80个字符
4. 换行   
    - 在运算符后换行，换行为两个层级的缩进，即八个字符
	`*例外：当给变量赋值时，第二行的位置应当和赋值运算符的位置保持对齐`
5. 空行
    - 在每个流控制语句之前（比如if和for语句）添加空行
    - 在方法之间
    - 在方法中的局部变量（local variable）和第一条语句之间
    - 在多行或单行注释之前
    - 在方法内的逻辑片段之间插入空行，提高可读性

6. 命名
    - 驼峰式大小写   
    `例子：var thisIsMyName; var anotherVariable;`
    - 变量和函数
        - 函数名前缀为动词，变量为名词
        <table>
			<tr>
				<th>动词</th><th>含义</th>
			</tr>
			<tr>
				<th>can</th><th>函数返回一个布尔值</th>
			</tr>
			<tr>
				<th>has</th><th>函数返回一个布尔值</th>
			</tr>
			<tr>
				<th>is</th><th>函数返回一个布尔值</th>
			</tr>
			<tr>
				<th>get</th><th>函数返回一个非布尔值</th>
			</tr>
			<tr>
				<th>set</th><th>函数用来保存一个值</th>
			</tr>
			<tr>
		</table>

    - 常量
        - 使用大写字母和下划线来命名，下划线用以分割单词   
        `例子：var MAX_COUNT = 10;`
    - 构造函数
    	- 命名遵照大驼峰命名法   
		```javascript
		function Person(name) {
		    this.name = name; 
		}

		Person.prototype.sayName = function() {
		    alert(this.name); 
		};

		var me = new Person("Nicholas");
		```
        


