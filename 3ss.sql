SET NAMES UTF8;
DROP DATABASE IF EXISTS 3ss;
CREATE DATABASE 3ss CHARSET=UTF8;
USE 3ss;

CREATE TABLE 3ss_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32)
);
INSERT INTO 3ss_user VALUES
(10,'fjy','123456'),
(NULL,'wyq','123456'),
(NULL,'测试用户一号','123456'),
(NULL,'测试用户二号','123456'),
(NULL,'测试用户三号','123456'),
(NULL,'测试用户四号','123456'),
(NULL,'测试用户五号','123456'),
(NULL,'测试用户六号','123456'),
(NULL,'测试用户七号','123456'),
(NULL,'测试用户八号','123456');

CREATE TABLE 3ss_admin(
    aid INT PRIMARY KEY AUTO_INCREMENT,
    aname VARCHAR(32),
    apwd VARCHAR(32)
);
INSERT INTO 3ss_admin VALUES
(1,'admin','123456');

CREATE TABLE 3ss_product(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    price FLOAT(10,1),
    pname VARCHAR(32),
    pic1 VARCHAR(100),
    pic2 VARCHAR(100)
);
INSERT INTO 3ss_product VALUES
(10000,38.9,'大头装·碧根果210g×2袋','Images/main/TB279iylFXXXXaxXpXXXXXXXXXX-880734502.jpg','Images/main/TB2c9kra4qK.eBjSZJiXXaOSFXa-880734502.jpg'),
(NULL,49.9,'大头装·夏威夷果265g×2袋','Images/main/TB2ipSGlFXXXXcDXXXXXXXXXXXX-880734502.jpg','Images/main/TB2XE9jahuI.eBjy0FdXXXgbVXa-880734502.jpg'),
(NULL,39.9,'大头装·炭烧腰果185g×2袋','Images/main/TB2Ta9WlFXXXXXyXXXXXXXXXXXX-880734502.jpg','Images/main/TB2kYVhaylnpuFjSZFgXXbi7FXa-880734502.jpg'),
(NULL,52.9,'大头装·开口松子原味218g×2袋','Images/main/TB2fmJ.lFXXXXbhXXXXXXXXXXXX-880734502.jpg','Images/main/TB2fnuaagNlpuFjy0FfXXX3CpXa-880734502.jpg'),
(NULL,39.9,'大头装·手剥巴旦木235g×2袋','Images/main/TB25zOulFXXXXb9XpXXXXXXXXXX-880734502.jpg','Images/main/TB2JIPBbr1K.eBjSszbXXcTHpXa-880734502.jpg'),
(NULL,34.9,'大头装·手剥山核桃奶油味235g','Images/main/TB2YsWrlFXXXXcfXpXXXXXXXXXX-880734502.jpg','Images/main/TB2TT5sbtBopuFjSZPcXXc9EpXa-880734502.jpg'),
(NULL,45.9,'大头装·手剥松子125g','Images/main/TB2AP1YlFXXXXXqXXXXXXXXXXXX-880734502.jpg','Images/main/TB2cTtSaF95V1Bjy0FlXXaBbXXa-880734502.jpg'),
(NULL,59.9,'大头装·开心果225g×2袋','Images/main/TB2rM25iVXXXXboXpXXXXXXXXXX-880734502.jpg','Images/main/TB2r8tTdhqK.eBjSZJiXXaOSFXa-880734502.jpg'),
(NULL,28.9,'大头装·碧根果仁165g','Images/main/TB2oIaElFXXXXXiXpXXXXXXXXXX-880734502.jpg','Images/main/TB2ULNTaJBopuFjSZPcXXc9EpXa-880734502.jpg'),
(NULL,28.9,'大头装·巴旦木仁235g','Images/main/TB2MQBYlFXXXXbNXpXXXXXXXXXX-880734502.jpg','Images/main/TB2w082aHxmpuFjSZJiXXXauVXa-880734502.jpg'),
(NULL,32.9,'大头装·琥珀核桃仁165g×2袋','Images/main/TB2fuSplFXXXXb5XpXXXXXXXXXX-880734502.jpg','Images/main/TB27q.5a5lnpuFjSZFgXXbi7FXa-880734502.jpg'),
(NULL,46.9,'大头装·山核桃仁155g','Images/main/TB2611zlFXXXXcDXXXXXXXXXXXX-880734502.jpg','Images/main/TB2jllVaS4mpuFjSZFOXXaUqpXa-880734502.jpg'),
(20000,15.9,'好零食·卤香铁蛋蛋136g','Images/main/TB2gsyKlFXXXXbqXXXXXXXXXXXX-880734502.jpg','Images/main/TB2x57Ua80kpuFjSsziXXa.oVXa-880734502.jpg'),
(NULL,16.9,'好零食·逗逗逗豆干250g','Images/main/TB2bX5RlFXXXXX.XXXXXXXXXXXX-880734502.jpg','Images/main/TB2X7pmaC0jpuFjy0FlXXc0bpXa-880734502.jpg'),
(NULL,18.9,'好零食·好爹鱼豆腐180g×2袋','Images/main/TB2VWqWlFXXXXXCXXXXXXXXXXXX-880734502.jpg','Images/main/TB2cxKFbrBmpuFjSZFuXXaG_XXa-880734502.jpg'),
(NULL,26.9,'好零食·Q弹鸡蛋干240g×2袋','Images/main/TB2kZ5UlFXXXXXKXXXXXXXXXXXX-880734502.jpg','Images/main/TB21FQ1a9FjpuFjSspbXXXagVXa-880734502.jpg'),
(NULL,19.9,'好零食·猪肉猪肉脯210g','Images/main/TB2.kmjlFXXXXcZXXXXXXXXXXXX-880734502.jpg','Images/main/TB27lUhap_AQeBjSZPhXXXt5pXa-880734502.jpg'),
(NULL,21.9,'好零食·滋滋碳烤肠198g','Images/main/TB2AP9VlFXXXXXxXXXXXXXXXXXX-880734502.jpg','Images/main/TB2kAxOaGi5V1BjSsphXXaEpXXa-880734502.jpg'),
(NULL,29.9,'好零食·牛肉牛肉干100g×2袋','Images/main/TB2_ZmKlFXXXXbqXXXXXXXXXXXX-880734502.jpg','Images/main/TB2DPIPa9XlpuFjy0FeXXcJbFXa-880734502.jpg'),
(NULL,28.9,'好零食·灯影牛肉丝260g','Images/main/TB2qMF.nVXXXXcLXXXXXXXXXXXX-880734502.jpg','Images/main/TB25KuxbrJmpuFjSZFwXXaE4VXa-880734502.jpg'),
(NULL,24.9,'好零食·和风麻薯组合共三袋','Images/main/TB2r5WJlFXXXXbvXXXXXXXXXXXX-880734502.jpg','Images/main/TB2rxqCbxxmpuFjSZFNXXXrRXXa-880734502.jpg'),
(NULL,16.9,'好零食·蔓越莓曲奇260g','Images/main/TB2igt6lFXXXXbMXXXXXXXXXXXX-880734502.jpg','Images/main/TB2VlpQdk5M.eBjSZFrXXXPgVXa-880734502.jpg'),
(NULL,15.9,'好零食·黄金肉松饼456g','Images/main/TB2dN8zlFXXXXbqXpXXXXXXXXXX-880734502.jpg','Images/main/TB2HLQYaYtlpuFjSspoXXbcDpXa-880734502.jpg'),
(NULL,18.9,'好零食·香香榴莲饼330g','Images/main/TB2kM9plFXXXXcrXpXXXXXXXXXX-880734502.jpg','Images/main/TB2mYKzbstnpuFjSZFKXXalFFXa-880734502.jpg'),
(30000,32.9,'云果园·芒果干116g×3袋','Images/main/TB20qnWagSI.eBjy1XcXXc1jXXa-880734502.jpg','Images/main/TB2g7BOaF95V1Bjy0FiXXallXXa-880734502.jpg'),
(NULL,23.9,'云果园·草莓干106g×2袋','Images/main/TB24yDNabWJ.eBjSspdXXXiXFXa-880734502.jpg','Images/main/TB2knDhcraI.eBjy1XdXXcoqXXa-880734502.jpg'),
(NULL,28.9,'云果园·冻干榴莲36g×2袋','Images/main/TB2YX9waxqK.eBjSZJiXXaOSFXa-880734502.jpg','Images/main/TB2iRiAbylnpuFjSZFgXXbi7FXa-880734502.jpg'),
(NULL,16.9,'云果园·柠檬干66g×2袋','Images/main/TB25PHPamiJ.eBjSszfXXa4bVXa-880734502.jpg','Images/main/TB2QjaubrBnpuFjSZFGXXX51pXa-880734502.jpg'),
(NULL,18.9,'云果园·冻干无花果30g×2袋','Images/main/TB2hn7NXuLyQeBjy1XaXXcexFXa-880734502.jpg','Images/main/TB2glyFbtXnpuFjSZFoXXXLcpXa-880734502.jpg'),
(NULL,25.9,'云果园·杨梅干106g×2袋','Images/main/TB2BqR4X5gSXeFjy0FcXXahAXXa-880734502.jpg','Images/main/TB2omevbxtmpuFjSZFqXXbHFpXa-880734502.jpg'),
(NULL,23.9,'云果园·黄桃干106g×2袋','Images/main/TB2d55saA1M.eBjSZPiXXawfpXa-880734502.jpg','Images/main/TB2vJGysVXXXXbsXXXXXXXXXXXX-880734502.jpg'),
(NULL,29.9,'云果园·菠萝干106g×3袋','Images/main/TB2kHGnaxaK.eBjSZFwXXXjsFXa-880734502.jpg','Images/main/TB2fztOaGm5V1BjSsziXXaZMpXa-880734502.jpg'),
(40000,14.9,'新疆正品·玫瑰红葡萄干280g','Images/main/TB2HXPJlFXXXXXMXXXXXXXXXXXX-880734502.jpg','Images/main/TB2tHKkXRjC11BjSszdXXbGFpXa-880734502.jpg'),
(NULL,18.9,'新疆正品·无核白葡萄干280g','Images/main/TB2YU5DlFXXXXbSXpXXXXXXXXXX-880734502.jpg','Images/main/TB2GdzFsXXXXXaJXXXXXXXXXXXX-880734502.jpg'),
(NULL,19.9,'新疆正品·黑加仑葡萄干280g','Images/main/TB2K83eaB0kpuFjSsziXXa.oVXa-880734502.jpg','Images/main/TB2f_.lawxlpuFjy0FoXXa.lXXa-880734502.jpg'),
(NULL,33.9,'新疆正品·绿香妃葡萄干280g','Images/main/TB2TqWulFXXXXclXXXXXXXXXXXX-880734502.jpg','Images/main/TB2aRJSaF55V1Bjy1XcXXXQjFXa-880734502.jpg'),
(NULL,29.9,'甜夹脆枣夹核桃仁258g','Images/main/TB2JOCBsVXXXXbSXXXXXXXXXXXX-880734502.jpg','Images/main/TB2j.jxbxxmpuFjSZFNXXXrRXXa-880734502.jpg'),
(NULL,25.9,'松鼠精选·脆动枣180g','Images/main/TB2AWG8lFXXXXbOXXXXXXXXXXXX-880734502.jpg','Images/main/TB29c1xbCVmpuFjSZFFXXcZApXa-880734502.jpg'),
(NULL,18.9,'灰枣二等415g','Images/main/TB2rXn4tXXXXXaSXpXXXXXXXXXX-880734502.jpg','Images/main/TB2uCxVaF95V1Bjy0FdXXc5BVXa-880734502.jpg'),
(NULL,29.9,'超级水果干·蓝钻石蓝莓干108g','Images/main/TB2YwaYlFXXXXb5XXXXXXXXXXXX-880734502.jpg','Images/main/TB2Am.7rVXXXXaBXpXXXXXXXXXX-880734502.jpg'),
(50000,18.9,'鸭脖154g×1袋','Images/main/TB22SmMppXXXXaxXFXXXXXXXXXX-880734502.jpg','Images/main/TB2pRSjawxlpuFjy0FoXXa.lXXa-880734502.jpg'),
(NULL,19.9,'小贱鸭锁骨195g×1袋','Images/main/TB2_S4lbmVmpuFjSZFFXXcZApXa-880734502.jpg','Images/main/TB2JBhpbipnpuFjSZFkXXc4ZpXa-880734502.jpg'),
(NULL,25.9,'小贱鸭肫168g×1袋','Images/main/TB2qNUDaSFjpuFjSszhXXaBuVXa-880734502.jpg','Images/main/TB25vjEa3xlpuFjSszgXXcJdpXa-880734502.jpg'),
(NULL,27.9,'华夫饼248g×2袋','Images/main/TB2ZH5ZlFXXXXb.XXXXXXXXXXXX-880734502.jpg','Images/main/TB2A.kSa9hlpuFjSspkXXa1ApXa-880734502.jpg'),
(NULL,23.9,'牛板筋120g×2袋','Images/main/TB2kFDflFXXXXXVXXXXXXXXXXXX-880734502.jpg','Images/main/TB2xJAfap6AQeBjSZFFXXaiFpXa-880734502.jpg'),
(NULL,21.9,'泡椒凤爪280g×1袋','Images/main/TB2Q_eFlFXXXXcnXpXXXXXXXXXX-880734502.jpg','Images/main/TB2rXsUXeYC11Bjy1zkXXaZdXXa-880734502.jpg'),
(NULL,44.9,'手撕牛肉210g×1袋','Images/main/TB2WH5_lFXXXXbJXXXXXXXXXXXX-880734502.jpg','Images/main/TB22fIkaBLzQeBjSZFoXXc5gFXa-880734502.jpg'),
(NULL,11.9,'爆米花150g×1袋','Images/main/TB2HIE6astnpuFjSZFvXXbcTpXa-880734502.jpg','Images/main/TB2_Zs4aZtnpuFjSZFKXXalFFXa-880734502.jpg'),
(NULL,18.9,'拉面丸子85g×3袋','Images/main/TB2psvdlFXXXXasXXXXXXXXXXXX-880734502.jpg','Images/main/TB2BsZiap_AQeBjSZFtXXbFBVXa-880734502.jpg'),
(NULL,17.9,'美式薯条75g×3袋','Images/main/TB2QYwNrVXXXXXCXXXXXXXXXXXX-880734502.jpg','Images/main/TB2AkU6a9JjpuFjy0FdXXXmoFXa-880734502.jpg'),
(NULL,21.9,'脆薯原味100g×2袋','Images/main/TB2CshVsVXXXXa0XpXXXXXXXXXX-880734502.jpg','Images/main/TB2eUAAaV_AQeBjSZFBXXX22XXa-880734502.jpg'),
(NULL,18.9,'牛肉粒110g×1袋','Images/main/TB2RbiBsVXXXXafXXXXXXXXXXXX-880734502.jpg','Images/main/TB21TVSaGi5V1BjSspaXXbrApXa-880734502.jpg');

CREATE TABLE 3ss_product_1F(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    price FLOAT(10,1),
    pname VARCHAR(32),
    pic1 VARCHAR(100),
    pic2 VARCHAR(100)
);
INSERT INTO 3ss_product_1F VALUES
(10000,38.9,'大头装·碧根果210g×2袋','Images/main/TB279iylFXXXXaxXpXXXXXXXXXX-880734502.jpg','Images/main/TB2c9kra4qK.eBjSZJiXXaOSFXa-880734502.jpg'),
(NULL,49.9,'大头装·夏威夷果265g×2袋','Images/main/TB2ipSGlFXXXXcDXXXXXXXXXXXX-880734502.jpg','Images/main/TB2XE9jahuI.eBjy0FdXXXgbVXa-880734502.jpg'),
(NULL,39.9,'大头装·炭烧腰果185g×2袋','Images/main/TB2Ta9WlFXXXXXyXXXXXXXXXXXX-880734502.jpg','Images/main/TB2kYVhaylnpuFjSZFgXXbi7FXa-880734502.jpg'),
(NULL,52.9,'大头装·开口松子原味218g×2袋','Images/main/TB2fmJ.lFXXXXbhXXXXXXXXXXXX-880734502.jpg','Images/main/TB2fnuaagNlpuFjy0FfXXX3CpXa-880734502.jpg'),
(NULL,39.9,'大头装·手剥巴旦木235g×2袋','Images/main/TB25zOulFXXXXb9XpXXXXXXXXXX-880734502.jpg','Images/main/TB2JIPBbr1K.eBjSszbXXcTHpXa-880734502.jpg'),
(NULL,34.9,'大头装·手剥山核桃奶油味235g','Images/main/TB2YsWrlFXXXXcfXpXXXXXXXXXX-880734502.jpg','Images/main/TB2TT5sbtBopuFjSZPcXXc9EpXa-880734502.jpg'),
(NULL,45.9,'大头装·手剥松子125g','Images/main/TB2AP1YlFXXXXXqXXXXXXXXXXXX-880734502.jpg','Images/main/TB2cTtSaF95V1Bjy0FlXXaBbXXa-880734502.jpg'),
(NULL,59.9,'大头装·开心果225g×2袋','Images/main/TB2rM25iVXXXXboXpXXXXXXXXXX-880734502.jpg','Images/main/TB2r8tTdhqK.eBjSZJiXXaOSFXa-880734502.jpg'),
(NULL,28.9,'大头装·碧根果仁165g','Images/main/TB2oIaElFXXXXXiXpXXXXXXXXXX-880734502.jpg','Images/main/TB2ULNTaJBopuFjSZPcXXc9EpXa-880734502.jpg'),
(NULL,28.9,'大头装·巴旦木仁235g','Images/main/TB2MQBYlFXXXXbNXpXXXXXXXXXX-880734502.jpg','Images/main/TB2w082aHxmpuFjSZJiXXXauVXa-880734502.jpg'),
(NULL,32.9,'大头装·琥珀核桃仁165g×2袋','Images/main/TB2fuSplFXXXXb5XpXXXXXXXXXX-880734502.jpg','Images/main/TB27q.5a5lnpuFjSZFgXXbi7FXa-880734502.jpg'),
(NULL,46.9,'大头装·山核桃仁155g','Images/main/TB2611zlFXXXXcDXXXXXXXXXXXX-880734502.jpg','Images/main/TB2jllVaS4mpuFjSZFOXXaUqpXa-880734502.jpg');

CREATE TABLE 3ss_product_2F(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    price FLOAT(10,1),
    pname VARCHAR(32),
    pic1 VARCHAR(100),
    pic2 VARCHAR(100)
);
INSERT INTO 3ss_product_2F VALUES
(20000,15.9,'好零食·卤香铁蛋蛋136g','Images/main/TB2gsyKlFXXXXbqXXXXXXXXXXXX-880734502.jpg','Images/main/TB2x57Ua80kpuFjSsziXXa.oVXa-880734502.jpg'),
(NULL,16.9,'好零食·逗逗逗豆干250g','Images/main/TB2bX5RlFXXXXX.XXXXXXXXXXXX-880734502.jpg','Images/main/TB2X7pmaC0jpuFjy0FlXXc0bpXa-880734502.jpg'),
(NULL,18.9,'好零食·好爹鱼豆腐180g×2袋','Images/main/TB2VWqWlFXXXXXCXXXXXXXXXXXX-880734502.jpg','Images/main/TB2cxKFbrBmpuFjSZFuXXaG_XXa-880734502.jpg'),
(NULL,26.9,'好零食·Q弹鸡蛋干240g×2袋','Images/main/TB2kZ5UlFXXXXXKXXXXXXXXXXXX-880734502.jpg','Images/main/TB21FQ1a9FjpuFjSspbXXXagVXa-880734502.jpg'),
(NULL,19.9,'好零食·猪肉猪肉脯210g','Images/main/TB2.kmjlFXXXXcZXXXXXXXXXXXX-880734502.jpg','Images/main/TB27lUhap_AQeBjSZPhXXXt5pXa-880734502.jpg'),
(NULL,21.9,'好零食·滋滋碳烤肠198g','Images/main/TB2AP9VlFXXXXXxXXXXXXXXXXXX-880734502.jpg','Images/main/TB2kAxOaGi5V1BjSsphXXaEpXXa-880734502.jpg'),
(NULL,29.9,'好零食·牛肉牛肉干100g×2袋','Images/main/TB2_ZmKlFXXXXbqXXXXXXXXXXXX-880734502.jpg','Images/main/TB2DPIPa9XlpuFjy0FeXXcJbFXa-880734502.jpg'),
(NULL,28.9,'好零食·灯影牛肉丝260g','Images/main/TB2qMF.nVXXXXcLXXXXXXXXXXXX-880734502.jpg','Images/main/TB25KuxbrJmpuFjSZFwXXaE4VXa-880734502.jpg'),
(NULL,24.9,'好零食·和风麻薯组合共三袋','Images/main/TB2r5WJlFXXXXbvXXXXXXXXXXXX-880734502.jpg','Images/main/TB2rxqCbxxmpuFjSZFNXXXrRXXa-880734502.jpg'),
(NULL,16.9,'好零食·蔓越莓曲奇260g','Images/main/TB2igt6lFXXXXbMXXXXXXXXXXXX-880734502.jpg','Images/main/TB2VlpQdk5M.eBjSZFrXXXPgVXa-880734502.jpg'),
(NULL,15.9,'好零食·黄金肉松饼456g','Images/main/TB2dN8zlFXXXXbqXpXXXXXXXXXX-880734502.jpg','Images/main/TB2HLQYaYtlpuFjSspoXXbcDpXa-880734502.jpg'),
(NULL,18.9,'好零食·香香榴莲饼330g','Images/main/TB2kM9plFXXXXcrXpXXXXXXXXXX-880734502.jpg','Images/main/TB2mYKzbstnpuFjSZFKXXalFFXa-880734502.jpg');

CREATE TABLE 3ss_product_3F(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    price FLOAT(10,1),
    pname VARCHAR(32),
    pic1 VARCHAR(100),
    pic2 VARCHAR(100)
);
INSERT INTO 3ss_product_3F VALUES
(30000,32.9,'云果园·芒果干116g×3袋','Images/main/TB20qnWagSI.eBjy1XcXXc1jXXa-880734502.jpg','Images/main/TB2g7BOaF95V1Bjy0FiXXallXXa-880734502.jpg'),
(NULL,23.9,'云果园·草莓干106g×2袋','Images/main/TB24yDNabWJ.eBjSspdXXXiXFXa-880734502.jpg','Images/main/TB2knDhcraI.eBjy1XdXXcoqXXa-880734502.jpg'),
(NULL,28.9,'云果园·冻干榴莲36g×2袋','Images/main/TB2YX9waxqK.eBjSZJiXXaOSFXa-880734502.jpg','Images/main/TB2iRiAbylnpuFjSZFgXXbi7FXa-880734502.jpg'),
(NULL,16.9,'云果园·柠檬干66g×2袋','Images/main/TB25PHPamiJ.eBjSszfXXa4bVXa-880734502.jpg','Images/main/TB2QjaubrBnpuFjSZFGXXX51pXa-880734502.jpg'),
(NULL,18.9,'云果园·冻干无花果30g×2袋','Images/main/TB2hn7NXuLyQeBjy1XaXXcexFXa-880734502.jpg','Images/main/TB2glyFbtXnpuFjSZFoXXXLcpXa-880734502.jpg'),
(NULL,25.9,'云果园·杨梅干106g×2袋','Images/main/TB2BqR4X5gSXeFjy0FcXXahAXXa-880734502.jpg','Images/main/TB2omevbxtmpuFjSZFqXXbHFpXa-880734502.jpg'),
(NULL,23.9,'云果园·黄桃干106g×2袋','Images/main/TB2d55saA1M.eBjSZPiXXawfpXa-880734502.jpg','Images/main/TB2vJGysVXXXXbsXXXXXXXXXXXX-880734502.jpg'),
(NULL,29.9,'云果园·菠萝干106g×3袋','Images/main/TB2kHGnaxaK.eBjSZFwXXXjsFXa-880734502.jpg','Images/main/TB2fztOaGm5V1BjSsziXXaZMpXa-880734502.jpg');

CREATE TABLE 3ss_product_4F(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    price FLOAT(10,1),
    pname VARCHAR(32),
    pic1 VARCHAR(100),
    pic2 VARCHAR(100)
);
INSERT INTO 3ss_product_4F VALUES
(40000,14.9,'新疆正品·玫瑰红葡萄干280g','Images/main/TB2HXPJlFXXXXXMXXXXXXXXXXXX-880734502.jpg','Images/main/TB2tHKkXRjC11BjSszdXXbGFpXa-880734502.jpg'),
(NULL,18.9,'新疆正品·无核白葡萄干280g','Images/main/TB2YU5DlFXXXXbSXpXXXXXXXXXX-880734502.jpg','Images/main/TB2GdzFsXXXXXaJXXXXXXXXXXXX-880734502.jpg'),
(NULL,19.9,'新疆正品·黑加仑葡萄干280g','Images/main/TB2K83eaB0kpuFjSsziXXa.oVXa-880734502.jpg','Images/main/TB2f_.lawxlpuFjy0FoXXa.lXXa-880734502.jpg'),
(NULL,33.9,'新疆正品·绿香妃葡萄干280g','Images/main/TB2TqWulFXXXXclXXXXXXXXXXXX-880734502.jpg','Images/main/TB2aRJSaF55V1Bjy1XcXXXQjFXa-880734502.jpg'),
(NULL,29.9,'甜夹脆枣夹核桃仁258g','Images/main/TB2JOCBsVXXXXbSXXXXXXXXXXXX-880734502.jpg','Images/main/TB2j.jxbxxmpuFjSZFNXXXrRXXa-880734502.jpg'),
(NULL,25.9,'松鼠精选·脆动枣180g','Images/main/TB2AWG8lFXXXXbOXXXXXXXXXXXX-880734502.jpg','Images/main/TB29c1xbCVmpuFjSZFFXXcZApXa-880734502.jpg'),
(NULL,18.9,'灰枣二等415g','Images/main/TB2rXn4tXXXXXaSXpXXXXXXXXXX-880734502.jpg','Images/main/TB2uCxVaF95V1Bjy0FdXXc5BVXa-880734502.jpg'),
(NULL,29.9,'超级水果干·蓝钻石蓝莓干108g','Images/main/TB2YwaYlFXXXXb5XXXXXXXXXXXX-880734502.jpg','Images/main/TB2Am.7rVXXXXaBXpXXXXXXXXXX-880734502.jpg');

CREATE TABLE 3ss_product_5F(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    price FLOAT(10,1),
    pname VARCHAR(32),
    pic1 VARCHAR(100),
    pic2 VARCHAR(100)
);
INSERT INTO 3ss_product_5F VALUES
(50000,18.9,'鸭脖154g×1袋','Images/main/TB22SmMppXXXXaxXFXXXXXXXXXX-880734502.jpg','Images/main/TB2pRSjawxlpuFjy0FoXXa.lXXa-880734502.jpg'),
(NULL,19.9,'小贱鸭锁骨195g×1袋','Images/main/TB2_S4lbmVmpuFjSZFFXXcZApXa-880734502.jpg','Images/main/TB2JBhpbipnpuFjSZFkXXc4ZpXa-880734502.jpg'),
(NULL,25.9,'小贱鸭肫168g×1袋','Images/main/TB2qNUDaSFjpuFjSszhXXaBuVXa-880734502.jpg','Images/main/TB25vjEa3xlpuFjSszgXXcJdpXa-880734502.jpg'),
(NULL,27.9,'华夫饼248g×2袋','Images/main/TB2ZH5ZlFXXXXb.XXXXXXXXXXXX-880734502.jpg','Images/main/TB2A.kSa9hlpuFjSspkXXa1ApXa-880734502.jpg'),
(NULL,23.9,'牛板筋120g×2袋','Images/main/TB2kFDflFXXXXXVXXXXXXXXXXXX-880734502.jpg','Images/main/TB2xJAfap6AQeBjSZFFXXaiFpXa-880734502.jpg'),
(NULL,21.9,'泡椒凤爪280g×1袋','Images/main/TB2Q_eFlFXXXXcnXpXXXXXXXXXX-880734502.jpg','Images/main/TB2rXsUXeYC11Bjy1zkXXaZdXXa-880734502.jpg'),
(NULL,44.9,'手撕牛肉210g×1袋','Images/main/TB2WH5_lFXXXXbJXXXXXXXXXXXX-880734502.jpg','Images/main/TB22fIkaBLzQeBjSZFoXXc5gFXa-880734502.jpg'),
(NULL,11.9,'爆米花150g×1袋','Images/main/TB2HIE6astnpuFjSZFvXXbcTpXa-880734502.jpg','Images/main/TB2_Zs4aZtnpuFjSZFKXXalFFXa-880734502.jpg'),
(NULL,18.9,'拉面丸子85g×3袋','Images/main/TB2psvdlFXXXXasXXXXXXXXXXXX-880734502.jpg','Images/main/TB2BsZiap_AQeBjSZFtXXbFBVXa-880734502.jpg'),
(NULL,17.9,'美式薯条75g×3袋','Images/main/TB2QYwNrVXXXXXCXXXXXXXXXXXX-880734502.jpg','Images/main/TB2AkU6a9JjpuFjy0FdXXXmoFXa-880734502.jpg'),
(NULL,21.9,'脆薯原味100g×2袋','Images/main/TB2CshVsVXXXXa0XpXXXXXXXXXX-880734502.jpg','Images/main/TB2eUAAaV_AQeBjSZFBXXX22XXa-880734502.jpg'),
(NULL,18.9,'牛肉粒110g×1袋','Images/main/TB2RbiBsVXXXXafXXXXXXXXXXXX-880734502.jpg','Images/main/TB21TVSaGi5V1BjSspaXXbrApXa-880734502.jpg');

CREATE TABLE 3ss_detail(
    did INT PRIMARY KEY AUTO_INCREMENT,
    pname VARCHAR(100),
    dname VARCHAR(100),
    oldprice FLOAT(10,2),
    nowprice FLOAT(10,2),
    transprice FLOAT(10,2),
    activity VARCHAR(100),
    place VARCHAR(100),
    mdpic2 VARCHAR(100),
    smpic1 VARCHAR(100),
    smpic2 VARCHAR(100),
    smpic3 VARCHAR(100),
    smpic4 VARCHAR(100),
    productId INT
);
INSERT INTO 3ss_detail VALUES
(NULL,'大头装·碧根果210g×2袋','三只松鼠_碧根果210gx2袋零食坚果炒货山核桃长寿果干果奶油味','60.00','38.90','3.00','满88包邮','北京朝阳区三环以内','Images/detail/10000/md-2.jpg','Images/detail/10000/sm-1.jpg','Images/detail/10000/sm-2.jpg','Images/detail/10000/sm-3.jpg','Images/detail/10000/sm-4.jpg',10000),
(NULL,'大头装·夏威夷果265g×2袋','三只松鼠_夏威夷果265gx2袋零食坚果炒货干果奶油味送开口器','72.00','49.90','2.00','满88包邮','北京朝阳区三环以内','Images/detail/10001/md-2.jpg','Images/detail/10001/sm-1.jpg','Images/detail/10001/sm-2.jpg','Images/detail/10001/sm-3.jpg','Images/detail/10001/sm-4.jpg',10001),
(NULL,'爆米花150g×1袋','【三只松鼠_小贱爆米花150g】休闲零食膨化食品焦糖/奶油/椒麻','40.00','11.90','5.00','满69包邮','安徽芜湖','Images/detail/50007/md-2.jpg','Images/detail/50007/sm-1.jpg','Images/detail/50007/sm-2.jpg','Images/detail/50007/sm-3.jpg','Images/detail/50007/sm-4.jpg',50007);

CREATE TABLE 3ss_detail_aside(
    aid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(100),
    price FLOAT(10,2),
    ps VARCHAR(100)
);
INSERt INTO 3ss_detail_aside VALUES
(NULL,'Images/detail/TB16tk_KpXXXXX7XVXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg','18.90','【三只松鼠_小贱拉面丸子85g×...'),
(NULL,'Images/detail/TB1mhA9KpXXXXaqXVXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg','17.90','【三只松鼠_小贱美式薯条75g×...'),
(NULL,'Images/detail/TB1eTzgJVXXXXcIXFXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg','39.90','【三只松鼠_碧根果210g×2袋...'),
(NULL,'Images/detail/TB1.fRmKFXXXXcsXXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg','49.90','【三只松鼠_夏威夷果265g×2...'),
(NULL,'Images/detail/TB1AISCOXXXXXXlXpXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg','9.90','【三只松鼠_约辣辣条200g】休...'),
(NULL,'Images/detail/TB1jchfKFXXXXXAXFXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg','18.90','【三只松鼠_小贱牛肉粒110g】...'),
(NULL,'Images/detail/TB1bTo6KpXXXXb5XVXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg','19.90','【三只松鼠_猪肉猪肉铺210g】...'),
(NULL,'Images/detail/TB1QKvkNVXXXXX_XVXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg','32.90','【三只松鼠_芒果干116g×3袋...'),
(NULL,'Images/detail/TB1geTpOFXXXXaaXVXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg','89.00','【三只松鼠_年货礼盒1208g】...');

CREATE TABLE 3ss_cart(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    userId INT
);
INSERT INTO 3ss_cart VALUES(101,10);

CREATE TABLE 3ss_cart_detail(
    did INT PRIMARY KEY AUTO_INCREMENT,
    cartId INT,
    productId INT,
    count INT,
    checkchk INT
);

CREATE TABLE 3ss_order_infor(
    aid INT PRIMARY KEY AUTO_INCREMENT,
    userId INT,
    rcvName VARCHAR(8),
    addr VARCHAR(100),
    phone VARCHAR(18)
);

CREATE TABLE 3ss_order(
    oid INT PRIMARY KEY AUTO_INCREMENT,
    rcvName VARCHAR(8),
    addr VARCHAR(100),
    phone VARCHAR(18),
    price FLOAT(10,2),
    payway INT,
    transway INT,
    userId INT
);
INSERT INTO 3ss_order VALUES
(72345260,'方方1','江苏省宜兴市','183XXXX9797','345.5','1','3','10'),
(NULL,'方方2','江苏省宜兴市','183XXXX9797','345.5','2','1','10'),
(NULL,'方方3','江苏省宜兴市','183XXXX9797','345.5','0','2','10'),
(NULL,'方方4','江苏省宜兴市','183XXXX9797','345.5','1','3','10'),
(NULL,'方方5','江苏省宜兴市','183XXXX9797','345.5','2','0','10'),
(NULL,'方方6','江苏省宜兴市','183XXXX9797','345.5','0','0','10'),
(NULL,'方方7','江苏省宜兴市','183XXXX9797','345.5','2','1','10'),
(NULL,'方方8','江苏省宜兴市','183XXXX9797','345.5','1','2','10'),
(NULL,'方方9','江苏省宜兴市','183XXXX9797','345.5','1','3','10'),
(NULL,'方方0','江苏省宜兴市','183XXXX9797','345.5','2','1','10');


CREATE TABLE 3ss_order_detail(
    did INT PRIMARY KEY AUTO_INCREMENT,
    orderId INT,
    productId INT,
    count INT
);
INSERT INTO 3ss_order_detail VALUES
(NULL,72345260,10000,3),
(NULL,72345260,10002,3),
(NULL,72345260,10003,3),
(NULL,72345260,10004,3),
(NULL,72345261,20000,3),
(NULL,72345261,10001,3),
(NULL,72345261,30002,3),
(NULL,72345262,40005,3),
(NULL,72345263,10005,3),
(NULL,72345263,10001,3),
(NULL,72345264,10004,3),
(NULL,72345264,30000,3),
(NULL,72345264,30003,3),
(NULL,72345264,40004,3),
(NULL,72345265,50001,3),
(NULL,72345265,10002,3),
(NULL,72345265,10003,3),
(NULL,72345266,10004,3),
(NULL,72345266,20000,3),
(NULL,72345266,30000,3),
(NULL,72345267,40000,3),
(NULL,72345268,50000,3),
(NULL,72345269,20006,3),
(NULL,72345270,10007,3);
