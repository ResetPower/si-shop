import donationJpg from "../assets/donation.jpg";

export default function AboutPage() {
  return (
    <div className="p-3 space-y-3">
      <div className="text-lg font-medium">关于智信小店</div>
      <div>
        智信小店只是一个在一周内草率完成的小破站，功能方面尽量不出纰漏的同时，交互方面（如
        UI 和操作逻辑等）可能会有一些不尽人意之处。
      </div>
      <div>
        有任何问题和（或）意见，请阁下前往本站 GitHub
        仓库（内含本站前端部分全部代码）的 Issues
        部分提出您的宝贵意见并不忘留下一颗星辰🌟。
      </div>
      <div>
        欲进入本站 GitHub 仓库，点击本站右上角小猫咪（即 GitHub 的
        Logo）或使用下列统一资源定位符（URL）：https://github.com/ResetPower/si-shop
      </div>
      <div className="text-lg font-medium">支持我们</div>
      <div>阁下可经由下列 QR Code 对我们进行捐赠。</div>
      <img width={512} src={donationJpg} />
    </div>
  );
}
