# 前端开发

## 需求概述

需要移民填入：姓名，性别，年龄，教育经历，工作经历，孩子数量，然后点击按钮"匹配"
跳转 job 页面,目前是 app/page

更新 page 的 jobs 的 mock data，这个 matching portal is for 低收入人群。

## 开发计划

### 第一阶段：快速匹配表单
**目标：** 收集核心信息，降低用户门槛

#### 1.1 创建快速匹配页面
**文件：** `src/app/quick-match/page.tsx`
**功能：** 收集4个核心信息
- 年龄选择（下拉菜单）
- 工作经验（是/否）
- 孩子数量（0, 1, 2, 3+）
- 语言能力（德语, 英语, 阿拉伯语, 土耳其语）

#### 1.2 修改主页为引导页
**文件：** `src/app/page.tsx`
**修改：** 替换当前工作列表为欢迎引导页面
- 简单欢迎语
- "开始匹配工作"大按钮 → quick-match页面

### 第二阶段：Mock数据更新
**目标：** 适配低收入群体工作需求

#### 2.1 更新工作数据
**文件：** 修改现有 mockJobs 数据
**内容：** 替换为适合目标群体的工作
- 清洁工作（酒店、办公楼）
- 餐饮服务（厨房助手、服务员）
- 仓储物流（包装工、配送员）
- 照护服务（老人护理助手）
- 建筑助手（装修助手、搬运工）
- 工厂生产（组装工、质检员）

### 第三阶段：结果页面和引导完善

#### 3.1 匹配结果展示
**处理：** 点击"匹配"后直接跳转到现有的jobs页面（显示更新后的mockdata）
**不实现：** 真实匹配逻辑，直接展示所有适合的工作

#### 3.2 保留并增强现有Profile页面
**文件：** `src/app/profile/page.tsx`（保持现有结构）
**添加：** 引导完善信息的横幅和按钮
- 顶部添加"完善信息获得更精准匹配"提示
- 按钮链接到详细信息页面

#### 3.3 创建详细信息更新页面
**文件：** `src/app/update-profile/page.tsx`
**功能：** 收集完整的用户信息
- 姓名、性别等基本信息
- 教育经历（简化选择）
- 详细工作经历
- 工作偏好设置

### 第四阶段：用户流程连接

#### 4.1 页面跳转流程
- 主页 → quick-match → jobs页面（显示mockdata）
- profile页面 → update-profile → 回到profile页面

#### 4.2 简单状态管理
**方案：** 使用 localStorage 保存用户输入
**数据：** 快速匹配信息 + 详细profile信息

### 文件修改清单

**新建文件：**
- `src/app/quick-match/page.tsx` - 快速匹配表单
- `src/app/update-profile/page.tsx` - 详细信息更新
- `src/components/forms/QuickMatchForm.tsx` - 快速匹配表单组件
- `src/components/ProfileCompletionBanner.tsx` - 完善信息引导横幅

**修改文件：**
- `src/app/page.tsx` - 改为欢迎引导页面
- `src/app/profile/page.tsx` - 添加完善信息引导
- mockJobs 数据 - 更新为适合低收入群体的工作

### 开发优先级

1. **第一优先：** 快速匹配表单 + 主页改造
2. **第二优先：** 更新工作mockdata
3. **第三优先：** profile页面增强 + update-profile页面
4. **第四优先：** 完善用户流程和状态管理

## 技术栈

- React
- Next.js
- Tailwind CSS
- shadcn/ui