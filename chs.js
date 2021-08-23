/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "Unlock": "解锁",
    "A glorious fighter who fought one too many battles. Good thing he doesn't need his head to fight.": "一位光荣的战士，打了太多仗。 好在他不需要脑袋去战斗。",
    "A lizard that loves metal, whether for shields or money.": "喜欢金属的蜥蜴，无论是为了盾牌还是金钱。",
    "An agile and sneaky assassin who knows how to move in the shadows without being seen.": "一个敏捷而狡猾的刺客，知道如何在不被发现的情况下在阴影中移动。",
    "Apple": "苹果",
    "Cave": "洞穴",
    "Chest": "宝箱",
    "Coins": "很多金币",
    "Desert": "沙漠",
    "Drop the volunteer": "勇往直前",
    "EN": "中",
    "Enchanted lands": "魔境",
    "Forest": "森林",
    "FR": "法",
    "Golden chest": "金色宝箱",
    "Half elf, half demon, Enyra is naturally dangerous and powerful. She doesn't need a shield to defend herself.": "半精灵半恶魔，恩妮拉自然危险而强大。 她不需要盾牌来保护自己。",
    "Healing potion": "治疗药水",
    "Holy healing potion": "神圣的治疗药水",
    "Inevitable fight": "不可避免的战斗",
    "into the abyss": "进入深渊",
    "Inventory": "库存",
    "Iron shield": "铁盾",
    "Item": "物品",
    "Minor healing potion": "初级治疗药水",
    "Map": "地图",
    "Monster scales": "怪物鳞片",
    "Next level": "下一级",
    "Restores 10 health when you change level.": "改变等级时恢复 10 点生命值。",
    "Reveals the map.": "显示地图。",
    "Shield": "盾",
    "The height of your browser is too low. Click here to go to full screen.": "您的浏览器高度过低。 单击此处进入全屏。",
    "Wooden shield": "木盾",
    "Coin": "金币",
    "Equip a new shield.": "装备一个新的盾牌。",
    "Gives you gold.": "给你黄金。",
    "Heals you.": "治愈你。",
    "It says that with three eggs, you can have a good meal.": "据说三个蛋可以当作一顿美餐。",
    "Legendary shield": "传奇之盾",
    "Major healing potion": "特效治疗药水",
    "Monster": "怪物",
    "Monster egg": "怪物蛋",
    "No effect": "无效果",
    "Reinforced shield": "强化盾牌",
    "Ring of vitality": "活力之戒",
    "You can only hold this item once.": "您只能持有此物品一次。",
    "A beautiful chest ! Choose your reward.": "一个美丽的宝箱！ 选择你的奖励。",
    "A dark cave that has never seen daylight.": "一个从未见过日光的黑暗洞穴。",
    "Back": "返回",
    "Far, arid and especially deadly lands.": "遥远、干旱、尤其是致命的土地。",
    "Gains 5 shields if you end a fight with only 1 health.": "如果您以 1 点生命值结束战斗，则获得 5 点护盾。",
    "Go to the next level.": "进入下一个级别。",
    "Increases your max health.": "增加你的最大生命值。",
    "New run": "新一轮",
    "Lands as sacred as they are dreadful.": "土地既神圣又可怕。",
    "Omelette": "煎蛋",
    "Open the chest": "打开宝箱",
    "Return to the forest.": "返回森林。",
    "Ring of courage": "勇气之戒",
    "Ruby": "红宝石",
    "Sometimes heals when you take gold card.": "有时拿金卡会治愈。",
    "You\'re dead": "你凉了",
    "A dense forest that is home to many dangerous creatures.": "茂密的森林是许多危险生物的家园。",
    "A mysterious chest. Choose your reward.": "神秘的宝箱。 选择你的奖励。",
    "Decreases the value of shields but increases their spawn frequency.": "降低护盾的价值，但增加它们的生成频率。",
    "Return to the desert.": "返回沙漠。",
    "Rusty shield": "生锈的盾牌",
    "Shiny shield": "闪亮的盾牌",
    "Fossil": "化石",
    "Increases the chances of looting a shield after a monster attack.": "增加怪物攻击后掠夺盾牌的几率。",
    "Increases the value of healing cards.": "增加治疗卡的价值。",
    "Monsters can sometimes attack in groups.": "怪物有时可以成群攻击。",
    "Raw meat": "生肉",
    "Return to the enchanted lands.": "返回魔境。",
    "Abyss": "深渊",
    "Amethyst": "紫水晶",
    "Athelas": "阿特拉斯",
    "Cursed shield": "诅咒之盾",
    "Carrot": "胡萝卜",
    "Dragon wing": "龙翼",
    "Double value of the next gold card you take.": "减少治疗卡的价值。你拿下的下一张金卡的价值翻倍。",
    "Decreases the value of healing cards.": "降低治疗卡的价值。",
    "Gains 1 shield after each fight if you don't have any left.": "如果你没有任何剩余，每场战斗后获得 1 个护盾。",
    "invisibility cloak": "隐形斗篷",
    "Loses 1 health when you take a gold card.": "拿金卡时失去 1 点生命值。",
    "Monster eye": "怪物之眼",
    "Monsters do not attack when the value of your health is even.": "当你的生命值相等时，怪物不会攻击。",
    "Prevents death once.": "防止死亡一次。",
    "Reduces your field of view.": "缩小视野。",
    "Restores 1 health when you move diagonally.": "对角移动时恢复 1 点生命值。",
    "Return to the cave.": "返回洞穴。",
    "Ring of greed": "贪婪之戒",
    "Rotten meat": "烂肉",
    "Shields now heal you (can not wear shield). Health max + 5.": "盾牌现在可以治疗你（不能戴盾牌）。 生命最大值 + 5。",
    "The path to the depths passes through the deadly abysses.": "通往深处的道路要经过致命的深渊。",
    "Underworld": "地狱",
    "Earns 4 gold when you attack a monster.": "攻击怪物时获得 4 金币。",
    "Increases the value of monsters.": "增加怪物的值。",
    "Emerald": "翡翠",
    "Increases the value of shields but decreases their spawn frequency.": "增加护盾值但降低它们的生成频率。",
    "Return to the abyss.": "回到深渊。",
    "Skull": "颅骨",
    "The final destination, a corrupt world and source of evil...": "最终目的地，一个腐败的世界和邪恶的源头……",
    "Victory !": "胜利了！",
    "The value of shields can be cumulated. Health max = 1.": "护盾值可以累计。 健康最大值 = 1。",
    "Monster horn": "怪物号角",
    "Increases the chances of looting a healing potion after a monster attack.": "增加怪物攻击后获得治疗药水的几率。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Boss': 'Boss',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "You win ": "你赢了 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^Deals you ([\d\.]+) damage.$/, '对你造成 $1 点伤害。'],
	[/^You killed ([\d\.]+) corrupt monsters.$/, '你杀死了 $1 个腐化怪物。'],
	[/^You win \+([\d\.]+)$/, '你赢得了 \+$1'],
	[/^Score : ([\d\.]+)$/, '分数 : $1'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^(.+)We\'re sorry but cards-and-tokens doesn\'t work properly without JavaScript enabled. Please enable it to continue.(.+)$/, '$1很抱歉，如果没有启用 JavaScript，卡片和令牌将无法正常工作。 请启用它以继续。$2'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);