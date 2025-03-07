package common

const (
	PROJECT_NAME        = "Stellar"                                        // 项目名称
	PROJECT_DESCRIPTION = "Stellar 是一个打破系统监控与业务监控的边界，整合多元数据源的新一代企业级运维告警平台" // 项目描述
)

var (
	ServerListenHost = "0.0.0.0"      // 服务监听地址
	ServerListenPort = 12345          // 服务监听端口
	ServerConfigFile = "stellar.yaml" // 服务配置文件
	ServerLeaderRole = 1              // 是否参与领导者选举, 0: 不参与, 1: 参与
	ServerWorkerRole = 1              // 是否开启工作节点角色, 0: 不开启, 1: 开启
	ServerWebRole    = 1              // 是否开启后端服务角色, 0: 不开启, 1: 开启
)
