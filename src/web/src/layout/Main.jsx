import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Layout, Menu, Avatar, Dropdown, Badge } from 'antd';
import { DesktopOutlined, DatabaseOutlined, AlertOutlined, MailOutlined, AimOutlined, ControlOutlined, ClusterOutlined } from '@ant-design/icons';
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
    key: '/query',
    icon: <AimOutlined />,
    label: '即时查询'
  },
  {
    key: '/alert',
    icon:  <AlertOutlined />,
    label: '告警中心',
    children: [
      {
        key: '/alert/active',
        label: '活跃告警'
      },
      {
        key: '/alert/rule',
        label: '告警规则'
      },
      {
        key: '/alert/block',
        label: '屏蔽规则'
      },
      {
        key: '/alert/group',
        label: '通知分组'
      },
      {
        key: '/alert/schedule',
        label: '人员排班'
      },
      {
        key: '/alert/history',
        label: '告警历史'
      }
    ]
  },
  {
    key: '/notification',
    icon: <MailOutlined />,
    label: '通知中心',
    children: [
      {
        key: '/notification/media',
        label: '通知媒介'
      },
      {
        key: '/notification/template',
        label: '通知模板'
      },
      {
        key: '/notification/history',
        label: '通知历史'
      }
    ]
  },
  {
    key: '/datasource',
    icon: <DatabaseOutlined />,
    label: '数据源'
  },
  {
    key: '/system',
    icon: <ControlOutlined />,
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
        key: '/system/config',
        label: '系统配置'
      }
    ]
  },
  {
    key: '/information',
    icon: <ClusterOutlined />,
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
