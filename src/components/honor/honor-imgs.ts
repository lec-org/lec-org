import { chunkArray, shuffle } from "@/utils/array-utils";

// 高度压缩后的奖状图片, https://fengyuanchen.github.io/compressorjs/
const imgs = [
  `https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336220.jpg`,
  `https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336219.jpg`,
  `https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336218.jpg`,
  `https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336217.png`,
  `https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336216.jpg`,
  `https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336215.jpg`,
  `https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336214.jpg`,
  `https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336213.jpg`,
  `https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336212.jpg`,
  `https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336211.jpg`,
  `https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336210.jpg`,
  `https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336208.jpg`,
  `https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336207.jpg`,
  `https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336206.jpg`,
  `https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336205.jpg`,
  `https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336204.jpg`,
  `https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336203.jpg`,
  `https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336201.jpg`
];

const imgGroup = chunkArray(shuffle(imgs), 6);

// 每一行展示的图片， 以及速度(duration越大速度越慢)
export default [
  {
    imgs: imgGroup[0],
    duration: 100000,
  },
  {
    imgs: imgGroup[0],
    duration: 50000,
  },
  {
    imgs: imgGroup[1],
    duration: 100000,
  },
  {
    imgs: imgGroup[2],
    duration: 50000,
  },
  {
    imgs: imgGroup[2],
    duration: 100000,
  }
]