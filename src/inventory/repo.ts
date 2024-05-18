import { Product } from "../products";
import prod0Jpg from "../assets/0.jpg";
import prod1Jpg from "../assets/1.jpg";
import prod2Jpg from "../assets/2.jpg";
import prod3Jpg from "../assets/3.jpg";
import prod4Jpg from "../assets/4.jpg";
import prod5Jpg from "../assets/5.jpg";
import prod6Jpg from "../assets/6.jpg";
import prod7Jpg from "../assets/7.jpg";
import prod8Jpg from "../assets/8.jpg";
import prod9Jpg from "../assets/9.jpg";

class Repository {
  products: Product[] = [
    {
      id: 10,
      name: "夜光水晶龙 (不含龙蛋)",
      description: "用紫光灯照一下就会发光ヾ(@^▽^@)ノ 无紫光灯照射下为白色",
      price: 16,
      tag: "normal",
      photo: prod8Jpg,
    },
    {
      id: 11,
      name: "夜光龙蛋 (不含水晶龙)",
      description: "用紫光灯照一下就会发光ヾ(@^▽^@)ノ 无紫光灯照射下为白色",
      price: 24,
      tag: "normal",
      photo: prod8Jpg,
    },
    {
      id: 12,
      name: "4cm 龙宝宝摆件普通款",
      description:
        "小小一个捏在手里刚刚好，可以定制龙宝宝爪前面端着的字，此页面为普通款。不开口款前字为开运，开口款前字为暴富",
      price: 6,
      tag: "normal",
      variants: ["开口", "不开口"],
      photo: prod9Jpg,
    },
    {
      id: 13,
      name: "4cm 龙宝宝摆件定制款",
      description:
        "在开口和不开口的基础上可定制文字，限两个字，请在付款时留言备注定制的字，如遇留言框写不下，请添加MELLO-VOURRY说明ヾ(^▽^*)))",
      price: 8,
      tag: "normal",
      variants: ["开口", "不开口"],
      photo: prod9Jpg,
    },
    {
      id: 0,
      name: `36cm 中国龙`,
      description:
        "感觉握在手上就很安心，当摆件真的很不错。可选金色，红绿蓝色。推荐红绿蓝，渐变效果真的很帅=-=。",
      price: 13,
      tag: "normal",
      variants: ["金色", "红绿蓝色"],
      photo: prod7Jpg,
    },
    {
      id: 1,
      name: `30cm 水晶龙 (不含龙蛋)`,
      description:
        "特别炫酷的水晶龙，听说拥有就可以带来好运=-=。从左至右颜色为镭射紫，镭射绿，镭射红。",
      price: 14,
      tag: "normal",
      photo: prod0Jpg,
      variants: ["镭射紫", "镭射红", "镭射绿"],
    },
    {
      id: 2,
      name: `13cm 龙蛋 (不含水晶龙)`,
      description:
        "可以装水晶龙的龙蛋，确定不来一个嘛(´▽｀)ノ。从左至右颜色为镭射紫，镭射绿，镭射红。",
      price: 22,
      tag: "normal",
      photo: prod0Jpg,
      variants: ["镭射紫", "镭射红", "镭射绿"],
    },
    {
      id: 3,
      name: `12.2cm 异形龙蛋`,
      description:
        "好酷！以一点钟方向为起点顺时针数颜色为丝绸蓝绿，丝绸红蓝，丝绸红金，丝绸红绿蓝，丝绸黄绿，最中间为丝绸金。",
      price: 22,
      tag: "normal",
      photo: prod1Jpg,
      variants: [
        "丝绸蓝绿",
        "丝绸红蓝",
        "丝绸红金",
        "丝绸红绿蓝",
        "丝绸黄绿",
        "丝绸金",
      ],
    },
    {
      id: 4,
      name: `20cm 醒狮爸爸`,
      description:
        "醒狮爸爸带崽崽出来溜溜＾ω＾。从左至右颜色为丝绸蓝绿，丝绸红蓝，丝绸红金。还可选择丝绸红绿蓝，丝绸金。",
      price: 28,
      tag: "normal",
      photo: prod2Jpg,
      variants: ["丝绸蓝绿", "丝绸红蓝", "丝绸红金", "丝绸红绿蓝", "丝绸金"],
    },
    {
      id: 5,
      name: `10cm 醒狮崽崽`,
      description:
        "被爸爸保护的崽崽很可爱。从左至右颜色为丝绸蓝绿，丝绸红蓝，丝绸红金。还可选择丝绸红绿蓝，丝绸金。",
      price: 15,
      tag: "normal",
      photo: prod2Jpg,
      variants: ["丝绸蓝绿", "丝绸红蓝", "丝绸红金", "丝绸红绿蓝", "丝绸金"],
    },
    {
      id: 6,
      name: `可旋转机械玫瑰花`,
      description: "转一下便会绽开花瓣，好好看！可选粉色，红色。",
      price: 24,
      tag: "normal",
      photo: prod3Jpg,
      variants: ["粉色", "红色"],
    },
    {
      id: 7,
      name: `23cm翼龙`,
      description:
        "好帅的翼龙啊啊啊啊。从左至右颜色为丝绸红蓝，丝绸蓝绿，丝绸红金。还可选择丝绸红绿蓝，丝绸金。",
      price: 15,
      tag: "normal",
      photo: prod4Jpg,
      variants: ["丝绸蓝绿", "丝绸红蓝", "丝绸红金", "丝绸红绿蓝", "丝绸金"],
    },
    {
      id: 8,
      name: `龙虾`,
      description: "肥肥的一只龙虾，用手量长度^^",
      price: 20,
      tag: "normal",
      photo: prod5Jpg,
    },
    {
      id: 9,
      name: `5cm 小动物系列`,
      description:
        "好萌，一口一个。从左上到右下依次为红色小龙，小蜜蜂，小蝙蝠，小兔，小鳄鱼，橙色小狐，小猪，小鸡，小蛙，绿色小恐龙，橙色小恐龙，小蜥蜴。",
      price: 6,
      tag: "normal",
      variants: [
        "红色小龙",
        "小蜜蜂",
        "小蝙蝠",
        "小兔",
        "小鳄鱼",
        "橙色小狐",
        "小猪",
        "小鸡",
        "小蛙",
        "绿色小恐龙",
        "橙色小恐龙",
        "小蜥蜴",
      ],
      photo: prod6Jpg,
    },
  ];
  find = (id: number) => {
    return this.products.find((prod) => prod.id === id);
  };
}

const repo = new Repository();

export default repo;
