import { Helmet } from 'react-helmet';
import { TitleSuffix } from '@/components/Text';
import { Tree, Button, Flex } from 'antd';
import { FileProtectOutlined, PlusOutlined } from '@ant-design/icons';

// 页面基础配置
const config = {
  title: '角色管理',
  headerTitle: '角色管理 / ROLE MANAGEMENT.'
};

// 页面顶部说明
const PageDescription = () => {
  return (
    <>
      <div>角色是系统的核心资产之一，也是用户权限的载体，所以对于角色的管理，系统提供了以下的要求和建议，请知悉：</div>
      <ul>
        <li>系统内置了超管，管理员，运维，访客 4 个默认角色，默认角色不支持做任何修改，如果权限不满足你的要求，请创建新的角色。</li>
        <li>超管是系统最高权限拥有者，可以做任何操作，包括可配置权限之外的其他管理。所以保护好超管账号，就是保护系统安全。</li>
        <li>角色和权限绑定，所以在分配角色权限的时候，应该根据实际业务需求，以最小化合理分配为原则。</li>
      </ul>
    </>
  );
};

// 角色管理页面
const Role = () => {
  const treeData = [
    {
      title: '超级管理员',
      key: '0-0-0',
      children: [
        {
          title: '用户授权',
          key: '0-0-0-0',
          icon: <FileProtectOutlined />
        },
        {
          title: '菜单授权',
          key: '0-0-0-1',
          icon: <FileProtectOutlined />
        },
        {
          title: '接口授权',
          key: '0-0-0-2',
          icon: <FileProtectOutlined />
        }
      ]
    },
    {
      title: '管理员',
      key: '0-0-1',
      children: [
        {
          title: '用户授权',
          key: '0-0-1-0',
          icon: <FileProtectOutlined />
        },
        {
          title: '菜单授权',
          key: '0-0-1-1',
          icon: <FileProtectOutlined />
        },
        {
          title: '接口授权',
          key: '0-0-1-2',
          icon: <FileProtectOutlined />
        }
      ]
    },
    {
      title: '运维',
      key: '0-0-2',
      children: [
        {
          title: '用户授权',
          key: '0-0-2-0',
          icon: <FileProtectOutlined />
        },
        {
          title: '菜单授权',
          key: '0-0-2-1',
          icon: <FileProtectOutlined />
        },
        {
          title: '接口授权',
          key: '0-0-2-2',
          icon: <FileProtectOutlined />
        }
      ]
    },
    {
      title: '访客',
      key: '0-0-3',
      children: [
        {
          title: '用户授权',
          key: '0-0-3-0',
          icon: <FileProtectOutlined />
        },
        {
          title: '菜单授权',
          key: '0-0-3-1',
          icon: <FileProtectOutlined />
        },
        {
          title: '接口授权',
          key: '0-0-3-2',
          icon: <FileProtectOutlined />
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{config.title + TitleSuffix}</title>
      </Helmet>
      {/* 页面头部介绍 */}
      <div className="stellar-page-header">
        <div className="stellar-page-title">{config.headerTitle}</div>
        <div className="stellar-page-desc">
          <PageDescription />
        </div>
      </div>

      <div className="stellar-page-content">
        <div className="stellar-page-row">
          <Flex align="flex-start">
            <div className="stellar-page-row-tree">
              <Button type="primary" block icon={<PlusOutlined />} style={{ marginBottom: 10 }}>新增角色</Button>
              <Tree showLine showIcon defaultExpandedKeys={['0-0-0']} onSelect={() => {}} treeData={treeData} />
            </div>
            <div className="stellar-page-row-content">
              Fill Rest
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Role;
