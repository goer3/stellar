import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Layout, Menu, Avatar, Dropdown, Badge } from 'antd';
import { DesktopOutlined, ClusterOutlined, ApiOutlined } from '@ant-design/icons';
import { Logo } from '@/components/Image';
import { RightArrowIcon, LeftArrowIcon } from '@/components/Icon';
import { GenerateGenderBadge } from '@/components/Tag';
const { Header, Content, Sider } = Layout;

// 下拉菜单
const dropdownItems = [
  {
    key: '3',
    label: (
      <span>DK / 吴彦祖</span>
    ),
    disabled: true
  },
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        个人中心
      </a>
    )
  },
  {
    key: '4',
    danger: true,
    label: '注销登录'
  }
];

// 菜单数据
const menuItems = [
  {
    key: '/dashboard',
    icon: <DesktopOutlined />,
    label: '工作空间'
  },
  {
    key: '/system',
    icon: <ClusterOutlined />,
    label: '系统管理',
    children: [
      {
        key: '/system/user',
        label: '用户管理'
      },
      {
        key: '/system/role',
        label: '角色管理'
      },
      {
        key: '/system/menu',
        label: '菜单管理'
      },
      {
        key: '/system/permission',
        label: '权限管理'
      },
      {
        key: '/system/log',
        label: '日志管理'
      },
      {
        key: '/system/config',
        label: '系统配置'
      },
      {
        key: '/system/monitor',
        label: '系统监控'
      },
      {
        key: '/system/backup',
        label: '数据备份'
      },
      {
        key: '/system/restore',
        label: '数据恢复'
      },
      {
        key: '/system/audit',
        label: '审计日志'
      },
      {
        key: '/system/notification',
        label: '通知管理'
      },
      {
        key: '/system/message',
        label: '消息管理'
      },
      {
        key: '/system/schedule',
        label: '定时任务'
      },
      {
        key: '/system/job',
        label: '工作流'
      }
    ]
  },
  {
    key: '/information',
    icon: <ApiOutlined />,
    label: '节点信息'
  }
];

const MainLayout = () => {
  // 侧边菜单是否折叠
  const [collapsed, setCollapsed] = useState(false);
  // 侧边菜单展开宽度
  const siderMenuWidth = 200;
  // 侧边菜单折叠宽度
  const siderMenuCollapsedWidth = 60;

  return (
    <Layout>
      <Header className="stellar-header">
        <div className="stellar-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className='stellar-header-menu'>
          <Dropdown menu={{ items: dropdownItems }}>
            <Badge size='small' count={GenerateGenderBadge(1)} offset={[-5, 25]}>
              <Avatar size={30} src="/images/avatar/default.png" />
            </Badge>
          </Dropdown>
        </div>
      </Header>
      <Layout className="stellar-body">
        <Sider
          theme="light"
          className="stellar-sider"
          width={siderMenuWidth} // 不折叠宽度
          collapsible // 是否可折叠
          collapsedWidth={siderMenuCollapsedWidth} // 折叠宽度
          collapsed={collapsed} // 是否折叠
          onCollapse={(value) => setCollapsed(value)} // 折叠回调
          trigger={collapsed ? <RightArrowIcon /> : <LeftArrowIcon />}
        >
          <Menu className="stellar-menu" mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} items={menuItems} />
        </Sider>
        <Layout>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
