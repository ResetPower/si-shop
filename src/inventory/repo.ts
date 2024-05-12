import { Product } from "../products";
import prod0Jpg from "../assets/0.jpg";
import prod1Jpg from "../assets/1.jpg";
import prod2Jpg from "../assets/2.jpg";
import prod3Jpg from "../assets/3.jpg";
import prod4Jpg from "../assets/4.jpg";
import prod5Jpg from "../assets/5.jpg";
import prod6Jpg from "../assets/6.jpg";
import prod7Jpg from "../assets/7.jpg";

class Repository {
  products: Product[] = [
    ...["金色", "红绿蓝色"].map(
      (color, index) =>
        ({
          id: 39 + index,
          name: `36cm ${color}中国龙`,
          description:
            "感觉握在手上就很安心，当摆件真的很不错。可选金色，红绿蓝色。推荐红绿蓝，渐变效果真的很帅=-=。",
          price: 13,
          tag: "normal",
          photo: prod7Jpg,
        }) as Product
    ),
    ...["镭射紫", "镭射红", "镭射绿"].map(
      (color, index) =>
        ({
          id: 0 + index,
          name: `30cm ${color}水晶龙 (不含龙蛋)`,
          description:
            "特别炫酷的水晶龙，听说拥有就可以带来好运=-=。从左至右颜色为镭射紫，镭射绿，镭射红。",
          price: 14,
          tag: "normal",
          photo: prod0Jpg,
        }) as Product
    ),
    ...["镭射紫", "镭射红", "镭射绿"].map(
      (color, index) =>
        ({
          id: 3 + index,
          name: `13cm ${color}龙蛋 (不含水晶龙)`,
          description:
            "可以装水晶龙的龙蛋，确定不来一个嘛(´▽｀)ノ。从左至右颜色为镭射紫，镭射绿，镭射红。",
          price: 22,
          tag: "normal",
          photo: prod0Jpg,
        }) as Product
    ),
    ...[
      "丝绸蓝绿",
      "丝绸红蓝",
      "丝绸红金",
      "丝绸红绿蓝",
      "丝绸黄绿",
      "丝绸金",
    ].map(
      (color, index) =>
        ({
          id: 6 + index,
          name: `12.2cm ${color}异形龙蛋`,
          description:
            "好酷！以一点钟方向为起点顺时针数颜色为丝绸蓝绿，丝绸红蓝，丝绸红金，丝绸红绿蓝，丝绸黄绿，最中间为丝绸金。",
          price: 22,
          tag: "normal",
          photo: prod1Jpg,
        }) as Product
    ),
    ...["丝绸蓝绿", "丝绸红蓝", "丝绸红金", "丝绸红绿蓝", "丝绸金"].map(
      (color, index) =>
        ({
          id: 12 + index,
          name: `20cm ${color}醒狮爸爸`,
          description:
            "醒狮爸爸带崽崽出来溜溜＾ω＾。从左至右颜色为丝绸蓝绿，丝绸红蓝，丝绸红金。还可选择丝绸红绿蓝，丝绸金。",
          price: 28,
          tag: "normal",
          photo: prod2Jpg,
        }) as Product
    ),
    ...["丝绸蓝绿", "丝绸红蓝", "丝绸红金", "丝绸红绿蓝", "丝绸金"].map(
      (color, index) =>
        ({
          id: 17 + index,
          name: `10cm ${color}醒狮崽崽`,
          description:
            "被爸爸保护的崽崽很可爱。从左至右颜色为丝绸蓝绿，丝绸红蓝，丝绸红金。还可选择丝绸红绿蓝，丝绸金。",
          price: 15,
          tag: "normal",
          photo: prod2Jpg,
        }) as Product
    ),
    ...["粉色", "红色"].map(
      (color, index) =>
        ({
          id: 23 + index,
          name: `${color}可旋转机械玫瑰花`,
          description: "转一下便会绽开花瓣，好好看！可选粉色，红色。",
          price: 24,
          tag: "normal",
          photo: prod3Jpg,
        }) as Product
    ),
    ...["丝绸蓝绿", "丝绸红蓝", "丝绸红金", "丝绸红绿蓝", "丝绸金"].map(
      (color, index) =>
        ({
          id: 25 + index,
          name: `23cm ${color}翼龙`,
          description:
            "好帅的翼龙啊啊啊啊。从左至右颜色为丝绸蓝绿，丝绸红蓝，丝绸红金。还可选择丝绸红绿蓝，丝绸金。",
          price: 15,
          tag: "normal",
          photo: prod4Jpg,
        }) as Product
    ),
    {
      id: 30,
      name: `龙虾`,
      description: "肥肥的一只龙虾，用手量长度^^",
      price: 20,
      tag: "normal",
      photo: prod5Jpg,
    },
    ...["熊猫", "青蛙", "海豚", "小猪", "小鸡", "小兔", "小龙", "小蜜蜂"].map(
      (color, index) =>
        ({
          id: 31 + index,
          name: `5cm 小动物系列-${color}`,
          description:
            "好萌，一口一个。有熊猫，青蛙，海豚，小猪，小鸡，小兔，小龙，小蜜蜂。",
          price: 6,
          tag: "normal",
          photo: prod6Jpg,
        }) as Product
    ),
  ];
  find = (id: number) => {
    return this.products.find((prod) => prod.id === id);
  };
}

const repo = new Repository();

export default repo;
