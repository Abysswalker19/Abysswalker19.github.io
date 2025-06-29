// 鼠标跟随效果
class MouseFollower {
  constructor() {
    this.cursor = null;
    this.init();
  }

  init() {
    // 创建跟随元素
    this.cursor = document.createElement('div');
    this.cursor.className = 'cursor-follower';
    document.body.appendChild(this.cursor);

    // 监听鼠标移动
    document.addEventListener('mousemove', (e) => {
      this.cursor.style.left = e.clientX - 10 + 'px';
      this.cursor.style.top = e.clientY - 10 + 'px';
    });

    // 监听悬停效果
    document.addEventListener('mouseover', (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        this.cursor.classList.add('hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        this.cursor.classList.remove('hover');
      }
    });
  }
}

// 鼠标轨迹效果
class MouseTrail {
  constructor() {
    this.trail = [];
    this.maxTrail = 20;
    this.init();
  }

  init() {
    document.addEventListener('mousemove', (e) => {
      this.createTrail(e.clientX, e.clientY);
    });
  }

  createTrail(x, y) {
    const dot = document.createElement('div');
    dot.className = 'mouse-trail';
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
    document.body.appendChild(dot);

    // 移除轨迹点
    setTimeout(() => {
      if (dot.parentNode) {
        dot.parentNode.removeChild(dot);
      }
    }, 1000);
  }
}

// 点击波纹效果
class RippleEffect {
  constructor() {
    this.init();
  }

  init() {
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (target.classList.contains('ripple')) {
        this.createRipple(target, e);
      }
    });
  }

  createRipple(element, event) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '0';
    ripple.style.height = '0';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.3)';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.transition = 'width 0.6s, height 0.6s';
    ripple.style.pointerEvents = 'none';

    element.style.position = 'relative';
    element.appendChild(ripple);

    setTimeout(() => {
      ripple.style.width = '300px';
      ripple.style.height = '300px';
    }, 10);

    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  // 初始化鼠标跟随效果
  new MouseFollower();
  
  // 初始化鼠标轨迹效果
  new MouseTrail();
  
  // 初始化点击波纹效果
  new RippleEffect();
});

// 为所有链接添加悬停效果类
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.classList.add('hover-effect');
  });
}); 