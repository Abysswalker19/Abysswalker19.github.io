---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

# 欢迎来到我的网站

这是一个带有鼠标动画效果的 Jekyll 网站。

## 可用的鼠标效果

- **鼠标跟随**: 鼠标移动时会有一个跟随的圆圈
- **鼠标轨迹**: 鼠标移动时会留下彩色轨迹
- **悬停效果**: 链接悬停时会有下划线动画
- **点击波纹**: 点击带有 `ripple` 类的元素时会有波纹效果

<div class="ripple" style="padding: 20px; background: #f0f0f0; border-radius: 8px; cursor: pointer; display: inline-block;">
  点击我查看波纹效果
</div>

<style>
/* 内联样式示例 */
.demo-box {
  padding: 20px;
  margin: 20px 0;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.demo-box:hover {
  transform: scale(1.05);
}
</style>

<div class="demo-box hover-effect">
  悬停我查看动画效果
</div>
